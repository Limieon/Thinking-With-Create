
// priority: 0

onEvent("ponder.tag", e => {
	e.createTag('kubejs:modern_industrialization', 'modern_industrialization:wrench', 'Modern Industrialization', 'We ponder now!', [
		'modern_industrialization:electric_quarry'
	])
})
onEvent('ponder.registry', e => {
	e.create('modern_industrialization:electric_quarry')
	.scene(
		'electric_quarry', 'Electric Quarry Construction', 	'kubejs:electric_quarry', (scene, util) => {
			scene.showStructure()
			scene.world.setBlocks(util.selection.position(2, 1, 1), 'modern_industrialization:electric_quarry', true);
			scene.world.setBlocks(util.selection.position(3, 1, 1, 3, 1, 3), 'modern_industrialization:steel_machine_casing', false)
			scene.world.setBlocks(util.selection.position(1, 1, 1, 1, 1, 3), 'modern_industrialization:steel_machine_casing', false)
			scene.idle(20)
			scene.world.setBlocks(util.selection.position(3, 2, 1, 3, 2, 3), 'modern_industrialization:steel_machine_casing', false)
			scene.world.setBlocks(util.selection.position(1, 2, 1, 1, 2, 3), 'modern_industrialization:steel_machine_casing', false)
			scene.idle(20)
			scene.world().setBlocks(util.selection.position(3, 3, 1, 3, 3, 3), 'modern_industrialization:steel_machine_casing', false)
			scene.world().setBlocks(util.selection.position(1, 3, 1, 1, 3, 3), 'modern_industrialization:steel_machine_casing', false)
		}
	)
})
