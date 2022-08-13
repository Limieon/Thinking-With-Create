
onEvent('recipes', e => {
	// Storage components and disks
	e.remove({ output: 'ae2:cell_component_4k' })
	e.remove({ output: 'ae2:cell_component_16k' })
	e.remove({ output: 'ae2:cell_component_64k' })
	e.remove({ output: 'ae2:cell_component_256k' })
	e.remove({ output: 'ae2things:cell_component_1024k' })
	e.remove({ output: 'ae2things:cell_component_4096k' })
	
	e.remove({ output: 'ae2:item_cell_housing' })
	e.remove({ output: 'ae2:item_storage_cell_1k' })
	e.remove({ output: 'ae2:item_storage_cell_4k' })
	e.remove({ output: 'ae2:item_storage_cell_16k' })
	e.remove({ output: 'ae2:item_storage_cell_64k' })
	e.remove({ output: 'ae2:item_storage_cell_256k' })
	e.remove({ output: 'ae2things:item_storage_cell_1024k' })
	e.remove({ output: 'ae2things:item_storage_cell_4096k' })

	Create.makeMechanical(e, [
		'GGGGG',
		'GECLG',
		'ICPCI',
		'IDCDI',
		'IIIII'
	], {
		G: 'ae2:quartz_glass',
		D: 'ae2:sky_dust',
		C: 'ae2:cell_component_1k',
		I: 'create:iron_sheet',
		E: 'ae2:engineering_processor',
		L: 'ae2:logic_processor',
		P: 'ae2:calculation_processor'
	}, 'ae2:cell_component_4k')
	Create.makeMechanical(e, [
		'GGGGG',
		'GECLG',
		'ICPCI',
		'IDCDI',
		'IIIII'
	], {
		G: 'ae2:quartz_glass',
		D: 'ae2:sky_dust',
		C: 'ae2:cell_component_4k',
		I: 'create:iron_sheet',
		E: 'ae2:engineering_processor',
		L: 'ae2:logic_processor',
		P: 'ae2:calculation_processor'
	}, 'ae2:cell_component_16k')
	Create.makeMechanical(e, [
		'GGGGG',
		'GECLG',
		'ICPCI',
		'IDCDI',
		'IIIII'
	], {
		G: 'ae2:quartz_glass',
		D: 'ae2:sky_dust',
		C: 'ae2:cell_component_16k',
		I: 'create:iron_sheet',
		E: 'ae2:engineering_processor',
		L: 'ae2:logic_processor',
		P: 'ae2:calculation_processor'
	}, 'ae2:cell_component_64k')
	Create.makeMechanical(e, [
		'GGGGG',
		'GECLG',
		'ICPCI',
		'IDCDI',
		'IIIII'
	], {
		G: 'ae2:quartz_glass',
		D: 'ae2:sky_dust',
		C: 'ae2:cell_component_64k',
		I: 'create:iron_sheet',
		E: 'ae2:engineering_processor',
		L: 'ae2:logic_processor',
		P: 'ae2:calculation_processor'
	}, 'ae2:cell_component_256k')
	Create.makeMechanical(e, [
		'GGGGG',
		'GECLG',
		'ICPCI',
		'IDCDI',
		'IIIII'
	], {
		G: 'ae2:quartz_glass',
		D: 'ae2:sky_dust',
		C: 'ae2:cell_component_256k',
		I: 'create:iron_sheet',
		E: 'ae2:engineering_processor',
		L: 'ae2:logic_processor',
		P: 'ae2:calculation_processor'
	}, 'ae2things:cell_component_1024k')
	Create.makeMechanical(e, [
		'GGGGG',
		'GECLG',
		'ICPCI',
		'IDCDI',
		'IIIII'
	], {
		G: 'ae2:quartz_glass',
		D: 'ae2:sky_dust',
		C: 'ae2things:cell_component_1024k',
		I: 'create:iron_sheet',
		E: 'ae2:engineering_processor',
		L: 'ae2:logic_processor',
		P: 'ae2:calculation_processor'
	}, 'ae2things:cell_component_4096k')

	Create.makeMechanical(e, [
		'GGGGG',
		'GRRRG',
		'PR RP',
		'PRRRP',
		'PPPPP'
	], {
		G: AE2.quartzGlass,
		R: 'minecraft:redstone',
		P: Plates.iron
	}, 'ae2:item_cell_housing')

	e.recipes.createSequencedAssembly([
		'ae2:item_storage_cell_1k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('kubejs:incomplete_item_storage_cell_1k', ['ae2:item_cell_housing', 'ae2:cell_component_1k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_1k', 'kubejs:incomplete_item_storage_cell_1k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_1k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:item_storage_cell_4k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_4k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_4k', 'kubejs:incomplete_item_storage_cell_4k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_4k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:item_storage_cell_16k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_16k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_16k', 'kubejs:incomplete_item_storage_cell_16k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_16k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:item_storage_cell_64k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_64k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_64k', 'kubejs:incomplete_item_storage_cell_64k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_64k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:item_storage_cell_256k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_256k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_256k', 'kubejs:incomplete_item_storage_cell_256k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_256k').loops(1)

	e.recipes.createSequencedAssembly([
		'ae2things:item_storage_cell_1024k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2things:cell_component_1024k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_1024k', 'kubejs:incomplete_item_storage_cell_1024k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_1024k').loops(1)

	e.recipes.createSequencedAssembly([
		'ae2things:item_storage_cell_4096k'
	], 'ae2:item_cell_housing', [
		e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2things:cell_component_4096k']),
		e.recipes.createPressing('kubejs:incomplete_item_storage_cell_4096k', 'kubejs:incomplete_item_storage_cell_4096k'),
	]).transitionalItem('kubejs:incomplete_item_storage_cell_4096k').loops(1)
})
