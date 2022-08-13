
onEvent('recipes', e => {
	const removes = [
		'simple_cobblestone_generator:generator_tier1',
		'simple_cobblestone_generator:generator_tier2',
		'simple_cobblestone_generator:generator_tier3',
		'simple_cobblestone_generator:generator_tier4',
		'simple_cobblestone_generator:generator_tier5'
	]
	removes.forEach(r => {
		e.remove({ output: r })
	})

	Create.makeMechanical(e, [
		'PPPPP',
		'PLLLP',
		'PDDDP',
		'PWWWP',
		'PHHHP'
	], {
		P: Plates.iron,
		H: 'minecraft:hopper',
		D: 'create:mechanical_drill',
		W: 'minecraft:water_bucket',
		L: 'minecraft:lava_bucket'
	}, 'simple_cobblestone_generator:generator_tier1')

	Create.makeMechanical(e, [
		'PPPPP',
		'PWWWP',
		'PDDDP',
		'PLLLP',
		'PHHHP'
	], {
		P: Plates.iron,
		H: 'minecraft:hopper',
		D: 'create:mechanical_drill',
		W: 'minecraft:water_bucket',
		L: 'minecraft:lava_bucket'
	}, 'simple_cobblestone_generator:generator_tier1')

	e.shaped('simple_cobblestone_generator:generator_tier2', [
		'BBB',
		'BGB',
		'BBB'
	], {
		B: Plates.brass,
		G: 'simple_cobblestone_generator:generator_tier1'
	})

	e.shaped('simple_cobblestone_generator:generator_tier3', [
		'SSS',
		'SGS',
		'SSS'
	], {
		S: Plates.steel,
		G: 'simple_cobblestone_generator:generator_tier2'
	})

	e.shaped('simple_cobblestone_generator:generator_tier4', [
		'SSS',
		'SGS',
		'SSS'
	], {
		S: Plates.diamond,
		G: 'simple_cobblestone_generator:generator_tier3'
	})

	e.shaped('simple_cobblestone_generator:generator_tier5', [
		'SSS',
		'SGS',
		'SSS'
	], {
		S: Plates.netherite,
		G: 'simple_cobblestone_generator:generator_tier4'
	})
})
