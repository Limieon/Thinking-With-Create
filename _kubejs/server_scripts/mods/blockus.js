
onEvent('recipes', e => {
	const removes = [ 'blockus:bluestone', 'blockus:marble', 'blockus:limestone' ]
	removes.forEach(r => {
		e.remove({ output: r })
	})

	Create.makeMixing(e, [ 'minecraft:lapis_lazuli', 'minecraft:quartz', 'blockus:marble', Liquid.of('minecraft:lava', 150) ], '2x blockus:bluestone', Heated.Heated)
	Create.makeMixing(e, [ 'minecraft:diorite', 'minecraft:quartz', 'minecraft:stone', Liquid.of('minecraft:lava', 200) ], '2x blockus:marble', Heated.Heated)
	Create.makeMixing(e, [ 'minecraft:andesite', 'minecraft:quartz', 'blockus:marble', Liquid.of('minecraft:lava', 120) ], '2x blockus:limestone', Heated.Heated)
})
