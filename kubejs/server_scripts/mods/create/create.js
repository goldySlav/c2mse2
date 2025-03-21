// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		
	])
	
	removeRecipeByID(event, [
		CR("mixing/brass_ingot"),
		/create:milling\/compat\/botania/,
	])
	
	//andesite alloy chain 
	removeRecipeByOutput(event, [
		CR('andesite_alloy'),
	])
	
	event.shaped(Item.of(CR('andesite_alloy'), 2), [
		'AAA',
		'PPP',
		'SSS'
	], {
		A: MC('andesite'),
		P: F('#nuggets/zinc'),
		S: KJ('algal_brick')
	})
	event.recipes.create.mixing(Item.of(CR('andesite_alloy'), 2), [ MC('andesite'), F('#nuggets/zinc'), KJ('algal_brick') ])
	event.custom({
		type: AE2_A("reaction"),
		energy: 500000,
	    fluid: {
			fluidStack: {
				Amount: 500,
				FluidName: MC("water")
			}
		},
		input_items: [
			{
				amount: 16,
				ingredient: {
					item: MC("andesite")
				}
			},
			{
				amount: 16,
				ingredient: {
					tag: F("nuggets/zinc")
				}
			},
			{
				amount: 16,
				ingredient: {
					item: KJ('algal_brick')
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: CR("andesite_alloy"),
		}
	})
	
	//andesite alloy block to alloy
	event.shapeless(Item.of(CR('andesite_alloy'), 9), [CR("andesite_alloy_block")])
	
	//powdered obsidian from milling
	event.recipes.create.milling(CR('powdered_obsidian'), MC('obsidian')).processingTime(processingTimesDefault.milling)
	
	//chromatic compound
	event.recipes.create.mechanical_crafting(Item.of(CR('chromatic_compound'), 2), [
		'AA',
		'AA'
	], {
		A: AE2('magenta_paint_ball')
	})
	event.recipes.extendedcrafting.shaped_table(Item.of(CR('chromatic_compound'), 2), [
		'AA',
		'AA'
	], {
		A: AE2('magenta_paint_ball')
	})
	
	//copper door
	event.stonecutting(CR("copper_door"), MI_D("#doors_copper"))
	
	//framed glass door
	removeRecipeByOutput(event, [
		CR("framed_glass_door"),
	])
    event.shaped(Item.of(CR("framed_glass_door"), 3), [
        'AA',
        'AA',
        'AA'
    ], {
        A: CR('framed_glass'),
    })
	event.stonecutting(CR("framed_glass_door"), MI_D("#doors_glass"))
	
	//blaze burner
	removeRecipeByOutput(event, [
		CR("empty_blaze_burner"),
	])
    event.shaped(CR("empty_blaze_burner"), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: F('#rods/iron'),
        B: MC('netherrack'),
    })
	
	//iron to zinc in first machines
    event.replaceInput({ id: CR("crafting/kinetics/chute") }, F("#plates/iron"), F("#plates/zinc"))
    event.replaceInput({ id: CR("crafting/kinetics/propeller") }, F("#plates/iron"), F("#plates/zinc"))
	
	//wrench
	removeRecipeByOutput(event, [
		CR("wrench"),
	])
	event.smithing(CR("wrench"), KJ("kinetic_mechanism"), FB('framed_wrench'), CR('cogwheel'))
	
	//casings
	let tweak_casing = (id, mats) => {
		event.remove({ output: id })
		event.shapeless(id, mats)
		event.recipes.create.item_application(id, mats)
	}

	tweak_casing(CR('andesite_casing'), [F('#stripped_logs'), CR('andesite_alloy')])
	tweak_casing(CR('copper_casing'), [F('#stripped_logs'), F('#plates/copper')])
	tweak_casing(CR('brass_casing'), [F('#stripped_logs'), F('#plates/brass')])
	tweak_casing(KJ('inductive_casing'), [F('#stripped_logs'), F('#ingots/ender_ingot')])
	tweak_casing(KJ('fluix_casing'), [F('#stripped_logs'), F('#gems/fluix')])
	tweak_casing(KJ('abstruse_casing'), [F('#stripped_logs'), KJ('missingno')])
	tweak_casing(KJ('integrated_casing'), [F('#stripped_logs'), IF('plastic')])
	tweak_casing(KJ('embedded_casing'), [F('#stripped_logs'), F('#dusts/flux')])
	tweak_casing(KJ('portable_casing'), [F('#stripped_logs'), KJ("ender_star_fragment")])
	tweak_casing(KJ('electric_casing'), [F('#stripped_logs'), KJ("flux_star_fragment")])
	
	//electron tube
	removeRecipeByOutput(event, [
		CR("electron_tube"),
	])
	event.recipes.create.filling(Item.of(CR("electron_tube"), 1), [CR('polished_rose_quartz'), Fluid.of(TCT('molten_iron'), 10)])
	event.custom({
		type: AE2_A("reaction"),
		energy: 1000000,
	    fluid: {
			fluidStack: {
				Amount: 320,
				FluidName: TCT("molten_iron")
			}
		},
		input_items: [
			{
				amount: 64,
				ingredient: {
					item: CR("polished_rose_quartz")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: CR("electron_tube"),
		}
	})
	
	//rose quartz
	removeRecipeByOutput(event, [
		CR("rose_quartz"),
	])
	event.shapeless(CR('rose_quartz'), [[MC('quartz'), AE2('certus_quartz_crystal'), AE2('charged_certus_quartz_crystal')], Item.of(MC('redstone'), 4)])
	
	//polished rose quartz
	removeRecipeByOutput(event, [
		CR("polished_rose_quartz"),
	])
	event.recipes.create.mixing(CR('polished_rose_quartz'), [Fluid.of(KJ("liquid_redstone"), 250), [AE2('certus_quartz_crystal'), MC('quartz')]])
	event.custom({
		type: AE2_A("reaction"),
		energy: 1000000,
	    fluid: {
			fluidStack: {
				Amount: 8000,
				FluidName: KJ("liquid_redstone")
			}
		},
		input_items: [
			{
				amount: 64,
				ingredient: {
					item: AE2("certus_quartz_crystal")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: CR("polished_rose_quartz"),
		}
	})
	event.custom({
		type: AE2_A("reaction"),
		energy: 1000000,
	    fluid: {
			fluidStack: {
				Amount: 8000,
				FluidName: KJ("liquid_redstone")
			}
		},
		input_items: [
			{
				amount: 64,
				ingredient: {
					item: MC("quartz")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: CR("polished_rose_quartz"),
		}
	})
	
	//brass to golden hand
    event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, F("#plates/brass"), F("#plates/gold"))
	
	//extended crafting recipes for only mech crafted stuff
	event.recipes.extendedcrafting.shaped_table(CR('extendo_grip'), [
		' A ',
		' B ',
		'CCC',
		'CCC',
		' D ',
	], {
		A: F('#ingots/brass'),
		B: CR("precision_mechanism"),
		C: MC("stick"),
		D: CR("brass_hand"),
	})
	event.recipes.extendedcrafting.shaped_table(CR('potato_cannon'), [
		'ABCCC',
		'DD   ',
	], {
		A: CR('andesite_alloy'),
		B: CR("precision_mechanism"),
		C: CR("fluid_pipe"),
		D: F("#ingots/copper"),
	})
	event.recipes.extendedcrafting.shaped_table(CR('wand_of_symmetry'), [
		' A ',
		'ABA',
		' C ',
		' D ',
		' E ',
	], {
		A: F('#glass'),
		B: MC("ender_pearl"),
		C: CR("precision_mechanism"),
		D: F("#ingots/brass"),
		E: MC("obsidian"),
	})
	
	//crushing wheel
	removeRecipeByID(event, [
		CR("mechanical_crafting/crushing_wheel"),
	])
	event.recipes.create.mechanical_crafting(Item.of(CR('crushing_wheel'), 2), [
		' AAA ',
		'AABAA',
		'ABBBA',
		'AABAA',
		' AAA '
	], {
		A: F('#cobblestone'),
		B: MC('stick'),
	})
	event.recipes.extendedcrafting.shaped_table(Item.of(CR('crushing_wheel'), 2), [
		' AAA ',
		'AABAA',
		'ABBBA',
		'AABAA',
		' AAA '
	], {
		A: F('#cobblestone'),
		B: MC('stick'),
	})

	//flour
	removeRecipeByID(event, [
		CR("milling/wheat"),
	])
	event.recipes.create.milling([Item.of(CR('wheat_flour'), 2)], F('#flour_plants')).processingTime(processingTimesDefault.milling)
	
	//sheets compat AA
	const sheets = ["iron", "brass", "copper"]
	sheets.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, CR(`${sheet}_sheet`), F(`#ingots/${sheet}`))
	})
	customRecipes.ad_astra.compressing(event, CR(`golden_sheet`), F(`#ingots/gold`))
	
	//blaze burner from head
	event.shaped(CR("blaze_burner"), [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: CR('empty_blaze_burner'),
        B: MC('soul_sand'),
        C: TCT('blaze_head'),
    })
	
	//speedometer from stressometer
	event.shapeless(CR('speedometer'), [CR("stressometer")])
	
	//packager from unpackager
	event.shapeless(CR('packager'), [CR("repackager")])
	
	//item vault based
	let item_vault_based = (id, other_ingredient, removeId) => {
		event.remove({ id: removeId })
		event.smithing(Item.of(id, 1), KJ('kinetic_mechanism'), CR('item_vault'), other_ingredient)
		event.recipes.create.mechanical_crafting(Item.of(id, 1), "AB", { A: CR('item_vault'), B: other_ingredient })
		event.recipes.extendedcrafting.shapeless_table(Item.of(id, 1), [CR('item_vault'), other_ingredient])
	}
	
	item_vault_based(CR("stock_link"), CR("redstone_link"), CR("crafting/logistics/stock_link"))
	item_vault_based(CR("redstone_requester"), CR("stock_link"), CR("crafting/logistics/redstone_requester"))
	
	//cardboard box from create cardboard
	event.shapeless(Item.of(CR("cardboard"), 2), [M("cardboard_box")])
})