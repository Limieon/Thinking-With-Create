
onEvent('recipes', e => {
	Botania.makeInfusion(e, 'ae2:certus_quartz_crystal', 'ae2:fluix_block', 'ae2:calculation_processor_press', 10000)
	Botania.makeInfusion(e, 'ae2:fluix_crystal', 'ae2:fluix_block', 'ae2:engineering_processor_press', 10000)
	Botania.makeInfusion(e, Ingots.gold, 'ae2:fluix_block', 'ae2:logic_processor_press', 10000)
	Botania.makeInfusion(e, 'ae2:silicon', 'ae2:fluix_block', 'ae2:silicon_press', 10000)
})
