// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		AE2_A("singularity"),
	])
	removeRecipeByOutput(event, [
		AE2_A("adv_pattern_provider_upgrade"),
		AE2_A("adv_pattern_provider_capacity_upgrade"),
		AE2_A("adv_pattern_encoder"),
		AE2_A("shattered_singularity"),
		AE2_A("small_adv_pattern_provider"),
	])
	
	//inscriber press from scrap
	removeRecipeByOutput(event, [
		AE2_A("quantum_processor_press"),
	])
	customRecipes.expatternprovider.cutter(event, AE2_A("quantum_processor_press"), 1, KJ("circuit_scrap"), 1, AE2_A("quantum_infusion_source"), 1000)
	
	//quantum alloy block to alloy
	event.shapeless(Item.of(AE2_A("quantum_alloy"), 9), [AE2_A("quantum_alloy_block")])

	//reaction chamber
	removeRecipeByOutput(event, [
		AE2_A("reaction_chamber"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_A('reaction_chamber'), [
		'CEBEC',
		'EDFDE',
		'BGAGB',
		'EDFDE',
		'CEBEC',
	], {
		A: MGC('mega_energy_cell'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2_A('quantum_infused_dust'),
		E: AE2('engineering_processor'),
		F: P('dielectric_casing'),
		G: KJ('ether_gem'),
	})
	
	//quantum infused dust
	removeRecipeByOutput(event, [
		AE2_A("quantum_infused_dust"),
	])
	customRecipes.industrialforegoing.dissolution(event, `1x ${AE2_A("quantum_infused_dust")}`, [
		AE2("singularity"),
	],
		IF("ether_gas"),
		10
	)

	//data entangler
	removeRecipeByOutput(event, [
		AE2_A("data_entangler"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_A('data_entangler'), [
		'CEBEC',
		'EDFDE',
		'BFAFB',
		'EDGDE',
		'CEBEC',
	], {
		A: AE2_A('quantum_unit'),
		B: AE2_A('quantum_infused_dust'),
		C: CP('iron_1'),
		D: P('dielectric_casing'),
		E: KJ('dye_entangled_singularity'),
		F: AE2_A('quantum_storage_256'),
		G: AE2_A('quantum_core'),
	})
	
	//quantum storage 128
	event.replaceInput({ id: AE2_A("quantumstorage128") }, AE2_A("shattered_singularity"), KJ("dye_entangled_singularity"))
	
	//quantum storage 256
	event.replaceInput({ id: AE2_A("quantumstorage256") }, AE2_A("shattered_singularity"), KJ("dye_entangled_singularity"))

	//quantum accelerator
	removeRecipeByOutput(event, [
		AE2_A("quantum_accelerator"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_A('quantum_accelerator'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2_A('quantum_unit'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2_A('quantum_processor'),
		E: AE2_A('quantum_alloy_block'),
	})

	//quantum core
	removeRecipeByOutput(event, [
		AE2_A("quantum_core"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_A('quantum_core'), [
		'CEBEC',
		'EDFDE',
		'BGAGB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2_A('quantum_unit'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2_A('quantum_processor'),
		E: AE2_A('quantum_infused_dust'),
		F: AE2_A("quantum_storage_256"),
		G: AE2_A("quantum_accelerator"),
	})
	
	//quantum crafter
	removeRecipeByOutput(event, [
		AE2_A("quantum_crafter"),
	])
	event.custom({
		type: AE2_A("reaction"),
		energy: 2000000,
	    fluid: {
			fluidStack: {
				Amount: 1000,
				FluidName: AE2_A("quantum_infusion_source")
			}
		},
		input_items: [
			{
				amount: 64,
				ingredient: {
					item: EC("flux_crafter")
				}
			},
		],
		output: {
			"#": 1,
			"#c": "ae2:i",
			id: AE2_A("quantum_crafter"),
		}
	})
	
	//quantum alloy
	removeRecipeByOutput(event, [
		AE2_A("quantum_alloy"),
	])
	event.custom({
		type: AE2_A("reaction"),
		energy: 200000,
	    fluid: {
			fluidStack: {
				Amount: 1000,
				FluidName: AE2_A("quantum_infusion_source")
			}
		},
		input_items: [
			{
				amount: 4,
				ingredient: {
					item: EC("enhanced_redstone_ingot")
				}
			},
			{
				amount: 4,
				ingredient: {
					item: AE2("singularity")
				}
			},
		],
		output: {
			"#": 1,
			"#c": "ae2:i",
			id: AE2_A("quantum_alloy"),
		}
	})
	
	//quantum alloy plate
	removeRecipeByOutput(event, [
		AE2_A("quantum_alloy_plate"),
	])
	event.custom({
		type: AE2_A("reaction"),
		energy: 1000000,
	    fluid: {
			fluidStack: {
				Amount: 1000,
				FluidName: AE2_A("quantum_infusion_source")
			}
		},
		input_items: [
			{
				amount: 8,
				ingredient: {
					item: AE2_A("quantum_alloy")
				}
			},
			{
				amount: 2,
				ingredient: {
					item: MC("netherite_ingot")
				}
			},
			{
				amount: 1,
				ingredient: {
					item: KJ("the_ultimate_star")
				}
			},
		],
		output: {
			"#": 1,
			"#c": "ae2:i",
			id: AE2_A("quantum_alloy_plate"),
		}
	})
	
	//redstone crystal fix
	removeRecipeByID(event, [
		AE2_A("redstonecrystal"),
	])
	event.custom({
	  "type": F("conditional"),
	  "recipes": [
		{
		  "conditions": [
			{
			  "type": F("mod_loaded"),
			  "modid": AF()
			}
		  ],
		  "recipe": {
			"type": AE2_A("reaction"),
			"energy": 20000,
			"fluid": {
			  "fluidStack": {
				"Amount": 500,
				"FluidName": MC("water")
			  }
			},
			"input_items": [
			  {
				"amount": 16,
				"ingredient": {
				  "item": MC("redstone_block")
				}
			  },
			  {
				"amount": 16,
				"ingredient": {
				  "item": AE2("fluix_dust")
				}
			  },
			  {
				"amount": 16,
				"ingredient": {
				  "item": AE2("sky_dust")
				}
			  }
			],
			"output": {
			  "#": 64,
			  "#c": AE2("i"),
			  "id": AF("redstone_crystal")
			}
		  }
		}
	  ]
	})
	

	//quantum multi-threader
	removeRecipeByOutput(event, [
		AE2_A("quantum_multi_threader"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_A('quantum_multi_threader'), [
		'CEBEC',
		'EFDFE',
		'BFAFB',
		'EDGDE',
		'CEBEC',
	], {
		A: AE2_A('quantum_unit'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2_A('quantum_infused_dust'),
		E: AE2_A('quantum_processor'),
		F: AE2_A("quantum_accelerator"),
		G: AE2_A("quantum_core"),
	})
	
	//quantum suit modules
	quantumModule(event, AE2_A("walk_speed_card"), [
		`2x ${AE2("speed_card")}`,
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("soul_sand")}`,
	])
	quantumModule(event, AE2_A("sprint_speed_card"), [
		`4x ${AE2("speed_card")}`,
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("ice")}`,
	])
	quantumModule(event, AE2_A("step_assist_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${AE2_A("quantum_alloy_stairs")}`,
	])
	quantumModule(event, AE2_A("step_assist_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`4x ${AE2_A("quantum_alloy_stairs")}`,
	])
	quantumModule(event, AE2_A("jump_height_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("end_crystal")}`,
		`2x ${Q("bottled_cloud")}`,
	])
	quantumModule(event, AE2_A("lava_immunity_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("lava_bucket")}`,
		`1x ${MC("totem_of_undying")}`,
		`2x ${AE2("quartz_glass")}`,
	])
	quantumModule(event, AE2_A("flight_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${PRE("swiftwolf_rending_gale")}`,
		`4x ${AE2_A("quantum_alloy_plate")}`,
		`1x ${MC("feather")}`,
	])
	quantumModule(event, AE2_A("water_breathing_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`4x ${MC("pufferfish")}`,
	])
	quantumModule(event, AE2_A("auto_feeding_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${AE2("wireless_access_point")}`,
		`1x ${MC("enchanted_golden_apple")}`,
		`1x ${SBP("advanced_feeding_upgrade")}`,
	])
	quantumModule(event, AE2_A("auto_stock_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${AE2("wireless_access_point")}`,
		`1x ${AE2_A("stock_export_bus_part")}`,
		`1x ${AE2("controller")}`,
	])
	quantumModule(event, AE2_A("magnet_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${SBP("advanced_magnet_upgrade")}`,
		`1x ${KJ("unstable_chromatic_resonator")}`,
	])
	quantumModule(event, AE2_A("hp_buffer_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("totem_of_undying")}`,
		`1x ${AE2("import_bus")}`,
		`1x ${AE2("export_bus")}`,
		`1x ${AE2("portable_item_cell_64k")}`,
	])
	quantumModule(event, AE2_A("evasion_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`4x ${AE2_A("quantum_alloy_plate")}`,
		`4x ${MC("rabbit_hide")}`,
	])
	quantumModule(event, AE2_A("regeneration_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("cake")}`,
		`1x ${PHC_FC("baconcheeseburgeritem")}`,
		`1x ${PHC_FE("sushiitem")}`,
		`1x ${PHC_FE("meatfeastpizzaitem")}`,
		`1x ${MC("enchanted_golden_apple")}`,
	])
	quantumModule(event, AE2_A("strength_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${PET("emerald_netherite_sword")}`,
		`1x ${AE2("certus_quartz_sword")}`,
		`1x ${AE2("fluix_sword")}`,
		`1x ${AE2("nether_quartz_sword")}`,
	])
	quantumModule(event, AE2_A("attack_speed_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`6x ${AE2("speed_card")}`,
		`1x ${ART("feral_claws")}`,
	])
	quantumModule(event, AE2_A("luck_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`3x ${MU("the_final_opinium_core")}`,
		`1x ${EIO("experience_rod")}`,
	])
	quantumModule(event, AE2_A("reach_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`4x ${CR("extendo_grip")}`,
	])
	quantumModule(event, AE2_A("swim_speed_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`3x ${AE2("speed_card")}`,
		`1x ${MC("#boats")}`,
	])
	quantumModule(event, AE2_A("night_vision_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${ART("night_vision_goggles")}`,
		`4x ${MC("glowstone")}`,
	])
	quantumModule(event, AE2_A("flight_drift_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${MC("recovery_compass")}`,
		`1x ${MC("lodestone")}`,
	])
	quantumModule(event, AE2_A("recharging_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`1x ${AE2("wireless_access_point")}`,
		`3x ${AE2("energy_card")}`,
		`1x ${MGC("mega_energy_cell")}`,
	])
	quantumModule(event, AE2_A("portable_workbench_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`2x ${AE2_A("quantum_alloy")}`,
		`1x ${AE2("cell_workbench")}`,
		`1x ${AE2("wireless_access_point")}`,
	])
	quantumModule(event, AE2_A("pick_craft_card"), [
		`3x ${AE2_A("quantum_processor")}`,
		`4x ${AE2_A("quantum_infused_dust")}`,
		`2x ${AE2_A("quantum_alloy")}`,
		`1x ${MC("crafting_table")}`,
		`1x ${AE2("wireless_access_point")}`,
	])
})