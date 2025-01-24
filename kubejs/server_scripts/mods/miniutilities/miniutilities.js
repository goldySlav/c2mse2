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
		MU("chorus_opinium_core"),
		MU("experience_opinium_core"),
		MU("nether_star_opinium_core"),
		MU("the_final_opinium_core"),
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
	e.shaped(MU("unstable_ingot"), [
		'AAA',
		'BBB',
		'CCC'
	], {
		A: EC("crystaltine_ingot"),
		B: PREXP("basic_collector"),
		C: AV("crystal_matrix_ingot"),
	})

	//opinium cores
	e.shaped(Item.of(MU("chorus_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: MC("chorus_flower"),
		B: MU("emerald_opinium_core"),
		C: AE2("singularity"),
	})

  	e.shaped(Item.of(MU("experience_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CP("experience_2"),
		B: MU("chorus_opinium_core"),
		C: AV("crystal_matrix_ingot"),
	})

  	e.shaped(Item.of(MU("nether_star_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: MC("nether_star"),
		B: MU("experience_opinium_core"),
		C: EC("crystaltine_ingot"),
	})

  	e.shaped(Item.of(MU("the_final_opinium_core"), 2), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CR("refined_radiance"),
		B: MU("nether_star_opinium_core"),
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
})
