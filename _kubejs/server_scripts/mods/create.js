
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

	e.remove({ output: 'create:mechanical_pump' })
	e.shapeless('create:mechanical_pump', ['create:cogwheel', 'create:fluid_pipe', 'modern_industrialization:copper_rotor'])

	e.remove({ output: 'create:fluid_tank' })
	e.shaped('create:fluid_tank', [
		'PPP',
		'PGP',
		'PPP'
	], {
		P: Plates.copper,
		G: '#c:glass'
	})

	e.remove({ output: 'create:andesite_casing' })
	e.shaped('4x create:andesite_casing', [
		'PPP',
		'AOA',
		'PPP'
	], {
		P: '#minecraft:planks',
		A: 'create:andesite_alloy',
		O: '#c:osmium_ingots'
	})

	e.remove({ output: 'create:clutch' })
	e.shaped('create:clutch', [
		' R ',
		'SCS',
		' R '
	], {
		R: Ingots.redAlloy,
		S: 'create:shaft',
		C: 'create:andesite_casing'
	})

	e.remove({ output: 'create:gearshift' })
	e.shaped('create:gearshift', [
		' R ',
		'SCS',
		' R '
	], {
		R: Ingots.redAlloy,
		S: 'create:cogwheel',
		C: 'create:andesite_casing'
	})

	e.remove({ output: 'create:gantry_shaft' })
	e.shaped('4x create:gantry_shaft', [
		'A',
		'R',
		'A'
	], {
		A: 'create:andesite_alloy',
		R: Ingots.redAlloy
	})

	e.remove({ output: 'create:cart_assembler' })
	e.shaped('4x create:cart_assembler', [
		' L ',
		'ARA',
		'L L'
	], {
		A: 'create:andesite_alloy',
		R: Ingots.redAlloy,
		L: '#minecraft:logs'
	})

	e.remove({ output: 'create:sticker' })
	e.shaped('create:sticker', [
		'ASA',
		'CRC'
	], {
		A: 'create:andesite_alloy',
		R: Ingots.redAlloy,
		S: 'minecraft:slime_ball',
		C: '#c:cobblestone'
	})

	e.remove({ output: 'create:redstone_contact' })
	e.shaped('create:sticker', [
		' P ',
		'ARA',
		'CCC'
	], {
		A: 'create:andesite_alloy',
		R: Ingots.redAlloy,
		P: Plates.iron,
		C: '#c:cobblestone'
	})

	e.remove({ output: 'create:redstone_contact' })
	e.shaped('create:sticker', [
		' P ',
		'ARA',
		'CCC'
	], {
		A: 'create:andesite_alloy',
		R: Ingots.redAlloy,
		P: Plates.iron,
		C: '#c:cobblestone'
	})

	e.remove({ output: 'create:content_observer' })
	e.shaped('create:content_observer', [
		'ROI',
		' C '
	], {
		R: Ingots.redAlloy,
		O: 'minecraft:observer',
		I: Ingots.iron,
		C: 'create:brass_casing'
	})

	e.remove({ output: 'create:stockpile_switch' })
	e.shaped('create:stockpile_switch', [
		'RCI',
		' C '
	], {
		R: Ingots.redAlloy,
		C: 'minecraft:comparator',
		I: Ingots.iron,
		C: 'create:brass_casing'
	})

	e.remove({ output: 'create:stockpile_switch' })
	e.shaped('create:stockpile_switch', [
		'RCI',
		' C '
	], {
		R: Ingots.redAlloy,
		C: 'minecraft:comparator',
		I: Ingots.iron,
		C: 'create:brass_casing'
	})

	e.remove({ output: 'create:pulse_repeater' })
	e.shaped('create:pulse_repeater', [
		'RPT',
		'SSS'
	], {
		R: Ingots.redAlloy,
		P: Plates.brass,
		T: 'minecraft:redstone_torch',
		S: '#c:stone'
	})

	e.remove({ output: 'create:pulse_extender' })
	e.shaped('create:pulse_extender', [
		'  T',
		'RPT',
		'SSS'
	], {
		R: Ingots.redAlloy,
		P: Plates.brass,
		T: 'minecraft:redstone_torch',
		S: '#c:stone'
	})

	e.remove({ output: 'create:powered_latch' })
	e.shaped('create:powered_latch', [
		' T ',
		'RLR',
		'SSS'
	], {
		R: Ingots.redAlloy,
		L: 'minecraft:lever',
		T: 'minecraft:redstone_torch',
		S: '#c:stone'
	})

	e.remove({ output: 'createaddition:redstone_relay' })
	e.shaped('createaddition:redstone_relay', [
		' R ',
		'CTC',
		'SSS'
	], {
		R: Ingots.redAlloy,
		C: 'createaddition:connector',
		T: 'create:electron_tube',
		S: '#c:stone'
	})
})
