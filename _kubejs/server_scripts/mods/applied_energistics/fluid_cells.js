
onEvent('recipes', e => {
	// Fluid disks
	e.remove({ output: 'ae2:fluid_cell_housing' })
	e.remove({ output: 'ae2:fluid_storage_cell_1k' })
	e.remove({ output: 'ae2:fluid_storage_cell_4k' })
	e.remove({ output: 'ae2:fluid_storage_cell_16k' })
	e.remove({ output: 'ae2:fluid_storage_cell_64k' })
	e.remove({ output: 'ae2:fluid_storage_cell_256k' })
	e.remove({ output: 'ae2things:fluid_storage_cell_1024k' })
	e.remove({ output: 'ae2things:fluid_storage_cell_4096k' })

	Create.makeMechanical(e, [
		'GGGGG',
		'GRRRG',
		'PR RP',
		'PRRRP',
		'PPPPP'
	], {
		G: AE2.quartzGlass,
		R: 'minecraft:redstone',
		P: Plates.copper
	}, 'ae2:fluid_cell_housing')

	e.recipes.createSequencedAssembly([
		'ae2:fluid_storage_cell_1k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('kubejs:incomplete_fluid_storage_cell_1k', ['ae2:fluid_cell_housing', 'ae2:cell_component_1k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_1k', 'kubejs:incomplete_fluid_storage_cell_1k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_1k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:fluid_storage_cell_4k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_4k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_4k', 'kubejs:incomplete_fluid_storage_cell_4k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_4k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:fluid_storage_cell_16k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_16k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_16k', 'kubejs:incomplete_fluid_storage_cell_16k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_16k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:fluid_storage_cell_64k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_64k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_64k', 'kubejs:incomplete_fluid_storage_cell_64k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_64k').loops(1)
	e.recipes.createSequencedAssembly([
		'ae2:fluid_storage_cell_256k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_256k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_256k', 'kubejs:incomplete_fluid_storage_cell_256k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_256k').loops(1)

	e.recipes.createSequencedAssembly([
		'ae2things:fluid_storage_cell_1024k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2things:cell_component_1024k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_1024k', 'kubejs:incomplete_fluid_storage_cell_1024k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_1024k').loops(1)

	e.recipes.createSequencedAssembly([
		'ae2things:fluid_storage_cell_4096k'
	], 'ae2:fluid_cell_housing', [
		e.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2things:cell_component_4096k']),
		e.recipes.createPressing('kubejs:incomplete_fluid_storage_cell_4096k', 'kubejs:incomplete_fluid_storage_cell_4096k'),
	]).transitionalItem('kubejs:incomplete_fluid_storage_cell_4096k').loops(1)
})
