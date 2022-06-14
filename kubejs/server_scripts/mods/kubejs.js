
onEvent('recipes', e => {
	e.shaped('kubejs:andesite_drill_head', [
		' PA',
		'GRP',
		'RG '
	], {
		R: 'create:shaft',
		P: Plates.iron,
		A: 'create:andesite_alloy',
		G: 'create:cogwheel'
	})

	e.shaped('kubejs:andesite_drill', [
		' AH',
		'CSA',
		'SC '
	], {
		H: 'kubejs:andesite_drill_head',
		C: 'create:cogwheel',
		A: 'create:andesite_alloy',
		S: 'create:shaft'
	})
})
