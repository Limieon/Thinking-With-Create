
onEvent('recipes', e => {
	e.remove({ output: 'ae2:charger' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:logic_processor' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:engineering_processor' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:calculation_processor' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:printed_logic_processor' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:printed_engineering_processor' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:printed_calculation_processor' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:printed_silicon' })
	e.remove({ type: 'ae2:inscriber', output: 'ae2:sky_dust' })
	e.remove({ type: 'modern_industrialization:electrolyzer', output: 'ae2:charged_certus_quartz_crystal' })

	e.remove({ output: 'ae2:quartz_growth_accelerator' })
	e.remove({ output: 'ae2things:crystal_growth' })
	e.remove({ output: 'ae2:vibration_chamber' })

	e.remove({ output: 'ae2:controller' })

	Create.makeCrushing(e, 'ae2:sky_stone_block', 'ae2:sky_dust')

	Create.makeMechanical(e, [
		'SSSSS',
		'SCCCS',
		'SCPCS',
		'SCCCS',
		'SSSSS'
	], {
		S: 'ae2:smooth_sky_stone_block',
		C: 'ae2:fluix_crystal',
		P: 'ae2:engineering_processor'
	}, 'ae2:controller')

	e.remove({ output: 'ae2:terminal' })
	e.shaped('ae2:terminal', [
		'FPG',
		'AD '
	], {
		F: 'ae2:formation_core',
		P: '#ae2:illuminated_panel',
		G: 'ae2:logic_processor',
		A: 'ae2:annihilation_core',
		D: 'techreborn:digital_display'
	})
})
