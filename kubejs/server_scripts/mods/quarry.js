
onEvent('recipes', e => {
	e.remove({ output: 'enhanced_quarries:normal_quarry' })
	e.remove({ output: 'enhanced_quarries:enhanced_quarry' })
	e.remove({ output: 'enhanced_quarries:optimum_quarry' })
	e.remove({ output: 'enhanced_quarries:enhanced_optimum_quarry' })
	e.remove({ output: 'enhanced_quarries:fluid_quarry' })

	Create.makeMechanical(e, [
		'CCCCC',
		'CESEC',
		'CGGGC',
		'CBBBC',
		'CPPPC'
	], {
		C: 'create:iron_sheet',
		E: 'enhanced_quarries:enhanced_refined_gear',
		G: 'enhanced_quarries:refined_gear',
		P: 'minecraft:diamond_pickaxe',
		B: 'minecraft:bucket',
		S: 'techreborn:crude_storage_unit'
	}, 'enhanced_quarries:fluid_quarry')
})
