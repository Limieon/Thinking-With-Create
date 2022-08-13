
onEvent('recipes', e => {
	e.remove({ type: 'minecraft:crafting', output: 'ae2:smart_dense_cable' })
	e.remove({ type: 'minecraft:crafting', output: 'ae2:fluix_smart_dense_cable' })
	e.remove({ type: 'minecraft:crafting', output: 'ae2:fluix_glass_cable' })
})
