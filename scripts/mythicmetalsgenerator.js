const modid = 'mythicmetals'

const ores = [ 'adamantite', 'aquarium', 'banglum', 'carmot', 'kyber', 'manganese', 'morkite', 'midas_gold', 'mythril', 'orichalcum', 'osmium', 'palladium', 'platinum', 'prometheum', 'quadrillum', 'runite', 'silver', 'starrite', 'stormyx', 'tin', 'unobtainium' ]
const others = [ 'bronze', 'celestium', 'durasteel', 'hallowed', 'metallurgium', 'star_platinum' ]

const MythicMetals = {}

ores.forEach(e => {
	MythicMetals[e] = { ore: `${modid}:${e}_ore`, ingot: `${modid}:${e}_ingot` }
})
others.forEach(e => {
	MythicMetals[e] = { ingot: `${modid}:${e}_ingot` }
})

console.log(MythicMetals)
console.log(`Added ${Object.keys(MythicMetals).length} materials!`)
