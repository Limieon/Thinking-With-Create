
onEvent('recipes', e => {
	e.remove({ output: 'computercraft:computer_advanced' })
	e.shaped('computercraft:computer_advanced', [
		'GGG',
		'GRG',
		'GPG'
	], {
		G: Plates.gold,
		R: Ingots.redAlloy,
		P: 'techreborn:digital_display'
	})

	e.remove({ output: 'computercraft:computer_normal' })
	e.shaped('computercraft:computer_normal', [
		'GGG',
		'GRG',
		'GPG'
	], {
		G: '#c:stone',
		R: Ingots.redAlloy,
		P: 'techreborn:basic_display'
	})
})
