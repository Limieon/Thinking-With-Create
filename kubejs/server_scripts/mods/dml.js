
onEvent('recipes', e => {
	e.remove({ output: DML.sootRedstone })
	Create.makeMixing(e, ['minecraft:coal', 'minecraft:redstone'], DML.sootRedstone)
})
