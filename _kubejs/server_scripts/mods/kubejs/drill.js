
onEvent('recipes', e => {
	e.shaped('kubejs:mythril_drill_head', [
		' IM',
		'CMI',
		'SC '
	], {
		I: Plates.iron,
		M: MythicMetals.mythril.ingot,
		C: 'create:cogwheel',
		S: 'create:shaft'
	})

	e.shaped(KubeJS.mythril_drill, [
		' IH',
		'CMI',
		'SC '
	], {
		I: Plates.iron,
		M: MythicMetals.mythril.ingot,
		C: 'create:cogwheel',
		H: 'kubejs:mythril_drill_head',
		S: 'create:shaft'
	})

	e.shaped('kubejs:stormyx_drill_head', [
		' IM',
		'CMI',
		'SC '
	], {
		I: MythicMetals.stormyx.ingot,
		M: MythicMetals.mythril.ingot,
		C: 'create:cogwheel',
		S: 'create:shaft'
	})

	e.shaped(KubeJS.stormyx_drill, [
		' IH',
		'CMI',
		'SC '
	], {
		I: MythicMetals.stormyx.ingot,
		M: MythicMetals.mythril.ingot,
		C: 'create:cogwheel',
		H: 'kubejs:stormyx_drill_head',
		S: 'create:shaft'
	})
})
