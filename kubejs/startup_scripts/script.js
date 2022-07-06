// priority: 9999
const LootTables = {
	ore: (e, ore, drop) => {
		e.addBlock(ore, table => {
			table.addPool(pool => {
				pool.addItem(ore)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }]
					}
				})
			})
			table.addPool(pool => {
				pool.addItem(drop)
				pool.rolls = 1
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [{ enchantment: 'minecraft:fortune', levels: { min: 0 } }]
					}
				})
				pool.addFunction({
					function: 'minecraft:apply_bonus',
					enchantment: 'minecraft:fortune',
					formula: 'minecraft:ore_drops'
				})
			})
			table.addPool(pool => {
				pool.addItem(drop)
				pool.survivesExplosion()
				pool.rolls = 1
				pool.addCondition({
					condition: 'minecraft:inverted',
					term: {
						condition: 'minecraft:match_tool',
						predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
					}
				})
			})
		})
	}
}
const ItemFactory = {
	drill: (e, id) => {
		e.create(`${id}_drill`)
		e.create(`${id}_drill_head`)
	},
	sequencedAssembly: (e, id) => {
		e.create(`incomplete_${id}`, 'create:sequenced_assembly')
	}
}

onEvent('item.registry', e => {
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_1k')
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_4k')
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_16k')
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_64k')
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_256k')
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_1024k')
	ItemFactory.sequencedAssembly(e, 'fluid_storage_cell_4096k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_1k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_4k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_16k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_64k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_256k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_1024k')
	ItemFactory.sequencedAssembly(e, 'item_storage_cell_4096k')

	e.create('star_dust')
	e.create('starmetal_ingot')
	e.create('osmium_plate')

	ItemFactory.drill(e, 'andesite')
	ItemFactory.drill(e, 'mythril')
	ItemFactory.drill(e, 'stormyx')
})
onEvent('block.registry', e => {
	e.create('star_ore')
		.material('stone')
		.hardness(2.5)
		.tagBlock('minecraft:mineable/pickaxe')

	e.create('compressed_coal_block')
		.material('stone')
		.hardness(3)
		.tagBlock('minecraft:mineable/pickaxe')
	e.create('compressed_charcoal_block')
		.material('stone')
		.hardness(3)
		.tagBlock('minecraft:mineable/pickaxe')
	e.create('charcoal_block')
		.material('stone')
		.hardness(2)
		.tagBlock('minecraft:mineable/pickaxe')
})
onEvent('fluid.registry', e => {
	e.create('smoothie_pink') // Dragonfruit, Raspberry, Banana, Apple
		.thinTexture(0xFA00FF)
		.bucketColor(0xFA00FF)
		.displayName('Pink Smoothie')
	e.create('smoothie_purple') // Blackberry, Banana, Orange, Raspberry
		.thinTexture(0xAB26FF)
		.bucketColor(0xAB26FF)
		.displayName('Purple Smoothie')
	e.create('smoothie_orange') // Orange, Mango, Banana, Apple
		.thinTexture(0xFF8800)
		.bucketColor(0xFF8800)
		.displayName('Orange Smoothie')
	e.create('smoothie_red') // Vanilla, Pear, Grape, Apple
		.thinTexture(0xFF003F)
		.bucketColor(0xFF003F)
		.displayName('Red Smoothie')
})
onEvent('block.loot_tables', e => {
	LootTables.ore(e, 'kubejs:star_ore', 'kubejs:star_dust')
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
