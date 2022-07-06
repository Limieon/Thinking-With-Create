
onEvent('recipes', e => {
	Create.makeMixing(e, [ 'croptopia:dragonfruit', 'croptopia:raspberry', 'croptopia:banana', 'minecraft:apple' ], Fluid.of('kubejs:smoothie_pink', 8100))
	Create.makeMixing(e, [ 'croptopia:blackberry', 'croptopia:banana', 'croptopia:raspberry', 'croptopia:orange' ], Fluid.of('kubejs:smoothie_purple', 8100))
	Create.makeMixing(e, [ 'croptopia:orange', 'croptopia:mango', 'croptopia:banana', 'minecraft:apple' ], Fluid.of('kubejs:smoothie_orange', 8100))
	Create.makeMixing(e, [ 'croptopia:vanilla', 'croptopia:pear', 'croptopia:grape', 'minecraft:apple' ], Fluid.of('kubejs:smoothie_red', 8100))
})
