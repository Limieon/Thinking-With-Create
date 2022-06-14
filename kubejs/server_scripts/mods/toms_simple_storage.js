
onEvent('recipes', e => {
	e.remove({ output: 'toms_storage:ts.inventory_connector' })
	e.shaped('toms_storage:ts.inventory_connector', [
		'PCP',
		'UDU',
		'PEP'
	], {
		P: 'create:brass_casing',
		C: 'minecraft:comparator',
		D: 'minecraft:diamond',
		E: 'minecraft:ender_pearl',
		U: 'techreborn:crude_storage_unit'
	})

	e.remove({ output: 'toms_storage:ts.storage_terminal' })
	e.shaped('toms_storage:ts.storage_terminal', [
		'PCP',
		'USG',
		'PEP'
	], {
		P: 'create:brass_casing',
		C: 'minecraft:comparator',
		G: '#c:glass',
		S: 'minecraft:glowstone',
		E: 'minecraft:ender_pearl',
		U: 'techreborn:crude_storage_unit'
	})

	e.remove({ output: 'toms_storage:ts.wireless_terminal' })
	e.shaped('toms_storage:ts.wireless_terminal', [
		'PCP',
		'ASG',
		'PEP'
	], {
		P: 'create:brass_casing',
		C: 'minecraft:comparator',
		G: '#c:glass',
		S: 'minecraft:glowstone',
		E: 'minecraft:ender_pearl',
		A: 'minecraft:spyglass'
	})
})
