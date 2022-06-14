
onEvent('recipes', e => {
	Create.makeMixing(e, [ `4x ${KubeJS.star_dust}`, Ingots.iron ], KubeJS.starmetal_ingot, Heated.SHeated)
	Create.makeCrushing(e, KubeJS.star_ore, KubeJS.star_dust)
	e.smelting(KubeJS.star_dust, KubeJS.star_ore)
	e.blasting(KubeJS.star_dust, KubeJS.star_ore)
})
