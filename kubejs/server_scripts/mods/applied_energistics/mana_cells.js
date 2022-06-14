
onEvent('recipes', e => {
	// Fluid disks
	e.remove({ output: 'appbot:mana_cell_housing' })
	e.remove({ output: 'appbot:mana_storage_cell_1k' })
	e.remove({ output: 'appbot:mana_storage_cell_4k' })
	e.remove({ output: 'appbot:mana_storage_cell_16k' })
	e.remove({ output: 'appbot:mana_storage_cell_64k' })
	e.remove({ output: 'appbot:mana_storage_cell_256k' })

	Create.makeMechanical(e, [
		'GGGGG',
		'GRRRG',
		'PR RP',
		'PRRRP',
		'PPPPP'
	], {
		G: AE2.quartzGlass,
		R: 'botania:life_essence',
		P: Ingots.manasteel
	}, 'appbot:mana_cell_housing')

	e.recipes.createSequencedAssembly([
		'appbot:mana_storage_cell_1k'
	], 'appbot:mana_cell_housing', [
		e.recipes.createDeploying('kubejs:incomplete_mana_storage_cell_1k', ['appbot:mana_cell_housing', 'ae2:cell_component_1k']),
		e.recipes.createPressing('kubejs:incomplete_mana_storage_cell_1k', 'kubejs:incomplete_mana_storage_cell_1k'),
	]).transitionalItem('kubejs:incomplete_mana_storage_cell_1k').loops(1)
	e.recipes.createSequencedAssembly([
		'appbot:mana_storage_cell_4k'
	], 'appbot:mana_cell_housing', [
		e.recipes.createDeploying('appbot:mana_cell_housing', ['appbot:mana_cell_housing', 'ae2:cell_component_4k']),
		e.recipes.createPressing('kubejs:incomplete_mana_storage_cell_4k', 'kubejs:incomplete_mana_storage_cell_4k'),
	]).transitionalItem('kubejs:incomplete_mana_storage_cell_4k').loops(1)
	e.recipes.createSequencedAssembly([
		'appbot:mana_storage_cell_16k'
	], 'appbot:mana_cell_housing', [
		e.recipes.createDeploying('appbot:mana_cell_housing', ['appbot:mana_cell_housing', 'ae2:cell_component_16k']),
		e.recipes.createPressing('kubejs:incomplete_mana_storage_cell_16k', 'kubejs:incomplete_mana_storage_cell_16k'),
	]).transitionalItem('kubejs:incomplete_mana_storage_cell_16k').loops(1)
	e.recipes.createSequencedAssembly([
		'appbot:mana_storage_cell_64k'
	], 'appbot:mana_cell_housing', [
		e.recipes.createDeploying('appbot:mana_cell_housing', ['appbot:mana_cell_housing', 'ae2:cell_component_64k']),
		e.recipes.createPressing('kubejs:incomplete_mana_storage_cell_64k', 'kubejs:incomplete_mana_storage_cell_64k'),
	]).transitionalItem('kubejs:incomplete_mana_storage_cell_64k').loops(1)
	e.recipes.createSequencedAssembly([
		'appbot:mana_storage_cell_256k'
	], 'appbot:mana_cell_housing', [
		e.recipes.createDeploying('appbot:mana_cell_housing', ['appbot:mana_cell_housing', 'ae2:cell_component_256k']),
		e.recipes.createPressing('kubejs:incomplete_mana_storage_cell_256k', 'kubejs:incomplete_mana_storage_cell_256k'),
	]).transitionalItem('kubejs:incomplete_mana_storage_cell_256k').loops(1)
})
