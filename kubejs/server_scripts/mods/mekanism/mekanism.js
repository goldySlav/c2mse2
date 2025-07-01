// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
		M("compat/ae2/sky_stone_dust_to_sky_stone"),
    ])
	
	const mekaTiers = ["basic", "advanced", "elite", "ultimate"]

    //teleportation core
    event.replaceInput({ id: M("teleportation_core") }, MC("diamond"), AE2("singularity"))
    event.replaceInput({ id: M("teleportation_core") }, M("alloy_atomic"), MC("diamond"))

    //personal chest & barrel
    event.replaceInput({ id: M("personal_chest") }, F("#chests/wooden"), SS("netherite_chest"))
    event.replaceInput({ id: M("personal_barrel") }, F("#barrels/wooden"), SS("netherite_barrel"))
	
	//carbon from coke
	customRecipes.mekanism.infusion_conversion(event, M("carbon"), 30, KJ('coke'))
	customRecipes.mekanism.infusion_conversion(event, M("carbon"), 40, KJ('polished_coke'))
	
	//enriched carbon from coke
	event.recipes.mekanism.enriching(Item.of(M('enriched_carbon'), 2), KJ('coke'))
	event.recipes.mekanism.enriching(Item.of(M('enriched_carbon'), 3), KJ('polished_coke'))

	//ingots crystallizing
	customRecipes.mekanism.crystallizing(event, F(`#ingots/bronze`), KJ("gaseous_bronze_compound"), 90)
	customRecipes.mekanism.crystallizing(event, M(`ingot_steel`), KJ("gaseous_steel_compound"), 90)
	customRecipes.mekanism.crystallizing(event, F(`#ingots/tin`), KJ("gaseous_tin_compound"), 90)
	
	//cardboard box from create cardboard
	event.shaped(M("cardboard_box"), [
		'ABA',
	], {
		A: CR("cardboard"),
		B: MC("slime_ball"),
	})
	event.shaped(M("cardboard_box"), [
		'ABA',
	], {
		A: CR("cardboard"),
		B: CR("super_glue"),
	}).damageIngredient(CR("super_glue"))

    //metallurgic infuser
	removeRecipeByOutput(event, [
		M("metallurgic_infuser"),
	])
    event.recipes.extendedcrafting.shaped_table(M("metallurgic_infuser"), [
		'BGGGGGGGB',
		'GFFFFFFFG',
		'GFEDDDEFG',
		'GFCCACCFG',
		'GFEDDDEFG',
		'GFFFFFFFG',
		'BGGGGGGGB',
	], {
		A: IF("machine_frame_supreme"),
		B: CP('diamond_3'),
		C: MC('blast_furnace'),
		D: F('#ingots/osmium'),
		E: CP('fluix_1'),
		F: F('#gears/gold'),
		G: IF('plastic'),
	})

	//structural glass
	removeRecipeByOutput(event, [
		M("structural_glass"),
	])
	event.shaped(M("structural_glass"), [
		' B ',
		'BSB',
		' B '
	], {
		B: TCT("necrotic_bone"),
		S: F("#glass")
	})

	//irradiated pellet
	removeRecipeByID(event, [
		M("processing/uranium/reprocessing/to_fuel"),
	])
	removeRecipeByOutput(event, [
		M("reprocessed_fissile_fragment"),
	])
	event.recipes.mekanismCombining(M("reprocessed_fissile_fragment"), M("pellet_polonium"), M("pellet_plutonium"))

	//stone generator upgrade
	removeRecipeByOutput(event, [
		M("upgrade_stone_generator"),
	])
	event.shaped(M('upgrade_stone_generator'), [
		' G ',
		'ASA',
		' G '
	], {
		G: F("#glass"),
		A: M("alloy_infused"),
		S: CG("tier_3")
	})

    //basic pipes & cables
	removeRecipeByOutput(event, [
		M("basic_universal_cable"),
		M("basic_logistical_transporter"),
		M("basic_mechanical_pipe"),
	])
    donutCraftFull(event, Item.of(M("basic_universal_cable"), 8), F("#ingots/steel"), PZ('energy_pipe'))
    donutCraftFull(event, Item.of(M("basic_logistical_transporter"), 8), F("#ingots/steel"), PZ('item_pipe'))
    donutCraftFull(event, Item.of(M("basic_mechanical_pipe"), 8), F("#ingots/steel"), PZ('fluid_pipe'))

	//hdpe
	removeRecipeByOutput(event, [
		M("hdpe_rod"),
	])
	event.recipes.mekanism.injecting(M("hdpe_rod"), Item.of(M("hdpe_pellet"), 3), {gas: M("sodium"), amount: 1})

	//bins
	removeRecipeByOutput(event, [
		M("basic_bin"),
		M("advanced_bin"),
		M("elite_bin"),
		M("ultimate_bin"),
	])

	event.recipes.create.item_application(M("basic_bin"), [TC("item_trash_can"), M(`basic_tier_installer`)])
	event.shapeless(M("basic_bin"), [TC("item_trash_can"), M(`basic_tier_installer`)])
	event.shapeless(M("advanced_bin"), [M("basic_bin"), M(`advanced_tier_installer`)])
	event.shapeless(M("elite_bin"), [M("advanced_bin"), M(`elite_tier_installer`)])
	event.shapeless(M("ultimate_bin"), [M("elite_bin"), M(`ultimate_tier_installer`)])

	//fluid tanks
	removeRecipeByOutput(event, [
		M("basic_fluid_tank"),
		M("advanced_fluid_tank"),
		M("elite_fluid_tank"),
		M("ultimate_fluid_tank"),
	])

	event.recipes.create.item_application(M("basic_fluid_tank"), [CR("fluid_tank"), M(`basic_tier_installer`)])
	event.shapeless(M("basic_fluid_tank"), [CR("fluid_tank"), M(`basic_tier_installer`)])
	event.shapeless(M("advanced_fluid_tank"), [M("basic_fluid_tank"), M(`advanced_tier_installer`)])
	event.shapeless(M("elite_fluid_tank"), [M("advanced_fluid_tank"), M(`elite_tier_installer`)])
	event.shapeless(M("ultimate_fluid_tank"), [M("elite_fluid_tank"), M(`ultimate_tier_installer`)])

	//chemical tanks
	removeRecipeByOutput(event, [
		M("basic_chemical_tank"),
		M("advanced_chemical_tank"),
		M("elite_chemical_tank"),
		M("ultimate_chemical_tank"),
	])

	event.recipes.create.item_application(M("basic_chemical_tank"), [M("radioactive_waste_barrel"), M(`basic_tier_installer`)])
	event.shapeless(M("basic_chemical_tank"), [M("radioactive_waste_barrel"), M(`basic_tier_installer`)])
	event.shapeless(M("advanced_chemical_tank"), [M("basic_chemical_tank"), M(`advanced_tier_installer`)])
	event.shapeless(M("elite_chemical_tank"), [M("advanced_chemical_tank"), M(`elite_tier_installer`)])
	event.shapeless(M("ultimate_chemical_tank"), [M("elite_chemical_tank"), M(`ultimate_tier_installer`)])
	
	//cubes
	removeRecipeByOutput(event, [
		M("basic_energy_cube"),
		M("advanced_energy_cube"),
		M("elite_energy_cube"),
		M("ultimate_energy_cube"),
	])

	event.recipes.create.item_application(M("basic_energy_cube"), [MGC("mega_energy_cell"), M(`basic_tier_installer`)])
	event.shapeless(M("basic_energy_cube"), [MGC("mega_energy_cell"), M(`basic_tier_installer`)])
	event.shapeless(M("advanced_energy_cube"), [M("basic_energy_cube"), M(`advanced_tier_installer`)])
	event.shapeless(M("elite_energy_cube"), [M("advanced_energy_cube"), M(`elite_tier_installer`)])
	event.shapeless(M("ultimate_energy_cube"), [M("elite_energy_cube"), M(`ultimate_tier_installer`)])

	//salt
	event.shapeless(Item.of(M('salt'), 4), M('block_salt'))

	//solar neutron activator
	removeRecipeByOutput(event, [
		M("solar_neutron_activator"),
	])
	event.recipes.extendedcrafting.shaped_table(M('solar_neutron_activator'), [
		'  AAAAA  ',
		'   BCB   ',
		'   BBB   ',
		'    B    ',
		'  KDDDK  ',
		'  DEFED  ',
		'  DGHGD  ',
		'  DIJID  ',
		'  KDDDK  ',
	  ], {
		A: MG('solar_generator'),
		B: M('hdpe_stick'),
		C: FH('flopper'),
		D: F('#storage_blocks/lead'),
		E: M('alloy_reinforced'),
		F: CM('star_infused_netherite_block'),
		G: M('elite_control_circuit'),
		H: M('steel_casing'),
		I: F('#storage_blocks/refined_obsidian'),
		J: PREXP("cyan_matter"),
		K: F('#storage_blocks/unstable'),
	  }).id(KJ(`${M()}/extended_crafting/solar_neutron_activator`))

	//isotopic centrifuge
	removeRecipeByOutput(event, [
		M("isotopic_centrifuge"),
	])
	event.recipes.extendedcrafting.shaped_table(M('isotopic_centrifuge'), [
		'  GAAAG  ',
		'  AFBFA  ',
		'  AFBFA  ',
		'  AFBFA  ',
		'  AFBFA  ',
		'  AFBFA  ',
		'  IICII  ',
		'  CDEDC  ',
		' HIIJIIH ',
	], {
		A: F('#storage_blocks/lead'),
		B: F('#storage_blocks/unstable'),
		C: M('steel_casing'),
		D: F('#storage_blocks/refined_obsidian'),
		E: PREXP("cyan_matter"),
		F: CM('star_infused_netherite_block'),
		G: F('#storage_blocks/steel'),
		H: KJ('ether_gem'),
		I: M_E('absolute_control_circuit'),
		J: F('#gears/netherite'),
	}).id(KJ(`${M()}/extended_crafting/isotopic_centrifuge`))
	
	//energy tablet
	removeRecipeByOutput(event, [
		M("energy_tablet"),
	])
	event.shaped(M('energy_tablet'), [
		'ACA',
		'BDB',
		'ACA'
	], {
		A: MC("redstone"),
		B: M("alloy_infused"),
		C: M("basic_control_circuit"),
		D: P("dielectric_casing"),
	})

	//enrichment chamber
	removeRecipeByOutput(event, [
		M("enrichment_chamber"),
	])
	event.recipes.extendedcrafting.shaped_table(M("enrichment_chamber"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('iron_3'),
		C: CP('cobblestone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		A: M('enriched_iron'),
		K: M('enriched_iron'),
		L: M('enriched_iron'),
		M: M('advanced_control_circuit'),
	})

	//electric pump
	event.replaceInput({ id: M("electric_pump") }, MC("bucket"), CR("mechanical_pump"))

	//gas burning generator
	removeRecipeByOutput(event, [
		MG("gas_burning_generator"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("gas_burning_generator"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('diamond_3'),
		C: CP('cobblestone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		A: P('magmator_basic'),
		K: M('electrolytic_core'),
		L: M('basic_chemical_tank'),
		M: M('advanced_control_circuit'),
	})

	//rotary condensentratror
	removeRecipeByOutput(event, [
		M("rotary_condensentrator"),
	])
	event.recipes.extendedcrafting.shaped_table(M("rotary_condensentrator"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('cobblestone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		A: MG('turbine_rotor'),
		K: M('basic_chemical_tank'),
		L: M('basic_fluid_tank'),
		M: M('advanced_control_circuit'),
	})

	//electrolytic separator
	removeRecipeByOutput(event, [
		M("electrolytic_separator"),
	])
	event.recipes.extendedcrafting.shaped_table(M("electrolytic_separator"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('iron_3'),
		C: CP('stone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_infused'),
		H: M('basic_control_circuit'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		A: M('electrolytic_core'),
		K: M('basic_chemical_tank'),
		L: M('basic_fluid_tank'),
		M: M('advanced_control_circuit'),
	})

	//chemical oxidizer
	removeRecipeByOutput(event, [
		M("chemical_oxidizer"),
	])
	event.recipes.extendedcrafting.shaped_table(M("chemical_oxidizer"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('gold_3'),
		C: CP('stone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: M('personal_chest'),
		K: M('basic_chemical_tank'),
		L: M('basic_fluid_tank'),
	})

	//chemical dissolution chamber
	removeRecipeByOutput(event, [
		M("chemical_dissolution_chamber"),
	])
	event.recipes.extendedcrafting.shaped_table(M("chemical_dissolution_chamber"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('diamond_3'),
		C: CP('stone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_reinforced'),
		H: M('alloy_atomic'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: M('basic_chemical_tank'),
		K: F('#storage_blocks/refined_obsidian'),
		L: F('#storage_blocks/refined_obsidian'),
	})

	//chemical infuser
	removeRecipeByOutput(event, [
		M("chemical_infuser"),
	])
	event.recipes.extendedcrafting.shaped_table(M("chemical_infuser"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('stone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: M('basic_chemical_tank'),
		K: M('basic_chemical_tank'),
		L: M('basic_chemical_tank'),
	})
	
	//tiered machines BULK
	const tieredList = [
		{ base: "energized_smelter", tiered: "smelting" }, { base: "enrichment_chamber", tiered: "enriching" },
		{ base: "crusher", tiered: "crushing" }, { base: "osmium_compressor", tiered: "compressing" },
		{ base: "combiner", tiered: "combining" }, { base: "purification_chamber", tiered: "purifying" },
		{ base: "chemical_injection_chamber", tiered: "injecting" }, { base: "metallurgic_infuser", tiered: "infusing" },
		{ base: "precision_sawmill", tiered: "sawing" },
	]

	tieredList.forEach(machineObj => {
		const { base, tiered } = machineObj

		mekaTiers.forEach((tier, i) => {
			const id = M(`${tier}_${tiered}_factory`)

			removeRecipeByOutput(event, [
				id,
			])
			event.shapeless(id, [M(`${i ? `${mekaTiers[i - 1]}_${tiered}_factory` : base}`), M(`${tier}_tier_installer`)])
		})
	})
	
	//tier upgrades
	const alloyTierEq = [MC("redstone"), M("alloy_infused"), M("alloy_reinforced"), M("alloy_atomic")]
	const liquidInfusionEq = [KJ("liquid_carbon"), KJ("liquid_redstone"), KJ("liquid_diamond"), KJ("liquid_refined_obsidian")]
	mekaTiers.forEach( (tier, i) => {
		removeRecipeByOutput(event, [
			M(`${tier}_tier_installer`),
		])

		const inputArr = [
			{ tag: F('storage_blocks/steel') },
			{ tag: F('storage_blocks/steel') },
			{ tag: F('storage_blocks/steel') },
			{ item: alloyTierEq[i] },
			{ item: alloyTierEq[i] },
			{ item: M(`${tier}_control_circuit`) },
		]
		inputArr.push(i ? { item: M(`${mekaTiers[i - 1]}_tier_installer`) } : { tag: MC("planks") })
		inputArr.push({ item: M(`${tier}_control_circuit`) })

		event.custom({
			input: inputArr,
			inputFluid: `{FluidName:\"${liquidInfusionEq[i]}\",Amount:10}`,
			processingTime: 60,
			output: {
			  item: M(`${tier}_tier_installer`),
			  count: 1
			},
			type: IF("dissolution_chamber")
		})
	})
	
	//enriched stuff
	customRecipes.industrialforegoing.dissolution(event, M(`enriched_carbon`), [IF("dryrubber")], KJ("liquid_carbon"), 100, 60)
	customRecipes.industrialforegoing.dissolution(event, M(`enriched_redstone`), [IF("dryrubber")], KJ("liquid_redstone"), 100, 60)
	customRecipes.industrialforegoing.dissolution(event, M(`enriched_diamond`), [IF("dryrubber")], KJ("liquid_diamond"), 100, 60)
	customRecipes.industrialforegoing.dissolution(event, M(`enriched_refined_obsidian`), [IF("dryrubber")], KJ("liquid_refined_obsidian"), 100, 60)

	//purification chamber
	removeRecipeByOutput(event, [
		M("purification_chamber"),
	])
	event.recipes.extendedcrafting.shaped_table(M("purification_chamber"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('iron_3'),
		C: CP('endstone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: M('enrichment_chamber'),
		K: IF('pink_slime_ingot'),
		L: IF('pink_slime_ingot'),
	})

	//pressurized_reaction_chamber
	removeRecipeByOutput(event, [
		M("pressurized_reaction_chamber"),
	])
	event.recipes.extendedcrafting.shaped_table(M("pressurized_reaction_chamber"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('gold_3'),
		C: CP('endstone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: M('enrichment_chamber'),
		K: M('basic_fluid_tank'),
		L: M('basic_chemical_tank'),
	})

	//chemical injection chamber
	removeRecipeByOutput(event, [
		M("chemical_injection_chamber"),
	])
	event.recipes.extendedcrafting.shaped_table(M("chemical_injection_chamber"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('diamond_3'),
		C: CP('endstone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_reinforced'),
		H: M('alloy_atomic'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: M('enrichment_chamber'),
		K: CP('gold_3'),
		L: CP('gold_3'),
	})

	//osmium compressor
	removeRecipeByOutput(event, [
		M("osmium_compressor"),
	])
	event.recipes.extendedcrafting.shaped_table(M("osmium_compressor"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('endstone_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_reinforced'),
		H: M('alloy_atomic'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: AA('compressor'),
		K: F('#storage_blocks/osmium'),
		L: F('#storage_blocks/osmium'),
	})

	//combiner
	removeRecipeByOutput(event, [
		M("combiner"),
	])
	event.recipes.extendedcrafting.shaped_table(M("combiner"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('iron_3'),
		C: CP('netherrack_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_reinforced'),
		H: M('alloy_atomic'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: AA('compressor'),
		K: CP('stone_3'),
		L: CP('stone_3'),
	})

	//crusher
	removeRecipeByOutput(event, [
		M("crusher"),
	])
	event.recipes.extendedcrafting.shaped_table(M("crusher"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('gold_3'),
		C: CP('netherrack_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: CR('crushing_wheel'),
		K: MC('lava_bucket'),
		L: MC('lava_bucket'),
	})

	//digital miner
	removeRecipeByOutput(event, [
		M("digital_miner"),
	])
	event.recipes.extendedcrafting.shaped_table(M("digital_miner"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('diamond_3'),
		C: CP('netherrack_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_reinforced'),
		H: M('alloy_atomic'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: M('robit'),
		K: M('logistical_sorter'),
		L: M('teleportation_core'),
	})

	//energized smelter
	removeRecipeByOutput(event, [
		M("energized_smelter"),
	])
	event.recipes.extendedcrafting.shaped_table(M("energized_smelter"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('netherrack_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: IF('resourceful_furnace'),
		K: KJ("polished_coke"),
		L: KJ("polished_coke"),
	})

	//precision sawmill
	removeRecipeByOutput(event, [
		M("precision_sawmill"),
	])
	event.recipes.extendedcrafting.shaped_table(M("precision_sawmill"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('iron_3'),
		C: CP('granite_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: CR('mechanical_saw'),
		K: KJ('saw_blade'),
		L: KJ('saw_blade'),
	})

	//chemical crystallizer
	removeRecipeByOutput(event, [
		M("chemical_crystallizer"),
	])
	event.recipes.extendedcrafting.shaped_table(M("chemical_crystallizer"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('gold_3'),
		C: CP('granite_3'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_atomic'),
		H: M('alloy_reinforced'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: F('#gems/fluorite'),
		K: F('#storage_blocks/refined_obsidian'),
		L: F('#storage_blocks/refined_obsidian'),
	})

	//nutritional liquifier
	removeRecipeByOutput(event, [
		M("nutritional_liquifier"),
	])
	event.recipes.extendedcrafting.shaped_table(M("nutritional_liquifier"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('diamond_3'),
		C: CP('granite_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: P('magmator_basic'),
		K: F('#fruits'),
		L: F('#fruits'),
	})

	//quantum entangloporter
	removeRecipeByOutput(event, [
		M("quantum_entangloporter"),
	])
	event.recipes.extendedcrafting.shaped_table(M("quantum_entangloporter"), [
		'BCHHJHHCB',
		'CIMGNGMIC',
		'HMKFOFKMH',
		'HGFEDEFGH',
		'JNODADONJ',
		'HGFEDEFGH',
		'HMLFOFLMH',
		'CIMGNGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('granite_3'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_atomic'),
		H: M('alloy_reinforced'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: M('ultimate_energy_cube'),
		K: M('teleportation_core'),
		L: M('teleportation_core'),
		N: KJ('quantum_processor_wafer'),
		O: ENT('block'),
	})

	//resistive heater
	removeRecipeByOutput(event, [
		M("resistive_heater"),
	])
	event.recipes.extendedcrafting.shaped_table(M("resistive_heater"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('iron_3'),
		C: CP('obsidian_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: KJ('unstable_compound'),
		K: KJ('unstable_compound'),
		L: KJ('unstable_compound'),
	})

	//fuelwood heater
	removeRecipeByOutput(event, [
		M("fuelwood_heater"),
	])
	event.recipes.extendedcrafting.shaped_table(M("fuelwood_heater"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('gold_3'),
		C: CP('obsidian_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: F('#gems/coke'),
		K: MC('furnace'),
		L: MC('furnace'),
	})

	//bio generator
	removeRecipeByOutput(event, [
		MG("bio_generator"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("bio_generator"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('gold_3'),
		C: CP('obsidian_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: IF('biofuel_generator'),
		K: M('bio_fuel'),
		L: M('bio_fuel'),
	})

	//paninting machine
	removeRecipeByOutput(event, [
		M("painting_machine"),
	])
	event.recipes.extendedcrafting.shaped_table(M("painting_machine"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('diamond_3'),
		C: CP('obsidian_3'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('alloy_atomic'),
		H: M('alloy_reinforced'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('ultimate_control_circuit'),
		A: F('#dyes'),
		K: M('dye_base'),
		L: M('dye_base'),
	})

	//pigment extractor
	removeRecipeByOutput(event, [
		M("pigment_extractor"),
	])
	event.recipes.extendedcrafting.shaped_table(M("pigment_extractor"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('obsidian_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: M('electric_pump'),
		K: M('dye_base'),
		L: M('dye_base'),
	})

	//pigment mixer
	removeRecipeByOutput(event, [
		M("pigment_mixer"),
	])
	event.recipes.extendedcrafting.shaped_table(M("pigment_mixer"), [
		'BCHHJHHCB',
		'CIMGGGMIC',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'CIMGGGMIC',
		'BCHHJHHCB',
	], {
		B: CP('emerald_3'),
		C: CP('obsidian_2'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('basic_control_circuit'),
		H: M('alloy_infused'),
		I: F('#storage_blocks/osmium'),
		J: F('#storage_blocks/steel'),
		M: M('advanced_control_circuit'),
		A: M('electric_pump'),
		K: MI_C('dye_rainbow'),
		L: MI_C('dye_rainbow'),
	})

	//induction casing
	removeRecipeByOutput(event, [
		M("induction_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("induction_casing"), 4), [
		'BBBBGBBBB',
		'BHHCCCHHB',
		'BHFFFFFHB',
		'BCFEDEFCB',
		'GCFDADFCG',
		'BCFEDEFCB',
		'BHFFFFFHB',
		'BHHCCCHHB',
		'BBBBGBBBB',
	], {
		A: M('steel_casing'),
		B: M('hdpe_sheet'),
		C: F('#storage_blocks/steel'),
		D: M('energy_tablet'),
		E: M('energy_tablet'),
		F: F('#dusts/lithium'),
		G: M('ultimate_universal_cable'),
		H: CP('iron_3'),
	})

	//basic induction cell
	removeRecipeByOutput(event, [
		M("basic_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M("basic_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: MC('redstone'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M('basic_control_circuit'),
		D: M('energy_tablet'),
		E: singularityId('charged_certus_quartz'),
		F: F('#dusts/lithium'),
		A: M('basic_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//advanced induction cell
	removeRecipeByOutput(event, [
		M("advanced_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M("advanced_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M('alloy_infused'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M('advanced_control_circuit'),
		D: M("basic_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M('advanced_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//elite induction cell
	removeRecipeByOutput(event, [
		M("elite_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M("elite_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M('alloy_reinforced'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M('elite_control_circuit'),
		D: M("advanced_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M('elite_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//ultimate induction cell
	removeRecipeByOutput(event, [
		M("ultimate_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M("ultimate_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M('alloy_atomic'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M('ultimate_control_circuit'),
		D: M("elite_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M('ultimate_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//basic induction provider
	removeRecipeByOutput(event, [
		M("basic_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M("basic_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: MC('redstone'),
		H: F('#storage_blocks/steel'),
		J: M('basic_universal_cable'),
		I: F('#storage_blocks/osmium'),
		G: M('basic_control_circuit'),
		D: M('energy_tablet'),
		E: singularityId('fluix'),
		F: F('#dusts/lithium'),
		A: M('basic_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//advanced induction provider
	removeRecipeByOutput(event, [
		M("advanced_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M("advanced_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M('alloy_infused'),
		H: F('#storage_blocks/steel'),
		J: M('advanced_universal_cable'), //
		I: F('#storage_blocks/osmium'),
		G: M('advanced_control_circuit'),
		D: M("basic_induction_provider"), //
		E: singularityId('fluix'), //
		F: M('energy_tablet'),
		A: M('advanced_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//elite induction provider
	removeRecipeByOutput(event, [
		M("elite_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M("elite_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M('alloy_reinforced'),
		H: F('#storage_blocks/steel'),
		J: M('elite_universal_cable'),
		I: F('#storage_blocks/osmium'),
		G: M('elite_control_circuit'),
		D: M("advanced_induction_provider"),
		E: singularityId('fluix'),
		F: M('energy_tablet'),
		A: M('elite_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//ultimate induction provider
	removeRecipeByOutput(event, [
		M("ultimate_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M("ultimate_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M('alloy_atomic'),
		H: F('#storage_blocks/steel'),
		J: M('ultimate_universal_cable'),
		I: F('#storage_blocks/osmium'),
		G: M('ultimate_control_circuit'),
		D: M("elite_induction_provider"),
		E: singularityId('fluix'),
		F: M('energy_tablet'),
		A: M('ultimate_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//thermal evaporation block
	removeRecipeByOutput(event, [
		M("thermal_evaporation_block"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("thermal_evaporation_block"), 4), [
		'BBHHHHHBB',
		'BIIGGGIIB',
		'HIFFAFFIH',
		'HGFEDEFGH',
		'HGADADAGH',
		'HGFEDEFGH',
		'HIFFAFFIH',
		'BIIGGGIIB',
		'BBHHHHHBB',
	], {
		B: CP('steel_1'),
		H: CP('copper_1'),
		I: CP('osmium_3'),
		G: M('basic_control_circuit'),
		D: M('basic_fluid_tank'),
		E: M('basic_fluid_tank'),
		F: M('hdpe_sheet'),
		A: M('alloy_infused'),
	})

	//thermal evaporation controller
	removeRecipeByOutput(event, [
		M("thermal_evaporation_controller"),
	])
	event.recipes.extendedcrafting.shaped_table(M("thermal_evaporation_controller"), [
		'BBHHHHHBB',
		'BIIGGGIIB',
		'HIFFFFFIH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HIFFFFFIH',
		'BIIGGGIIB',
		'BBHHHHHBB',
	], {
		B: CP('steel_1'),
		H: CP('copper_1'),
		I: CP('osmium_3'),
		G: M('advanced_control_circuit'),
		D: AE2('controller'),
		E: M("thermal_evaporation_block"),
		F: M('hdpe_sheet'),
		A: AE2('terminal'),
	})

	//thermal evaporation valve
	removeRecipeByOutput(event, [
		M("thermal_evaporation_valve"),
	])
	event.recipes.extendedcrafting.shaped_table(M("thermal_evaporation_valve"), [
		'BBHHHHHBB',
		'BIIGGGIIB',
		'HIFFFFFIH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HIFFFFFIH',
		'BIIGGGIIB',
		'BBHHHHHBB',
	], {
		B: CP('steel_1'),
		H: CP('copper_1'),
		I: CP('osmium_3'),
		G: M('advanced_control_circuit'),
		D: CR('#valve_handles'),
		E: M("thermal_evaporation_block"),
		F: M('hdpe_sheet'),
		A: CR('fluid_valve'),
	})

	//robit
	removeRecipeByOutput(event, [
		M("robit"),
	])
	event.recipes.extendedcrafting.shaped_table(M("robit"), [
		'BBHHHHHBB',
		'BIMGGGMIB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BIMGGGMIB',
		'BBHHHHHBB',
	], {
		B: CP('iron_3'),
		D: M('steel_casing'),
		E: M('energy_tablet'),
		F: KJ('ether_gem'),
		G: M('ultimate_control_circuit'),
		H: F('#storage_blocks/refined_obsidian'),
		I: F('#storage_blocks/steel'),
		M: M('energy_tablet'),
		A: M('energy_tablet'),
		K: M('personal_chest'),
		L: M('personal_chest'),
	})

	//antiprotonic nucleosynthesizer
	removeRecipeByOutput(event, [
		M("antiprotonic_nucleosynthesizer"),
	])
	event.recipes.extendedcrafting.shaped_table(M("antiprotonic_nucleosynthesizer"), [
		'BBHHHHHBB',
		'BMMGGGMMB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BMMGGGMMB',
		'BBHHHHHBB',
	], {
		B: CP('emerald_3'),
		D: M('sps_casing'),
		E: M('energy_tablet'),
		F: M('pellet_antimatter'),
		G: M('alloy_reinforced'),
		H: M('alloy_atomic'),
		M: M('ultimate_control_circuit'),
		A: M('ultimate_chemical_tank'),
		K: KJ("neutronium_ingot"),
		L: KJ("neutronium_ingot"),
	})

	//modification station
	removeRecipeByOutput(event, [
		M("modification_station"),
	])
	event.recipes.extendedcrafting.shaped_table(M("modification_station"), [
		'BBHHHHHBB',
		'BMMGGGMMB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BMMGGGMMB',
		'BBHHHHHBB',
	], {
		B: CP('emerald_4'),
		D: M('sps_casing'),
		E: M('ultimate_induction_cell'),
		F: KJ('neutronium_nugget'),
		G: M('hdpe_sheet'),
		H: M('alloy_atomic'),
		M: M('ultimate_control_circuit'),
		A: AE2('terminal'),
		K: M("reprocessed_fissile_fragment"),
		L: M("reprocessed_fissile_fragment"),
	})

	//sps casing
	removeRecipeByOutput(event, [
		M("sps_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(M("sps_casing"), [
		'BBHHHHHBB',
		'BGGGGGGGB',
		'HGKFFFKGH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HGLFFFLGH',
		'BGGGGGGGB',
		'BBHHHHHBB',
	], {
		B: CP('emerald_4'),
		D: M('steel_casing'),
		A: M('ultimate_induction_provider'),
		F: M("reprocessed_fissile_fragment"),
		G: M('hdpe_stick'),
		H: F('#storage_blocks/steel'),
		E: M('hdpe_sheet'),
		K: KJ("pileof_neutrons"),
		L: KJ("pileof_neutrons"),
	})

	//reactor glass
	removeRecipeByOutput(event, [
		MG("reactor_glass"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("reactor_glass"), [
		'BBHHHHHBB',
		'BGGGGGGGB',
		'HGKFFFKGH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HGLFFFLGH',
		'BGGGGGGGB',
		'BBHHHHHBB',
	], {
		H: F('#dusts/lead'),
		D: F('#storage_blocks/steel'),
		E: M('structural_glass'),
		F: F("#dusts/steel"),
		G: M("enriched_iron"),
		B: F('#storage_blocks/lead'),
		A: F('#storage_blocks/steel'),
		K: M("enriched_iron"),
		L: M("enriched_iron"),
	})

	//fission reactor casing
	removeRecipeByOutput(event, [
		MG("fission_reactor_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(MG("fission_reactor_casing"), 2), [
		'BBHHHHHBB',
		'BGGGGGGGB',
		'HGKFFFKGH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HGLFFFLGH',
		'BGGGGGGGB',
		'BBHHHHHBB',
	], {
		H: F('#storage_blocks/lead'),
		D: M('steel_casing'),
		E: M('steel_casing'),
		F: F("#dusts/steel"),
		G: M("hdpe_sheet"),
		B: CP('iron_3'),
		A: M('hdpe_pellet'),
		K: M("basic_chemical_tank"),
		L: M("basic_fluid_tank"),
	})

	//fission fuel assembly
	removeRecipeByOutput(event, [
		MG("fission_fuel_assembly"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("fission_fuel_assembly"), [
		'BBHHHHHBB',
		'BGGGGGGGB',
		'HGKFFFKGH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HGLFFFLGH',
		'BGGGGGGGB',
		'BBHHHHHBB',
	], {
		H: F('#storage_blocks/lead'),
		D: CP("osmium_3"),
		E: M("steel_casing"),
		F: F("#storage_blocks/steel"),
		G: M("hdpe_sheet"),
		B: CP('iron_3'),
		A: MU('unstable_ingot'),
		K: M("ultimate_chemical_tank"),
		L: M("ultimate_fluid_tank"),
	})

	//control rod assembly
	removeRecipeByOutput(event, [
		MG("control_rod_assembly"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("control_rod_assembly"), [
		'BBHHHHHBB',
		'BGGGGGGGB',
		'HGKFFFKGH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HGLFFFLGH',
		'BGGGGGGGB',
		'BBHHHHHBB',
	], {
		H: F('#storage_blocks/lead'),
		D: CP("uranium_3"),
		E: M("steel_casing"),
		F: F("#storage_blocks/steel"),
		G: M("hdpe_sheet"),
		B: CP('iron_3'),
		A: MU('unstable_block'),
		K: CM("star_infused_netherite_block"),
		L: CM("star_infused_netherite_block"),
	})

	//rotational_complex
	removeRecipeByOutput(event, [
		MG("rotational_complex"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("rotational_complex"), [
		'DDDDBDDDD',
		'D  CBC  D',
		'D CCBCC D',
		'DCCCBCCCD',
		'AAAABAAAA',
		'DCCCBCCCD',
		'D CCBCC D',
		'D  CBC  D',
		'DDDDBDDDD',
	], {
		A: AA("marked_iron_pillar"),
		B: MG("turbine_rotor"),
		C: MG("turbine_blade"),
		D: F("#storage_blocks/steel"),
	})

	//electromagnetic coil
	removeRecipeByOutput(event, [
		MG("electromagnetic_coil"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("electromagnetic_coil"), [
		'HHHHBHHHH',
		'HGGGGGGGH',
		'HGKFFFKGH',
		'HGFEDEFGH',
		'BGFDADFGB',
		'HGFEDEFGH',
		'HGLFFFLGH',
		'HGGGGGGGH',
		'HHHHBHHHH',
	], {
		H: CP('obsidian_3'),
		D: KJ("unstable_compound"),
		E: KJ("unstable_compound"),
		F: KJ("ether_gem"),
		G: M("hdpe_sheet"),
		B: CP('gold_3'),
		A: M('energy_tablet'),
		K: KJ("ether_gem"),
		L: KJ("ether_gem"),
	})

	//saturating condenser
	removeRecipeByOutput(event, [
		MG("saturating_condenser"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("saturating_condenser"), [
		'HHBBBBBHH',
		'HGGGGGGGH',
		'BGKFFFKGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGLFFFLGB',
		'HGGGGGGGH',
		'HHBBBBBHH',
	], {
		H: F('#storage_blocks/steel'),
		D: MG("turbine_casing"),
		E: M("advanced_chemical_tank"),
		F: M("advanced_fluid_tank"),
		G: M("hdpe_sheet"),
		B: CP('tin_3'),
		A: M('rotary_condensentrator'),
		K: M("advanced_fluid_tank"),
		L: M("advanced_fluid_tank"),
	})

	//turbine casing
	removeRecipeByOutput(event, [
		MG("turbine_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(MG("turbine_casing"), 2), [
		'HBBBBBBBH',
		'BGGGGGGGB',
		'BGKFFFKGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGLFFFLGB',
		'BGGGGGGGB',
		'HBBBBBBBH',
	], {
		D: M('steel_casing'),
		E: CP('tin_2'),
		F: M("hdpe_sheet"),
		G: CP('steel_1'),
		B: CP('osmium_2'),
		A: MG('turbine_blade'),
		K: M("hdpe_sheet"),
		L: M("hdpe_sheet"),
		H: CP("iron_3"),
	})

	//turbine valve
	removeRecipeByOutput(event, [
		MG("turbine_valve"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(MG("turbine_valve"), 2), [
		'BBBBBBBBB',
		'BGGGGGGGB',
		'BGFFFFFGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGFFFFFGB',
		'BGGGGGGGB',
		'BBBBBBBBB',
	], {
		B: CP('steel_1'),
		G: M('advanced_control_circuit'),
		D: CR('#valve_handles'),
		E: MG("turbine_casing"),
		F: M('hdpe_sheet'),
		A: CR('fluid_valve'),
	})

	//turbine vent
	removeRecipeByOutput(event, [
		MG("turbine_vent"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(MG("turbine_vent"), 2), [
		'BBBBBBBBB',
		'BGGGGGGGB',
		'BGKFFFKGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGLFFFLGB',
		'BGGGGGGGB',
		'BBBBBBBBB',
	], {
		D: Q('grate'),
		E: MG("turbine_casing"),
		F: M("hdpe_sheet"),
		G: CP('steel_1'),
		B: CP('osmium_1'),
		A: MG('turbine_blade'),
		K: M("hdpe_sheet"),
		L: M("hdpe_sheet"),
	})
	
	//security desk
	removeRecipeByOutput(event, [
		M("security_desk"),
	])
	event.recipes.extendedcrafting.shaped_table(M("security_desk"), [
		'BBHHHHHBB',
		'BMMGGGMMB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BMMGGGMMB',
		'BBHHHHHBB',
	], {
		B: CP('steel_1'),
		D: M('steel_casing'),
		E: AE2('terminal'),
		F: M('teleportation_core'),
		G: M('hdpe_sheet'),
		H: M('alloy_atomic'),
		M: M('ultimate_control_circuit'),
		A: KJ('computation_matrix'),
		K: M("reprocessed_fissile_fragment"),
		L: M("reprocessed_fissile_fragment"),
	})

	//fusion frame
	removeRecipeByOutput(event, [
		MG("fusion_reactor_frame"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(MG("fusion_reactor_frame"), 2), [
		'BBHHHHHBB',
		'BMMGGGMMB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BMMGGGMMB',
		'BBHHHHHBB',
	], {
		D: M('steel_casing'),
		E: M('reprocessed_fissile_fragment'),
		F: M("hdpe_stick"),
		G: CP('diamond_3'),
		B: F('#storage_blocks/steel'),
		H: M('alloy_atomic'),
		M: M('ultimate_control_circuit'),
		A: M('reprocessed_fissile_fragment'),
		K: M("hdpe_stick"),
		L: M("hdpe_stick"),
	})

	//fusion reactor controller
	removeRecipeByOutput(event, [
		MG("fusion_reactor_controller"),
	])
	event.recipes.extendedcrafting.shaped_table(MG("fusion_reactor_controller"), [
		'BBHHHHHBB',
		'BIIGGGIIB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HIMFFFMIH',
		'BIIGGGIIB',
		'BBHHHHHBB',
	], {
		B: F('#storage_blocks/steel'),
		H: M('alloy_atomic'),
		G: CP('diamond_3'),
		I: M('ultimate_control_circuit'),
		D: AE2('controller'),
		E: MG("fusion_reactor_frame"),
		F: M('reprocessed_fissile_fragment'),
		A: AE2('terminal'),
		L: M('hdpe_stick'),
		M: M('hdpe_stick'),
	})

	//boiler casing
	removeRecipeByOutput(event, [
		M("boiler_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("boiler_casing"), 2), [
		'BBHHHHHBB',
		'BMMGGGMMB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BMMGGGMMB',
		'BBHHHHHBB',
	], {
		D: M('steel_casing'),
		E: M('hdpe_sheet'),
		F: F("#dusts/steel"),
		G: CP('iron_3'),
		B: F('#storage_blocks/steel'),
		H: M('basic_control_circuit'),
		M: M('advanced_control_circuit'),
		A: M('ultimate_energy_cube'),
		K: M("ultimate_chemical_tank"),
		L: M("ultimate_fluid_tank"),
	})

	//superheating element
	removeRecipeByOutput(event, [
		M("superheating_element"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("superheating_element"), 1), [
		'HBBBBBBBH',
		'BGGGGGGGB',
		'BGKFFFKGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGLFFFLGB',
		'BGGGGGGGB',
		'HBBBBBBBH',
	], {
		D: M('steel_casing'),
		E: M('hdpe_pellet'),
		F: KJ("unstable_compound"),
		G: F('#storage_blocks/steel'),
		B: CP("copper_3"),
		A: KJ('computation_matrix'),
		K: KJ('computation_matrix'),
		L: KJ('computation_matrix'),
		H: CP("iron_3"),
	})

	//pressure disperser
	removeRecipeByOutput(event, [
		M("pressure_disperser"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("pressure_disperser"), 1), [
		'HBBBBBBBH',
		'BGGGGGGGB',
		'BGKFFFKGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGLFFFLGB',
		'BGGGGGGGB',
		'HBBBBBBBH',
	], {
		D: M('steel_casing'),
		E: M('basic_control_circuit'),
		F: MC("iron_bars"),
		G: F('#storage_blocks/steel'),
		B: MC("iron_bars"),
		A: M('alloy_infused'),
		K: M("advanced_control_circuit"),
		L: M("advanced_control_circuit"),
		H: CP("gold_3"),
	})

	//dynamic tank
	removeRecipeByOutput(event, [
		M("dynamic_tank"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("dynamic_tank"), 8), [
		'HBBBBBBBH',
		'BGGGGGGGB',
		'BGKFFFKGB',
		'BGFEDEFGB',
		'BGFDADFGB',
		'BGFEDEFGB',
		'BGLFFFLGB',
		'BGGGGGGGB',
		'HBBBBBBBH',
	], {
		D: M('steel_casing'),
		E: M('basic_control_circuit'),
		F: M("alloy_infused"),
		G: F('#storage_blocks/steel'),
		B: F("#storage_blocks/steel"),
		A: IF('supreme_black_hole_tank'),
		K: M("advanced_control_circuit"),
		L: M("advanced_control_circuit"),
		H: CP("gold_3"),
	})
	
	//qio drive
	removeRecipeByOutput(event, [
		M("qio_drive_array"),
	])
	event.recipes.mekanism.nucleosynthesizing(AE2_E("ex_drive"), `100x ${M("antimatter")}`, M("qio_drive_array"), 1000)

	//module base
	removeRecipeByOutput(event, [
		M("module_base"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M("module_base"), 8), [
		'AAAAAAAAAAA',
		'ABCDDDDDCBA',
		'ACBEEEEEBCA',
		'ADEFFFFFEDA',
		'ADEFGGGFEDA',
		'ADEFGHGFEDA',
		'ADEFGGGFEDA',
		'ADEFFFFFEDA',
		'ACBEEEEEBCA',
		'ABCDDDDDCBA',
		'AAAAAAAAAAA',
	], {
		A: M('hdpe_sheet'),
		B: CP('tin_3'),
		C: CP("bronze_2"),
		D: M("alloy_infused"),
		E: M("alloy_reinforced"),
		F: KJ("crystal_matrix_ingot"),
		G: M("alloy_atomic"),
		H: KJ("computation_matrix"),
	})
	
	//mekasuit modules
	mekaUnit(event, M("module_color_modulation_unit"), [
		`2x ${M("painting_machine")}`,
		`2x ${M("pigment_mixer")}`,
		`6x ${MI_C("dye_rainbow")}`,
		`1x ${M("laser")}`,
		`5x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_laser_dissipation_unit"), [
		`4x ${M("alloy_infused")}`,
		`2x ${M("laser_amplifier")}`,
		`3x ${LB("laser_source_block")}`,
		`1x ${M("laser")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_radiation_shielding_unit"), [
		`4x ${CP("lead_4")}`,
		`1x ${M("hazmat_mask")}`,
		`1x ${M("hazmat_gown")}`,
		`1x ${M("hazmat_pants")}`,
		`1x ${M("hazmat_boots")}`,
		`5x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_excavation_escalation_unit"), [
		`3x ${PET("emerald_netherite_pickaxe")}`,
		`2x ${PET("emerald_netherite_shovel")}`,
		`1x ${PET("emerald_netherite_axe")}`,
		`5x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_attack_amplification_unit"), [
		`6x ${PET("emerald_netherite_sword")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_farming_unit"), [
		`6x ${PET("emerald_netherite_hoe")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_shearing_unit"), [
		`1x ${MU("precision_shears")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_silk_touch_unit"), [
		`4x ${F("#storage_blocks/refined_glowstone")}`,
		`4x ${F("#storage_blocks/refined_obsidian")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_fortune_unit"), [
		`4x ${F("#storage_blocks/refined_glowstone")}`,
		`4x ${CP("diamond_4")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_blasting_unit"), [
		`4x ${MC("tnt")}`,
		`2x ${AE2("tiny_tnt")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_vein_mining_unit"), [
		`2x ${MC("netherite_pickaxe")}`,
		`2x ${MC("netherite_axe")}`,
		`2x ${MC("netherite_shovel")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_teleportation_unit"), [
		`3x ${M("pellet_antimatter")}`,
		`1x ${M("alloy_atomic")}`,
		`4x ${M("teleportation_core")}`,
		`1x ${M("teleporter")}`,
		`1x ${M("portable_teleporter")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_electrolytic_breathing_unit"), [
		`6x ${M("electrolytic_core")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_inhalation_purification_unit"), [
		`1x ${M("electrolytic_core")}`,
		`1x ${M("hazmat_mask")}`,
		`1x ${M("scuba_mask")}`,
		`4x ${M("alloy_reinforced")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_vision_enhancement_unit"), [
		`1x ${ART("night_vision_goggles")}`,
		`3x ${M("alloy_atomic")}`,
		`3x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_nutritional_injection_unit"), [
		`1x ${M("canteen")}`,
		`1x ${M("nutritional_liquifier")}`,
		`2x ${M("alloy_atomic")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_dosimeter_unit"), [
		`1x ${M("dosimeter")}`,
		`4x ${M("alloy_atomic")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_geiger_unit"), [
		`1x ${M("geiger_counter")}`,
		`3x ${M("alloy_atomic")}`,
		`3x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_jetpack_unit"), [
		`1x ${M("jetpack_armored")}`,
		`5x ${M("ultimate_control_circuit")}`,
		`6x ${M("hdpe_stick")}`,
		`4x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_charge_distribution_unit"), [
		`1x ${M("basic_induction_provider")}`,
		`2x ${M("supercharged_coil")}`,
		`4x ${P("charged_snowball")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`5x ${M("hdpe_stick")}`,
		`5x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_energy_unit"), [
		`1x ${M("basic_induction_cell")}`,
		`3x ${AE2("fluix_pearl")}`,
		`2x ${P("charged_snowball")}`,
		`2x ${EIO("octadic_capacitor")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`4x ${M("hdpe_stick")}`,
		`3x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_gravitational_modulating_unit"), [
		`1x ${PRE("swiftwolf_rending_gale")}`,
		`3x ${M("pellet_antimatter")}`,
		`2x ${M("ultimate_induction_provider")}`,
		`5x ${M("hdpe_stick")}`,
		`5x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_elytra_unit"), [
		`1x ${M("hdpe_elytra")}`,
		`1x ${M("pellet_antimatter")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`4x ${M("hdpe_stick")}`,
		`6x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_gyroscopic_stabilization_unit"), [
		`4x ${CP("obsidian_4")}`,
		`4x ${M("alloy_reinforced")}`,
		`4x ${M("hdpe_stick")}`,
		`6x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_hydrostatic_repulsor_unit"), [
		`3x ${MC("lightning_rod")}`,
		`5x ${M("alloy_atomic")}`,
		`4x ${M("hdpe_stick")}`,
		`6x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_locomotive_boosting_unit"), [
		`3x ${CR("track")}`,
		`4x ${M("energy_tablet")}`,
		`1x ${PET("emerald_netherite_armor_leggings")}`,
		`4x ${M("hdpe_stick")}`,
		`6x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_motorized_servo_unit"), [
		`3x ${MC("blue_ice")}`,
		`1x ${M("elite_control_circuit")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`4x ${M("hdpe_stick")}`,
		`6x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_hydraulic_propulsion_unit"), [
		`1x ${M("free_runners_armored")}`,
		`1x ${M("elite_control_circuit")}`,
		`2x ${M("ultimate_control_circuit")}`,
		`7x ${M("hdpe_stick")}`,
		`3x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_magnetic_attraction_unit"), [
		`3x ${KJ("unstable_chromatic_resonator")}`,
		`2x ${M("elite_control_circuit")}`,
		`3x ${M("ultimate_control_circuit")}`,
		`2x ${M("hdpe_stick")}`,
		`8x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, M("module_frost_walker_unit"), [
		`2x ${M("hydrogen_bucket")}`,
		`2x ${TM("frozen_pearl")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`5x ${M("hdpe_stick")}`,
		`5x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, MG("module_solar_recharging_unit"), [
		`2x ${MG("advanced_solar_generator")}`,
		`3x ${P("photoelectric_pane")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`5x ${M("hdpe_stick")}`,
		`5x ${M("reprocessed_fissile_fragment")}`,
	])
	mekaUnit(event, MG("module_geothermal_generator_unit"), [
		`4x ${MG("heat_generator")}`,
		`3x ${P("thermoelectric_plate")}`,
		`4x ${M("ultimate_control_circuit")}`,
		`5x ${M("hdpe_stick")}`,
		`5x ${M("reprocessed_fissile_fragment")}`,
	])
})