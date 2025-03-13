// priority: 0

ServerEvents.recipes((event) => {
	event.shaped(KJ('saw_blade'), [
		'NPN',
		'PLP',
		'NPN'
	], {
		N: F('#nuggets/iron'),
		P: F('#plates/iron'),
		L: F('#gears/iron')
	})

    event.shaped(KJ('drill_head'), [
		' NN',
		'PBN',
		'LP '
	], {
		N: F('#nuggets/iron'),
		P: F('#plates/iron'),
		L: F('#gears/iron'),
		B: F('#storage_blocks/iron')
	})

	event.shaped(Item.of(KJ('black_psiblock'), 6), [
		'AAA',
		'BBB',
		'AAA'
	], {
		A: MC('black_concrete'),
		B: PRE('mobius_fuel')
	})

	event.shaped(Item.of(KJ('white_psiblock'), 6), [
		'AAA',
		'BBB',
		'AAA'
	], {
		A: MC('white_concrete'),
		B: PRE('aeternalis_fuel')
	})



	const wafers = [
		{
            output: Item.of(AE2('cell_component_1k'), 9),
            inputs: KJ('wafer_component_1k')
        },
        {
            output: Item.of(AE2('cell_component_4k'), 9),
            inputs: KJ('wafer_component_4k')
        },
        {
            output: Item.of(AE2('cell_component_16k'), 9),
            inputs: KJ('wafer_component_16k')
        },
        {
            output: Item.of(AE2('cell_component_64k'), 9),
            inputs: KJ('wafer_component_64k')
        },
        {
            output: Item.of(AE2('cell_component_256k'), 9),
            inputs: KJ('wafer_component_256k')
        },
        {
            output: Item.of(MGC('cell_component_1m'), 9),
            inputs: KJ('wafer_component_1m')
        },
        {
            output: Item.of(MGC('cell_component_4m'), 9),
            inputs: KJ('wafer_component_4m')
        },
        {
            output: Item.of(MGC('cell_component_16m'), 9),
            inputs: KJ('wafer_component_16m')
        },
        {
            output: Item.of(MGC('cell_component_64m'), 9),
            inputs: KJ('wafer_component_64m')
        },
        {
            output: Item.of(MGC('cell_component_256m'), 9),
            inputs: KJ('wafer_component_256m')
        },
        {
            output: Item.of(AF('core_1k'), 9),
            inputs: KJ('core_1k_wafer')
        },
        {
            output: Item.of(AF('core_4k'), 9),
            inputs: KJ('core_4k_wafer')
        },
        {
            output: Item.of(AF('core_16k'), 9),
            inputs: KJ('core_16k_wafer')
        },
        {
            output: Item.of(AF('core_64k'), 9),
            inputs: KJ('core_64k_wafer')
        },
        {
            output: Item.of(AF('core_256k'), 9),
            inputs: KJ('core_256k_wafer')
        },
		{
            output: Item.of(AE2('logic_processor'), 9),
            inputs: KJ('logic_processor_wafer')
        },
        {
            output: Item.of(AE2('engineering_processor'), 9),
            inputs: KJ('engineering_processor_wafer')
        },
        {
            output: Item.of(AE2('calculation_processor'), 9),
            inputs: KJ('calculation_processor_wafer')
        },
        {
            output: Item.of(AF('energy_processor'), 9),
            inputs: KJ('energy_processor_wafer')
        },
        {
            output: Item.of(MGC('accumulation_processor'), 9),
            inputs: KJ('accumulation_processor_wafer')
        },
        {
            output: Item.of(AE2_A('quantum_processor'), 9),
            inputs: KJ('quantum_processor_wafer')
        },
        {
            output: Item.of(AE2('printed_silicon'), 9),
            inputs: KJ('printed_silicon_wafer')
        },
        {
            output: Item.of(AE2('printed_calculation_processor'), 9),
            inputs: KJ('printed_calculation_processor_wafer')
        },
        {
            output: Item.of(AE2('printed_engineering_processor'), 9),
            inputs: KJ('printed_engineering_processor_wafer')
        },
        {
            output: Item.of(AE2('printed_logic_processor'), 9),
            inputs: KJ('printed_logic_processor_wafer')
        },
        {
            output: Item.of(AF('printed_energy_processor'), 9),
            inputs: KJ('printed_energy_processor_wafer')
        },
        {
            output: Item.of(MGC('printed_accumulation_processor'), 9),
            inputs: KJ('printed_accumulation_processor_wafer')
        },
        {
            output: Item.of(AE2_A('printed_quantum_processor'), 9),
            inputs: KJ('printed_quantum_processor_wafer')
        },
        {
            output: Item.of(AE2('silicon_press'), 9),
            inputs: KJ('silicon_press_wafer')
        },
        {
            output: Item.of(AE2('calculation_processor_press'), 9),
            inputs: KJ('calculation_processor_press_wafer')
        },
        {
            output: Item.of(AE2('engineering_processor_press'), 9),
            inputs: KJ('engineering_processor_press_wafer')
        },
        {
            output: Item.of(AE2('logic_processor_press'), 9),
            inputs: KJ('logic_processor_press_wafer')
        },
        {
            output: Item.of(AF('energy_processor_press'), 9),
            inputs: KJ('energy_processor_press_wafer')
        },
        {
            output: Item.of(MGC('accumulation_processor_press'), 9),
            inputs: KJ('accumulation_processor_press_wafer')
        },
        {
            output: Item.of(AE2_A('quantum_processor_press'), 9),
            inputs: KJ('quantum_processor_press_wafer')
        },
        {
            output: Item.of(KJ('ender_star_fragment'), 9),
            inputs: EC('ender_star')
        }, //not really a wafer, but recipe suits well
        {
            output: Item.of(KJ('flux_star_fragment'), 9),
            inputs: EC('flux_star')
        }, //not really a wafer, but recipe suits well
        {
            output: Item.of(KJ('broken_calculation_processor'), 9),
            inputs: KJ('broken_calculation_processor_wafer')
        },
        {
            output: Item.of(KJ('broken_logic_processor'), 9),
            inputs: KJ('broken_logic_processor_wafer')
        },
        {
            output: Item.of(KJ('broken_engineering_processor'), 9),
            inputs: KJ('broken_engineering_processor_wafer')
        },
        {
            output: Item.of(KJ('broken_energy_processor'), 9),
            inputs: KJ('broken_energy_processor_wafer')
        },
        {
            output: Item.of(KJ('broken_accumulation_processor'), 9),
            inputs: KJ('broken_accumulation_processor_wafer')
        },
        {
            output: Item.of(KJ('broken_quantum_processor'), 9),
            inputs: KJ('broken_quantum_processor_wafer')
        },
	]
	wafers.forEach((wafer) => {
        event.shapeless(wafer.inputs, wafer.output)
        event.shapeless(wafer.output, wafer.inputs);
    });



    //witherpoof blocks
	 event.shaped(KJ("witherproof_block"), [
		' A ',
		'ABA',
		' A ',
	], {
		A: TCT("necrotic_bone"),
		B: CP("obsidian_2"),
	})

    event.shaped(Item.of(KJ("witherproof_bricks"), 4), [
		'BB ',
		'BB '
	], {
		B: KJ("witherproof_block"),
	})
	
	
	
	//summoning doll
	customRecipes.ae2.transform.fluid(event, `1x ${KJ("summoning_doll")}`, [
		EXD("porcelain_clay_ball"),
		F("#ingots/iron"),
	], F("witch_water"))
	customRecipes.ae2.transform.fluid(event, `2x ${KJ("summoning_doll")}`, [
		EXD("porcelain_clay_ball"),
		F("#ingots/gold"),
	], F("witch_water"))
	customRecipes.ae2.transform.fluid(event, `4x ${KJ("summoning_doll")}`, [
		EXD("porcelain_clay_ball"),
		F("#gems/diamond"),
	], F("witch_water"))
	customRecipes.ae2.transform.fluid(event, `6x ${KJ("summoning_doll")}`, [
		EXD("porcelain_clay_ball"),
		F("#gems/emerald"),
	], F("witch_water"))
	
	
	
	//tools
	
	//saws
	event.shaped(KJ('flint_saw'), [
		'ABB',
		'ACB'
	], {
		A: MC('stick'),
		B: CB_M('stone_rod'),
		C: MC('flint'),
	})
	event.shaped(KJ('iron_saw'), [
		'ABB',
		'ACB'
	], {
		A: MC('stick'),
		B: CB_M('stone_rod'),
		C: F('#ingots/iron'),
	})
	event.shaped(KJ('diamond_saw'), [
		'ABB',
		'ACB'
	], {
		A: MC('stick'),
		B: CB_M('stone_rod'),
		C: F('#gems/diamond'),
	})
	
	//chromatic resonator
	event.shaped(KJ('chromatic_resonator'), [
		' R ',
		'L S',
		'LL '
	], {
		R: F('#ingots/red_alloy'),
		L: F('#ingots/cobalt'),
		S: EC('crystaltine_ingot')
	})
	
	//calculator
	event.shaped(KJ('calculator'), [
		' A ',
		'BCD',
	], {
		A: AF("fe_cell_housing"),
		B: AE2('calculation_processor'),
		C: AE2('logic_processor'),
		D: AE2('engineering_processor'),
	})
	
	//charged calculator
	event.recipes.extendedcrafting.shapeless_flux_crafter(KJ("charged_calculator"), [KJ("calculator")], 400000).powerRate(400)
	


    //unstable tools
    event.recipes.createMechanicalCrafting(KJ("unstable_screwdriver"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: PR_C('screwdriver'),
        C: AE2('singularity'),
    }).id(KJ(`mechanical_crafting/unstable_screwdriver`))

    event.recipes.extendedcrafting.shaped_table(KJ("unstable_screwdriver"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: PR_C('screwdriver'),
        C: AE2('singularity'),
    }).id(KJ(`extended_crafting/unstable_screwdriver`))

    event.recipes.createMechanicalCrafting(KJ("unstable_chromatic_resonator"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: KJ('chromatic_resonator'),
        C: AE2('singularity'),
    }).id(KJ(`mechanical_crafting/unstable_chromatic_resonator`))

    event.recipes.extendedcrafting.shaped_table(KJ("unstable_chromatic_resonator"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: KJ('chromatic_resonator'),
        C: AE2('singularity'),
    }).id(KJ(`extended_crafting/unstable_chromatic_resonator`))

    event.recipes.createMechanicalCrafting(KJ("unstable_saw"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: KJ('diamond_saw'),
        C: AE2('singularity'),
    }).id(KJ(`mechanical_crafting/unstable_saw`))

    event.recipes.extendedcrafting.shaped_table(KJ("unstable_saw"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: KJ('diamond_saw'),
        C: AE2('singularity'),
    }).id(KJ(`extended_crafting/unstable_saw`))

    event.recipes.createMechanicalCrafting(KJ("unstable_charged_calculator"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: KJ('charged_calculator'),
        C: AE2('singularity'),
    }).id(KJ(`mechanical_crafting/unstable_charged_calculator`))

    event.recipes.extendedcrafting.shaped_table(KJ("unstable_charged_calculator"), [
        'CCCCC',
        'CBBBC',
        'CBABC',
        'CBBBC',
        'CCCCC',
    ], {
        A: Item.of(MU("unstable_ingot")),
        B: KJ('charged_calculator'),
        C: AE2('singularity'),
    }).id(KJ(`extended_crafting/unstable_charged_calculator`))
	
	
	
	//coke
	event.smelting(KJ('coke'), MC('#coals')).xp(0.1).cookingTime(200)
	event.blasting(KJ('coke'), MC('#coals')).xp(0.1).cookingTime(100)
	
	
	
	//algal blend chain
	event.smelting(KJ('algal_brick'), KJ('algal_blend')).xp(0).cookingTime(200)

	event.shaped(Item.of(KJ('algal_blend'), 2), [
		'SS',
		'AA'
	], {
		A: MC('clay_ball'),
		S: MC('kelp')
	})
	event.shaped(Item.of(KJ('algal_blend'), 2), [
		'AA',
		'SS'
	], {
		A: MC('clay_ball'),
		S: MC('kelp')
	})

	event.recipes.create.mixing(Item.of(KJ('algal_blend'), 2), [ MC('clay_ball'), MC('kelp') ])
	event.recipes.mekanismCombining(Item.of(KJ('algal_blend'), 6), MC('clay_ball'), MC('kelp'))
	event.recipes.mekanismCombining(Item.of(KJ('algal_blend'), 6), MC('kelp'), MC('clay_ball'))
	
	
	
	//polished coke chain
	event.recipes.create.mixing(Item.of(KJ('nourished_coke'), 1), [ F("#gems/coke"), Fluid.of(MC("water"), 250) ])
	event.custom({
		type: AE2_A("reaction"),
		energy: 1500000,
	    fluid: {
			fluidStack: {
				Amount: 4000,
				FluidName: MC("water")
			}
		},
		input_items: [
			{
				amount: 64,
				ingredient: {
					item: KJ("coke")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: KJ("nourished_coke"),
		}
	})
	event.recipes.mekanism.injecting(Item.of(KJ("nourished_coke"), 2), F("#gems/coke"), {gas: M("steam"), amount: 1})
	
	event.recipes.create.sandpaper_polishing(KJ('polished_coke'), KJ('nourished_coke'))
	event.recipes.mekanism.enriching(KJ('polished_coke'), KJ('nourished_coke'))
	
	
	
	//silicon compound chain
	event.recipes.create.splashing(KJ("sand_ball"), MC("sandstone"))
	
	let t = KJ('incomplete_coke_chunk')
	event.recipes.create.sequenced_assembly([
		KJ('coke_chunk'),
	], KJ('polished_coke'), [
		event.recipes.create.cutting(t, t),
		event.recipes.create.filling(t, [t, Fluid.of(MC("water"), 250)]),
	]).transitionalItem(t)
		.loops(2)
	event.recipes.mekanism.sawing(KJ('polished_coke'), Item.of(KJ('coke_chunk'), 2))
	
	event.recipes.create.emptying([KJ("rough_sand"), Fluid.of(KJ("fine_sand"), 500)], KJ("sand_ball"))
	customRecipes.create.sifting(event, [KJ("purified_sand")], KJ("rough_sand"), 6)
	event.recipes.create.compacting(KJ("silicon_compound"), [Fluid.of(KJ("fine_sand"), 500), KJ("purified_sand"), KJ("coke_chunk")])
	
	
	
	//preserved explosion
	event.custom({
		type: AE2_A("reaction"),
		energy: 1500000,
	    fluid: {
			fluidStack: {
				Amount: 16000,
				FluidName: MC("water")
			}
		},
		input_items: [
			{
				amount: 16,
				ingredient: {
					item: MC("tnt")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: KJ("preserved_explosion"),
		}
	})
	event.custom({
		type: AE2_A("reaction"),
		energy: 1500000,
	    fluid: {
			fluidStack: {
				Amount: 16000,
				FluidName: MC("water")
			}
		},
		input_items: [
			{
				amount: 32,
				ingredient: {
					item: AE2("tiny_tnt")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: KJ("preserved_explosion"),
		}
	})
	
	
	
	//ae2-type seeds
	event.stonecutting(Item.of(KJ('certus_seed'), 2), F('#gems/certus_quartz'))
	event.stonecutting(Item.of(KJ('quartz_seed'), 2), F('#gems/quartz'))
	event.stonecutting(Item.of(KJ('fluix_seed'), 2), F('#gems/fluix'))
	
	//grow ae2-type seeds
	let grow = (from, via, to) => {
		event.recipes.create.sequenced_assembly([to], from, [
			event.recipes.create.filling(via, [via, Fluid.of(MC("water"), 500)]),
		]).transitionalItem(via)
			.loops(4)
			.id(KJ(`${KJ()}/grow_ae2_seeds/${to.split(":")[1]}`))
	}

	grow(KJ("certus_seed"), KJ("certus_seed"), KJ('certus_seed_tiny'))
	grow(KJ("fluix_seed"), KJ("fluix_seed"), KJ('fluix_seed_tiny'))
	grow(KJ("quartz_seed"), KJ("quartz_seed"), KJ('quartz_seed_tiny'))

	grow(KJ("certus_seed_tiny"), KJ("certus_seed_tiny"), KJ('certus_seed_small'))
	grow(KJ("fluix_seed_tiny"), KJ("fluix_seed_tiny"), KJ('fluix_seed_small'))
	grow(KJ("quartz_seed_tiny"), KJ("quartz_seed_tiny"), KJ('quartz_seed_small'))

	grow(KJ("certus_seed_small"), KJ("certus_seed_small"), AE2('certus_quartz_crystal'))
	grow(KJ("fluix_seed_small"), KJ("fluix_seed_small"), AE2('fluix_crystal'))
	grow(KJ("quartz_seed_small"), KJ("quartz_seed_small"), MC('quartz'))
	
	const seedNames = [ 
		{ idName: "certus", crystalID: AE2("certus_quartz_crystal") },
		{ idName: "quartz", crystalID: MC("quartz") },
		{ idName: "fluix", crystalID: AE2("fluix_crystal") },
	]
	seedNames.forEach(seedObj => {
		event.recipes.mekanismEnriching(seedObj.crystalID, KJ(`${seedObj.idName}_seed`))
	})
	
	
	
	//sky solution
	event.recipes.create.mixing(Fluid.of(KJ("sky_solution"), 250), [Item.of(AE2('sky_dust'), 1), Fluid.of(MC('water'), 125)])
	event.custom({
		type: AE2_A("reaction"),
		energy: 1500000,
	    fluid: {
			fluidStack: {
				Amount: 4000,
				FluidName: MC("water")
			}
		},
		input_items: [
			{
				amount: 32,
				ingredient: {
					item: AE2("sky_dust")
				}
			},
		],
		output: {
			"#": 8000,
			"#c": "ae2:f",
			id: KJ("sky_solution"),
		}
	})
	
	
	
	//liquid redstone from charged certus
	event.recipes.create.mixing([
		AE2('certus_quartz_crystal'),
		Fluid.of(KJ("liquid_redstone"), 250),
	], [
		AE2('charged_certus_quartz_crystal'),
		Fluid.of(KJ("sky_solution"), 250),
	]).id(KJ(`${KJ()}/liquid_redstone_from_charged_certus`))
	event.custom({
		type: AE2_A("reaction"),
		energy: 1500000,
	    fluid: {
			fluidStack: {
				Amount: 8000,
				FluidName: KJ("sky_solution")
			}
		},
		input_items: [
			{
				amount: 32,
				ingredient: {
					item: AE2("charged_certus_quartz_crystal")
				}
			},
		],
		output: {
			"#": 8000,
			"#c": "ae2:f",
			id: KJ("liquid_redstone"),
		}
	})
	
	
	
	//dye entangled singularity
	dyes.forEach(dye => {
		event.recipes.create.mixing(KJ("dye_entangled_singularity"), [dye, AE2('quantum_entangled_singularity')])
		event.recipes.mekanism.combining(KJ("dye_entangled_singularity"), AE2('quantum_entangled_singularity'), dye)
	})
	colours.forEach(color => {
		customRecipes.mekanism.painting(event, KJ("dye_entangled_singularity"), AE2("quantum_entangled_singularity"), color)
	})
	
	
	
	//toxic waste liquid fuel
	customRecipes.create.liquidFuel(event, F("waste"), 1000, true)
	
	
	
	//custom infusions
	customRecipes.mekanism.infusion_conversion(event, KJ("waste"), 10, AE2("magenta_paint_ball"))
	customRecipes.mekanism.infusion_conversion(event, KJ("waste"), 20, AE2("blue_paint_ball"))
	customRecipes.mekanism.infusion_conversion(event, KJ("waste"), 30, AE2("green_paint_ball"))
	customRecipes.mekanism.infusion_conversion(event, KJ("waste"), 40, AE2("yellow_paint_ball"))
	customRecipes.mekanism.infusion_conversion(event, KJ("waste"), 50, AE2("red_paint_ball"))
	customRecipes.mekanism.infusion_conversion(event, KJ("waste"), 80, KJ("dye_entangled_singularity"))

	customRecipes.mekanism.infusion_conversion(event, KJ("explosion_essence"), 80, KJ("preserved_explosion"))
	
	
	
	//custom steel in fission reactor
	customRecipes.mekanism.fission(event, KJ("gaseous_iron_compound"), 1, KJ("gaseous_steel_compound"), 1, 0)
	
	
	
	//gaseous molten metals
	customRecipes.mekanism.condensentrating(event, TCT("molten_iron"), 1, KJ("gaseous_iron_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_gold"), 1, KJ("gaseous_gold_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_copper"), 1, KJ("gaseous_copper_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_zinc"), 1, KJ("gaseous_zinc_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_brass"), 1, KJ("gaseous_brass_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_cobalt"), 1, KJ("gaseous_cobalt_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_steel"), 1, KJ("gaseous_steel_compound"), 1)
	customRecipes.mekanism.condensentrating(event, KJ("molten_ender_alloy"), 1, KJ("gaseous_ender_alloy_compound"), 1)
	customRecipes.mekanism.condensentrating(event, KJ("molten_certus"), 1, KJ("gaseous_certus_compound"), 1)
	customRecipes.mekanism.condensentrating(event, TCT("molten_diamond"), 1, KJ("gaseous_diamond_compound"), 1)
	
	
	
	//custom metal/gem melting in chemical oxidizer
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/iron"), KJ("gaseous_iron_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/iron"), KJ("gaseous_iron_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/iron"), KJ("gaseous_iron_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/gold"), KJ("gaseous_gold_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/gold"), KJ("gaseous_gold_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/gold"), KJ("gaseous_gold_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/copper"), KJ("gaseous_copper_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/copper"), KJ("gaseous_copper_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/copper"), KJ("gaseous_copper_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/zinc"), KJ("gaseous_zinc_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/zinc"), KJ("gaseous_zinc_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/zinc"), KJ("gaseous_zinc_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/brass"), KJ("gaseous_brass_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/brass"), KJ("gaseous_brass_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/brass"), KJ("gaseous_brass_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/cobalt"), KJ("gaseous_cobalt_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/cobalt"), KJ("gaseous_cobalt_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/cobalt"), KJ("gaseous_cobalt_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/steel"), KJ("gaseous_steel_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/steel"), KJ("gaseous_steel_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/steel"), KJ("gaseous_steel_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/ender_ingot"), KJ("gaseous_ender_alloy_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#ingots/ender_ingot"), KJ("gaseous_ender_alloy_compound"), 90)
	customRecipes.mekanism.oxidizing(event, F("#nuggets/ender_ingot"), KJ("gaseous_ender_alloy_compound"), 10)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/certus_quartz"), KJ("gaseous_certus_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#gems/certus_quartz"), KJ("gaseous_certus_compound"), 90)
	
	customRecipes.mekanism.oxidizing(event, F("#storage_blocks/diamond"), KJ("gaseous_diamond_compound"), 810)
	customRecipes.mekanism.oxidizing(event, F("#gems/diamond"), KJ("gaseous_diamond_compound"), 90)
	
	
	
	//radiant sheet
	event.recipes.create.pressing(KJ(`radiant_sheet`), CR("refined_radiance"))
	customRecipes.ad_astra.compressing(event, KJ(`radiant_sheet`), CR("refined_radiance"))
	
	//radiant coil
	event.recipes.create.mechanical_crafting(KJ("radiant_coil"), "A", { A: KJ('radiant_sheet') })
	customRecipes.create.ifiniDeploying(event, KJ("radiant_coil"), KJ('radiant_sheet'), MC("nether_star"))
	
	
	
	//printed silicon wafer
	customRecipes.create.ifiniDeploying(event, KJ("printed_silicon_wafer"), AE2_E("silicon_block"), KJ("silicon_press_wafer"))
	
	
	
	//molten certus
	event.recipes.tconstruct.melting(Fluid.of(KJ("molten_certus"), 90), AE2("certus_quartz_crystal"), 1825, 40)
	event.recipes.tconstruct.casting_table(AE2("certus_quartz_crystal"), Fluid.of(KJ("molten_certus"), 90), TCT("gem_cast"), false, 20)
	
	
	
	//molten ender alloy
	event.recipes.tconstruct.alloy(Fluid.of(KJ("molten_ender_alloy"), 20), [Fluid.of(TCT("molten_iron"), 10), Fluid.of(TCT("molten_ender"), 10)], 1429)
	
	
	
	//brass casts
	const customCastsBrass = ["three", "eight", "plus", "minus", "multiply", "divide", "factorial", "power", "remainder", "square_root", "equal"]
	customCastsBrass.forEach(cast => {
		event.stonecutting(KJ(`${cast}_cast`), F('#plates/brass'))
	})
	const customCastsGold = ["ball"]
	customCastsGold.forEach(cast => {
		event.recipes.tconstruct.casting_table(KJ(`${cast}_cast`), Fluid.of(TCT("molten_gold"), 90), F("#balls"), true, 57, true)
	})
	
	
	
	//other math operators
	event.shapeless(KJ("greater_than"), [KJ("power")])
	event.shapeless(KJ("less_than"), [KJ("greater_than")])
	event.shapeless(KJ("power"), [KJ("less_than")])
	event.recipes.create.deploying(KJ("equality"), [KJ("equal"), KJ("equal")])
	event.recipes.create.deploying(KJ("non_equality"), [KJ("factorial"), KJ("equal")])
	event.recipes.create.deploying(KJ("non_equality"), [KJ("equal"), KJ("factorial")])
	event.recipes.create.deploying(KJ("greater_or_equal"), [KJ("greater_than"), KJ("equal")])
	event.recipes.create.deploying(KJ("greater_or_equal"), [KJ("equal"), KJ("greater_than")])
	event.recipes.create.deploying(KJ("less_or_equal"), [KJ("less_than"), KJ("equal")])
	event.recipes.create.deploying(KJ("less_or_equal"), [KJ("equal"), KJ("less_than")])
	
	event.recipes.create.deploying(KJ("false"), [KJ("true"), KJ("factorial")])
	event.recipes.create.deploying(KJ("false"), [KJ("factorial"), KJ("true")])
	
	event.recipes.create.deploying(KJ("true"), [KJ("factorial"), KJ("false")])
	event.recipes.create.deploying(KJ("true"), [KJ("false"), KJ("factorial")])
	
	
	
	//numbers
	let numbers = ["three", "eight", "plus", "minus", "multiply", "divide", "factorial", "power", "remainder", "square_root", "equal"]
	numbers.forEach(number => {
		event.recipes.tconstruct.casting_table(KJ(number), Fluid.of(KJ("raw_logic"), 25), KJ(`${number}_cast`), false, 10)
	})

	let meltNumber = (id, out, outAmount) => {
		event.recipes.tconstruct.melting(Fluid.of(out, outAmount), id, 2048, 20)
	}

	let alloyAmount = 25
	let outAmount = 200
	event.recipes.tconstruct.alloy(Fluid.of(KJ("matrix"), outAmount), [
		Fluid.of(KJ("number_0"), alloyAmount), Fluid.of(KJ("number_1"), alloyAmount),
		Fluid.of(KJ("number_2"), alloyAmount), Fluid.of(KJ("number_3"), alloyAmount),
		Fluid.of(KJ("number_4"), alloyAmount), Fluid.of(KJ("number_5"), alloyAmount),
		Fluid.of(KJ("number_6"), alloyAmount), Fluid.of(KJ("number_7"), alloyAmount),
		Fluid.of(KJ("number_8"), alloyAmount), Fluid.of(KJ("number_9"), alloyAmount),
		Fluid.of(KJ("truthy"), alloyAmount), Fluid.of(KJ("falsy"), alloyAmount),
	], 2048)

	meltNumber(KJ("calculation_mechanism"), KJ("raw_logic"), 200)
	meltNumber(KJ("zero"), KJ("number_0"), 25)
	meltNumber(KJ("one"), KJ("number_1"), 25)
	meltNumber(KJ("two"), KJ("number_2"), 25)
	meltNumber(KJ("three"), KJ("number_3"), 25)
	meltNumber(KJ("four"), KJ("number_4"), 25)
	meltNumber(KJ("five"), KJ("number_5"), 25)
	meltNumber(KJ("six"), KJ("number_6"), 25)
	meltNumber(KJ("seven"), KJ("number_7"), 25)
	meltNumber(KJ("eight"), KJ("number_8"), 25)
	meltNumber(KJ("nine"), KJ("number_9"), 25)
	meltNumber(KJ("true"), KJ("truthy"), 25)
	meltNumber(KJ("false"), KJ("falsy"), 25)

	event.recipes.tconstruct.casting_basin(KJ("computation_matrix"), Fluid.of(KJ("matrix"), 50), KJ("calculation_mechanism"), false, 20)
	event.custom({
		type: AE2_A("reaction"),
		energy: 1500000,
	    fluid: {
			fluidStack: {
				Amount: 1600,
				FluidName: KJ("matrix")
			}
		},
		input_items: [
			{
				amount: 16,
				ingredient: {
					item: KJ("calculation_mechanism")
				}
			},
		],
		output: {
			"#": 64,
			"#c": "ae2:i",
			id: KJ("computation_matrix"),
		}
	})

	let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	let ops = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => b == 0 ? 'error' : a / b, (a, b) => Math.pow(a, b), (a, b) => a % b]
	let opNames = ['plus', 'minus', 'multiply', 'divide', 'power', 'remainder']

	//basic math ops
	for (var a = 0; a < 10; a++) {
		for (var b = 0; b < 10; b++) {
			for (var op = 0; op < ops.length; op++) {

				let result = ops[op](a, b)
				var output;

				if (result == 'error')
					output = KJ('missingno')
				else if (result < 0)
					continue
				else if (result > 9)
					continue
				else if (result % 1 != 0)
					continue
				else
					output = KJ(nums[result])

				event.custom({
					"type": CR("mechanical_crafting"),
					"pattern": [
						"AOB"
					],
					"key": {
						"A": {
							"item": KJ(nums[a])
						},
						"O": {
							"item": KJ(opNames[op])
						},
						"B": {
							"item": KJ(nums[b])
						}
					},
					"result": {
						"item": output
					},
					"acceptMirrored": false
				})
				event.recipes.extendedcrafting.shaped_table(output, ["AOB"], { A: KJ(nums[a]), O: KJ(opNames[op]), B: KJ(nums[b]) })
			}
		}
	}
	
	let comps = [(a, b) => a == b, (a, b) => a != b, (a, b) => a > b, (a, b) => a < b, (a, b) => a >= b, (a, b) => a <= b]
	let compNames = ['equality', 'non_equality', 'greater_than', 'less_than', 'greater_or_equal', 'less_or_equal']
	
	//comparison math ops
	for (var a = 0; a < 10; a++) {
		for (var b = 0; b < 10; b++) {
			for (var op = 0; op < comps.length; op++) {

				let result = `${comps[op](a, b)}`
				var output = KJ(result);

				event.custom({
					"type": CR("mechanical_crafting"),
					"pattern": [
						"AOB"
					],
					"key": {
						"A": {
							"item": KJ(nums[a])
						},
						"O": {
							"item": KJ(compNames[op])
						},
						"B": {
							"item": KJ(nums[b])
						}
					},
					"result": {
						"item": output
					},
					"acceptMirrored": false
				})
				event.recipes.extendedcrafting.shaped_table(output, ["AOB"], { A: KJ(nums[a]), O: KJ(compNames[op]), B: KJ(nums[b]) })
			}
		}
	}
	
	//fibonacci sequence with calculator
	event.recipes.create.deploying(KJ("one"), [KJ("zero"), F("#tools/calculators")])
	event.recipes.create.deploying(KJ("two"), [KJ("one"), F("#tools/calculators")])
	event.recipes.create.deploying(KJ("three"), [KJ("two"), F("#tools/calculators")])
	event.recipes.create.deploying(KJ("five"), [KJ("three"), F("#tools/calculators")])
	event.recipes.create.deploying(KJ("eight"), [KJ("five"), F("#tools/calculators")])
	
	//factorial
	event.recipes.create.deploying(KJ("one"), [KJ("zero"), KJ("factorial")])
	event.recipes.create.deploying(KJ("one"), [KJ("one"), KJ("factorial")])
	event.recipes.create.deploying(KJ("two"), [KJ("two"), KJ("factorial")])
	event.recipes.create.deploying(KJ("six"), [KJ("three"), KJ("factorial")])
	
	//square root
	event.recipes.create.deploying(KJ("zero"), [KJ("zero"), KJ("square_root")])
	event.recipes.create.deploying(KJ("one"), [KJ("one"), KJ("square_root")])
	event.recipes.create.deploying(KJ("two"), [KJ("four"), KJ("square_root")])
	event.recipes.create.deploying(KJ("three"), [KJ("nine"), KJ("square_root")])
	
	//COUNT NUMBERS IN JSFIDDLE FORMULAS
/* const mechanismCost = 200,
perCast = 25,
eachLiquidNumberAmountForAlloy = 25,
alloyOutcomeFromNumbers = 200,
matrixBlockCost = 100,
castsForNumber = {
 zero: 3, //8-8
 one: 3, //8/8
 two: 5, //6/3
 three: 1,
 four: 5, //3+1
 five: 3, //8-3
 six: 3, //3+3
 seven: 5, //8-1
 eight: 1,
 nine: 3, //3*3
 },
 costOfNumber = {
 zero: castsForNumber.zero * perCast,
 one: castsForNumber.one * perCast,
 two: castsForNumber.two * perCast,
 three: castsForNumber.three * perCast,
 four: castsForNumber.four * perCast,
 five: castsForNumber.five * perCast,
 six: castsForNumber.six * perCast,
 seven: castsForNumber.seven * perCast,
 eight: castsForNumber.eight * perCast,
 nine: castsForNumber.nine * perCast,
 },
 unprocessedLogicToMakeOneOfEachNumbers = Object.values(costOfNumber).reduce((acc, curr) => acc + curr), //64

 numForAlloyPortion = eachLiquidNumberAmountForAlloy / perCast,
 numForMatrix = numForAlloyPortion * (matrixBlockCost / alloyOutcomeFromNumbers),
 numForAbstruse = numForMatrix * 2,
 numForPity = numForAbstruse * 8,
 
 mechForAlloyPortion = (unprocessedLogicToMakeOneOfEachNumbers * numForAlloyPortion) / mechanismCost,
 mechForMatrix = mechForAlloyPortion * (matrixBlockCost / alloyOutcomeFromNumbers),
 mechForAbstruse = mechForMatrix * 2,
 mechForPity = mechForAbstruse * 8,

 castsForAlloy = Object.values(castsForNumber).reduce((acc, curr) => acc + curr) * numForAlloyPortion,
 castsForMatrix = castsForAlloy * (matrixBlockCost / alloyOutcomeFromNumbers),
 castsForAbstruse = castsForMatrix * 2,
 castsForPity = castsForAbstruse * 8



 console.log(`[mechanisms] alloy ${alloyOutcomeFromNumbers}mB: ${mechForAlloyPortion}, matrix: ${mechForMatrix}, abstruse: ${mechForAbstruse}, pity: ${mechForPity}`)
 console.log(`[numbers] alloy ${alloyOutcomeFromNumbers}mB: ${numForAlloyPortion}, matrix: ${numForMatrix}, abstruse: ${numForAbstruse}, pity: ${numForPity}`)
 console.log(`[casts] alloy ${alloyOutcomeFromNumbers}mB: ${castsForAlloy}, matrix: ${castsForMatrix}, abstruse: ${castsForAbstruse}, pity: ${castsForPity}`)
 */
	
	
	//ether gem
	customRecipes.industrialforegoing.dissolution(event, KJ(`ether_gem`), [MC("glass_pane")], IF("ether_gas"), 90, 20)
	event.custom({
		type: M('crystallizing'),
		chemicalType: 'gas',
		input: { amount: 10, gas: KJ("depleted_ether_gas") },
		output: KJ(`ether_gem`),
	})


	//universe piece
	event.recipes.mekanism.nucleosynthesizing(KJ('the_ultimate_matter'), `1x ${M("antimatter")}`, KJ('universe_piece'), 1)
	event.recipes.mekanism.nucleosynthesizing(PREXP('fading_matter'), `2x ${M("antimatter")}`, KJ('universe_piece'), 2)
	event.recipes.mekanism.nucleosynthesizing(PREXP('white_matter'), `3x ${M("antimatter")}`, KJ('universe_piece'), 3)
	event.recipes.mekanism.nucleosynthesizing(PREXP('orange_matter'), `4x ${M("antimatter")}`, KJ('universe_piece'), 4)
	event.recipes.mekanism.nucleosynthesizing(PREXP('yellow_matter'), `5x ${M("antimatter")}`, KJ('universe_piece'), 5)
	event.recipes.mekanism.nucleosynthesizing(PREXP('lime_matter'), `6x ${M("antimatter")}`, KJ('universe_piece'), 6)
	event.recipes.mekanism.nucleosynthesizing(PREXP('green_matter'), `7x ${M("antimatter")}`, KJ('universe_piece'), 7)
	event.recipes.mekanism.nucleosynthesizing(PREXP('cyan_matter'), `8x ${M("antimatter")}`, KJ('universe_piece'), 8)
	event.recipes.mekanism.nucleosynthesizing(PREXP('blue_matter'), `9x ${M("antimatter")}`, KJ('universe_piece'), 9)
	event.recipes.mekanism.nucleosynthesizing(PREXP('violet_matter'), `10x ${M("antimatter")}`, KJ('universe_piece'), 10)
	event.recipes.mekanism.nucleosynthesizing(PREXP('purple_matter'), `11x ${M("antimatter")}`, KJ('universe_piece'), 11)
	event.recipes.mekanism.nucleosynthesizing(PREXP('pink_matter'), `12x ${M("antimatter")}`, KJ('universe_piece'), 12)
	event.recipes.mekanism.nucleosynthesizing(PREXP('magenta_matter'), `13x ${M("antimatter")}`, KJ('universe_piece'), 13)
	event.recipes.mekanism.nucleosynthesizing(PRE('red_matter'), `14x ${M("antimatter")}`, KJ('universe_piece'), 14)
	event.recipes.mekanism.nucleosynthesizing(PRE('dark_matter'), `15x ${M("antimatter")}`, KJ('universe_piece'), 15)



	//c2m guide book
	event.shapeless(Item.of("patchouli:guide_book").withNBT({"patchouli:book": "patchouli:c2m_guide_book"}), [MC("book"), KJ("electric_mechanism"), PRE("klein_star_omega")])



	//neutron gas
	event.custom({
		type: M('activating'),
		input: { amount: 4, gas: M('plutonium') },
		output: { amount: 1, gas: KJ('neutron_gas') }
	});
	
	
	
	//mechanisms
	
	//kinetic mechanism
	let tKinetic = KJ('incomplete_kinetic_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('kinetic_mechanism'),
	], MC('#wooden_slabs'), [
		event.recipes.create.deploying(tKinetic, [tKinetic, CR('andesite_alloy')]),
		event.recipes.create.deploying(tKinetic, [tKinetic, CR('andesite_alloy')]),
		event.recipes.create.deploying(tKinetic, [tKinetic, F("#tools/saws")])
	]).transitionalItem(tKinetic)
		.loops(1)

	event.shapeless(KJ('kinetic_mechanism'), [
		F('#tools/saws'),
		CR('cogwheel'),
		CR('andesite_alloy'),
		F('#stripped_logs'),
	])
		.damageIngredient(0)
		.damageIngredient(1)
		.damageIngredient(2)
		.damageIngredient(3)
		.damageIngredient(4)
		.damageIngredient(5)
		.damageIngredient(6)
		.damageIngredient(7)
		.damageIngredient(8)
		.id(KJ("kinetic_mechanism_manual_only"))
	event.recipes.mekanism.nucleosynthesizing(MC('#wooden_slabs'), `1x ${M("antimatter")}`, KJ('kinetic_mechanism'), 2)
	
	//sealed mechanism
	let tSealed = KJ('incomplete_sealed_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('sealed_mechanism'),
	], KJ('kinetic_mechanism'), [
		event.recipes.create.deploying(tSealed, [tSealed, KJ('polished_coke')]),
		event.recipes.create.deploying(tSealed, [tSealed, F('#wires/copper')]),
		event.recipes.create.deploying(tSealed, [tSealed, F("#tools/screwdrivers")])
	]).transitionalItem(tSealed)
		.loops(1)
	event.recipes.mekanism.nucleosynthesizing(KJ('kinetic_mechanism'), `1x ${M("antimatter")}`, KJ('sealed_mechanism'), 2)
	
	//precision mechanism
	let tPrecision = CR('incomplete_precision_mechanism')
	event.recipes.create.sequenced_assembly([
		CR('precision_mechanism'),
	], KJ('sealed_mechanism'), [
		event.recipes.create.deploying(tPrecision, [tPrecision, CR('electron_tube')]),
		event.recipes.create.deploying(tPrecision, [tPrecision, F('#nuggets/brass')]),
		event.recipes.create.deploying(tPrecision, [tPrecision, F("#tools/screwdrivers")])
	]).transitionalItem(tPrecision)
		.loops(1)
		.id(KJ(`${KJ()}/precision_mechanism`))
	event.recipes.mekanism.nucleosynthesizing(KJ('sealed_mechanism'), `1x ${M("antimatter")}`, CR('precision_mechanism'), 2)
	
	//inductive mechanism
	let tInductive = KJ('incomplete_inductive_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('inductive_mechanism'),
	], CR('precision_mechanism'), [
		event.recipes.create.deploying(tInductive, [tInductive, KJ('radiant_coil')]),
		event.recipes.create.deploying(tInductive, [tInductive, EC('ender_nugget')]),
		event.recipes.create.deploying(tInductive, [tInductive, F("#tools/chromatic_resonators")])
	]).transitionalItem(tInductive)
		.loops(1)
		.id(KJ('inductive_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(CR('precision_mechanism'), `1x ${M("antimatter")}`, KJ('inductive_mechanism'), 2)
	
	//calculation mechanism
	let tCalculation = KJ('incomplete_calculation_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('calculation_mechanism'),
	], KJ('inductive_mechanism'), [
		event.recipes.create.deploying(tCalculation, [tCalculation, AE2('calculation_processor')]),
		event.recipes.create.deploying(tCalculation, [tCalculation, AE2('logic_processor')]),
		event.recipes.create.deploying(tCalculation, [tCalculation, AE2('engineering_processor')]),
		event.recipes.create.deploying(tCalculation, [tCalculation, F("#tools/chromatic_resonators")])
	]).transitionalItem(tCalculation)
		.loops(1)
		.id(KJ('calculation_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(KJ('inductive_mechanism'), `1x ${M("antimatter")}`, KJ('calculation_mechanism'), 2)
	
	//abstruse mechanism
	let tAbstruse = KJ('incomplete_abstruse_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('abstruse_mechanism'),
	], KJ('calculation_mechanism'), [
		event.recipes.create.deploying(tAbstruse, [tAbstruse, KJ('computation_matrix')]),
		event.recipes.create.deploying(tAbstruse, [tAbstruse, KJ('computation_matrix')]),
		event.recipes.create.deploying(tAbstruse, [tAbstruse, F("#tools/chromatic_resonators")])
	]).transitionalItem(tAbstruse)
		.loops(1)
		.id(KJ('abstruse_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(KJ('calculation_mechanism'), `1x ${M("antimatter")}`, KJ('abstruse_mechanism'), 2)
	
	//integrated mechanism
	let tIntegrated = KJ('incomplete_integrated_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('integrated_mechanism'),
	], KJ('abstruse_mechanism'), [
		event.recipes.create.deploying(tIntegrated, [tIntegrated, IF('plastic')]),
		event.recipes.create.deploying(tIntegrated, [tIntegrated, IF('plastic')]),
		event.recipes.create.deploying(tIntegrated, [tIntegrated, F("#tools/calculators")])
	]).transitionalItem(tIntegrated)
		.loops(1)
		.id(KJ('integrated_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(KJ('abstruse_mechanism'), `1x ${M("antimatter")}`, KJ('integrated_mechanism'), 2)
	
	//embedded mechanism
	let tEmbedded = KJ('incomplete_embedded_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('embedded_mechanism'),
	], KJ('integrated_mechanism'), [
		event.recipes.create.deploying(tEmbedded, [tEmbedded, FN('flux_dust')]),
		event.recipes.create.deploying(tEmbedded, [tEmbedded, IF('pink_slime')]),
		event.recipes.create.deploying(tEmbedded, [tEmbedded, F("#tools/calculators")])
	]).transitionalItem(tEmbedded)
		.loops(1)
		.id(KJ('embedded_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(KJ('integrated_mechanism'), `1x ${M("antimatter")}`, KJ('embedded_mechanism'), 2)
	
	//portable mechanism
	let tPortable = KJ('incomplete_portable_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('portable_mechanism'),
	], KJ('embedded_mechanism'), [
		event.recipes.create.deploying(tPortable, [tPortable, KJ('ether_gem')]),
		event.recipes.create.deploying(tPortable, [tPortable, KJ('ether_gem')]),
		event.recipes.create.deploying(tPortable, [tPortable, F("#tools/calculators")])
	]).transitionalItem(tPortable)
		.loops(1)
		.id(KJ('portable_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(KJ('embedded_mechanism'), `1x ${M("antimatter")}`, KJ('portable_mechanism'), 2)
	
	//electric mechanism
	let tElectric = KJ('incomplete_electric_mechanism')
	event.recipes.create.sequenced_assembly([
		KJ('electric_mechanism'),
	], KJ('portable_mechanism'), [
		event.recipes.create.deploying(tElectric, [tElectric, F('#dusts/steel')]),
		event.recipes.create.deploying(tElectric, [tElectric, F('#nuggets/enhanced_redstone_ingot')]),
		event.recipes.create.deploying(tElectric, [tElectric, F("#tools/calculators")])
	]).transitionalItem(tElectric)
		.loops(1)
		.id(KJ('electric_mechanism'))
	event.recipes.mekanism.nucleosynthesizing(KJ('portable_mechanism'), `1x ${M("antimatter")}`, KJ('electric_mechanism'), 2)
	
	
	
	
	//machines
	
	//andesite machine
	event.shaped(KJ('andesite_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: CR('andesite_casing'),
		S: KJ('kinetic_mechanism')
	})
	
	let andesite_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('kinetic_mechanism'), KJ('andesite_machine'), other_ingredient)
			event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: KJ('andesite_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('andesite_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('andesite_machine'))
	}

	andesite_machine(CR('portable_storage_interface'), 2)
	andesite_machine(CR('encased_fan'), 1, CR('propeller'))
	andesite_machine(CR('millstone'), 1, WH('wooden_hopper'))
	andesite_machine(CR('mechanical_press'), 1, F("#storage_blocks/zinc"))
	andesite_machine(CR('mechanical_mixer'), 1, CR('whisk'))
	andesite_machine(CR('mechanical_drill'), 1, KJ('drill_head'))
	andesite_machine(CR('mechanical_saw'), 1, MC('stonecutter'))
	andesite_machine(CR('deployer'), 1, CR('brass_hand'))
	andesite_machine(CR('mechanical_harvester'), 2)
	andesite_machine(CR('mechanical_plough'), 2)
	andesite_machine(CR('andesite_funnel'), 4)
	andesite_machine(CR('andesite_tunnel'), 4)
	andesite_machine(CR('speedometer'), 1, MC("compass"))
	andesite_machine(CR('mechanical_bearing'), 1, CR("turntable"))
	andesite_machine(CR('mechanical_piston'), 1, MC("piston"))
	andesite_machine(CR('rope_pulley'), 1, CF("rope_and_nail"))
	andesite_machine(IF('water_condensator'), 1, MC("water_bucket"))
	andesite_machine(CR_A('rolling_mill'), 1, CR("shaft"))
	andesite_machine(CR_ME('mechanical_extruder'), 1, F("#cobblestone_generators"))
	andesite_machine(CR_S('sifter'), 1, EXD("#sieves"))
	andesite_machine(EIO('enchanter'), 1, MC("enchanting_table"))
	andesite_machine(KJ('pipe_module_utility'), 4)
	andesite_machine(SR('altar'), 1)
	andesite_machine(CR_RC('mechanical_chisel'), 1, RC("chisel"))
	
	//copper machine
	event.shaped(KJ('copper_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: CR('copper_casing'),
		S: KJ('sealed_mechanism')
	})
	
	let copper_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('sealed_mechanism'), KJ('copper_machine'), other_ingredient)
			event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: KJ('copper_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('copper_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('copper_machine'))
	}

	copper_machine(CR('copper_backtank'), 1, F("#storage_blocks/copper"))
	copper_machine(CR('portable_fluid_interface'), 2)
	copper_machine(CR('spout'), 1, FH('flopper'))
	copper_machine(CR('hose_pulley'), 1)
	copper_machine(CR('item_drain'), 1, Q("grate"))
	copper_machine(CR('smart_fluid_pipe'), 1, CR("fluid_pipe"))
	copper_machine(CR_EI('printer'), 1, MC("dried_kelp"))
	copper_machine(KJ('pipe_module_tier_1'), 4)
	copper_machine(AE2('charger'), 1, AE2('certus_quartz_crystal'))
	copper_machine(P('energy_cell_starter'), 1, P('battery_starter'))
	copper_machine(P('ender_cell_starter'), 1, P('ender_core'))
	copper_machine(P('energizing_orb'), 1, P('dielectric_casing'))
	copper_machine(P('energizing_rod_starter'), 1, MC('end_rod'))
	copper_machine(P('furnator_starter'), 1, IFC('obsidian_furnace'))
	copper_machine(P('magmator_starter'), 1, MC('lava_bucket'))
	copper_machine(P('thermo_generator_starter'), 1, P('thermoelectric_plate'))
	copper_machine(P('solar_panel_starter'), 1, P('photoelectric_pane'))
	copper_machine(P('player_transmitter_starter'), 1, EIO('player_token'))
	copper_machine(P('energy_hopper_starter'), 1, MC('hopper'))
	copper_machine(P('energy_discharger_starter'), 1, AE2('charged_certus_quartz_crystal'))
	copper_machine(EC('crafting_core'), 1, MC('crafting_table'))
	copper_machine(EC('pedestal'), 1)
	copper_machine(CR('steam_engine'), 1, CR('hand_crank'))
	copper_machine(TCT('smeltery_controller'), 1, TCT("seared_melter"))
	
	//brass machine
	event.shaped(KJ('brass_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: CR('brass_casing'),
		S: CR('precision_mechanism')
	})

	let brass_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), CR('precision_mechanism'), KJ('brass_machine'), other_ingredient)
			event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: KJ('brass_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('brass_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('brass_machine'))
	}

	brass_machine(CR('mechanical_crafter'), 3, MC('crafting_table'))
	brass_machine(CR('sequenced_gearshift'), 2)
	brass_machine(CR('rotation_speed_controller'), 1)
	brass_machine(CR('mechanical_arm'), 1)
	brass_machine(CR('stockpile_switch'), 2)
	brass_machine(CR('content_observer'), 2)
	brass_machine(CR('brass_funnel'), 4)
	brass_machine(CR('brass_tunnel'), 4)
	brass_machine(CR('clockwork_bearing'), 1, CR("turntable"))
	brass_machine(TM('feral_flare_lantern'), 1, MC('lantern'))
	brass_machine(TM('megatorch'), 1, MC('torch'))
	brass_machine(FS('storage_controller'), 1, MC('diamond'))
	brass_machine(FS('controller_extension'), 1, F('#ingots/gold'))
	brass_machine(CR_S('brass_sifter'), 1, CR_S("sifter"))
	brass_machine(KJ('pipe_module_tier_2'), 4)
	brass_machine(PP('item_terminal'), 1, F('#gears/diamond'))
	brass_machine(PP('crafting_terminal'), 1, PP('item_terminal'))
	brass_machine(PP('pressurizer'), 1, CR('propeller'))
	brass_machine(CR_A("tesla_coil"), 1, AE2("charger"))
	brass_machine(AA("compressor"), 1, CR('mechanical_press'))
	brass_machine(P('energy_cell_basic'), 1, P('battery_basic'))
	brass_machine(P('ender_cell_basic'), 1, P('ender_cell_starter'))
	brass_machine(P('energizing_rod_basic'), 1, P('energizing_rod_starter'))
	brass_machine(P('furnator_basic'), 1, P('furnator_starter'))
	brass_machine(P('magmator_basic'), 1, P('magmator_starter'))
	brass_machine(P('thermo_generator_basic'), 1, P('thermo_generator_starter'))
	brass_machine(P('solar_panel_basic'), 1, P('solar_panel_starter'))
	brass_machine(P('player_transmitter_basic'), 1, P('player_transmitter_starter'))
	brass_machine(P('energy_hopper_basic'), 1, P('energy_hopper_starter'))
	brass_machine(P('energy_discharger_basic'), 1, P('energy_discharger_starter'))
	brass_machine(CR_A('portable_energy_interface'), 2)
	brass_machine(EIO('xp_obelisk'), 1, EIO('experience_rod'))
	
	//inductive machine
	event.shaped(KJ('inductive_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('inductive_casing'),
		S: KJ('inductive_mechanism')
	})
	
	let inductive_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ("inductive_mechanism"), KJ('inductive_machine'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: KJ('inductive_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('inductive_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('inductive_machine'))
	}

	inductive_machine(MU('mechanical_miner'), 1, CR('mechanical_drill'))
	inductive_machine(MU('mechanical_placer'), 1, CR('deployer'))
	inductive_machine(IF('item_transporter_type'), 2)
	inductive_machine(IF('fluid_transporter_type'), 2)
	inductive_machine(IF('world_transporter_type'), 2)
	inductive_machine(P('energy_cell_hardened'), 1, P('battery_hardened'))
	inductive_machine(P('ender_cell_hardened'), 1, P('ender_cell_basic'))
	inductive_machine(P('energizing_rod_hardened'), 1, P('energizing_rod_basic'))
	inductive_machine(P('furnator_hardened'), 1, P('furnator_basic'))
	inductive_machine(P('magmator_hardened'), 1, P('magmator_basic'))
	inductive_machine(P('thermo_generator_hardened'), 1, P('thermo_generator_basic'))
	inductive_machine(P('solar_panel_hardened'), 1, P('solar_panel_basic'))
	inductive_machine(P('player_transmitter_hardened'), 1, P('player_transmitter_basic'))
	inductive_machine(P('energy_hopper_hardened'), 1, P('energy_hopper_basic'))
	inductive_machine(P('energy_discharger_hardened'), 1, P('energy_discharger_basic'))
	inductive_machine(EC('ender_crafter'), 1, MC('crafting_table'))
	inductive_machine(EC('ender_alternator'), 1)
	inductive_machine(KJ('pipe_module_tier_3'), 4)
	inductive_machine(KJ('circuit_scrap'), 1)
	inductive_machine(DE('generator'), 1, IFC('obsidian_furnace'))
	inductive_machine(CR_ET('energy_transmitter'), 1, CR('shaft'))
	inductive_machine(CR_ET('item_transmitter'), 1, CR('chute'))
	inductive_machine(CR_ET('fluid_transmitter'), 1, CR('mechanical_pump'))
	inductive_machine(EIO("soul_binder"), 1, MC('soul_sand'))
	inductive_machine(EIO("impulse_hopper"), 1, P('energy_hopper_hardened'))
	inductive_machine(ES('ender_chest'), 1, IC('obsidian_chest'))
	inductive_machine(ES('ender_tank'), 1, CR('fluid_tank'))
	inductive_machine(ES('ender_pouch'), 1, PRE('#alchemical_bags'))
	inductive_machine(EIO("xp_vacuum"), 1, EIO('xp_obelisk'))
	inductive_machine(EIO("vacuum_chest"), 1, KJ('chromatic_resonator'))
	inductive_machine(EIO("travel_anchor"), 1, F('#storage_blocks/ender_pearl'))
	inductive_machine(EIO("basic_capacitor"), 1, CR_A('capacitor'))
	inductive_machine(AE2_E('circuit_cutter'), 1, CR('mechanical_saw'))
	inductive_machine(AE2_E('ex_charger'), 1, CR_A("tesla_coil"))
	
	//calculation machine (ae2 not_so_misterious_cube)
	removeRecipeByOutput(event, [
		AE2('not_so_mysterious_cube'),
	])
	event.shaped(AE2('not_so_mysterious_cube'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('fluix_casing'),
		S: KJ('calculation_mechanism')
	}).id(KJ(`${KJ()}/machines/calculation_machine`))
	
	let fluix_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('calculation_mechanism'), AE2('not_so_mysterious_cube'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: AE2('not_so_mysterious_cube'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [AE2('not_so_mysterious_cube'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), AE2('not_so_mysterious_cube'))
	}

	fluix_machine(AE2('formation_core'), 4, AE2("fluix_pearl"))
	fluix_machine(AE2('annihilation_core'), 4, MC("ender_pearl"))
	fluix_machine(P('energy_cell_blazing'), 1, P('battery_blazing'))
	fluix_machine(P('ender_cell_blazing'), 1, P('ender_cell_hardened'))
	fluix_machine(P('energizing_rod_blazing'), 1, P('energizing_rod_hardened'))
	fluix_machine(P('furnator_blazing'), 1, P('furnator_hardened'))
	fluix_machine(P('magmator_blazing'), 1, P('magmator_hardened'))
	fluix_machine(P('thermo_generator_blazing'), 1, P('thermo_generator_hardened'))
	fluix_machine(P('solar_panel_blazing'), 1, P('solar_panel_hardened'))
	fluix_machine(P('player_transmitter_blazing'), 1, P('player_transmitter_hardened'))
	fluix_machine(P('energy_hopper_blazing'), 1, P('energy_hopper_hardened'))
	fluix_machine(P('energy_discharger_blazing'), 1, P('energy_discharger_hardened'))
	fluix_machine(AA('radio'), 1, X('antenna_base'))
	fluix_machine(AA('ti_69'), 1)
	fluix_machine(AE2('controller'), 1)
	fluix_machine(LIO('laser_node'), 2, LB("laser_source_block"))
	fluix_machine(EIO("double_layer_capacitor"), 1, EIO('basic_capacitor'))
	fluix_machine(KJ('blank_upgrade'), 2)
	
	//abstruse machine
	event.shaped(KJ('abstruse_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('abstruse_casing'),
		S: KJ('abstruse_mechanism')
	})
	
	let abstruse_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('abstruse_mechanism'), KJ('abstruse_machine'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: KJ('abstruse_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('abstruse_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('abstruse_machine'))
	}
	
	abstruse_machine(P('energy_cell_niotic'), 1, P('battery_niotic'))
	abstruse_machine(P('ender_cell_niotic'), 1, P('ender_cell_blazing'))
	abstruse_machine(P('energizing_rod_niotic'), 1, P('energizing_rod_blazing'))
	abstruse_machine(P('furnator_niotic'), 1, P('furnator_blazing'))
	abstruse_machine(P('magmator_niotic'), 1, P('magmator_blazing'))
	abstruse_machine(P('thermo_generator_niotic'), 1, P('thermo_generator_blazing'))
	abstruse_machine(P('solar_panel_niotic'), 1, P('solar_panel_blazing'))
	abstruse_machine(P('player_transmitter_niotic'), 1, P('player_transmitter_blazing'))
	abstruse_machine(P('energy_hopper_niotic'), 1, P('energy_hopper_blazing'))
	abstruse_machine(P('energy_discharger_niotic'), 1, P('energy_discharger_blazing'))
	abstruse_machine(IF('machine_frame_pity'), 1)
	abstruse_machine(EIO("octadic_capacitor"), 1, EIO('double_layer_capacitor'))
	
	//integrated machine
	event.shaped(KJ('integrated_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('integrated_casing'),
		S: KJ('integrated_mechanism')
	})
	
	let integrated_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('integrated_mechanism'), KJ('integrated_machine'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: KJ('integrated_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('integrated_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('integrated_machine'))
	}
	
	integrated_machine(P('energy_cell_spirited'), 1, P('battery_spirited'))
	integrated_machine(P('ender_cell_spirited'), 1, P('ender_cell_niotic'))
	integrated_machine(P('energizing_rod_spirited'), 1, P('energizing_rod_niotic'))
	integrated_machine(P('furnator_spirited'), 1, P('furnator_niotic'))
	integrated_machine(P('magmator_spirited'), 1, P('magmator_niotic'))
	integrated_machine(P('thermo_generator_spirited'), 1, P('thermo_generator_niotic'))
	integrated_machine(P('solar_panel_spirited'), 1, P('solar_panel_niotic'))
	integrated_machine(P('player_transmitter_spirited'), 1, P('player_transmitter_niotic'))
	integrated_machine(P('energy_hopper_spirited'), 1, P('energy_hopper_niotic'))
	integrated_machine(P('energy_discharger_spirited'), 1, P('energy_discharger_niotic'))
	integrated_machine(IF('machine_frame_simple'), 1)
	
	//embedded machine
	removeRecipeByOutput(event, [
		EC('frame'),
	])
	event.shaped(EC('frame'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('embedded_casing'),
		S: KJ('embedded_mechanism')
	}).id(KJ(`${KJ()}/machines/embedded_machine`))
	
	let embedded_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('embedded_mechanism'), EC('frame'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: EC('frame'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [EC('frame'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), EC('frame'))
	}
	
	embedded_machine(P('energy_cell_nitro'), 1, P('battery_nitro'))
	embedded_machine(P('ender_cell_nitro'), 1, P('ender_cell_spirited'))
	embedded_machine(P('energizing_rod_nitro'), 1, P('energizing_rod_spirited'))
	embedded_machine(P('furnator_nitro'), 1, P('furnator_spirited'))
	embedded_machine(P('magmator_nitro'), 1, P('magmator_spirited'))
	embedded_machine(P('thermo_generator_nitro'), 1, P('thermo_generator_spirited'))
	embedded_machine(P('solar_panel_nitro'), 1, P('solar_panel_spirited'))
	embedded_machine(P('player_transmitter_nitro'), 1, P('player_transmitter_spirited'))
	embedded_machine(P('energy_hopper_nitro'), 1, P('energy_hopper_spirited'))
	embedded_machine(P('energy_discharger_nitro'), 1, P('energy_discharger_spirited'))
	embedded_machine(IF('machine_frame_advanced'), 1)
	
	//portable machine
	event.shaped(KJ('portable_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('portable_casing'),
		S: KJ('portable_mechanism')
	})
	
	let portable_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('portable_mechanism'), KJ('portable_machine'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: KJ('portable_machine'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [KJ('portable_machine'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('portable_machine'))
	}
	
	portable_machine(IF('machine_frame_supreme'), 1)
	
	//electric machine
	removeRecipeByOutput(event, [
		M('steel_casing'),
	])
	event.shaped(M('steel_casing'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('electric_casing'),
		S: KJ('electric_mechanism')
	}).id(KJ(`${KJ()}/machines/electric_machine`))
	
	let electric_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('electric_mechanism'), M('steel_casing'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: M('steel_casing'), B: other_ingredient })
			event.recipes.extendedcrafting.shapeless_table(Item.of(id, amount), [M('steel_casing'), other_ingredient])
		}
		else
			event.stonecutting(Item.of(id, amount), M('steel_casing'))
	}
	
	electric_machine(X('controller'), 1, AE2('controller'))
	electric_machine(X('router'), 1, PR_INT('comparator_gate'))
	electric_machine(X('wireless_router'), 1, CR('redstone_link'))
	electric_machine(X('redstone_proxy'), 1, F('#ingots/red_alloy'))
	electric_machine(X('redstone_proxy_upd'), 1, PR_T('red_alloy_wire'))
	electric_machine(M('laser'), 1, LB("laser_source_block"))
	electric_machine(IF("infinity_charger"), 1, AE2_E('ex_charger'))
})