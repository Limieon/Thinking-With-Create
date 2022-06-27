onEvent('recipes', e => {
	// Diamond Production
	Create.makeCompacting(e, '#kubejs:compressed_coal_blocks', 'techreborn:diamond_nugget', Heated.SHeated)

	// Silicon Production
	Create.makeMixing(e, [ '2x #c:quartz', '#minecraft:coals', '2x #c:sand' ], 'modern_industrialization:silicon_dust', Heated.SHeated)
})
