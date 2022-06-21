onEvent('recipes', e => {
	e.shaped('kubejs:charcoal_block', [
		'CCC',
		'CCC',
		'CCC'
	], {
		C: 'minecraft:charcoal'
	})
	e.shaped('kubejs:compressed_charcoal_block', [
		'CCC',
		'CCC',
		'CCC'
	], {
		C: 'kubejs:charcoal_block'
	})

	e.shaped('kubejs:compressed_coal_block', [
		'CCC',
		'CCC',
		'CCC'
	], {
		C: 'minecraft:coal_block'
	})
})
