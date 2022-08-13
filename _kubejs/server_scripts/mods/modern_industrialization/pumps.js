
onEvent('recipes', e => {
	e.remove({ output: 'modern_industrialization:bronze_water_pump' })
	e.shaped('modern_industrialization:bronze_water_pump', [
		'RTR',
		'GCG',
		'FPF'
	], {
		R: 'modern_industrialization:copper_rotor',
		T: 'create:fluid_tank',
		G: 'modern_industrialization:copper_gear',
		C: 'modern_industrialization:bronze_machine_casing',
		F: 'moderndynamics:fluid_pipe',
		P: 'create:mechanical_pump'
	})
})
