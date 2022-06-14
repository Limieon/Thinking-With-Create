
onEvent('recipes', e => {
	e.remove({ output: 'minecraft:experience_bottle' })

	Create.makeEmptying(e, 'dmlsimulacrum:overworld_matter', 'xps:xp_fluid', 100)
	Create.makeEmptying(e, 'dmlsimulacrum:hellish_matter', 'xps:xp_fluid', 140)
	Create.makeEmptying(e, 'dmlsimulacrum:extraterrestrial_matter', 'xps:xp_fluid', 190)

	Create.makeFilling(e, 'minecraft:glass_bottle', 'xps:xp_fluid', 30, 'create:experience_nugget')
})
