
onEvent('recipes', e => {
	e.remove({ output: DML.sootRedstone })
	Create.makeMixing(e, ['minecraft:coal', Ingots.redAlloy, 'minecraft:ender_pearl'], DML.sootRedstone)

	e.remove({ output: 'dmlsimulacrum:simulation_chamber' })
	Create.makeMechanical(e, [
		'OPPPO',
		'PEMEP',
		'PECEP',
		'PSSSP'
	], {
		O: MythicMetals.orichalcum.ingot,
		P: Plates.iron,
		E: 'minecraft:ender_pearl',
		M: 'dml-refabricated:machine_casing',
		C: 'computercraft:computer_advanced',
		S: 'dml-refabricated:soot_plate'
	}, 'dmlsimulacrum:simulation_chamber')

	e.remove({ output: 'dmlsimulacrum:polymer_clay' })
	Create.makeMixing(e, [ '4x minecraft:clay_ball', Ingots.gold, Ingots.iron ], '4x dmlsimulacrum:polymer_clay', Heated.Heated)

	e.remove({ output: 'dml-refabricated:deep_learner' })
	Create.makeMechanical(e, [
		'OPPPO',
		'PPSPP',
		'PMCMP',
		'PPSPP',
		'OPPPO'
	], {
		O: MythicMetals.osmium.ingot,
		M: MythicMetals.mythril.ingot,
		P: 'dml-refabricated:soot_plate',
		C: 'computercraft:pocket_computer_advanced',
		S: 'dml-refabricated:soot_redstone',
	}, 'dml-refabricated:deep_learner')

	e.remove({ output: 'dml-refabricated:matter_condenser' })
	Create.makeMechanical(e, [
		'PGGGP',
		'GGFGG',
		'GFCFG',
		'GGNGG',
		'PGGGP'
	], {
		G: Plates.gold,
		P: '#dml-refabricated:pristine_matter',
		F: 'dml-refabricated:physically_condensed_matrix_fragment',
		N: 'minecraft:netherite_scrap',
		C: 'dml-refabricated:machine_casing'
	}, 'dml-refabricated:matter_condenser')

	e.remove({ output: 'dml-refabricated:loot_fabricator' })
	Create.makeMechanical(e, [
		'IPPPI',
		'PEMEP',
		'PECES',
		'SEEES',
		'OSSSO'
	], {
		O: MythicMetals.osmium.ingot,
		I: '#dml-refabricated:pristine_matter',
		P: Plates.iron,
		E: 'minecraft:ender_pearl',
		M: 'dml-refabricated:machine_casing',
		C: 'computercraft:computer_advanced',
		S: 'dml-refabricated:soot_plate'
	}, 'dml-refabricated:loot_fabricator')

	e.remove({ output: 'dml-refabricated:trial_key' })
	e.shaped('dml-refabricated:trial_key', [
		'  S',
		'EDD',
		' GG'
	], {
		S: 'dml-refabricated:soot_redstone',
		E: 'minecraft:ender_pearl',
		D: 'minecraft:diamond',
		G: 'minecraft:gold_nugget'
	})
})
