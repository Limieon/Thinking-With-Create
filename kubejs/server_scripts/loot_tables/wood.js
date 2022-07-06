
function woodTable(e, log, wood) {
	e.addBlock(wood, table => {
		table.addPool(pool => {
			pool.addItem(wood)
			pool.addCondition({
				condition: 'minecraft:match_tool',
				predicate: {
					enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }]
				}
			})
		})
		table.addPool(pool => {
			pool.addItem(log)
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

onEvent('block.loot_tables', ev => {
	Object.keys(Woods).forEach(e => {
		if(Woods[e].log != undefined && Woods[e].wood != undefined) {
			woodTable(ev, Woods[e].log, Woods[e].wood)
		}
	})
})
