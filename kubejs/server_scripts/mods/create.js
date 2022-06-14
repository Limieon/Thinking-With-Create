
onEvent('recipes', e => {
	// Remove redstone links due to chunk lightning bugs
	e.remove({ output: 'create:linked_controller' })
	e.remove({ output: 'create:redstone_link' })

	e.remove({ output: 'create:mechanical_drill' })
	e.shaped('create:mechanical_drill', [
		' D ',
		'AIA',
		' C '
	], {
		D: 'kubejs:andesite_drill',
		A: 'create:andesite_alloy',
		I: Ingots.iron,
		C: 'create:andesite_casing'
	})

	// Change output count of giant wheels
	e.remove({ output: 'create:crushing_wheel' })
	Create.makeMechanical(e, [
		' AAA ',
		'AAPAA',
		'APSPA',
		'AAPAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		P: '#minecraft:planks',
		S: '#c:stone'
	}, 'create:crushing_wheel')
})
