// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByType(event, [
		AE2("inscriber"),
		AE2("matter_condenser"),
	])
	removeRecipeByID(event, [
		AE2("network/blocks/io_condenser"),
		AE2("tools/misctools_entropy_manipulator"),
		AE2("tools/matter_cannon"),
	])
	removeRecipeByOutput(event, [
		AE2("growth_accelerator"),
		AE2("cell_workbench"),
		AE2("crystal_resonance_generator"),
		AE2("sky_stone_tank"),
		AE2("flawed_budding_quartz"),
		AE2("chipped_budding_quartz"),
		AE2("damaged_budding_quartz"),
		AE2("charged_staff"),
		AE2("meteorite_compass"),
		AE2("color_applicator"),
		AE2("vibration_chamber"),
		AE2("nether_quartz_hoe"),
		AE2("nether_quartz_axe"),
		AE2("nether_quartz_pickaxe"),
		AE2("nether_quartz_shovel"),
		AE2("nether_quartz_sword"),
		AE2("certus_quartz_hoe"),
		AE2("certus_quartz_axe"),
		AE2("certus_quartz_pickaxe"),
		AE2("certus_quartz_shovel"),
		AE2("certus_quartz_sword"),
		AE2("fluix_hoe"),
		AE2("fluix_axe"),
		AE2("fluix_pickaxe"),
		AE2("fluix_shovel"),
		AE2("fluix_sword"),
	])
	
	//delete matter balls
	colours.forEach(color => {
		removeRecipeByID(event, [
			AE2(`tools/paintballs_${color}`),
			AE2(`tools/paintballs_lumen_${color}`),
		])
	})
	
	//wrench
	removeRecipeByOutput(event, [
		AE2("certus_quartz_wrench"),
		AE2("nether_quartz_wrench"),
		AE2("network_tool"),
	])
	event.smithing(AE2("certus_quartz_wrench"), CR("precision_mechanism"), FB('framed_wrench'), F('#gems/certus_quartz'))
	event.smithing(AE2("nether_quartz_wrench"), CR("precision_mechanism"), FB('framed_wrench'), F('#gems/quartz'))
	event.smithing(AE2("network_tool"), KJ("calculation_mechanism"), AE2("certus_quartz_wrench"), AE2('calculation_processor'))
	
	//silicon
	removeRecipeByID(event, [
		AE2("smelting/silicon_from_certus_quartz_dust"),
		AE2("blasting/silicon_from_certus_quartz_dust"),
	])
	event.smelting(AE2("silicon"), KJ("silicon_compound")).xp(0).cookingTime(200)
	
	//sky dust
	removeRecipeByID(event, [
		CR("milling/compat/ae2/sky_stone_block"),
		M("compat/ae2/sky_stone_to_dust"),
		AA_GA("compat/mekanism/crushing/to_sky_dust"),
	])
	event.recipes.create.milling([
		AE2('sky_dust'),
		AE2('sky_stone_block'),
		Item.of(KJ("crushed_sky_stone")).withChance(0.25)
	], AE2('sky_stone_block')).processingTime(processingTimesDefault.milling)
	event.recipes.create.crushing([
		Item.of(AE2('sky_dust'), 2),
		AE2('sky_stone_block'),
	], AE2('sky_stone_block')).processingTime(processingTimesDefault.crushing)
	event.recipes.mekanism.crushing(Item.of(AE2('sky_dust'), 3), AE2('sky_stone_block'))
	
	//ender dust
	event.recipes.mekanism.crushing(Item.of(AE2('ender_dust'), 2), MC('ender_pearl'))
	
	//singularity
	event.recipes.create.crushing([AE2("singularity")], CR('crushing_wheel')).processingTime(processingTimesDefault.crushing)
	event.recipes.mekanism.crushing(AE2("singularity"), CR('crushing_wheel'))
	
	//paintballs
	event.recipes.create.crushing([
		Item.of(AE2("red_paint_ball"), 1).withChance(.90),
		Item.of(AE2("yellow_paint_ball"), 1).withChance(.80),
		Item.of(AE2("green_paint_ball"), 1).withChance(.70),
		Item.of(AE2("blue_paint_ball"), 1).withChance(.60),
		Item.of(AE2("magenta_paint_ball"), 1).withChance(.50)
	],
		KJ('dye_entangled_singularity')
	).processingTime(processingTimesDefault.crushing)

	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	for (let index = 0; index < colors.length; index++) {
		var element = colors[index];
		if (index == colors.length - 1)
			continue;
		event.recipes.create.emptying([AE2(colors[index + 1] + '_paint_ball'), Fluid.of(KJ('abstruse_waste'), 100)], AE2(element + '_paint_ball')).id(KJ(`ae2/draining_${colors[index]}_ball`))
	}
	event.recipes.mekanism.crushing(Item.of(AE2('magenta_paint_ball'), 3), KJ('dye_entangled_singularity'))
	
	//inscriber press from scrap
	removeRecipeByOutput(event, [
		AE2("silicon_press"),
		AE2("engineering_processor_press"),
		AE2("calculation_processor_press"),
		AE2("logic_processor_press"),
	])
	customRecipes.expatternprovider.cutter(event, AE2("silicon_press"), 1, KJ("circuit_scrap"), 1, MC("water"), 1000)
	customRecipes.expatternprovider.cutter(event, AE2("engineering_processor_press"), 1, KJ("circuit_scrap"), 1, TCT("molten_diamond"), 90)
	customRecipes.expatternprovider.cutter(event, AE2("calculation_processor_press"), 1, KJ("circuit_scrap"), 1, KJ("molten_certus"), 90)
	customRecipes.expatternprovider.cutter(event, AE2("logic_processor_press"), 1, KJ("circuit_scrap"), 1, TCT("molten_gold"), 90)
	event.stonecutting(AE2("name_press"), KJ("circuit_scrap"))
	
	//printed silicon
	removeRecipeByOutput(event, [
		AE2("printed_silicon"),
	])
	customRecipes.create.ifiniDeploying(event, AE2("printed_silicon"), AE2("silicon"), AE2("silicon_press"))
	
	//processor chain
	const processors = [
		{
			procId: AE2("calculation_processor"),
			procWaferId: KJ("calculation_processor_wafer"),
			circId: AE2("printed_calculation_processor"),
			circWaferId: KJ("printed_calculation_processor_wafer"),
			brokenId: KJ("broken_calculation_processor"),
			brokenWaferId: KJ("broken_calculation_processor_wafer"),
			liquid: KJ("molten_certus"),
			cast: AE2("calculation_processor_press"),
			castWafer: KJ("calculation_processor_press_wafer"),
		},
		{
			procId: AE2("logic_processor"),
			procWaferId: KJ("logic_processor_wafer"),
			circId: AE2("printed_logic_processor"),
			circWaferId: KJ("printed_logic_processor_wafer"),
			brokenId: KJ("broken_logic_processor"),
			brokenWaferId: KJ("broken_logic_processor_wafer"),
			liquid: TCT("molten_gold"),
			cast: AE2("logic_processor_press"),
			castWafer: KJ("logic_processor_press_wafer"),
		},
		{
			procId: AE2("engineering_processor"),
			procWaferId: KJ("engineering_processor_wafer"),
			circId: AE2("printed_engineering_processor"),
			circWaferId: KJ("printed_engineering_processor_wafer"),
			brokenId: KJ("broken_engineering_processor"),
			brokenWaferId: KJ("broken_engineering_processor_wafer"),
			liquid: TCT("molten_diamond"),
			cast: AE2("engineering_processor_press"),
			castWafer: KJ("engineering_processor_press_wafer"),
		},
		{
			procId: AF("energy_processor"),
			procWaferId: KJ("energy_processor_wafer"),
			circId: AF("printed_energy_processor"),
			circWaferId: KJ("printed_energy_processor_wafer"),
			brokenId: KJ("broken_energy_processor"),
			brokenWaferId: KJ("broken_energy_processor_wafer"),
			liquid: KJ("liquid_redstone"),
			cast: AF("energy_processor_press"),
			castWafer: KJ("energy_processor_press_wafer"),
		},
		{
			procId: MGC("accumulation_processor"),
			procWaferId: KJ("accumulation_processor_wafer"),
			circId: MGC("printed_accumulation_processor"),
			circWaferId: KJ("printed_accumulation_processor_wafer"),
			brokenId: KJ("broken_accumulation_processor"),
			brokenWaferId: KJ("broken_accumulation_processor_wafer"),
			liquid: KJ("abstruse_waste"),
			cast: MGC("accumulation_processor_press"),
			castWafer: KJ("accumulation_processor_press_wafer"),
		},
		{
			procId: AE2_A("quantum_processor"),
			procWaferId: KJ("quantum_processor_wafer"),
			circId: AE2_A("printed_quantum_processor"),
			circWaferId: KJ("printed_quantum_processor_wafer"),
			brokenId: KJ("broken_quantum_processor"),
			brokenWaferId: KJ("broken_quantum_processor_wafer"),
			liquid: AE2_A("quantum_infusion_source"),
			cast: AE2_A("quantum_processor_press"),
			castWafer: KJ("quantum_processor_press_wafer"),
		},
	]
	processors.forEach(obj => {
		const { procId, procWaferId, circId, circWaferId, brokenId, brokenWaferId, liquid, cast, castWafer } = obj
		const siliconId = AE2('printed_silicon')
		const siliconWaferId = KJ('printed_silicon_wafer')
		
		//printed circuit
		removeRecipeByOutput(event, [
			circId,
		])
		
		event.recipes.tconstruct.casting_table(circId, Fluid.of(liquid, 10), cast, false, 10)
		event.recipes.tconstruct.casting_table(circWaferId, Fluid.of(liquid, 90), castWafer, false, 20)
		
		//broken processor
		event.recipes.create.deploying(brokenId, [siliconId, circId])
		event.recipes.mekanism.combining(brokenId, siliconId, circId)
		event.recipes.create.deploying(brokenWaferId, [siliconWaferId, circWaferId])
		event.recipes.mekanism.combining(brokenWaferId, siliconWaferId, circWaferId)
		
		//processor
		removeRecipeByOutput(event, [
			procId,
		])
		
		event.recipes.create.filling(procId, [brokenId, Fluid.of(KJ("abstruse_waste"), 100)])
		event.recipes.mekanism.metallurgic_infusing(procId, brokenId, `10x ${KJ("waste")}`)
		
		event.recipes.create.filling(procWaferId, [brokenWaferId, Fluid.of(KJ("abstruse_waste"), 750)])
		event.recipes.mekanism.metallurgic_infusing(procWaferId, brokenWaferId, `80x ${KJ("waste")}`)
	})
	
	//quantum entangled singularity
	event.recipes.mekanism.metallurgic_infusing(Item.of(AE2("quantum_entangled_singularity"), 2), AE2("singularity"), `20x ${KJ("explosion_essence")}`)
	
	//sky dust from cloud
	event.recipes.create.mixing(AE2("sky_dust"), [AP("gem_dust"), MC('gunpowder'), Q("bottled_cloud")])

	//crafting unit
	removeRecipeByOutput(event, [
		AE2("crafting_unit"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('crafting_unit'), [
		'CEBEC',
		'EDFDE',
		'BFAFB',
		'EDFDE',
		'CEBEC',
	], {
		A: AE2('energy_cell'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('smooth_sky_stone_block'),
		E: AE2('calculation_processor'),
		F: P('dielectric_casing'),
	})

	//molecular assembler
	removeRecipeByOutput(event, [
		AE2("molecular_assembler"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('molecular_assembler'), [
		'CEEEC',
		'EDFDE',
		'EBABE',
		'EDGDE',
		'CEEEC',
	], {
		A: CR('mechanical_crafter'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: P('dielectric_casing'),
		E: AE2('quartz_glass'),
		F: AE2('formation_core'),
		G: AE2('annihilation_core'),
	})

	//crafting co-processor unit
	removeRecipeByOutput(event, [
		AE2("crafting_accelerator"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('crafting_accelerator'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2('crafting_unit'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('engineering_processor'),
		E: AE2('fluix_block'),
	})

	//spatial anchor
	removeRecipeByOutput(event, [
		AE2("spatial_anchor"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('spatial_anchor'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2('spatial_cell_component_128'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('engineering_processor'),
		E: AE2('spatial_pylon'),
	})

	//interface
	removeRecipeByID(event, [
		AE2("network/blocks/interfaces_interface"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('interface'), [
		'CEBEC',
		'E   E',
		'BD FB',
		'E   E',
		'CEBEC',
	], {
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('formation_core'),
		E: AE2('engineering_processor'),
		F: AE2('annihilation_core'),
	})

	//me drive
	removeRecipeByOutput(event, [
		AE2("drive"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('drive'), [
		'CABAC',
		'CAEAC',
		'BADAB',
		'CAEAC',
		'CABAC',
	], {
		A: AE2('item_cell_housing'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: KJ('engineering_processor_wafer'),
		E: P('dielectric_casing'),
	})

	//me chest
	removeRecipeByOutput(event, [
		AE2("chest"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('chest'), [
		'CFDFC',
		'FEEEF',
		'BEAEB',
		'FEEEF',
		'CFBFC',
	], {
		A: IC('obsidian_chest'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('terminal'),
		E: AE2('fluix_block'),
		F: AE2('logic_processor'),
	})

	//energy acceptor
	removeRecipeByOutput(event, [
		AE2("energy_acceptor"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('energy_acceptor'), [
		'CEBEC',
		'EDFDE',
		'BFAFB',
		'EDFDE',
		'CEBEC',
	], {
		A: AE2('energy_cell'),
		B: AE2('quartz_glass'),
		C: CP('iron_1'),
		D: P('dielectric_casing'),
		E: AE2('charged_certus_quartz_crystal'),
		F: PZ('energy_pipe'),
	})

	//energy cell
	removeRecipeByOutput(event, [
		AE2("energy_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('energy_cell'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2('charged_certus_quartz_crystal'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: P('dielectric_casing'),
		E: AE2('fluix_pearl'),
	})
	event.recipes.mekanism.nucleosynthesizing(M('energy_tablet'), `1x ${M("antimatter")}`, AE2('energy_cell'), 20)

	//dense energy cell
	removeRecipeByOutput(event, [
		AE2("dense_energy_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('dense_energy_cell'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: P('dielectric_casing'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('energy_cell'),
		E: AE2('fluix_pearl'),
	})
	event.recipes.mekanism.nucleosynthesizing(AE2('energy_cell'), `2x ${M("antimatter")}`, AE2('dense_energy_cell'), 20)

	//spatial pylon
	removeRecipeByOutput(event, [
		AE2("spatial_pylon"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('spatial_pylon'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2('quartz_glass'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('fluix_block'),
		E: AE2('fluix_pearl'),
	})

	//spatial io port
	removeRecipeByOutput(event, [
		AE2("spatial_io_port"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('spatial_io_port'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: AE2('io_port'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('engineering_processor'),
		E: AE2('fluix_pearl'),
	})

	//pattern provider
	removeRecipeByID(event, [
		AE2("network/blocks/pattern_providers_interface"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('pattern_provider'), [
		'CEBEC',
		'EA AE',
		'BD FB',
		'EA AE',
		'CEBEC',
	], {
		A: KJ("compressed_crafting_table"),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('formation_core'),
		E: AE2('logic_processor'),
		F: AE2('annihilation_core'),
	})

	//molecular assembler
	removeRecipeByOutput(event, [
		AE2("cell_workbench"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2('cell_workbench'), [
		'CEBEC',
		'FDDDF',
		'BDADB',
		'FDDDF',
		'CEBEC',
	], {
		A: MGC('mega_energy_cell'),
		B: PR_INT('null_cell_gate'),
		C: CP('iron_1'),
		D: KJ('double_compressed_crafting_table'),
		E: AE2('fluix_pearl'),
		F: F('#ingots/sky_steel'),
	})
	
	//late game storage component recipes
	const componentsLength = componentSizes[AE2()].length
	for (let i = 0; i < componentsLength; i++) {
		if (i !== componentsLength - 1)
			event.recipes.mekanism.nucleosynthesizing(AE2(`cell_component_${componentSizes[AE2()][i]}`), `${i + 1}x ${M("antimatter")}`, AE2(`cell_component_${componentSizes[AE2()][i + 1]}`), (i + 1) * 10)
	}

	//Certus crystallizing
	customRecipes.mekanism.crystallizing(event, AE2(`certus_quartz_crystal`), KJ("gaseous_certus_compound"), 90)
})