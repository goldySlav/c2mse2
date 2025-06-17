// priority: 0

ServerEvents.recipes(e => {
  	//removals
	removeRecipeByID(e, [
		MU("angel_block"),
		MU("solar_panel"),
		MU("solar_panel_controller"),
		MU("lunar_panel"),
		MU("ender_tile"),
		MU("chorus_tile"),
		MU("stone_drum"),
		MU("iron_drum"),
		MU("reinforced_large_drum"),
		MU("netherite_reinforced_drum"),
		MU("unstable_drum"),
		MU("quantum_quarry"),
		MU("golden_lasso"),
		MU("speed_upgrade"),
		MU("laser_hub"),
		MU("laser_port"),
		MU("unstable_ingot"),
		MU("ender_dust_to_ender_pearl"),
		MU("mechanical_miner"),
		MU("mechanical_placer"),
		MU("smelting/ender_ore"),
		MU("redstone_clock"),
	])
	
	removeRecipeByInputOutput(e, [
		MU("ethereal_glass"),
		MU("reverse_ethereal_glass"),
		MU("redstone_glass"),
		MU("glowing_glass"),
		MU("dark_glass"),
		MU("dark_ethereal_glass"),
		MU("dark_reverse_ethereal_glass"),
	])

	//magical egg
	e.replaceInput({ id: MU("magical_egg") }, MU("experience_pearl"), CR("experience_nugget"))
	e.recipes.mekanism.nucleosynthesizing(MC("egg"), `20x ${M("antimatter")}`, MU("magical_egg"), 400)

	//angel ring: dragon ring
	e.replaceInput({ id: MU("ender_dragon_angel_ring") }, MC("black_dye"), F("#scales/dragon_scale"))

	//unstable ingot
	e.recipes.create.mechanical_crafting(MU("unstable_ingot"), [
		"AAAAA",
		"ABBBA",
		"ACCCA",
		"ADDDA",
		"AAAAA",
	], {
		A: KJ('unstable_compound'),
		B: EC("crystaltine_ingot"),
		C: PREXP("basic_collector"),
		D: KJ("crystal_matrix_ingot"),
	})
	e.recipes.extendedcrafting.shaped_table(MU("unstable_ingot"), [
		"AAAAA",
		"ABBBA",
		"ACCCA",
		"ADDDA",
		"AAAAA",
    ], {
		A: KJ('unstable_compound'),
		B: EC("crystaltine_ingot"),
		C: PREXP("basic_collector"),
		D: KJ("crystal_matrix_ingot"),
    })

	//opinium cores
	removeRecipeByID(e, [
		MU("iron_opinium_core"),
		MU("emerald_opinium_core"),
		MU("netherite_opinium_core"),
		MU("chorus_opinium_core"),
		MU("experience_opinium_core"),
		MU("nether_star_opinium_core"),
		MU("the_final_opinium_core"),
	])
	e.shaped(Item.of(MU("wooden_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: MC("#logs"),
		B: MC("#planks"),
	})
	
	e.shaped(Item.of(MU("leather_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: MC("leather"),
		B: MC("rabbit_hide"),
	})
	
	e.shaped(Item.of(MU("stone_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: MC("stone"),
		B: MU("wooden_opinium_core"),
	})
	
	e.shaped(Item.of(MU("chain_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: MC("chain"),
		B: MU("leather_opinium_core"),
	})
	
	e.shaped(Item.of(MU("iron_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: F("#ingots/iron"),
		B: MU("stone_opinium_core"),
	})
	
	e.shaped(Item.of(MU("iron_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: F("#ingots/iron"),
		B: MU("chain_opinium_core"),
	})
	
	e.shaped(Item.of(MU("emerald_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: F("#gems/emerald"),
		B: MU("diamond_opinium_core"),
	})
	
	e.shaped(Item.of(MU("netherite_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: F("#ingots/netherite"),
		B: MU("emerald_opinium_core"),
	})
	
	e.shaped(Item.of(MU("experience_infused_emerald_opinium_core"), 2), [
		'ABA',
		'B B',
		'ABA'
	], {
		A: PET("pure_emerald"),
		B: MU("netherite_opinium_core"),
	})
	
	e.shaped(Item.of(MU("reinforced_echo_shard_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: DD("reinforced_echo_shard"),
		B: MU("experience_infused_emerald_opinium_core"),
		C: DD("heart_of_the_deep"),
	})

  	e.shaped(Item.of(MU("unstable_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: MU("unstable_ingot"),
		B: MU("reinforced_echo_shard_opinium_core"),
		C: AE2("singularity"),
	})

  	e.shaped(Item.of(MU("nether_star_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: MC("nether_star"),
		B: MU("unstable_opinium_core"),
		C: KJ("crystal_matrix_ingot"),
	})

  	e.shaped(Item.of(MU("ender_star_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: EC("ender_star"),
		B: MU("nether_star_opinium_core"),
		C: KJ("crystal_matrix_ingot"),
	})

  	e.shaped(Item.of(MU("flux_star_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: EC("flux_star"),
		B: MU("ender_star_opinium_core"),
		C: KJ("crystal_matrix_ingot"),
	})

  	e.shaped(Item.of(MU("dark_matter_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: PRE("dark_matter"),
		B: MU("flux_star_opinium_core"),
		C: F("#ingots/crystaltine"),
	})

  	e.shaped(Item.of(MU("red_matter_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: PRE("red_matter"),
		B: MU("dark_matter_opinium_core"),
		C: F("#ingots/crystaltine"),
	})

  	e.shaped(Item.of(MU("the_final_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CR("refined_radiance"),
		B: MU("red_matter_opinium_core"),
		C: Item.of(MU("unstable_ingot")),
	})
	
	e.shaped(Item.of(MU("white_lapis_caelestis"), 4), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: MC("cobblestone"),
		B: MC("white_dye"),
		C: F("#dusts/glowstone"),
	})

	colours.forEach(color => {
		e.remove({ output: MU(`${color}_lapis_caelestis`) })
		if (color !== "white") {
			e.shapeless(Item.of(MU(`${color}_lapis_caelestis`), 4), [MC(`${color}_dye`), MU('white_lapis_caelestis')])
		}
	})
	
	e.shaped(Item.of(MU("redstone_clock"), 1), [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: Q('sturdy_stone'),
        B: MC('redstone'),
    })

	//spikes
	removeRecipeByOutput(e, [
		MU("iron_spikes"),
		MU("gold_spikes"),
		MU("diamond_spikes"),
		MU("netherite_spikes"),
	])
	e.shaped(MU("iron_spikes"), [
		' A ',
		'ABA',
		'BCB'
	], {
		A: MC("iron_sword"),
		B: F("#ingots/iron"),
		C: MU("wooden_spikes"),
	})
	e.shaped(MU("gold_spikes"), [
		' A ',
		'ABA',
		'BCB'
	], {
		A: MC("golden_sword"),
		B: F("#ingots/gold"),
		C: MU("iron_spikes"),
	})
	e.shaped(MU("diamond_spikes"), [
		' A ',
		'ABA',
		'BCB'
	], {
		A: MC("diamond_sword"),
		B: F("#gems/diamond"),
		C: MU("gold_spikes"),
	})
	e.shaped(MU("netherite_spikes"), [
		' A ',
		'ABA',
		'BCB'
	], {
		A: MC("netherite_sword"),
		B: F("#ingots/netherite"),
		C: MU("diamond_spikes"),
	})
	
	//unstable axe
    removeRecipeByOutput(e, [
		MU("healing_axe"),
    ])
	shapedSaveNBT(e, MU("healing_axe"), [
		'B',
		'A',
	], {
		A: DD("warden_axe"),
		B: MU("unstable_axe_part"),
	})
	
	//unstable hoe
    removeRecipeByOutput(e, [
		MU("reversing_hoe"),
    ])
	shapedSaveNBT(e, MU("reversing_hoe"), [
		'B',
		'A',
	], {
		A: DD("warden_hoe"),
		B: MU("unstable_hoe_part"),
	})
	
	//unstable pickaxe
    removeRecipeByOutput(e, [
		MU("destruction_pickaxe"),
    ])
	shapedSaveNBT(e, MU("destruction_pickaxe"), [
		'B',
		'A',
	], {
		A: DD("warden_pickaxe"),
		B: MU("unstable_pickaxe_part"),
	})
	
	//unstable shovel
    removeRecipeByOutput(e, [
		MU("erosion_shovel"),
    ])
	shapedSaveNBT(e, MU("erosion_shovel"), [
		'B',
		'A',
	], {
		A: DD("warden_shovel"),
		B: MU("unstable_shovel_part"),
	})
	
	//unstable sword
    removeRecipeByOutput(e, [
		MU("etheric_sword"),
    ])
	shapedSaveNBT(e, MU("etheric_sword"), [
		'B',
		'A',
	], {
		A: DD("warden_sword"),
		B: MU("unstable_sword_part"),
	})
	
	//unstable sword
    removeRecipeByOutput(e, [
		MU("kikoku"),
    ])
	shapedSaveNBT(e, MU("kikoku"), [
		'B',
		'A',
	], {
		A: MU("etheric_sword"),
		B: MU("kikoku_sword_part"),
	})
})
