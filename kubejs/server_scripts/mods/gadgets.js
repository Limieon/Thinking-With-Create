
onEvent('recipes', e=> {
	e.remove({ output: 'buildinggadgets:gadget_building' })
	e.remove({ output: 'buildinggadgets:gadget_exchanging' })
	e.remove({ output: 'buildinggadgets:gadget_copy_paste' })
	e.remove({ output: 'buildinggadgets:gadget_destruction' })

	Create.makeMechanical(e, [
		' III ',
		' IGI ',
		' ICI ',
		' ITI ',
		'IAIAI'
	], {
		I: Plates.iron,
		G: Ingots.gold,
		C: 'computercraft:computer_advanced',
		T: 'twilightforest:naga_trophy',
		A: 'createaddition:accumulator'
	}, 'buildinggadgets:gadget_building')

	Create.makeMechanical(e, [
		' III ',
		' IDI ',
		' ICI ',
		' ITI ',
		'IAIAI'
	], {
		I: Plates.iron,
		D: Ingots.diamond,
		C: 'computercraft:computer_advanced',
		T: 'twilightforest:lich_trophy',
		A: 'createaddition:accumulator'
	}, 'buildinggadgets:gadget_exchanging')
})
