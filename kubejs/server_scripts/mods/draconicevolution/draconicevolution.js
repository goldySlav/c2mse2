// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		DE("draconium_core"),
		DE("module_core"),
		DE("crafting_core"),
		DE("basic_crafting_injector"),
		DE("wyvern_energy_core"),
		DE("draconic_energy_core"),
		DE("chaotic_energy_core"),
		DE("grinder"),
		DE("energy_pylon"),
		DE("reactor_prt_out_rotor"),
		DE("reactor_prt_in_rotor"),
		DE("energy_core"),
		DE("wyvern_core"),
		DE("awakened_core"),
		DE("chaotic_core"),
		DE("wyvern_crafting_injector"),
		DE("awakened_crafting_injector"),
		DE("chaotic_crafting_injector"),
		DE("wyvern_shovel"),
		DE("wyvern_hoe"),
		DE("wyvern_pickaxe"),
		DE("wyvern_axe"),
		DE("wyvern_bow"),
		DE("wyvern_sword"),
		DE("draconic_shovel"),
		DE("draconic_hoe"),
		DE("draconic_pickaxe"),
		DE("draconic_axe"),
		DE("draconic_bow"),
		DE("draconic_sword"),
		DE("draconic_staff"),
		DE("chaotic_shovel"),
		DE("chaotic_hoe"),
		DE("chaotic_pickaxe"),
		DE("chaotic_axe"),
		DE("chaotic_bow"),
		DE("chaotic_sword"),
		DE("chaotic_staff"),
		DE("reactor_prt_stab_frame"),
		DE("reactor_stabilizer"),
		DE("reactor_core"),
		DE("reactor_injector"),
		DE("reactor_prt_rotor_full"),
		DE("reactor_prt_focus_ring"),
		DE("wyvern_chestpiece"),
		DE("draconic_chestpiece"),
		DE("chaotic_chestpiece"),
		DE("wyvern_capacitor"),
		DE("draconic_capacitor"),
		DE("chaotic_capacitor"),
		DE("dislocator"),
		DE("advanced_dislocator"),
		DE("particle_generator"),
		DE("energy_core_stabilizer"),
	])
	removeRecipeByID(event, [
		DE("awakened_draconium_block"),
	])
	
	//chaotic shield control module
	removeRecipeByID(event, [
		DE("modules/item_chaotic_shield_control"),
	])
	event.shaped(DE('item_chaotic_shield_control'), [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: KJ('the_ultimate_star'),
		B: CM('star_infused_netherite_ingot'),
		C: DE('chaotic_core'),
		D: DE('item_draconic_shield_control'),
	})

	//draconium core
	event.recipes.extendedcrafting.shaped_table(DE("draconium_core"), [
		'G         G',
		' G  FFF  G ',
		'   EEEEE   ',
		'  EDDDDDE  ',
		' FEDCBCDEF ',
		'GFEDBABDEFG',
		' FEDCBCDEF ',
		'  EDDDDDE  ',
		'   EEEEE   ',
		' G  FFF  G ',
		'G         G',
	], {
		A: singularityId("experience_infused_emerald"),
		B: DE("draconium_ingot"),
		C: MU("experience_opinium_core"),
		D: M("hdpe_stick"),
		E: F("#ingots/unstable"),
		F: M("reprocessed_fissile_fragment"),
		G: F("#storage_blocks/steel"),
	})

	//module core
	event.recipes.extendedcrafting.shaped_table(DE("module_core"), [
		'FFFFFFFFFFF',
		'FG       GF',
		'F  EEEEE  F',
		'F EDDDDDE F',
		'F EDCBCDE F',
		'FGEDBABDEGF',
		'F EDCBCDE F',
		'F EDDDDDE F',
		'F  EEEEE  F',
		'FG       GF',
		'FFFFFFFFFFF',
	], {
		A: singularityId("experience_infused_emerald"),
		B: DE("draconium_ingot"),
		C: MU("experience_opinium_core"),
		D: M("hdpe_stick"),
		E: F("#ingots/unstable"),
		F: M("reprocessed_fissile_fragment"),
		G: F("#storage_blocks/steel"),
	})

	//crafting core
	event.recipes.extendedcrafting.shaped_table(DE("crafting_core"), [
		'   AAAAAAAA',
		'  BA     BA',
		' B A    B A',
		'AAAAAAAA  A',
		'A  A C A  A',
		'A  ACCCA  A',
		'A  A C A  A',
		'A  AAAAAAAA',
		'A B    A B ',
		'AB     AB  ',
		'AAAAAAAA   ',
	], {
		A: F("#storage_blocks/unstable"),
		B: M("hdpe_stick"),
		C: DE("draconium_core"),
	})

	//basic crafting injector
	event.recipes.extendedcrafting.shaped_table(DE("basic_crafting_injector"), [
		'     F     ',
		'CCCBBBBBCCC',
		'CDDDDDDDDDC',
		'CDEEEEEEEDC',
		'CDDDDDDDDDC',
		'AAAAAAAAAAA',
	], {
		A: CP("iron_3"),
		B: DE("draconium_core"),
		C: MU("experience_opinium_core"),
		D: F("#storage_blocks/unstable"),
		E: M("reprocessed_fissile_fragment"),
		F: DE("small_chaos_frag"),
	})
	
	//tiny chaos fragment
	event.recipes.mekanismPurifying(DE("small_chaos_frag"), KJ("universe_piece"), `1x ${KJ("neutron_gas")}`)
	
	//wyvern energy controller
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_energy_core"),
		DE("draconium_core"),
		[
			`4x ${DE("draconium_ingot")}`, `4x ${DE("wyvern_core")}`, `2x ${DE("draconium_core")}`
		],
		2
	)
	
	//draconic energy controller
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_energy_core"),
		DE("wyvern_energy_core"),
		[
			`4x ${DE("awakened_draconium_ingot")}`, `6x ${DE("awakened_core")}`, `2x ${DE("wyvern_energy_core")}`
		],
		3
	)
	
	//chaotic energy controller
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_energy_core"),
		DE("draconic_energy_core"),
		[
			`6x ${DE("awakened_draconium_block")}`, `6x ${DE("chaotic_core")}`, `2x ${DE("draconic_energy_core")}`
		],
		4
	)

	//grinder
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("grinder"),
		IF("mob_crusher"),
		[
			`2x ${PET("emerald_netherite_sword")}`, `4x ${DE("small_chaos_frag")}`, DE("draconium_ingot"), DE("draconium_core")
		]
	)

	//energy pylon
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("energy_pylon"),
		DE("draconium_core"),
		[
			`2x ${DE("draconium_ingot")}`, `4x ${DE("small_chaos_frag")}`, FN("flux_plug"), FN("flux_point")
		]
	)

	//reactor stabilizer outer rotor
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_prt_out_rotor"),
		DE("draconium_core"),
		[
			`4x ${CP("diamond_5")}`, `4x ${DE("small_chaos_frag")}`
		]
	)

	//reactor stabilizer inner rotor
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_prt_in_rotor"),
		DE("draconium_core"),
		[
			`4x ${CP("gold_5")}`, `4x ${DE("small_chaos_frag")}`
		]
	)

	//energy core
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("energy_core"),
		FN("flux_controller"),
		[
			`5x ${DE("draconium_ingot")}`, `3x ${DE("wyvern_core")}`, `2x ${DE("wyvern_energy_core")}`
		],
		2
	)

	//wyvern core
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_core"),
		DE("draconium_core"),
		[
			`4x ${DE("draconium_core")}`, `4x ${DE("small_chaos_frag")}`, `2x ${F('#storage_blocks/desh')}`,
		]
	)

	//awakened core
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("awakened_core"),
		DE("wyvern_core"),
		[
			`2x ${DE("wyvern_core")}`, `4x ${DE("awakened_draconium_ingot")}`, `4x ${DE("medium_chaos_frag")}`, `2x ${F('#storage_blocks/ostrum')}`,
		],
		2
	)

	//chaotic core
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_core"),
		DE("awakened_core"),
		[
			`6x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_block")}`, `4x ${DE("large_chaos_frag")}`, `2x ${F('#storage_blocks/calorite')}`,
		],
		3
	)

	//awakened draconium block
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("awakened_draconium_block"),
		DE("draconium_block"),
		[
			`9x ${DE("draconium_core")}`, DE("dragon_heart")
		],
		2
	)

	//wyvern crafting injector
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_crafting_injector"),
		DE("basic_crafting_injector"),
		[
			`4x ${DE("wyvern_core")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`
		],
	)

	//awakened crafting injector
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("awakened_crafting_injector"),
		DE("wyvern_crafting_injector"),
		[
			`5x ${DE("awakened_core")}`, `2x ${DE("wyvern_core")}`, `3x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//chaotic crafting injector
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_crafting_injector"),
		DE("awakened_crafting_injector"),
		[
			`6x ${DE("chaotic_core")}`, `2x ${DE("awakened_core")}`, `4x ${DE("large_chaos_frag")}`
		],
		3
	)

	//wyvern shovel
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_shovel"),
		PRE("rm_shovel"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//wyvern hoe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_hoe"),
		PRE("rm_hoe"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//wyvern pickaxe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_pickaxe"),
		IF("infinity_drill"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//wyvern axe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_axe"),
		IF("infinity_saw"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//wyvern bow
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_bow"),
		IF("infinity_launcher"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//wyvern sword
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_sword"),
		IF("infinity_hammer"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)

	//draconic shovel
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_shovel"),
		DE("wyvern_shovel"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//draconic hoe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_hoe"),
		DE("wyvern_hoe"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//draconic pickaxe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_pickaxe"),
		DE("wyvern_pickaxe"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//draconic axe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_axe"),
		DE("wyvern_axe"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//draconic bow
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_bow"),
		DE("wyvern_bow"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//draconic sword
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_sword"),
		DE("wyvern_sword"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//draconic staff
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_staff"),
		DE("awakened_core"),
		[
			`4x ${DE("awakened_draconium_ingot")}`, DE("draconic_pickaxe"), DE("draconic_shovel"), DE("draconic_sword"),
			`3x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)

	//chaotic shovel
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_shovel"),
		DE("draconic_shovel"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//chaotic hoe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_hoe"),
		DE("draconic_hoe"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//chaotic pickaxe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_pickaxe"),
		DE("draconic_pickaxe"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//chaotic axe
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_axe"),
		DE("draconic_axe"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//chaotic bow
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_bow"),
		DE("draconic_bow"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//chaotic sword
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_sword"),
		DE("draconic_sword"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//chaotic staff
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_staff"),
		DE("draconic_staff"),
		[
			`4x ${DE("awakened_draconium_block")}`, DE("chaotic_pickaxe"), DE("chaotic_shovel"), DE("chaotic_sword"),
			`3x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)

	//reactor stabilizer frame
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_prt_stab_frame"),
		DE("wyvern_core"),
		[
			`4x ${CP("iron_3")}`, `2x ${DE("wyvern_core")}`, `4x ${DE("awakened_draconium_ingot")}`
		],
		2
	)

	//reactor stabilizer
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_stabilizer"),
		DE("reactor_prt_stab_frame"),
		[
			`6x ${DE("awakened_draconium_block")}`, `4x ${DE("chaotic_core")}`, `2x ${DE("chaos_shard")}`,
			DE("reactor_prt_focus_ring"), DE("reactor_prt_rotor_full"),
		],
		4
	)

	//reactor core
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_core"),
		MG("fusion_reactor_controller"),
		[
			`6x ${DE("awakened_draconium_block")}`, `4x ${DE("chaotic_core")}`, `4x ${DE("chaos_shard")}`,
		],
		4
	)

	//reactor injector
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_injector"),
		DE("chaotic_core"),
		[
			`6x ${DE("awakened_draconium_ingot")}`, `4x ${DE("chaotic_core")}`, `4x ${DE("reactor_prt_in_rotor")}`,
		],
		4
	)

	//reactor rotor full
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_prt_rotor_full"),
		DE("medium_chaos_frag"),
		[
			`2x ${DE("draconium_ingot")}`, `4x ${DE("wyvern_core")}`, `2x ${DE("reactor_prt_in_rotor")}`,
			`2x ${DE("reactor_prt_out_rotor")}`
		],
		2
	)

	//reactor rotor full
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("reactor_prt_focus_ring"),
		DE("draconium_core"),
		[
			`3x ${CP("gold_3")}`, `4x ${DE("wyvern_core")}`, `3x ${CP("diamond_3")}`,
		],
		2
	)
	
	//wyvern chestpiece
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_chestpiece"),
		M("mekasuit_bodyarmor"),
		[
			`2x ${DE("wyvern_core")}`, `2x ${DE("draconium_ingot")}`, `2x ${DE("basic_relay_crystal")}`,
			`2x ${DE("wyvern_energy_core")}`, `2x ${DE("medium_chaos_frag")}`
		],
		2
	)
	
	//draconic chestpiece
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_chestpiece"),
		DE("wyvern_chestpiece"),
		[
			`4x ${DE("awakened_core")}`, `2x ${DE("awakened_draconium_ingot")}`, `2x ${DE("wyvern_relay_crystal")}`,
			`2x ${DE("draconic_energy_core")}`, `2x ${DE("large_chaos_frag")}`
		],
		3
	)
	
	//chaotic chestpiece
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_chestpiece"),
		DE("draconic_chestpiece"),
		[
			`4x ${DE("chaotic_core")}`, `2x ${DE("awakened_draconium_block")}`, `2x ${DE("draconic_relay_crystal")}`,
			`2x ${DE("chaotic_energy_core")}`, `4x ${DE("chaos_shard")}`
		],
		4
	)
	
	//wyvern capacitor
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("wyvern_capacitor"),
		DE("wyvern_core"),
		[
			`2x ${DE("wyvern_core")}`, `4x ${DE("draconium_ingot")}`, `4x ${DE("wyvern_energy_core")}`
		],
		2
	)
	
	//draconic capacitor
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("draconic_capacitor"),
		DE("wyvern_capacitor"),
		[
			`4x ${DE("awakened_core")}`, `4x ${DE("awakened_draconium_ingot")}`, `4x ${DE("draconic_energy_core")}`
		],
		3
	)
	
	//chaotic capacitor
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("chaotic_capacitor"),
		DE("draconic_capacitor"),
		[
			`6x ${DE("chaotic_core")}`, `4x ${DE("awakened_draconium_block")}`, `4x ${DE("chaotic_energy_core")}`
		],
		4
	)
	
	//dislocator
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("dislocator"),
		M("teleportation_core"),
		[
			`4x ${DE("draconium_dust")}`, `4x ${MC("blaze_powder")}`
		],
	)

	//advanced dislocator
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("advanced_dislocator"),
		DE("dislocator"),
		[
			`3x ${M("teleportation_core")}`, DE("wyvern_core"), `4x ${DE("draconium_ingot")}`
		],
		2
	)

	//particle generator
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("particle_generator"),
		DE("draconium_core"),
		[
			`4x ${CP("redstone_3")}`, `4x ${MC("blaze_rod")}`
		],
	)

	//energy core stabilizer
	customRecipes.draconicevolution.fusion_craft(
		event,
		DE("energy_core_stabilizer"),
		DE("particle_generator"),
		[
			`4x ${CP("diamond_3")}`, `4x ${DE("draconium_core")}`
		],
	)
})