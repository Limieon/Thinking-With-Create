
onEvent('recipes', e => {
	ModernIndustrialization.makeQuarry(e, KubeJS.andesite_drill, 0.05, 4, 600, [
		{ item: KubeJS.star_ore, amount: 1, probability: 0.1 }
	])
	ModernIndustrialization.makeQuarry(e, KubeJS.mythril_drill, 0.01, 4, 600, [
		QuarryItem.create(MythicMetals.mythril.ore, 1, 0.05),
		QuarryItem.create(MythicMetals.stormyx.ore, 1, 0.05),
		QuarryItem.create(MythicMetals.orichalcum.ore, 1, 0.1),
		QuarryItem.create(MythicMetals.osmium.ore, 1, 0.15),
		QuarryItem.create(MythicMetals.palladium.ore, 1, 0.10),
	])
	ModernIndustrialization.makeQuarry(e, KubeJS.stormyx_drill, 0.05, 128, 600, [
		QuarryItem.create(MythicMetals.adamantite.ore, 1, 0.005),
		QuarryItem.create(MythicMetals.aquarium.ore, 1, 0.05),
		QuarryItem.create(MythicMetals.banglum.ore, 1, 0.06),
		QuarryItem.create(MythicMetals.carmot.ore, 1, 0.02),
		QuarryItem.create(MythicMetals.kyber.ore, 1, 0.04),
		QuarryItem.create(MythicMetals.manganese.ore, 1, 0.1),
		QuarryItem.create(MythicMetals.morkite.ore, 1, 0.1),
		QuarryItem.create(MythicMetals.quadrillum.ore, 1, 0.04),
		QuarryItem.create(MythicMetals.starrite.ore, 1, 0.007),
		QuarryItem.create(MythicMetals.midas_gold.ore, 1, 0.05),
		QuarryItem.create(MythicMetals.platinum.ore, 1, 0.03),
		QuarryItem.create(MythicMetals.prometheum.ore, 1, 0.006),
		QuarryItem.create(MythicMetals.runite.ore, 1, 0.01),
		QuarryItem.create(MythicMetals.unobtainium.ore, 1, 0.001)
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
