
onEvent('recipes', e => {
	e.remove({ output: 'rswires:red_alloy_compound' })

	Create.makeMixing(e, [Ingots.iron, '4x minecraft:redstone'], 'rswires:red_alloy_compound', Heated.Heated)
})
