
onEvent('recipes', e => {
	e.remove({ output: 'create:iron_sheet' })

	Object.keys(Plates).forEach(plate => {
		if(String(plate) != 'iridium') {
			if(String(Ingots[plate]) != undefined) {
				e.remove({
					type: 'modern_industrialization:compressor',
					output: Plates[plate]
				})
			}
		}
	})
	Object.keys(LargePlates).forEach(plate => {
		if(String(Plates[plate]) != undefined) {
			e.remove({
				output: LargePlates[plate]
			})

			Create.makeCompacting(e, `4x ${Plates[plate]}`, LargePlates[plate], Heated.None)
		}
	})

	Create.makePressing(e, Ingots.advancedAlloy, Plates.advancedAlloy)
	Create.makePressing(e, 'minecraft:lapis_block', 'modern_industrialization:lapis_plate')
	Create.makePressing(e, Ingots.iron, Plates.iron)
})
