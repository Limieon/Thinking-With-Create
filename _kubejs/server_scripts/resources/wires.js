
onEvent('recipes', e => {
	// Remove existing rolling recipes
	e.remove({
		type: 'modern_industrialization:wiremill'
	})

	const rollingRemoves = [
		'createaddition:copper_wire',
		'createaddition:gold_wire',
		'createaddition:iron_wire'
	]
	rollingRemoves.forEach(r => e.remove({
		type: 'createaddition:rolling',
		output: r
	}))

	const recipes = [
		'aluminum',
		'annealed_copper',
		'copper',
		'cupronickel',
		'electrum',
		'kanthal',
		'platinum',
		'silver',
		'superconductor',
		'tin'
	]

	recipes.forEach(r => {
		Create.makeRolling(e, 'modern_industrialization:'.concat(r, '_plate'), 'modern_industrialization:'.concat(r, '_wire'))
	})

	Create.makeRolling(e, Wires.copper, Wires.copperFine)
	Create.makeRolling(e, Wires.electrum, Wires.electrumFine)
	Create.makeRolling(e, Wires.platinum, Wires.platinumFine)
})
