
onEvent('recipes', e => {
	e.remove({ output: 'create:iron_sheet' })

	Object.keys(Plates).forEach(plate => {
		if(String(plate) != 'iridium') {
			if(String(Ingots[plate]) != undefined) {
				e.remove({
					type: 'modern_industrialization:compressor',
					output: Plates[plate]
				})
				Create.makePressing(e, Ingots[plate], Plates[plate])
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
	Object.keys(CurvedPlates).forEach(plate => {
		if(String(LargePlates[plate]) != undefined) {
			e.remove({
				output: CurvedPlates[plate]
			})

			Create.makeRolling(e, LargePlates[plate], CurvedPlates[plate])
		}
	})

	Create.makePressing(e, Ingots.advancedAlloy, Plates.advancedAlloy)
	Create.makePressing(e, 'minecraft:lapis_block', 'modern_industrialization:lapis_plate')
	Create.makePressing(e, Ingots.iron, Plates.iron)
	//Create.makePressing(e, Ingots.netherite, Plates.netherite)
})
