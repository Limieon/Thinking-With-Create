
onEvent('recipes', e => {
	e.remove({ output: 'moderndynamics:attractor' })
	e.shaped('moderndynamics:attractor', [
		' H ',
		'IRI',
		' P '
	], {
		H: 'minecraft:ender_pearl',
		I: Ingots.iron,
		P: Plates.iron,
		R: 'minecraft:redstone'
	})

	e.remove({ output: 'moderndynamics:extractor' })
	e.shaped('moderndynamics:extractor', [
		'MHM',
		'IRI',
		' P '
	], {
		M: 'create:mechanical_pump',
		H: 'minecraft:hopper',
		I: Ingots.iron,
		P: Plates.iron,
		R: 'minecraft:redstone'
	})

	e.remove({ output: 'moderndynamics:fluid_pipe' })
	e.shaped('4x moderndynamics:fluid_pipe', [
		'CCC',
		'GPG',
		'CCC'
	], {
		C: Plates.copper,
		P: 'create:fluid_pipe',
		G: '#c:glass'
	})

	e.remove({ output: 'moderndynamics:item_pipe' })
	e.shaped('4x moderndynamics:item_pipe', [
		'III',
		'GPG',
		'III'
	], {
		I: Plates.iron,
		P: 'create:fluid_pipe',
		G: '#c:glass'
	})

	e.remove({ output: 'moderndynamics:inhibitor' })
	e.shaped('moderndynamics:inhibitor', [
		'III',
		'INI',
		'III'
	], {
		I: Plates.iron,
		N: 'minecraft:nether_star'
	})

	e.remove({ output: 'moderndynamics:filter' })
	e.shaped('moderndynamics:filter', [
		'DDD',
		'IRI',
		' I '
	], {
		I: Plates.iron,
		R: 'minecraft:redstone',
		D: 'create:electron_tube'
	})

	e.remove({ output: 'moderndynamics:wrench' })
})
