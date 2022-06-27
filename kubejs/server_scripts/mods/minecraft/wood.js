
onEvent('recipes', e => {
	// Remove wood recipes
	Object.keys(Woods).forEach(k => {
		/*e.remove({
			input: '#minecraft:logs',
			output: Woods[k].planks,b
			type: 'minecraft:crafting_shapeless'
		})*/
	})

	// Add them back
	Object.keys(Woods).forEach(k => {
		e.shapeless(`2x ${Woods[k].planks}`, [`#${Woods[k].log}s`])
	})

	// Remove default stick
	e.remove({
		input: '#minecraft:planks',
		output: 'minecraft:stick',
		type: 'minecraft:crafting_shaped'
	})
	// Add back
	e.shaped('2x minecraft:stick', [
		'P',
		'P'
	], {
		P: '#minecraft:planks'
	})
})
