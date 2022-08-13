
onEvent('recipes', e => {
	e.remove({ output: 'modern_industrialization:silicon_ingot' })
	e.remove({ output: 'ae2:silicon' })

	e.smelting('ae2:silicon', 'modern_industrialization:silicon_dust')
	e.blasting('ae2:silicon', 'modern_industrialization:silicon_dust')
})
