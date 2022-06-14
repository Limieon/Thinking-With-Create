
onEvent('recipes', e => {
	ModernIndustrialization.makeQuarry(e, KubeJS.andesite_drill, 0.05, 8, 600, [
		{ item: KubeJS.star_ore, amount: 1, probability: 0.1 }
	])

	e.remove({ output: 'modern_industrialization:steam_quarry' })
	Create.makeMechanical(e, [
		'PCCCP',
		'SGIGS',
		'SGCGS',
		'SGIGS',
		'PDQDP'
	], {
		P: LargePlates.steel,
		C: 'modern_industrialization:steel_machine_casing',
		S: 'modern_industrialization:steel_machine_casing_pipe',
		G: Gears.steel,
		I: 'moderndynamics:item_pipe',
		D: 'modern_industrialization:invar_rotary_blade',
		Q: 'enhanced_quarries:fluid_quarry'
	}, 'modern_industrialization:steam_quarry')
})
