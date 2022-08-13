
onEvent('recipes', e => {
	e.remove({ output: 'minecraft:chain' })
	e.shaped('3x minecraft:chain', [
		'R',
		'R',
		'R'
	], {
		R: 'modern_industrialization:steel_ring'
	})
})
