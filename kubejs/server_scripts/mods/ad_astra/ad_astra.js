// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		AA("solar_panel"),
		AA("energizer"),
		AA("steel_cable"),
		AA("desh_cable"),
		AA("desh_fluid_pipe"),
		AA("ostrum_fluid_pipe"),
		AA("cable_duct"),
		AA("fluid_pipe_duct"),
		AA("coal_generator"),
		AA("nasa_workbench"),
		AA_GA("automation_nasa_workbench"),
		AA("fuel_refinery"),
		AA("oxygen_loader"),
		AA("water_pump"),
		AA("cryo_freezer"),
		AA("photovoltaic_etrium_cell"),
		AA("photovoltaic_vesnium_cell"),
		AA("wrench"),
		AA("etrionic_blast_furnace"),
		AA("space_helmet"),
		AA("space_suit"),
		AA("space_pants"),
		AA("space_boots"),
		AA("netherite_space_helmet"),
		AA("netherite_space_suit"),
		AA("netherite_space_pants"),
		AA("netherite_space_boots"),
		AA("jet_suit_helmet"),
		AA("jet_suit"),
		AA("jet_suit_pants"),
		AA("jet_suit_boots"),
	])
	removeRecipeByID(event, [
		AA("iron_rod"),
		AA("steel_rod"),
		AA_GA("crafting/enchanted_book_space_breathing"),
		AA_GA("crafting/enchanted_book_acid_rain_proof"),
		AA_GA("crafting/enchanted_book_gravity_normalizing"),
		AA_GA("crafting/enchanted_book_space_fire_proof"),
	])
	removeRecipeByType(event, [
		AA("compressing"),
		AA("alloying"),
	])
	
	colours.forEach(color => {
		//industrial lamps unify with projectred
		removeRecipeByOutput(event, [
			AA(`${color}_industrial_lamp`),
			AA(`small_${color}_industrial_lamp`),
		])
		event.stonecutting(AA(`${color}_industrial_lamp`, 4), PR_I(`${color}_illumar_lamp`)).id(KJ(`projectred/${color}_industrial_lamp`))
		event.stonecutting(AA(`small_${color}_industrial_lamp`, 4), PR_I(`${color}_illumar_lamp`)).id(KJ(`projectred/small_${color}_industrial_lamp`))
		
		//flags to iron tier
		removeRecipeByOutput(event, [
			AA(`${color}_flag`),
		])
		
		 event.shaped(AA(`${color}_flag`), [
			'ABB',
			'ABB',
			'A  '
		], {
			A: F('#rods/iron'),
			B: F('#wool'),
		})
	})
	
	//doors unify
	removeRecipeByOutput(event, [
		AA("reinforced_door"),
		AA("airlock"),
		AA("steel_sliding_door"),
		AA("iron_sliding_door"),
		AA("steel_door"),
	])
	event.stonecutting(AA("reinforced_door"), MI_D("#doors_big/iron"))
	event.stonecutting(AA("airlock"), MI_D("#doors_big/iron"))
	event.stonecutting(AA("steel_sliding_door"), MI_D("#doors_big/iron"))
	event.stonecutting(AA("iron_sliding_door"), MI_D("#doors_big/iron"))
	event.stonecutting(AA("steel_door"), MI_D("#doors_iron"))
	
	//sheets compat AA
	const sheets = ["steel", "ostrum", "calorite", "desh"]
	sheets.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, AA(`${sheet}_plate`), F(`#ingots/${sheet}`))
	})
	
	//sheets compat Mekanism
	const sheetsM = ["steel", "ostrum", "calorite", "desh"]
	sheetsM.forEach(sheet => {
		event.recipes.mekanism.sawing(F(`#ingots/${sheet}`), Item.of(AA(`${sheet}_plate`), 2))
	})
	
	//oxygen gear
	removeRecipeByOutput(event, [
		AA("oxygen_gear"),
	])
	event.recipes.extendedcrafting.shaped_table(AA('oxygen_gear'), [
		'  A  ',
		'BBBBB',
		'BCBCB',
		'BCBCB',
		'BBBBB',
	], {
		A: MC('end_rod'),
		B: F('#plates/steel'),
		C: M('electrolytic_core'),
	})

	//gas tank
	removeRecipeByOutput(event, [
		AA("gas_tank"),
	])
	event.recipes.extendedcrafting.shaped_table(AA('gas_tank'), [
		'  C  ',
		' ADA ',
		' ABA ',
		' AEA ',
		' AAA ',
	], {
		A: F('#plates/steel'),
		B: M('scuba_tank'),
		C: F('#gears/gold'),
		D: M('electrolytic_core'),
		E: M('ultimate_chemical_tank'),
	})

	//oil
	removeRecipeByID(event, [
		AA_GA("compat/industrialforegoing/laser_drill_fluid/oil"),
	])
	event.custom({
		type: M('centrifuging'),
		input: { amount: 4, gas: M('fissile_fuel') },
		output: { amount: 1, gas: KJ('gaseous_oil') }
	});
  
	event.custom({
		"type": M("rotary"),
		"fluidInput": {
			"amount": 1,
			"fluid": AA("oil")
		},
		"fluidOutput": {
			"amount": 1,
			"fluid": AA("oil")
		},
		"gasInput": {
			"amount": 1,
			"gas": KJ("gaseous_oil")
		},
		"gasOutput": {
			"amount": 1,
			"gas": KJ("gaseous_oil")
		}
	})

	//fuel
	event.custom({
		"type": M("rotary"),
		"fluidInput": {
			"amount": 1,
			"fluid": AA("fuel")
		},
		"fluidOutput": {
			"amount": 1,
			"fluid": AA("fuel")
		},
		"gasInput": {
			"amount": 1,
			"gas": KJ("gaseous_fuel")
		},
		"gasOutput": {
			"amount": 1,
			"gas": KJ("gaseous_fuel")
		}
	})

	event.custom({
		"type": M("reaction"),
		"duration": 10,
		"fluidInput": {
			"amount": 200,
			"fluid": AA("oil")
		},
		"gasInput": {
			"amount": 200,
			"gas": MG("fusion_fuel")
		},
		"gasOutput": {
			"amount": 400,
			"gas": KJ("gaseous_fuel")
		},
		"itemInput": {
			"amount": 1,
			"ingredient": {
				"item": M("reprocessed_fissile_fragment")
			}
		}
	})
	
	//engine frame
	removeRecipeByOutput(event, [
		AA("engine_frame"),
	])
	event.recipes.extendedcrafting.shaped_table(AA(`engine_frame`), [
		'  AAAAAAAAA',
		' BA      BA',
		'AAAAAAAAA A',
		'A A     A A',
		'A A     A A',
		'A A     A A',
		'A A     A A',
		'A A     A A',
		'A AAAAAAAAA',
		'AB      AB ',
		'AAAAAAAAA  ',
	], {
		A: CP("steel_3"),
		B: F("#rods/steel"),
	})

	//engine fan
	removeRecipeByOutput(event, [
		AA("fan"),
	])
	event.recipes.extendedcrafting.shaped_table(AA(`fan`), [
		'  BBB    ',
		'  BCCB   ',
		'   BCB BB',
		' BBBCBBCB',
		'BCCCACCCB',
		'BCBBCBBB ',
		'BB BCB   ',
		'   BCCB  ',
		'    BBB  ',
	], {
		A: MG("turbine_rotor"),
		B: MG("turbine_blade"),
		C: CR("propeller"),
	}).tier(5)

	//rocket fin
	removeRecipeByOutput(event, [
		AA("rocket_fin"),
	])
	event.recipes.extendedcrafting.shaped_table(AA(`rocket_fin`), [
		'     A     ',
		'    ABA    ',
		'   ABBBA   ',
		'  ABBCBBA  ',
		' ACCCACCCA ',
		'ACCCA ACCCA',
		'ACCA   ACCA',
		'ACA     ACA',
		'AA       AA',
	], {
		A: F("#plates/steel"),
		B: CP("steel_3"),
		C: CP("iron_4"),
	})

	//rocket nose cone
	removeRecipeByOutput(event, [
		AA("rocket_nose_cone"),
	])
	event.recipes.extendedcrafting.shaped_table(AA(`rocket_nose_cone`), [
		'     A     ',
		'     B     ',
		'     C     ',
		'    CDC    ',
		'   CDEDC   ',
		'  CDEEEDC  ',
		' CDEEEEEDC ',
		'CDDDDDDDDDC',
		' CCCCCCCCC ',
	], {
		A: PREXP("magnum_star_omega"),
		B: MC("end_rod"),
		C: F("#plates/steel"),
		D: CP("steel_3"),
		E: CP("iron_4"),
	})

	//oxygen loader
	removeRecipeByOutput(event, [
		AA("oxygen_distributor"),
	])
    event.recipes.extendedcrafting.shaped_table(AA("oxygen_distributor"), [
		'BGGGGGGGB',
		'GFFFFFFFG',
		'GFEDDDEFG',
		'GFCCACCFG',
		'GFEDDDEFG',
		'GFFFFFFFG',
		'BGGGGGGGB',
	], {
		A: M("rotary_condensentrator"),
		B: CP('steel_3'),
		C: AA('oxygen_gear'),
		D: AA('fan'),
		E: M('ultimate_control_circuit'),
		F: M('ultimate_tier_installer'),
		G: M('hdpe_rod'),
	})
	
	//tanks & engines
	const spaceMats = {
		steel: { A: CP("iron_4"), B: CP("steel_3"), C: PREXP("green_matter"), D: PREXP("red_power_flower") },
		desh: { A: CP("gold_4"), B: CP("desh_3"), C: PREXP("lime_matter"), D: PREXP("magenta_power_flower") },
		ostrum: { A: CP("diamond_4"), B: CP("ostrum_3"), C: PREXP("yellow_matter"), D: PREXP("pink_power_flower") },
		calorite: { A: CP("emerald_4"), B: CP("calorite_3"), C: PREXP("orange_matter"), D: PREXP("purple_power_flower") },
	}

	for (let mat in spaceMats) {
		//tanks
		removeRecipeByOutput(event, [
			AA(`${mat}_tank`),
		])
		event.recipes.extendedcrafting.shaped_table(AA(`${mat}_tank`), [
			'AAAAAAA  ',
			'ABBBBBA  ',
			'ABGCGBA  ',
			'ABCDCBA  ',
			'ABCFCBAE ',
			'ABCDCBAEE',
			'ABGCGBAE ',
			'ABBBBBA  ',
			'AAAAAAA  ',
		], {
			A: spaceMats[mat].A,
			B: spaceMats[mat].B,
			C: M("ultimate_chemical_tank"),
			D: M("electrolytic_core"),
			E: singularityId("reprocessed_fissile_fragment"),
			F: spaceMats[mat].C,
			G: singularityId("ultimate_chemical_tank"),
		})
		
		//engines
		removeRecipeByOutput(event, [
			AA(`${mat}_engine`),
		])
		event.recipes.extendedcrafting.shaped_table(AA(`${mat}_engine`), [
			' AAAAAAAAAA',
			'ABBBBBBBBBA',
			'ABEEEEEEEBA',
			'ABEEEJEEEBA',
			'ABBBBKBBBBA',
			'AAAAAIAAAAA',
			'    DHD    ',
			'   DFGFD   ',
			' DCCCCCCCD ',
			'AAAAAAAAAAA',
		], {
			A: spaceMats[mat].A,
			B: spaceMats[mat].B,
			C: AA("fan"),
			D: AA("engine_frame"),
			E: singularityId("reprocessed_fissile_fragment"),
			F: spaceMats[mat].D,
			G: spaceMats[mat].C,
			H: PREXP("infinite_fuel"),
			I: singularityId("antimatter"),
			J: singularityId("ultimate_chemical_tank"),
			K: singularityId("ultimate_fluid_tank"),
		})
	}
	
	//oxygen cans
	removeRecipeByOutput(event, [
		AA_GA("oxygen_can"),
		AA_GA("netherite_oxygen_can"),
	])
	event.smithing(AA_GA("oxygen_can"), AA("oxygen_gear"), M('canteen'), M('ultimate_chemical_tank'))
	event.smithing(AA_GA("netherite_oxygen_can"), AA_GA('oxygen_can'), F('#ingots/netherite'))
	
	//rockets
	removeRecipeByOutput(event, [
		AA("tier_1_rocket"),
		AA("tier_2_rocket"),
		AA("tier_3_rocket"),
		AA("tier_4_rocket"),
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("tier_1_rocket"),
		X("controller"),
		[
			`1x ${AA("rocket_nose_cone")}`, `1x ${AA("steel_engine")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`, 
			`2x ${CP("steel_4")}`, `4x ${AA("rocket_fin")}`, `2x ${AA("steel_tank")}`, `2x ${M("pellet_antimatter")}`,
		]
	)
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("tier_2_rocket"),
		AA("tier_1_rocket"),
		[
			`1x ${AA("rocket_nose_cone")}`, `1x ${AA("desh_engine")}`, `2x ${DE("wyvern_core")}`, `2x ${DE("medium_chaos_frag")}`, 
			`2x ${CP("desh_4")}`, `4x ${AA("rocket_fin")}`, `2x ${AA("desh_tank")}`, `2x ${M("pellet_antimatter")}`,
		],
		2
	)
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("tier_3_rocket"),
		AA("tier_2_rocket"),
		[
			`1x ${AA("rocket_nose_cone")}`, `1x ${AA("ostrum_engine")}`, `2x ${DE("awakened_core")}`, `2x ${DE("large_chaos_frag")}`, 
			`2x ${CP("ostrum_4")}`, `4x ${AA("rocket_fin")}`, `2x ${AA("ostrum_tank")}`, `2x ${M("pellet_antimatter")}`,
		],
		3
	)
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("tier_4_rocket"),
		AA("tier_3_rocket"),
		[
			`1x ${AA("rocket_nose_cone")}`, `1x ${AA("calorite_engine")}`, `2x ${DE("chaotic_core")}`, `2x ${DE("chaos_shard")}`, 
			`2x ${CP("calorite_4")}`, `4x ${AA("rocket_fin")}`, `2x ${AA("calorite_tank")}`, `2x ${M("pellet_antimatter")}`,
		],
		4
	)
	
	//rover
	removeRecipeByOutput(event, [
		AA("tier_1_rover"),
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("tier_1_rover"),
		MC("minecart"),
		[
			`4x ${AA("wheel")}`, `1x ${AA("desh_engine")}`, `1x ${CP("desh_4")}`, `2x ${DE("wyvern_core")}`,
			`2x ${DE("medium_chaos_frag")}`, `1x ${AA("radio")}`, `1x ${AA("large_gas_tank")}`,
		],
		2
	)
	
	//fuel loader (fuel transmitter)
	removeRecipeByOutput(event, [
		AA_GA("fuel_loader"),
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA_GA("fuel_loader"),
		CR_ET("fluid_transmitter"),
		[
			`2x ${CP("steel_3")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`,
			`2x ${M("ultimate_fluid_tank")}`, `2x ${M("teleportation_core")}`,
		]
	)
	
	//gravity normalizer & transmitter
	removeRecipeByOutput(event, [
		AA("gravity_normalizer"),
		AA_GA("gravity_normalizer"),
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("gravity_normalizer"),
		M("dimensional_stabilizer"),
		[
			`2x ${CP("steel_3")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`,
			`2x ${KJ("crystal_matrix_ingot")}`, 
		]
	)
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA_GA("gravity_normalizer"),
		AA("gravity_normalizer"),
		[
			`2x ${CP("desh_3")}`, `2x ${DE("wyvern_core")}`, `2x ${DE("medium_chaos_frag")}`,
			`2x ${CP("nether_star_2")}`, 
		],
		2
	)
	
	//rocket sensor
	removeRecipeByOutput(event, [
		AA_GA("rocket_sensor"),
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA_GA("rocket_sensor"),
		MC("observer"),
		[
			`2x ${CP("steel_3")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`,
			`2x ${AA("launch_pad")}`, 
		]
	)
	
	//oxygen sensor
	removeRecipeByOutput(event, [
		AA("oxygen_sensor"),
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		AA("oxygen_sensor"),
		MC("observer"),
		[
			`2x ${CP("steel_3")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`,
			`2x ${M("ultimate_chemical_tank")}`, 
		]
	)
	
	//launchpad
	removeRecipeByOutput(event, [
		AA("launch_pad"),
	])
	event.recipes.extendedcrafting.shapeless_table(AA("launch_pad"), [Item.of(F("#plates/steel"), 121)])
	
	//cryo fuel
	event.custom({
		"type": M("rotary"),
		"fluidInput": {
			"amount": 1,
			"fluid": AA("cryo_fuel")
		},
		"fluidOutput": {
			"amount": 1,
			"fluid": AA("cryo_fuel")
		},
		"gasInput": {
			"amount": 1,
			"gas": KJ("gaseous_cryo_fuel")
		},
		"gasOutput": {
			"amount": 1,
			"gas": KJ("gaseous_cryo_fuel")
		}
	})
	
	event.custom({
		"type": M("reaction"),
		"duration": 10,
		"fluidInput": {
			"amount": 100,
			"fluid": MG("fusion_fuel")
		},
		"gasInput": {
			"amount": 100,
			"gas": KJ("gaseous_fuel")
		},
		"gasOutput": {
			"amount": 200,
			"gas": KJ("gaseous_cryo_fuel")
		},
		"itemInput": {
			"amount": 1,
			"ingredient": {
				"item": P("charged_snowball")
			}
		}
	})
	
	//mekasuit units
	mekaUnit(event, AA_GA("module_space_breathing_unit"), [
		`2x ${AA_GA("netherite_oxygen_can")}`,
		`2x ${M("electrolytic_core")}`,
		`1x ${M("ultimate_control_circuit")}`,
		`5x ${M("hdpe_stick")}`,
		`5x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, AA_GA("module_gravity_normalizing_unit"), [
		`2x ${AA("gravity_normalizer")}`,
		`1x ${CR("netherite_diving_boots")}`,
		`1x ${KJ("neutronium_nugget")}`,
		`3x ${M("hdpe_stick")}`,
		`7x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, AA_GA("module_acid_rain_proof_unit"), [
		`1x ${DE("rain_sensor")}`,
		`5x ${F("#plates/calorite")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, AA_GA("module_space_fire_proof_unit"), [
		`1x ${CFB("sink")}`,
		`5x ${F("#plates/ostrum")}`,
		`1x ${M("ultimate_control_circuit")}`,
		`4x ${M("hdpe_stick")}`,
		`6x ${M("reprocessed_fissile_fragment")}`,
	])
	
	//space painting
	event.shapeless(AA("space_painting"), [MC("painting"), AE2("sky_dust")])
	
	//rods compat CR_A
	const rods = ["steel"]
	rods.forEach(rod => {
		event.custom({
			type: CR_A("rolling"),
			input: {
				tag: F("ingots/steel")
			},
			result: {
				item: AA(`${rod}_rod`),
				count: 2
			},
		})
	})
})