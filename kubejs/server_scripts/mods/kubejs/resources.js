onEvent('recipes', e => {
	Create.makeCompacting(e, 'kubejs:compressed_coal_block', 'techreborn:diamond_nugget', Heated.SHeated)
	Create.makeCompacting(e, 'kubejs:compressed_charcoal_block', 'techreborn:diamond_nugget', Heated.SHeated)

	Create.makeMixing(e, [ '2x #c:quartz', '#minecraft:coals', '2x #c:sand' ], 'modern_industrialization:silicon_dust', Heated.SHeated)
})
