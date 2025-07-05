// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		EIO("iron_gear"),
		EIO("cake"),
		EIO("soulbinding/enticing_crystal"),
		EIO("soulbinding/prescient_crystal"),
		EIO("soulbinding/ender_crystal"),
		EIO("soulbinding/player_token"),
		EIO("soulbinding/frank_n_zombie"),
		EIO("soulbinding/sentient_ender"),
		EIO("soulbinding/broken_spawner"),
		EIO("soulbinding/powered_spawner"),
		EIO("tank_fill/nutritious_stick"),
		EIO("conduit_binder_composite"),
	])
	removeRecipeByInputOutput(event, [
		EIO("wood_gear"),
		EIO("stone_gear"),
		EIO("dark_bimetal_gear"),
		EIO("energized_gear"),
		EIO("vibrant_gear"),
		EIO("energetic_photovoltaic_module"),
		EIO("pulsating_photovoltaic_module"),
		EIO("vibrant_photovoltaic_module"),
		EIO("photovoltaic_plate"),
		EIO("photovoltaic_composite"),
		EIO("grains_of_infinity"),
		EIO("infinity_rod"),
		EIO("energy_conduit"),
		EIO("fluid_conduit"),
		EIO("pressurized_fluid_conduit"),
		EIO("ender_fluid_conduit"),
		EIO("redstone_conduit"),
		EIO("item_conduit"),
		EIO("me_conduit"),
		EIO("dense_me_conduit"),
		EIO("basic_capacitor"),
		EIO("double_layer_capacitor"),
		EIO("octadic_capacitor"),
		EIO("pulsating_crystal"),
		EIO("vibrant_crystal"),
		EIO("weather_crystal"),
		EIO("staff_of_travelling"),
		EIO("staff_of_levity"),
		EIO("dark_steel_sword"),
		EIO("dark_steel_ingot"),
		EIO("dark_steel_nugget"),
		EIO("dark_steel_block"),
		EIO("redstone_alloy_ingot"),
		EIO("redstone_alloy_block"),
		EIO("redstone_alloy_nugget"),
		EIO("energetic_alloy_ingot"),
		EIO("energetic_alloy_nugget"),
		EIO("energetic_alloy_block"),
		EIO("vibrant_alloy_ingot"),
		EIO("vibrant_alloy_nugget"),
		EIO("vibrant_alloy_block"),
		EIO("conductive_alloy_ingot"),
		EIO("conductive_alloy_nugget"),
		EIO("conductive_alloy_block"),
		EIO("pulsating_alloy_ingot"),
		EIO("pulsating_alloy_nugget"),
		EIO("pulsating_alloy_block"),
		EIO("soularium_ingot"),
		EIO("soularium_nugget"),
		EIO("soularium_block"),
		EIO("end_steel_ingot"),
		EIO("end_steel_nugget"),
		EIO("end_steel_block"),
		EIO("flour"),
		EIO("glider_wing"),
		EIO("sag_mill"),
		EIO("conductive_alloy_grinding_ball"),
		EIO("pulsating_alloy_grinding_ball"),
		EIO("redstone_alloy_grinding_ball"),
		EIO("energetic_alloy_grinding_ball"),
		EIO("vibrant_alloy_grinding_ball"),
		EIO("copper_alloy_grinding_ball"),
		EIO("end_steel_grinding_ball"),
		EIO('soularium_grinding_ball'),
		EIO('dark_steel_grinding_ball'),
		EIO("experience_rod"),
		EIO("cold_fire_igniter"),
		EIO("void_chassis"),
		EIO("ensouled_chassis"),
		EIO("electromagnet"),
		EIO("dark_steel_ladder"),
		EIO('dark_steel_bars'),
		EIO('dark_steel_door'),
		EIO('dark_steel_trapdoor'),
		EIO('dark_steel_pressure_plalte'),
		EIO('silent_dark_steel_pressure_plate'),
		EIO('soularium_pressure_plalte'),
		EIO('silent_soularium_pressure_plate'),
		EIO("silicon"),
		EIO("powdered_ender_pearl"),
		EIO("powdered_cobalt"),
		EIO("powdered_quartz"),
		EIO('end_steel_bars'),
		EIO('primitive_alloy_smelter'),
		EIO('alloy_smelter'),
		EIO('reinforced_obsidian_block'),
		EIO('soul_chain'),
		EIO('painting_machine'),
		EIO('stirling_generator'),
		EIO('slice_and_splice'),
		EIO('black_paper'),
		EIO('fluid_tank'),
		EIO('pressurized_fluid_tank'),
		EIO('wired_charger'),
		EIO("coordinate_selector"),
		EIO("crafter"),
		EIO("soul_engine"),
		EIO("basic_capacitor_bank"),
		EIO("advanced_capacitor_bank"),
		EIO("vibrant_capacitor_bank"),
		EIO("redstone_filter_base"),
		EIO("basic_item_filter"),
		EIO("advanced_item_filter"),
		EIO("basic_fluid_filter"),
		EIO("redstone_not_filter"),
		EIO("redstone_or_filter"),
		EIO("redstone_and_filter"),
		EIO("redstone_nor_filter"),
		EIO("redstone_nand_filter"),
		EIO("redstone_xor_filter"),
		EIO("redstone_xnor_filter"),
		EIO("redstone_toggle_filter"),
		EIO("redstone_counting_filter"),
		EIO("redstone_sensor_filter"),
		EIO("redstone_timer_filter"),
		EIO("extraction_speed_upgrade_1"),
		EIO("extraction_speed_upgrade_2"),
		EIO("extraction_speed_upgrade_3"),
		EIO("extraction_speed_upgrade_4"),
		EIO("drain"),
		EIO("chemical_conduit"),
		EIO("pressurized_chemical_conduit"),
		EIO("ender_chemical_conduit"),
		EIO("heat_conduit"),
		EIO("broken_spawner"),
		EIO("powered_spawner"),
		/enderio:clear_glass*/,
		/enderio:fused_quartz*/,
		/enderio:clear_glass_(p|np|m|nm|a|na|d|dp|dnp|dm|dnm|da|dna|e|ep|enp|em|enm|ea|ena)*/,
		/enderio:fused_quartz_(p|np|m|nm|a|na|d|dp|dnp|dm|dnm|da|dna|e|ep|enp|em|enm|ea|ena)*/,
	])
	removeRecipeByType(event, [
		EIO("fire_crafting"),
		EIO("slicing"),
		EIO("sag_milling"),
		EIO("alloy_smelting"),
		EIO("tank_fill"),
	])
	
	//enchantment books
	function enchBook(enchantment, item, itemCount) {
		event.remove({ id: EIO(`enchanting/${enchantment.slice(enchantment.indexOf(":") + 1)}`) })
		event.custom({
			type: EIO("enchanting"),
			cost_multiplier: 1,
			enchantment: enchantment,
			input: { count: itemCount, ingredient: { item: item }}
		})
	}
	
	enchBook(MC("protection"), CR("iron_sheet"), 16)
	enchBook(MC("silk_touch"), MC("white_wool"), 16)
	enchBook(MC("unbreaking"), KJ("witherproof_block"), 1)
	enchBook(MC("fortune"), MC("emerald"), 20)
	enchBook(MC("power"), KJ("drill_head"), 1)
	enchBook(MC("punch"), MC("string"), 32)
	enchBook(MC("flame"), MC("fire_charge"), 1)
	enchBook(MC("infinity"), MC("nether_star"), 1)
	enchBook(MC("channeling"), MC("lightning_rod"), 16)
	enchBook(MC("mending"), SBP("smelting_upgrade"), 1)
	enchBook(MC("feather_falling"), MC("feather"), 16)
	enchBook(MC("blast_protection"), CR("sturdy_sheet"), 16)
	enchBook(TS("soulbound"), TS("grave_dust"), 1)
	enchBook(DE("reaper_enchantment"), DE("mob_soul"), 1)
	enchBook(EIO("xp_boost"), CR("experience_block"), 3)
	enchBook(EIO("withering"), MC("wither_rose"), 64)
	enchBook(PREXP("alchemical_collection"), PRE("klein_star_omega"), 1)
	enchBook(CR("capacity"), MC("copper_block"), 16)
	enchBook(CR("potato_recovery"), MC("potato"), 16)
	enchBook(MU("shotgun"), KJ("plus"), 1)
	enchBook(AA_GA("space_breathing"), AA_GA("oxygen_can"), 1)
	enchBook(AA_GA("acid_rain_proof"), AA("calorite_plate"), 64)
	enchBook(AA_GA("gravity_normalizing"), AA("gravity_normalizer"), 1)
	enchBook(AA_GA("space_fire_proof"), AA("ostrum_plate"), 64)
	enchBook(DD("sculk_smite"), DD("soul_crystal"), 3)
	enchBook(DD("catalysis"), DD("soul_dust"), 16)
	//enchBook(AM("straddle_jump"), MC("slime_block"), 16)
	//enchBook(AM("lavawax"), MC("blue_ice"), 8)
	//enchBook(AM("serpentfriend"), KJ("necrotic_bone"), 16)
	//enchBook(AM("board_return"), KJ("chromatic_resonator"), 1)
	
	//infinity grains
	event.recipes.ae2.transform(EIO("grains_of_infinity"), [AE2("sky_dust")]).circumstance({ type: 'fluid', tag: F('redstone') })
	event.recipes.create.mixing(EIO("grains_of_infinity"), [AE2("sky_dust"), Fluid.of(KJ("liquid_redstone"), 10)])
	event.recipes.mekanism.enriching(Item.of(EIO('grains_of_infinity'), 2), AE2("sky_dust"))
	
	//infinity rod
	event.shaped(EIO("infinity_rod"), [
		" AB",
		"ABA",
		"BA ",
	], {
		A: EIO("grains_of_infinity"),
		B: F("#rods/iron"),
	})
	
	//conduits
	donutCraftFull(event, Item.of(EIO("me_conduit"), 8), AE2("#glass_cable"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("me_conduit"), 8), AE2("#covered_cable"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("dense_me_conduit"), 8), AE2("#covered_dense_cable"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("item_conduit"), 8), PP("pipe"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("redstone_conduit"), 8), PR_T("red_alloy_wire"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("energy_conduit"), 8), P("energy_cable_basic"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("fluid_conduit"), 8), CR("fluid_pipe"), EIO("conduit_binder"))
	donutCraftFull(event, Item.of(EIO("chemical_conduit"), 8), M("basic_pressurized_tube"), EIO("conduit_binder"))
	
	event.recipes.extendedcrafting.shaped_table(Item.of(EIO("pressurized_fluid_conduit"), 8),
		[
			"CCCCC",
			"CBBBC",
			"CBABC",
			"CBBBC",
			"CCCCC",
		], {
			A: tieredItems.ch4.mat,
			B: EIO("fluid_conduit"),
			C: EIO("conduit_binder"),
		}
	)
	
	event.recipes.extendedcrafting.shaped_table(Item.of(EIO("ender_fluid_conduit"), 8),
		[
			"CCCCC",
			"CBBBC",
			"CBABC",
			"CBBBC",
			"CCCCC",
		], {
			A: tieredItems.ch5.mat,
			B: EIO("pressurized_fluid_conduit"),
			C: EIO("conduit_binder"),
		}
	)
	
	event.recipes.extendedcrafting.shaped_table(Item.of(EIO("pressurized_chemical_conduit"), 8),
		[
			"CCCCC",
			"CBBBC",
			"CBABC",
			"CBBBC",
			"CCCCC",
		], {
			A: tieredItems.ch4.mat,
			B: EIO("chemical_conduit"),
			C: EIO("conduit_binder"),
		}
	)
	
	event.recipes.extendedcrafting.shaped_table(Item.of(EIO("ender_chemical_conduit"), 8),
		[
			"CCCCC",
			"CBBBC",
			"CBABC",
			"CBBBC",
			"CCCCC",
		], {
			A: tieredItems.ch5.mat,
			B: EIO("pressurized_chemical_conduit"),
			C: EIO("conduit_binder"),
		}
	)
	
	event.recipes.extendedcrafting.shaped_table(Item.of(EIO("heat_conduit"), 8),
		[
			"CCCCC",
			"CBBBC",
			"CBABC",
			"CBBBC",
			"CCCCC",
		], {
			A: tieredItems.ch10.mat,
			B: M("advanced_thermodynamic_conductor"),
			C: EIO("conduit_binder"),
		}
	)
	
	//tokens
	customRecipes.enderio.soulbinding(event, EIO("monster_token"), EIO("soularium_grinding_ball"), "monster", 12800, 1)
	customRecipes.enderio.soulbinding(event, EIO("animal_token"), EIO("soularium_grinding_ball"), "creature", 12800, 1)
	customRecipes.enderio.soulbinding(event, EIO("player_token"), EIO("soularium_grinding_ball"), MC("villager"), 12800, 1)
	
	//dark steel sword
	customRecipes.enderio.soulbinding(event, EIO("dark_steel_sword"), PET("emerald_netherite_sword"), MC("enderman"), 24000, 1)
	
	//staff of travelling
	event.shaped(EIO("staff_of_travelling"), ["  B", " A ", "A  "], {
		A: EIO("infinity_rod"),
		B: EC("ender_star"),
	})
	
	//staff of levity
	event.shaped(EIO("staff_of_levity"), ["  B", " A ", "A  "], {
		A: EIO("infinity_rod"),
		B: EC("flux_star"),
	})
	
	//experience rod
	event.shaped(EIO("experience_rod"), ["  B", " A ", "A  "], {
		A: EIO("infinity_rod"),
		B: CR("experience_block"),
	})
	
	//grinding balls
	event.recipes.tconstruct.casting_table(EIO("soularium_grinding_ball"), Fluid.of(TCT("molten_brass"), 90), KJ("ball_cast"), false, 40)
	
	//wrench
	event.smithing(EIO("yeta_wrench"), tieredItems.ch2.circuit, FB("framed_wrench"), EIO("grains_of_infinity"))
	
	//soul vial
	event.recipes.ae2.transform(EIO("empty_soul_vial"), [MC("glass_bottle")]).circumstance({ type: 'fluid', tag: F('witch_water') })
	
	//coordinate selector
	event.shaped(EIO("coordinate_selector"), ["ABA", " CA", "  A"], {
		A: F("#ingots/cobalt"),
		B: MC("ender_pearl"),
		C: MC("compass"),
	})
	
	//conduit binder composite
	event.shaped(Item.of(EIO("conduit_binder_composite"), 8), [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: MC("gravel"),
		B: MC("clay"),
		C: F("#sand"),
		D: tieredItems.ch3.circuit,
	})

	//Filters
	event.shapeless(EIO("generic_filter_base"), [EIO("redstone_filter_base")])
	event.shapeless(EIO("redstone_filter_base"), [EIO("generic_filter_base")])
	event.stonecutting(EIO("basic_item_filter"), EIO("generic_filter_base"))
	event.stonecutting(EIO("basic_fluid_filter"), EIO("generic_filter_base"))
	event.stonecutting(EIO("entity_filter"), EIO("generic_filter_base"))
	event.stonecutting(EIO("redstone_not_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_or_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_and_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_nor_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_nand_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_xor_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_xnor_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_toggle_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_counting_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_sensor_filter"), EIO("redstone_filter_base"))
	event.stonecutting(EIO("redstone_timer_filter"), EIO("redstone_filter_base"))

	event.recipes.extendedcrafting.shaped_table(Item.of(EIO("advanced_item_filter"), 2), [
			"DDDDD",
			"DCBCD",
			"DBABD",
			"DCBCD",
			"DDDDD"
		], {
		A: EIO("basic_item_filter"),
		B: MC("paper"),
		C: MC("hopper"),
		D: IF("plastic"),
	})
})