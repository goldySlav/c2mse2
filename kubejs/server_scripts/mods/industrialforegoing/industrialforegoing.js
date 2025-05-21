// priority: 0

ServerEvents.recipes((event) => {
  //removals
  removeRecipeByID(event, [
	  IF("pity_black_hole_tank"),
	  IF("simple_black_hole_tank"),
	  IF("advanced_black_hole_tank"),
	  IF("supreme_black_hole_tank"),
	  IF("common_black_hole_unit"),
	  IF("pity_black_hole_unit"),
	  IF("simple_black_hole_unit"),
	  IF("advanced_black_hole_unit"),
	  IF("supreme_black_hole_unit"),
	  IF("fluid_collector"),
	  IF("latex_processing_unit"),
	  IF("dye_mixer"),
	  IF("fluid_placer"),
	  IF("pitiful_generator"),
	  IF("sewer"),
	  IF("dissolution_chamber"),
	  IF("block_placer"),
	  IF("animal_rancher"),
	  IF("animal_feeder"),
	  IF("bioreactor"),
	  IF("resourceful_furnace"),
	  IF("sludge_refiner"),
	  IF("water_condensator"),
	  IF("biofuel_generator"),
	  IF("spores_recreator"),
	  IF("sewage_composter"),
	  IF("plant_sower"),

	  IF("laser_drill"),
	  IF("marine_fisher"),
	  IF("mycelial_culinary"),
	  IF("mob_detector"),
	  IF("mycelial_pink"),
	  IF("fermentation_station"),
	  IF("plant_fertilizer"),
	  IF("mycelial_furnace"),
	  IF("hydroponic_bed"),
	  IF("mycelial_frosty"),
	  
	  IF("enchantment_sorter"),
	  IF("mycelial_explosive"),
	  IF("enchantment_applicator"),
	  IF("mycelial_crimed"),
	  IF("fluid_sieving_machine"),
	  IF("potion_brewer"),
	  IF("fluid_laser_base"),
	  IF("mycelial_magma"),
	  IF("stasis_chamber"),
	  IF("enchantment_factory"),
	  IF("mycelial_potion"),
	  IF("material_stonework_factory"),
	  IF("mycelial_disenchantment"),
	  IF("mycelial_rocket"),
	  IF("ore_laser_base"),
	  IF("mob_duplicator"),
	  IF("mob_crusher"),
	  IF("mycelial_slimey"),
	  IF("washing_factory"),
	  IF("mycelial_ender"),
	  IF("enchantment_extractor"),
	  IF("mycelial_death"),
	  
	  IF("infinity_charger"),
	  
	  IF("plant_gatherer"),
	  IF("wither_builder"),
	  IF("mycelial_meatallurgic"),
	  IF("mycelial_halitosis"),
	  IF("mycelial_netherstar"),
	  IF("black_hole_controller"),

	  /industrialforegoing:conveyor/,

	  IF("dissolution_chamber/speed_addon_2"),
	  IF("dissolution_chamber/efficiency_addon_2"),
	  IF("dissolution_chamber/processing_addon_2"),
  ])
  
  
  //ether gas
	event.custom({
		"type": M("rotary"),
		"fluidInput": {
			"amount": 1,
			"fluid": IF("ether_gas")
		},
		"fluidOutput": {
			"amount": 1,
			"fluid": IF("ether_gas")
		},
		"gasInput": {
			"amount": 1,
			"gas": KJ("depleted_ether_gas")
		},
		"gasOutput": {
			"amount": 1,
			"gas": KJ("depleted_ether_gas")
		}
	})



  //mob slaughter factory
	removeRecipeByID(event, [
		IF("mob_slaughter_factory"),
	])
	event.recipes.extendedcrafting.shaped_table(IF("mob_slaughter_factory"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('netherite_sword'),
		D: MC('netherite_axe'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mechanical dirt
	removeRecipeByOutput(event, [
		IF("mechanical_dirt"),
	])
	customRecipes.industrialforegoing.dissolution(event, IF("mechanical_dirt"), [
		MU("cursed_earth"),
		MU("cursed_earth"),
		MC("rotten_flesh"),
		MC("rotten_flesh"),
		IF("machine_frame_simple"),
	], IF("meat"), 1000, 120)

  //infinity backpack
	removeRecipeByOutput(event, [
		IF("infinity_backpack"),
	])
	customRecipes.industrialforegoing.dissolution(event, IF("infinity_backpack"), [
		IF("common_black_hole_unit"),
		F("#gears/diamond"),
		IF("common_black_hole_unit"),
		IF("common_black_hole_tank"),
		IF("common_black_hole_tank"),
		F("#gears/gold"),
		SBP("netherite_backpack"),
		F("#gears/gold"),
	], IF("pink_slime"), 2000, 400)

  //block breaker
	removeRecipeByID(event, [
		IF("block_breaker"),
	])
	event.recipes.extendedcrafting.shaped_table(IF("block_breaker"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MU('mechanical_miner'),
		D: MC('netherite_pickaxe'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //animal baby separator
	removeRecipeByID(event, [
		IF("animal_baby_separator"),
	])
	event.recipes.extendedcrafting.shaped_table(IF("animal_baby_separator"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('golden_apple'),
		D: MC('golden_carrot'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //animal baby separator
	removeRecipeByID(event, [
		IF("fluid_extractor"),
	])
	event.recipes.extendedcrafting.shaped_table(IF("fluid_extractor"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFECEFG',
		'GFCACFG',
		'GFECEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: CR('mechanical_pump'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: CP('cobblestone_2'),
	})

  //common black hole tank
	removeRecipeByID(event, [
		IF("common_black_hole_tank"),
	])
	event.recipes.extendedcrafting.shaped_table(IF("common_black_hole_tank"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: FH("flopper"),
		B: CP('gold_2'),
		C: CR_ET("fluid_transmitter"),
		D: CR("fluid_tank"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_pity"),
		I: M('teleportation_core'),
	})

  //pity black hole tank
	event.recipes.extendedcrafting.shaped_table(IF("pity_black_hole_tank"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("common_black_hole_tank"),
		B: CP('gold_2'),
		C: CR_ET("fluid_transmitter"),
		D: CR("fluid_tank"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_pity"),
		I: M('teleportation_core'),
	})

  //simple black hole tank
	event.recipes.extendedcrafting.shaped_table(IF("simple_black_hole_tank"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("pity_black_hole_tank"),
		B: CP('gold_2'),
		C: CR_ET("fluid_transmitter"),
		D: CR("fluid_tank"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_simple"),
		I: M('teleportation_core'),
	})

  //advanced black hole tank
	event.recipes.extendedcrafting.shaped_table(IF("advanced_black_hole_tank"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("simple_black_hole_tank"),
		B: CP('gold_2'),
		C: CR_ET("fluid_transmitter"),
		D: CR("fluid_tank"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_advanced"),
		I: M('teleportation_core'),
	})

  //supreme black hole tank
	event.recipes.extendedcrafting.shaped_table(IF("supreme_black_hole_tank"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("advanced_black_hole_tank"),
		B: CP('gold_2'),
		C: CR_ET("fluid_transmitter"),
		D: CR("fluid_tank"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_supreme"),
		I: M('teleportation_core'),
	})

  //common black hole unit
	event.recipes.extendedcrafting.shaped_table(IF("common_black_hole_unit"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: FS("#drawer"),
		B: CP('gold_2'),
		C: IC('obsidian_chest'),
		D: MB("netherite_barrel"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_pity"),
		I: M('teleportation_core'),
	})

  //pity black hole unit
	event.recipes.extendedcrafting.shaped_table(IF("pity_black_hole_unit"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("common_black_hole_unit"),
		B: CP('gold_2'),
		C: IC('obsidian_chest'),
		D: MB("netherite_barrel"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_pity"),
		I: M('teleportation_core'),
	})

  //simple black hole unit
	event.recipes.extendedcrafting.shaped_table(IF("simple_black_hole_unit"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("pity_black_hole_unit"),
		B: CP('gold_2'),
		C: IC('obsidian_chest'),
		D: MB("netherite_barrel"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_simple"),
		I: M('teleportation_core'),
	})

  //advanced black hole unit
	event.recipes.extendedcrafting.shaped_table(IF("advanced_black_hole_unit"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("simple_black_hole_unit"),
		B: CP('gold_2'),
		C: IC('obsidian_chest'),
		D: MB("netherite_barrel"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_advanced"),
		I: M('teleportation_core'),
	})

  //supreme black hole unit
	event.recipes.extendedcrafting.shaped_table(IF("supreme_black_hole_unit"), [
		'BGGGGGB',
		'GIFEFIG',
		'GFDCDFG',
		'GECACEG',
		'GFDHDFG',
		'GIFEFIG',
		'BGGGGGB',
	], {
		A: IF("advanced_black_hole_unit"),
		B: CP('gold_2'),
		C: IC('obsidian_chest'),
		D: MB("netherite_barrel"),
		E: MC('ender_eye'),
		F: MC('ender_pearl'),
		G: IF('plastic'),
		H: IF("machine_frame_supreme"),
		I: M('teleportation_core'),
	})

  //fluid collector
	event.recipes.extendedcrafting.shaped_table(IF("fluid_collector"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('bucket'),
		D: MC('redstone'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //latex processing unit
	event.recipes.extendedcrafting.shaped_table(IF("latex_processing_unit"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: IF('latex_bucket'),
		D: MC('water_bucket'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: CP('cobblestone_2'),
	})

  //dye mixer
	event.recipes.extendedcrafting.shaped_table(IF("dye_mixer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: F('#dyes'),
		D: F('#dyes'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //fluid placer
	event.recipes.extendedcrafting.shaped_table(IF("fluid_placer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('water_bucket'),
		D: MC('water_bucket'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //pitiful generator
	event.recipes.extendedcrafting.shaped_table(IF("pitiful_generator"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: IFC('iron_furnace'),
		D: IFC('iron_furnace'),
		E: P('dielectric_casing'),
		F: MC('iron_bars'),
		G: CP('cobblestone_2'),
	})

  //sewer
	event.recipes.extendedcrafting.shaped_table(IF("sewer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('brick'),
		D: MC('bucket'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //dissolution chamber
	event.recipes.extendedcrafting.shaped_table(IF("dissolution_chamber"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: IC('obsidian_chest'),
		D: MC('bucket'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //block placer
	event.recipes.extendedcrafting.shaped_table(IF("block_placer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MU('mechanical_placer'),
		D: MC('dropper'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //animal rancher
	event.recipes.extendedcrafting.shaped_table(IF("animal_rancher"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('bucket'),
		D: MC('shears'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //animal feeder
	event.recipes.extendedcrafting.shaped_table(IF("animal_feeder"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('wheat'),
		D: FFB('feeding_trough'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //bioreactor
	event.recipes.extendedcrafting.shaped_table(IF("bioreactor"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: F('#slimeballs'),
		D: F('#slimeballs'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //resourceful furnace
	event.recipes.extendedcrafting.shaped_table(IF("resourceful_furnace"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: IFC('obsidian_furnace'),
		D: MC('bucket'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //sludge refiner
	event.recipes.extendedcrafting.shaped_table(IF("sludge_refiner"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('bucket'),
		D: F('#gears/iron'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //biofuel generator
	event.recipes.extendedcrafting.shaped_table(IF("biofuel_generator"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC("lava_bucket"),
		D: MC('piston'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //spores recreator
	event.recipes.extendedcrafting.shaped_table(IF("spores_recreator"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: F('#mushrooms'),
		D: F('#mushrooms'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //sewage composter
	event.recipes.extendedcrafting.shaped_table(IF("sewage_composter"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('piston'),
		D: MC('piston'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //sewage composter
	event.recipes.extendedcrafting.shaped_table(IF("plant_sower"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('flower_pot'),
		D: MC('flower_pot'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})



  //laser drill
	event.recipes.extendedcrafting.shaped_table(IF("laser_drill"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('diamond_2'),
		C: LB("laser_source_block"),
		D: LB("laser_source_block"),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //marine fisher
	event.recipes.extendedcrafting.shaped_table(IF("marine_fisher"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('fishing_rod'),
		D: F('#fishes'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial culinary
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_culinary"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC("lava_bucket"),
		D: F('#crops'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mob detector
	event.recipes.extendedcrafting.shaped_table(IF("mob_detector"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('observer'),
		D: Q('ender_watcher'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial pink
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_pink"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('pink_dye'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //fermentation station
	event.recipes.extendedcrafting.shaped_table(IF("fermentation_station"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('#logs'),
		D: MC('#logs'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //plant fertilizer
	event.recipes.extendedcrafting.shaped_table(IF("plant_fertilizer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('leather'),
		D: MC('glass_bottle'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //mycelial furnace
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_furnace"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: F('#storage_blocks/coal'),
		D: IF('pitiful_generator'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //hydroponic bed
	event.recipes.extendedcrafting.shaped_table(IF("hydroponic_bed"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: MC('dirt'),
		D: MC('netherite_hoe'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial frosty
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_frosty"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_simple"),
		B: CP('gold_2'),
		C: AE2('energy_cell'),
		D: MC('snowball'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})



  //enchantment sorter
	event.recipes.extendedcrafting.shaped_table(IF("enchantment_sorter"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('book'),
		D: CP('experience_2'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //mycelial explosive
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_explosive"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('tnt'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //enchantment applicator
	event.recipes.extendedcrafting.shaped_table(IF("enchantment_applicator"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('anvil'),
		D: CP('experience_2'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial crimed
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_crimed"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('crimson_fungus'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //fluid sieving machine
	event.recipes.extendedcrafting.shaped_table(IF("fluid_sieving_machine"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: EXD('#sieves'),
		D: EXD('netherite_mesh'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //potion brewer
	event.recipes.extendedcrafting.shaped_table(IF("potion_brewer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('brewing_stand'),
		D: MC('brewing_stand'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //fluid laser base
	event.recipes.extendedcrafting.shaped_table(IF("fluid_laser_base"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('water_bucket'),
		D: LB("laser_source_block"),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //mycelial magma
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_magma"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('magma_block'),
		D: MC("lava_bucket"),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //stasis chamber
	event.recipes.extendedcrafting.shaped_table(IF("stasis_chamber"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('cobweb'),
		D: MC('ghast_tear'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //enchantment factory
	event.recipes.extendedcrafting.shaped_table(IF("enchantment_factory"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: CP('experience_2'),
		D: MC('book'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //mycelial potion
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_potion"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('brewing_stand'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //material stonework factory
	event.recipes.extendedcrafting.shaped_table(IF("material_stonework_factory"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: CR_ME('mechanical_extruder'),
		D: MC('netherite_pickaxe'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial disenchantment
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_disenchantment"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: EIO('enchanter'),
		D: MC('book'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial rocket
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_rocket"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: AE2('energy_cell'),
		D: MC('gunpowder'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //ore laser base
	event.recipes.extendedcrafting.shaped_table(IF("ore_laser_base"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: LB("laser_source_block"),
		D: F('#raw_materials'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mob duplicator
	event.recipes.extendedcrafting.shaped_table(IF("mob_duplicator"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: EIO('monster_token'),
		D: EIO('monster_token'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //mob crusher
	event.recipes.extendedcrafting.shaped_table(IF("mob_crusher"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('netherite_sword'),
		D: MC('netherite_sword'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial slimey
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_slimey"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('slime_block'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //washing factory
	event.recipes.extendedcrafting.shaped_table(IF("washing_factory"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: IF('meat_feeder'),
		D: IF('pink_slime_ingot'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //mycelial ender
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_ender"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('ender_pearl'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //enchantment extractor
	event.recipes.extendedcrafting.shaped_table(IF("enchantment_extractor"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: CP('experience_2'),
		D: MC('book'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial death
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_death"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: MC('rotten_flesh'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})



  //plant gatherer
	event.recipes.extendedcrafting.shaped_table(IF("plant_gatherer"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_pity"),
		B: CP('gold_2'),
		C: MC('netherite_hoe'),
		D: F('#seeds'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})



  //wither builder
	event.recipes.extendedcrafting.shaped_table(IF("wither_builder"), [
		'BGGGGGB',
		'GHFFFHG',
		'GFDDDFG',
		'GFCACFG',
		'GFEEEFG',
		'GHFFFHG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_supreme"),
		B: CP('gold_2'),
		C: MC('wither_skeleton_skull'),
		D: MC('nether_star'),
		E: MC('soul_sand'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
		H: P('dielectric_casing'),
	})

  //mycelial meatallurgic
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_meatallurgic"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_supreme"),
		B: CP('gold_2'),
		C: F('#ingots'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/iron'),
		G: IF('plastic'),
	})

  //mycelial halitosis
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_halitosis"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_supreme"),
		B: CP('gold_2'),
		C: MC('dragon_breath'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

  //mycelial netherstar
	event.recipes.extendedcrafting.shaped_table(IF("mycelial_netherstar"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_supreme"),
		B: CP('gold_2'),
		C: EC('nether_star_block'),
		D: AE2('energy_cell'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})

  //black hole controller
	event.recipes.extendedcrafting.shaped_table(IF("black_hole_controller"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_supreme"),
		B: CP('gold_2'),
		C: AE2('controller'),
		D: X('controller'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})



  //soul_laser_base
	removeRecipeByOutput(event, [
		IFS("soul_laser_base"),
	])
	event.recipes.extendedcrafting.shaped_table(IFS("soul_laser_base"), [
		'BGGGGGB',
		'GFFFFFG',
		'GFEDEFG',
		'GFCACFG',
		'GFEDEFG',
		'GFFFFFG',
		'BGGGGGB',
	], {
		A: IF("machine_frame_advanced"),
		B: CP('gold_2'),
		C: LB("laser_source_block"),
		D: DD('soul_dust'),
		E: P('dielectric_casing'),
		F: F('#gears/diamond'),
		G: IF('plastic'),
	})
	
	
	
  //range addons
	removeRecipeByOutput(event, [
		IF("range_addon0"),
		IF("range_addon1"),
		IF("range_addon2"),
		IF("range_addon3"),
		IF("range_addon4"),
		IF("range_addon5"),
		IF("range_addon6"),
		IF("range_addon7"),
		IF("range_addon8"),
		IF("range_addon9"),
		IF("range_addon10"),
		IF("range_addon11"),
	])
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon0"), [
		MC("redstone"),
		MC("cobblestone"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("cobblestone"),
		MC("cobblestone"),
		MC("cobblestone"),
	], IF("latex"), 1000, 10)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon1"), [
		MC("redstone"),
		IF("range_addon0"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("lapis_lazuli"),
		MC("lapis_lazuli"),
		MC("lapis_lazuli"),
	], IF("latex"), 1000, 20)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon2"), [
		MC("redstone"),
		IF("range_addon1"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("bone_meal"),
		MC("bone_meal"),
		MC("bone_meal"),
	], IF("latex"), 1000, 30)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon3"), [
		MC("redstone"),
		IF("range_addon2"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("iron_nugget"),
		MC("iron_nugget"),
		MC("iron_nugget"),
	], IF("latex"), 1000, 40)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon4"), [
		MC("redstone"),
		IF("range_addon3"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("copper_ingot"),
		MC("copper_ingot"),
		MC("copper_ingot"),
	], IF("latex"), 1000, 50)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon5"), [
		MC("redstone"),
		IF("range_addon4"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("gold_nugget"),
		MC("gold_nugget"),
		MC("gold_nugget"),
	], IF("latex"), 1000, 60)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon6"), [
		MC("redstone"),
		IF("range_addon5"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("iron_ingot"),
		MC("iron_ingot"),
		MC("iron_ingot"),
	], IF("latex"), 1000, 70)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon7"), [
		MC("redstone"),
		IF("range_addon6"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("gold_ingot"),
		MC("gold_ingot"),
		MC("gold_ingot"),
	], IF("latex"), 1000, 80)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon8"), [
		MC("redstone"),
		IF("range_addon7"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("quartz"),
		MC("quartz"),
		MC("quartz"),
	], IF("latex"), 1000, 90)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon9"), [
		MC("redstone"),
		IF("range_addon8"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("diamond"),
		MC("diamond"),
		MC("diamond"),
	], IF("latex"), 1000, 100)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon10"), [
		MC("redstone"),
		IF("range_addon9"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("popped_chorus_fruit"),
		MC("popped_chorus_fruit"),
		MC("popped_chorus_fruit"),
	], IF("latex"), 1000, 110)
	customRecipes.industrialforegoing.dissolution(event, IF("range_addon11"), [
		MC("redstone"),
		IF("range_addon10"),
		MC("redstone"),
		MC("glass_pane"),
		MC("glass_pane"),
		MC("emerald"),
		MC("emerald"),
		MC("emerald"),
	], IF("latex"), 1000, 120)
})