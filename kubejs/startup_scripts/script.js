// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', e => {
	e.create('incomplete_fluid_storage_cell_1k', 'create:sequenced_assembly')
	e.create('incomplete_fluid_storage_cell_4k', 'create:sequenced_assembly')
	e.create('incomplete_fluid_storage_cell_16k', 'create:sequenced_assembly')
	e.create('incomplete_fluid_storage_cell_64k', 'create:sequenced_assembly')
	e.create('incomplete_fluid_storage_cell_256k', 'create:sequenced_assembly')
	e.create('incomplete_fluid_storage_cell_1024k', 'create:sequenced_assembly')
	e.create('incomplete_fluid_storage_cell_4096k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_1k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_4k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_16k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_64k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_256k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_1024k', 'create:sequenced_assembly')
	e.create('incomplete_item_storage_cell_4096k', 'create:sequenced_assembly')
	e.create('incomplete_mana_storage_cell_1k', 'create:sequenced_assembly')
	e.create('incomplete_mana_storage_cell_4k', 'create:sequenced_assembly')
	e.create('incomplete_mana_storage_cell_16k', 'create:sequenced_assembly')
	e.create('incomplete_mana_storage_cell_64k', 'create:sequenced_assembly')
	e.create('incomplete_mana_storage_cell_256k', 'create:sequenced_assembly')
	e.create('andesite_drill')
	e.create('andesite_drill_head')

	e.create('star_dust')
	e.create('starmetal_ingot')
})
onEvent('block.registry', e => {
	e.create('star_ore')
		.material('stone')
		.hardness(2.5)
		.tagBlock('minecraft:mineable/pickaxe')
})
onEvent('block.loot_tables', e => {
	e.addSimpleBlock('kubejs:star_ore', 'kubejs:star_dust')
})
onEvent('worldgen.add', e => {
	e.addOre(ore => {
		console.info(ore)

		ore.addTarget('minecraft:stone', 'kubejs:star_ore')
		ore.count([3, 9])
			.squared()
			.triangleHeight(10, 128)
		ore.biomes = [{
			not: {
				category: 'nether'
			}
		}]
	})
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})


onEvent('rei.hide.items', e => {
})
