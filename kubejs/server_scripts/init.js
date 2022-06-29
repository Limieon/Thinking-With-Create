// priority: 9999

settings.logAddedRecipes = true
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const Ingots = {
	iron: 'minecraft:iron_ingot',
	copper: 'minecraft:copper_ingot',
	diamond: 'minecraft:diamond',
	gold: 'minecraft:gold_ingot',
	netherite: 'minecraft:netherite_ingot',
	carbon: 'minecraft:coal',
	aluminum: 'modern_industrialization:aluminum_ingot',
	netherBrass: 'architects_palette:nether_brass_ingot',
	aeterium: 'betterend:aetherium_ingot',
	thallasium: 'betterend:thallasium_ingot',
	terminite: 'betterend:terminite_ingot',
	manasteel: 'botania:manasteel_ingot',
	terrasteel: 'botania:terrasteel_ingot',
	elementium: 'botania:elementium_ingot',
	gaiaSpirit: 'botania:gaia_ingot',
	zinc: 'create:zinc_ingot',
	brass: 'create:brass_ingot',
	castIron: 'create:cast_iron_ingot',
	glitch: 'dml-refabricated:glitch_ingot',
	annealedCopperHot: 'modern_industrialization:annealed_copper_hot_ingot',
	annealedCopper: 'modern_industrialization:annealed_copper',
	antimony: 'modern_industrialization:antimony_ingot',
	batteryAlloy: 'modern_industrialization:battery_alloy_ingot',
	beryllium: 'modern_industrialization:beryllium_ingot',
	mixedBlastproof: 'modern_industrialization:mixed_ingot_blastproof',
	blastproofAlloy: 'modern_industrialization:blastproof_alloy_ingot',
	bronze: 'modern_industrialization:bronze_ingot',
	cadmium: 'modern_industrialization:cadmium_ingot',
	chromiumHot: 'modern_industrialization:chromium_hot_ingot',
	chromium: 'modern_industrialization:chromium_ingot',
	cupronickel: 'modern_industrialization:cupronickel_ingot',
	electrum: 'modern_industrialization:electrum_ingot',
	heMox: 'modern_industrialization:he_mox_ingot',
	heUranium: 'modern_industrialization:he_uranium_ingot',
	invar: 'techreborn:invar_ingot',
	iridium: 'modern_industrialization:iridium_ingot',
	kanthalHot: 'modern_industrialization:kanthal_hot_ingot',
	kantahl: 'modern_industrialization:kanthal_ingot',
	leMox: 'modern_industrialization:le_mox_ingot',
	leUranium: 'modern_industrialization:le_uranium_ingot',
	lead: 'modern_industrialization:lead_ingot',
	managanese: 'modern_industrialization:managanese_ingot',
	nickel: 'modern_industrialization:nickel_ingot',
	platinumHot: 'modern_industrialization:platinum_hot_ingot',
	platinum: 'modern_industrialization:platinum_ingot',
	plutonium: 'modern_industrialization:plutonium_ingot',
	silicon: 'modern_industrialization:silicon_ingot',
	silver: 'modern_industrialization:silver_ingot',
	stainlessSteelHot: 'modern_industrialization:stainless_steel_hot_ingot',
	stainlessSteel: 'modern_industrialization:stainless_steel_ingot',
	steel: 'modern_industrialization:steel_ingot',
	superconductorHot: 'modern_industrialization:superconductor_hot_ingot',
	superconductor: 'modern_industrialization:superconductor_ingot',
	tin: 'modern_industrialization:tin_ingot',
	titaniumHot: 'modern_industrialization:titanium_hot_ingot',
	titanium: 'modern_industrialization:titanium_ingot',
	tungsten: 'modern_industrialization:tungsten_ingot',
	uranium: 'modern_industrialization:uranium_ingot',
	uranium235: 'modern_industrialization:uranium_235_ingot',
	uranium238: 'modern_industrialization:uranium_238_ingot',
	advancedAlloy: 'techreborn:advanced_alloy_ingot',
	bronze: 'techreborn:bronze_ingot',
	tungstenSteelHot: 'techreborn:hot_tungstensteel_ingot',
	iridiumAlloy: 'techreborn:iridium_alloy_ingot',
	mixedMetal: 'techreborn:mixed_metal_ingot',
	refinedIron: 'techreborn:refined_iron_ingot',
	tungstensteel: 'techreborn:tungstensteel_ingot'
}
const Plates = {
	iron: 'modern_industrialization:iron_plate',
	copper: 'modern_industrialization:copper_plate',
	gold: 'modern_industrialization:gold_plate',
	netherite: 'createdeco:netherite_sheet',
	aluminum: 'modern_industrialization:aluminum_plate',
	netherBrass: 'architects_palette:nether_brass_plate',
	aeterium: 'betterend:aetherium_plate',
	thallasium: 'betterend:thallasium_plate',
	terminite: 'betterend:terminite_plate',
	manasteel: 'botania:manasteel_plate',
	terrasteel: 'botania:terrasteel_plate',
	elementium: 'botania:elementium_plate',
	gaiaSpirit: 'botania:gaia_plate',
	zinc: 'create:zinc_sheet',
	brass: 'create:brass_sheet',
	castIron: 'create:cast_iron_plate',
	glitch: 'dml-refabricated:glitch_plate',
	annealedCopper: 'modern_industrialization:annealed_copper',
	antimony: 'modern_industrialization:antimony_plate',
	batteryAlloy: 'modern_industrialization:battery_alloy_plate',
	beryllium: 'modern_industrialization:beryllium_plate',
	carbon: 'modern_industrialization:carbon_plate',
	mixedBlastproof: 'modern_industrialization:mixed_plate_blastproof',
	blastproofAlloy: 'modern_industrialization:blastproof_alloy_plate',
	bronze: 'modern_industrialization:bronze_plate',
	cadmium: 'modern_industrialization:cadmium_plate',
	chromium: 'modern_industrialization:chromium_plate',
	cupronickel: 'modern_industrialization:cupronickel_plate',
	diamond: 'modern_industrialization:diamond_plate',
	electrum: 'modern_industrialization:electrum_plate',
	heMox: 'modern_industrialization:he_mox_plate',
	invar: 'modern_industrialization:invar_plate',
	iridium: 'modern_industrialization:iridium_plate',
	kantahl: 'modern_industrialization:kanthal_plate',
	leMox: 'modern_industrialization:le_mox_plate',
	lead: 'modern_industrialization:lead_plate',
	managanese: 'modern_industrialization:managanese_plate',
	nickel: 'modern_industrialization:nickel_plate',
	nuclearAlloy: 'modern_industrialization:nuclear_alloy_plate',
	platinum: 'modern_industrialization:platinum_plate',
	plutonium: 'modern_industrialization:plutonium_plate',
	silicon: 'modern_industrialization:silicon_plate',
	silver: 'modern_industrialization:silver_plate',
	stainlessSteel: 'modern_industrialization:stainless_steel_plate',
	steel: 'modern_industrialization:steel_plate',
	superconductor: 'modern_industrialization:superconductor_plate',
	tin: 'modern_industrialization:tin_plate',
	titanium: 'modern_industrialization:titanium_plate',
	tungsten: 'modern_industrialization:tungsten_plate',
	advancedAlloy: 'techreborn:advanced_alloy_plate',
	bronze: 'techreborn:bronze_plate',
	tungstenSteelHot: 'techreborn:hot_tungstensteel_plate',
	iridiumAlloy: 'techreborn:iridium_alloy_plate',
	mixedMetal: 'techreborn:mixed_metal_plate',
	refinedIron: 'techreborn:refined_iron_plate',
	tungstensteelIngot: 'techreborn:tungstensteel_plate'
}
const LargePlates = {
	carbon: 'modern_industrialization:carbon_large_plate',
	aluminum: 'modern_industrialization:aluminum_large_plate',
	batteryAlloy: 'modern_industrialization:battery_alloy_large_plate',
	blastproofAlloy: 'modern_industrialization:blastproof_alloy_large_plate',
	bronze: 'modern_industrialization:bronze_large_plate',
	chromium: 'modern_industrialization:chromium_large_plate',
	copper: 'modern_industrialization:copper_large_plate',
	diamond: 'modern_industrialization:diamond_large_plate',
	gold: 'modern_industrialization:gold_large_plate',
	invar: 'modern_industrialization:invar_large_plate',
	iron: 'modern_industrialization:iron_large_plate',
	nuclearAlloy: 'modern_industrialization:nuclear_alloy_large_plate',
	stainlessSteel: 'modern_industrialization:stainless_steel_large_plate',
	steel: 'modern_industrialization:steel_large_plate',
	tin: 'modern_industrialization:tin_large_plate',
	titanium: 'modern_industrialization:titanium_large_plate',
	tungsten: 'modern_industrialization:tungsten_large_plate',
}
const CurvedPlates = {
	aluminum: 'modern_industrialization:aluminum_curved_plate',
	batteryAlloy: 'modern_industrialization:battery_alloy_curved_plate',
	blastproofAlloy: 'modern_industrialization:blastproof_alloy_curved_plate',
	bronze: 'modern_industrialization:bronze_curved_plate',
	copper: 'modern_industrialization:copper_curved_plate',
	gold: 'modern_industrialization:gold_curved_plate',
	iridium: 'modern_industrialization:iridium_curved_plate',
	stainlessSteel: 'modern_industrialization:stainless_steel_curved_plate',
	steel: 'modern_industrialization:steel_curved_plate',
	tin: 'modern_industrialization:tin_curved_plate',
	titanium: 'modern_industrialization:titanium_curved_plate'
}
const Wires = {
	aluminum: 'modern_industrialization:aluminum_wire',
	copper: 'modern_industrialization:copper_wire',
	copperFine: 'modern_industrialization:copper_fine_wire',
	annealedCopper: 'modern_industrialization:annealed_copper_wire',
	cupronickel: 'modern_industrialization:cupronickel_wire',
	cupronickelMagnetic: 'modern_industrialization:cupronickel_wire_magnetic',
	electrumFine: 'modern_industrialization:electrum_fine_wire',
	electrum: 'modern_industrialization:kanthal_wire',
	platinumFine: 'modern_industrialization:platinum_fine_wire',
	platinum: 'modern_industrialization:platinum_wire',
	silver: 'modern_industrialization:silver_wire',
	superconductor: 'modern_industrialization:superconductor_wire',
	tin: 'modern_industrialization:tin_wire'
}
const Gears = {
	refined: 'enhanced_quarries:refined_gear',
	enhancedRefined: 'enhanced_quarries:enhanced_refined_gear',
	aluminum: 'modern_industrialization:aluminum_gear',
	bronze: 'modern_industrialization:bronze_gear',
	copper: 'modern_industrialization:copper_gear',
	gold: 'modern_industrialization:gold_gear',
	invar: 'modern_industrialization:invar_gear',
	iron: 'modern_industrialization:iron_gear',
	stainlessSteel: 'modern_industrialization:stainless_steel_gear',
	steel: 'modern_industrialization:steel_gear',
	titanium: 'modern_industrialization:titanium_gear'
}
const Nuggets = {
	diamond: 'techreborn:diamond_nugget'
}
const Woods = {
	oak: {
		log: 'minecraft:oak_log',
		planks: 'minecraft:oak_planks'
	},
	birch: {
		log: 'minecraft:birch_log',
		planks: 'minecraft:birch_planks'
	},
	spruce: {
		log: 'minecraft:spruce_log',
		planks: 'minecraft:spruce_planks'
	},
	jungle: {
		log: 'minecraft:jungle_log',
		planks: 'minecraft:jungle_planks'
	},
	dark_oak: {
		log: 'minecraft:dark_oak_log',
		planks: 'minecraft:dark_oak_planks'
	},
	acacia: {
		log: 'minecraft:acacia_log',
		planks: 'minecraft:acacia_planks'
	},
	crimson: {
		log: 'minecraft:crimson_stem',
		planks: 'minecraft:crimson_planks'
	},
	warped: {
		log: 'minecraft:warped_stem',
		planks: 'minecraft:warped_planks'
	},
	// Architect's Palette
	twisted: {
		log: 'architects_palette:twisted_log',
		planks: 'architects_palette:twisted_planks'
	},
	// Better End
	mossy_glowshrom: {
		log: 'betterend:mossy_glowshroom_log',
		planks: 'betterend:mossy_glowshroom_planks'
	},
	pythadendron: {
		log: 'betterend:pythadendron_log',
		planks: 'betterend:pythadendron_planks'
	},
	end_lotus: {
		log: 'betterend:end_lotus_log',
		planks: 'betterend:end_lotus_planks'
	},
	lacugrove: {
		log: 'betterend:lacugrove_log',
		planks: 'betterend:lacugrove_planks'
	},
	dragon_tree: {
		log: 'betterend:dragon_tree_log',
		planks: 'betterend:dragon_tree_planks'
	},
	tenanea: {
		log: 'betterend:tenanea_log',
		planks: 'betterend:tenanea_planks'
	},
	helix_tree: {
		log: 'betterend:helix_tree_log',
		planks: 'betterend:helix_tree_planks'
	},
	umbrella_tree: {
		log: 'betterend:umbrella_tree_log',
		planks: 'betterend:umbrella_tree_planks'
	},
	jellyshroom: {
		log: 'betterend:jellyshroom_log',
		planks: 'betterend:jellyshroom_planks'
	},
	lucernia: {
		log: 'betterend:lucernia_log',
		planks: 'betterend:lucernia_planks'
	},
	// Blockus
	white_oak: {
		log: 'blockus:white_oak_log',
		planks: 'blockus:white_oak_planks'
	},
	// Botania
	livingwood: {
		log: 'botania:livingwood_log',
		planks: 'botania:livingwood_planks'
	},
	dreamwood: {
		log: 'botania:dreamwood_log',
		planks: 'botania:dreamwood_planks'
	},
	// Eden Ring
	auritis: {
		log: 'edenring:auritis_log',
		planks: 'edenring:auritis_planks'
	},
	ballonMushroom: {
		log: 'edenring:balloon_mushroom_log',
		planks: 'edenring:balloon_mushroom_planks'
	},
	pulseTree: {
		log: 'edenring:pulse_tree_log',
		planks: 'edenring:pulse_tree_planks'
	},
	brainTree: {
		log: 'edenring:brain_tree_log',
		planks: 'edenring:brain_tree_planks'
	}
}

const AE2 = {
	stroageCells: {
		k1: 'ae2:item_storage_cell_1k',
		k4: 'ae2:item_storage_cell_4k',
		k16: 'ae2:item_storage_cell_16k',
		k64: 'ae2:item_storage_cell_64k',
		k256: 'ae2:item_storage_cell_256k'
	},
	cables: {
		glass: '#ae2:glass_cable',
		covered: '#ae2:covered_cable',
		smart: '#ae2:smart_cable',
		denseCovered: '#ae2:covered_dense_cable',
		denseSmart: '#ae2:smart_dense_cable'
	},
	drive: 'ae2:drive',
	quartzGlass: 'ae2:quartz_glass',
	vibrantQuartzGlass: 'ae2:quartz_vibrant_glass'
}
const ThechReborn = {
	casings: {
		basic: 'techreborn:basic_machine_casing',
		advanced: 'techreborn:advanced_machine_casing',
		industrial: 'techreborn:industrial_machine_casing'
	},
	frames: {
		basic: 'techreborn:basic_machine_frame',
		advanced: 'techreborn:advanced_machine_frame',
		industrial: 'techreborn:industrial_machine_frame'
	},
	storages: {
		crude: 'techreborn:crude_storage_unit',
		basic: 'techreborn:basic_storage_unit',
		advanced: 'techreborn:advanced_storage_unit',
		industrial: 'techreborn:industrial_storage_unit',
		quantum: 'techreborn:quantum_storage_unit'
	},
	dataStorageCore: 'techreborn:data_storage_core',
	dataStorageChip: 'techreborn:data_storage_chip',
	basicDisplay: 'techreborn:basic_display',
	digitalDisplay: 'techreborn:digital_display'
}
const DML = {
	glitchIngot: 'dml-refabricated:glitch_ingot',
	sootRedstone: 'dml-refabricated:soot_redstone',
	key: 'dml-refabricated:trial_key',
	learner: 'dml-refabricated:deep_learner'
}
const KubeJS = {
	andesite_drill: 'kubejs:andesite_drill',
	star_dust: 'kubejs:star_dust',
	starmetal_ingot: 'kubejs:starmetal_ingot',
	star_ore: 'kubejs:star_ore',
	charcoal_block: 'kubejs:charcoal_block',
	compressed_charcoal_block: 'kubejs:compressed_charcoal_block',
	compressed_coal_block: 'kubejs:compressed_coal_block',
	liquid_sand: 'kubejs:liquid_glass'
}
const Botania = {
	makeInfusion: (e, item, block, out, mana) => {
		e.recipes.botania.mana_infusion(out, item, mana, block)
	}
}

const Heated = {
	None: 0,
	Heated: 1,
	SHeated: 2
}

const DeactivatedItems = [
	'techreborn:auto_crafting_table'
]

// Recipe Helper Functions:
const Create = {
	makeRolling: (e, i, o) => {
		e.custom({
			type: 'createaddition:rolling',
			input: { item: i },
			result: { item: o }
		})
	}, makeMixing: (e, i, o, heat) => {
		var input = []
		if(typeof i == 'string') {
			input = [ i ]
		} else {
			input = i
		}

		if(heat == undefined || heat == Heated.None) {
			e.recipes.createMixing(o, input)
		} else if(heat == Heated.Heated) {
			e.recipes.createMixing(o, input).heated()
		} else if(heat == Heated.SHeated) {
			e.recipes.createMixing(o, input).superheated()
		} else {
			console.error(`Create::makeMixing(e: ${e}, i: ${i}, o: ${o}, heat: ${heat}): Value for parameter 'heat' is not allowed!`)
		}
	}, makeCompacting: (e, i, o, heat) => {
		var input = []
		if(typeof i == 'string') {
			input = [ i ]
		} else {
			input = i
		}

		if(heat == Heated.None) {
			e.recipes.createCompacting(o, input)
		} else if(heat == Heated.Heated) {
			e.recipes.createCompacting(o, input).heated()
		} else if(heat == Heated.SHeated) {
			e.recipes.createCompacting(o, input).superheated()
		} else {
			console.error(`Create::createCompacting(e: ${e}, i: ${i}, o: ${o}, heat: ${heat}): Value ${heat} for parameter 'heat' is not allowed!`)
		}
	}, makePressing: (e, i, o) => {
		var input = []
		if(typeof i == 'string') {
			input = [ i ]
		} else {
			input = i
		}

		e.recipes.createPressing(o, i)
	}, makeCrushing: (e, i, o) => {
		e.recipes.createCrushing(o, i)
	}, makeMechanical: (e, p, i, o) => {
		e.recipes.createMechanicalCrafting(o, p, i)
	}, makeEmptying: (e, i, f, a, o) => {
		if(o == undefined || o == 'minecraft:air') {
			e.recipes.createEmptying([ Fluid.of(f, a * 81) ], i)
		} else {
			e.reicpes.createEmptying([ o, Fluid.of(f, a * 81) ], i)
		}
	}, makeFilling: (e, i, f, a, o) => {
		e.recipes.createFilling([
			i, Fluid.of(f, a * 81)
		], o)
	}
}
const ModernIndustrialization = {
	makeQuarry: (e, drill, propability, eu, time, outputs) => {
		e.custom({
			type: 'modern_industrialization:quarry',
			eu: eu,
			duration: time,
			item_inputs: {
				item: drill,
				amount: 1,
				probability: propability
			},
			item_outputs: outputs
		})
	},
	makeCokeOven: (e, eu, time, input, output, fluid) => {
		e.custom({
			type: 'modern_industrialization:coke_oven',
			eu: eu,
			duration: time,
			item_inputs: {
				item: input.id,
				amount: input.count == undefined ? 1 : input.count
			},
			fluid_outputs: {
				fluid: fluid.id,
				amount: fluid.amount,
				probability: fluid.chance == undefined ? 1 : fluid.chance
			},
			item_outputs: {
				item: output.id,
				amount: output.count == undefined ? 1 : output.count
			}
		})
	}
}

console.info('Initializing...')

// Recipes that are / will be duplicates are removed here

onEvent('recipes', e => {
	Object.keys(Plates).forEach(plate => {
		e.remove({
			output: Plates[plate]
		})
		e.remove({
			output: Plates[plate].replace('modern_industrialization', 'techreborn')
		})
	})

	e.remove({ output: 'techreborn:emerald_plate' })
	e.remove({ output: 'techreborn:lapis_plate' })
	e.remove({ output: 'createdeco:zinc_sheet' })
	e.remove({ output: 'techreborn:brass_plate' })
	e.remove({ output: 'techreborn:brass_ingot' })
	e.remove({ output: 'techreborn:brass_nugget' })
	e.remove({ output: 'techreborn:brass_dust' })

	// Change output count of recipes
	e.remove({ output: 'enhanced_quarries:enhanced_refined_gear' })
	e.remove({ output: 'enhanced_quarries:refined_gear' })

	e.shaped('enhanced_quarries:enhanced_refined_gear', [
		' O ',
		'DGD',
		' O '
	], {
		O: 'minecraft:obsidian',
		G: 'enhanced_quarries:refined_gear',
		D: 'minecraft:diamond'
	})
	e.shaped('enhanced_quarries:refined_gear', [
		'RIR',
		'ICI',
		'RIR'
	], {
		R: 'minecraft:redstone',
		I: 'minecraft:iron_ingot',
		C: 'minecraft:cobblestone'
	})

	DeactivatedItems.forEach(d => {
		e.remove({ output: d })
	})

	e.remove({ output: 'minecraft:bucket' })
	e.shaped('minecraft:bucket', [
		'P P',
		' P '
	], {
		P: Plates.iron
	})

	e.shaped('8x minecraft:stick', [ 
		'SSS',
		'SBS',
		'SSS', 
	], {
		S: 'minecraft:stick',
		B: 'modern_industrialization:bucket_creosote'
	}).replaceIngredient({item: Item.of('modern_industrialization:bucket_creosote')}, 'minecraft:bucket')
})

const Liquid = {
	of: (f, a) => {
		return { fluidTag: f, amount: a * 81 }
	}
}
