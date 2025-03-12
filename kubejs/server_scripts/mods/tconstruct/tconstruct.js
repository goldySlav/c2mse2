// priority: 0

const redundantToolParts = [
	"repair_kit", "pick_head", "small_axe_head", "small_blade", "adze_head", "hammer_head", "broad_axe_head", "broad_blade",
	"large_plate", "tool_handle", "tool_binding", "tough_handle", "tough_binding", "bow_limb", "bow_grip", "bowstring",
	"helmet_plating", "chestplate_plating", "leggings_plating", "boots_plating", "maille",
]

ServerEvents.recipes((event) => {
	removeRecipeByInput(event, [
        /tconstruct:.*sand_cast/,
	])
	removeRecipeByOutput(event, [
        TCT("materials_and_you"),
        TCT("puny_smelting"),
        TCT("mighty_smelting"),
        TCT("tinkers_gadgetry"),
        TCT("fantastic_foundry"),
        TCT("encyclopedia"),
	])
	
	removeRecipeByID(event, [
        /tconstruct:.*wire_gold_cast/,
	])
	
	reduntandCasts.forEach(cast => {
		removeRecipeByInputOutput(event, [
			TCT(`${cast}_cast`)
		])
	})
	
	redundantToolParts.forEach(part => {
		removeRecipeByInputOutput(event, [
			TCT(`${part}`)
		])
	})

    removeRecipeByInputOutput(event, [
		TCT("shield_core"),
		TCT("plate_shield"),
		TCT("travelers_shield"),
		TCT("travelers_helmet"),
		TCT("travelers_chestplate"),
		TCT("travelers_leggings"),
		TCT("travelers_boots"),
		TCT("pattern"),
		TCT("modifier_worktable"),
		TCT("crafting_station"),
		TCT("part_builder"),
		TCT("tinkers_chest"),
		TCT("part_chest"),
		TCT("tinker_station"),
		TCT("emerald_reinforcement"),
		TCT("slimesteel_reinforcement"),
		TCT("iron_reinforcement"),
		TCT("seared_reinforcement"),
		TCT("gold_reinforcement"),
		TCT("cobalt_reinforcement"),
		TCT("obsidian_reinforcement"),
		TCT("tinkers_anvil"),
		TCT("scorched_anvil"),
		TCT("slime_helmet"),
		TCT("slime_chestplate"),
		TCT("slime_leggings"),
		TCT("slime_boots"),
		TCT("silky_cloth"),
	])
	
	
	
	//necrotic bone haunting
	event.recipes.create.haunting(TCT('necrotic_bone'), MC('bone'))
	
	
	
	//missing casts (for some reason)
	const missingCasts = ["gear", "gem", "nugget", "ingot", "wire"]
	missingCasts.forEach(cast => {
		event.recipes.tconstruct.casting_table(TCT(`${cast}_cast`), Fluid.of(TCT("molten_gold"), 90), F(`#${cast}s`), true, 57, true)
	})
	
	
	
	//slime saplings & seeds
	event.recipes.tconstruct.casting_table(TCT("earth_slime_sapling"), Fluid.of(TCT("earth_slime"), 250), MC(`#saplings`), true, 40)
	event.recipes.tconstruct.casting_table(TCT("sky_slime_sapling"), Fluid.of(TCT("sky_slime"), 250), MC(`#saplings`), true, 40)
	event.recipes.tconstruct.casting_table(TCT("ender_slime_sapling"), Fluid.of(TCT("ender_slime"), 250), MC(`#saplings`), true, 40)
	event.recipes.tconstruct.casting_table(TCT("earth_slime_grass_seeds"), Fluid.of(TCT("earth_slime"), 250), F(`#seeds`), true, 40)
	event.recipes.tconstruct.casting_table(TCT("sky_slime_grass_seeds"), Fluid.of(TCT("sky_slime"), 250), F(`#seeds`), true, 40)
	event.recipes.tconstruct.casting_table(TCT("ender_slime_grass_seeds"), Fluid.of(TCT("ender_slime"), 250), F(`#seeds`), true, 40)
	
	
	
	//slimy soil blocks
	const slimeBases = [MC("dirt"), TCT("earth_slime_dirt"), TCT("sky_slime_dirt"), TCT("ichor_slime_dirt"), TCT("ender_slime_dirt")]
	const slimeSeeds = ["earth_slime", "sky_slime", "ender_slime", "blood_slime"]
	const slimyDirts = {
		earth_slime: [
			TCT("earth_vanilla_slime_grass"),
			TCT("earth_earth_slime_grass"),
			TCT("earth_sky_slime_grass"),
			TCT("earth_ichor_slime_grass"),
			TCT("earth_ender_slime_grass"),
		],
		sky_slime: [
			TCT("sky_vanilla_slime_grass"),
			TCT("sky_earth_slime_grass"),
			TCT("sky_sky_slime_grass"),
			TCT("sky_ichor_slime_grass"),
			TCT("sky_ender_slime_grass"),
		],
		ender_slime: [
			TCT("ender_vanilla_slime_grass"),
			TCT("ender_earth_slime_grass"),
			TCT("ender_sky_slime_grass"),
			TCT("ender_ichor_slime_grass"),
			TCT("ender_ender_slime_grass"),
		],
		blood_slime: [
			TCT("blood_vanilla_slime_grass"),
			TCT("blood_earth_slime_grass"),
			TCT("blood_sky_slime_grass"),
			TCT("blood_ichor_slime_grass"),
			TCT("blood_ender_slime_grass"),
		],
	}
	
	slimeBases.forEach((base, i) => {
		slimeSeeds.forEach(seed => {
			event.recipes.create.deploying(slimyDirts[seed][i], [base, TCT(`${seed}_grass_seeds`)])
		})
	})
	
	//blazing blood from blaze powder
	event.recipes.tconstruct.melting(Fluid.of(TCT("blazing_blood"), 250), MC("blaze_powder"), 1000, 40)
	
	//wires
	const wiresCRA = ["copper", "iron", "gold"]
	wiresCRA.forEach(wire => {
		event.recipes.tconstruct.casting_table(CR_A(`${wire}_wire`), Fluid.of(TCT(`molten_${wire}`), 45), TCT("wire_cast"), false, 20)
	})
	
	//slimeballs transmutation
	event.shapeless(TCT("ichor_slime_ball"), [PRE('philosophers_stone'), MC("slime_ball")])
	event.shapeless(TCT("sky_slime_ball"), [PRE('philosophers_stone'), TCT("ichor_slime_ball")])
	event.shapeless(TCT("ender_slime_ball"), [PRE('philosophers_stone'), TCT("sky_slime_ball")])
	event.shapeless(MC("slime_ball"), [PRE('philosophers_stone'), TCT("ender_slime_ball")])
})