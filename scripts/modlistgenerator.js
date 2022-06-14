import fs from 'fs'
import fetch from 'node-fetch'

const modlist = JSON.parse(fs.readFileSync('../minecraftinstance.json', { encoding: 'utf-8' }))
const apikey = JSON.parse(fs.readFileSync('./private.json', { encoding: 'utf-8' })).CurseForge.APIKey

const CSV_SEP = ','

console.log('Generating modlist...')
const mods = []
const prettyMods = []
var file_markdown = ''
var file_csv = `Name${CSV_SEP}ID${CSV_SEP}CurseForge${CSV_SEP}Authors\n`

{
	var count = 0
	modlist.installedAddons.forEach(m => {
		if(m.installedFile.fileName.endsWith('.jar')) {
			mods.push(m.addonID)
			count++;
		}
	})
	console.log(`Added ${count} mods to fetch!`)
}

console.log(`Fetching ${mods.length} mods...`)
fetch('https://api.curseforge.com/v1/mods', {
	method: 'POST',
	body: `{"modIds":[${mods}]}`,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'x-api-key': apikey
	}
}).then(res => {
	return res.json()
}).then(body => {
	body.data.forEach(d => {
		prettyMods.push({
			name: d.name,
			link: d.links.websiteUrl,
			id: d.id,
			authors: d.authors
		})
	})
}).then(() => {
	console.log('Sorting mods...')
	prettyMods.sort((a, b) => {
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
		return 0;
	})
	console.log('Adding file contents...')
	prettyMods.forEach(m => {
		const authors = []
		m.authors.forEach(a => {
			authors.push(a.name)
		})

		file_markdown += `* [${m.name}](${m.link})  \n`
		file_csv += `${m.name}${CSV_SEP}${m.id}${CSV_SEP}${m.link}${CSV_SEP}${authors}\n`
	})
	console.log('Writing files...')
	fs.writeFileSync('../mods.md', file_markdown, { encoding: 'utf-8' })
	fs.writeFileSync('../mods.csv', file_csv, { encoding: 'utf-8' })
})
