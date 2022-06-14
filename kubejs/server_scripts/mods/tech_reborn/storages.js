
onEvent('recipes', e => {
	// Storages
	e.remove({ output: ThechReborn.storages.quantum })
	e.remove({ output: ThechReborn.storages.industrial })
	e.remove({ output: ThechReborn.storages.advanced })
	e.remove({ output: ThechReborn.storages.basic })

	Create.makeMechanical(e, [
		'PGGGP',
		'PTTTP',
		'PCBCP',
		'SCDCS',
		'SSISS'
	], {
		P: Plates.iron,
		G: AE2.vibrantQuartzGlass,
		T: Plates.tungsten,
		C: AE2.stroageCells.k64,
		B: ThechReborn.storages.industrial,
		D: AE2.drive,
		S: ThechReborn.dataStorageChip,
		I: ThechReborn.digitalDisplay
	},  ThechReborn.storages.quantum)

	Create.makeMechanical(e, [
		'PGGGP',
		'PTTTP',
		'PCBCP',
		'SCDCS',
		'SSISS'
	], {
		P: Plates.iron,
		G: AE2.vibrantQuartzGlass,
		T: Plates.steel,
		C: AE2.stroageCells.k16,
		B: ThechReborn.storages.advanced,
		D: AE2.drive,
		S: ThechReborn.dataStorageChip,
		I: ThechReborn.digitalDisplay
	},  ThechReborn.storages.industrial)

	Create.makeMechanical(e, [
		'PGGGP',
		'PTTTP',
		'PCBCP',
		'SCDCS',
		'SSISS'
	], {
		P: Plates.iron,
		G: AE2.vibrantQuartzGlass,
		T: Plates.electrum,
		C: AE2.stroageCells.k4,
		B: ThechReborn.storages.basic,
		D: AE2.drive,
		S: ThechReborn.dataStorageChip,
		I: ThechReborn.digitalDisplay
	},  ThechReborn.storages.advanced)

	Create.makeMechanical(e, [
		'PGGGP',
		'PTTTP',
		'PCBCP',
		'SCDCS',
		'SSISS'
	], {
		P: Plates.iron,
		G: AE2.vibrantQuartzGlass,
		T: Plates.refinedIron,
		C: AE2.stroageCells.k1,
		B: ThechReborn.storages.crude,
		D: AE2.drive,
		S: ThechReborn.dataStorageChip,
		I: ThechReborn.basicDisplay
	},  ThechReborn.storages.basic)
})
