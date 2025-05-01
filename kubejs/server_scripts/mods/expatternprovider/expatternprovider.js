// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		
	])
	removeRecipeByOutput(event, [
		AE2_E("crystal_fixer"),
		AE2_E("ex_inscriber"),
	])
	
	//cobblestone cell
	removeRecipeByID(event, [
		AE2_E("cobblestone_cell"),
	])
	event.shapeless(Item.of(AE2_E("infinity_cell")).withNBT("{record:{\"#c\":\"ae2:i\",id:\"minecraft:cobblestone\"}}"), [MGC("mega_item_cell_housing"), CG("tier_5")])
	
	//water cell
	removeRecipeByID(event, [
		AE2_E("water_cell"),
	])
	event.shapeless(Item.of(AE2_E("infinity_cell")).withNBT("{record:{\"#c\":\"ae2:f\",id:\"minecraft:water\"}}"), [MGC("mega_fluid_cell_housing"), CFB("sink")])

	//extended molecular assembler
	removeRecipeByOutput(event, [
		AE2_E("ex_molecular_assembler"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_E('ex_molecular_assembler'), [
		'CEEEC',
		'EDFDE',
		'EBABE',
		'EDGDE',
		'CEEEC',
	], {
		A: AE2('quartz_vibrant_glass'),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: AE2('molecular_assembler'),
		E: F('#gems/fluix'),
		F: AE2('formation_plane'),
		G: AE2('annihilation_plane'),
	})

	//extended me drive & upgrade
	removeRecipeByOutput(event, [
		AE2_E("ex_drive"),
		AE2_E("drive_upgrade"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_E("ex_drive"), [
		'CABAC',
		'FAEAF',
		'BADAB',
		'FAEAF',
		'CABAC',
	], {
		A: AE2('item_cell_housing'),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: KJ('engineering_processor_wafer'),
		E: AE2('drive'),
		F: F('#gems/fluix'),
	})
	event.recipes.extendedcrafting.shaped_table(AE2_E("drive_upgrade"), [
		'CABAC',
		'FA AF',
		'BADAB',
		'FA AF',
		'CABAC',
	], {
		A: AE2('item_cell_housing'),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: KJ('engineering_processor_wafer'),
		F: F('#gems/fluix'),
	})

	//me wireless connector
	removeRecipeByOutput(event, [
		AE2_E("wireless_connect"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(AE2_E('wireless_connect'), 2), [
		'CFBFC',
		'FEEEF',
		'BEAEB',
		'FEEEF',
		'CFBFC',
	], {
		A: KJ('engineering_processor_wafer'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		E: AE2('wireless_receiver'),
		F: AE2('sky_dust'),
	})

    //extended emc interface & upgrade
	removeRecipeByID(event, [
		AE2_E("ex_emc_interface"),
		AE2_E("ex_emc_interface_upgrade"),
	])

	//extended pattern provider & upgrade
	removeRecipeByID(event, [
		AE2_E("epp"),
		AE2_E("epp_upgrade"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_E('ex_pattern_provider'), [
		'CEBEC',
		'EAGAE',
		'BD FB',
		'EAGAE',
		'CEBEC',
	], {
		A: KJ("double_compressed_crafting_table"),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: AE2('formation_plane'),
		E: MGC('accumulation_processor'),
		F: AE2('annihilation_plane'),
		G: AE2('pattern_provider'),
	})
	event.recipes.extendedcrafting.shaped_table(AE2_E('pattern_provider_upgrade'), [
		'CEBEC',
		'EA AE',
		'BD FB',
		'EA AE',
		'CEBEC',
	], {
		A: KJ("double_compressed_crafting_table"),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: AE2('formation_plane'),
		E: MGC('accumulation_processor'),
		F: AE2('annihilation_plane'),
	})

	//extended interface & upgrade
	removeRecipeByID(event, [
		AE2_E("ei"),
		AE2_E("ei_upgrade"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_E('ex_interface'), [
		'CEBEC',
		'E G E',
		'BD FB',
		'E G E',
		'CEBEC',
	], {
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: AE2('formation_plane'),
		E: MGC('accumulation_processor'),
		F: AE2('annihilation_plane'),
		G: AE2('interface'),
	})
	event.recipes.extendedcrafting.shaped_table(AE2_E('interface_upgrade'), [
		'CEBEC',
		'E   E',
		'BD FB',
		'E   E',
		'CEBEC',
	], {
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: AE2('formation_plane'),
		E: MGC('accumulation_processor'),
		F: AE2('annihilation_plane'),
	})

	//oversize interface
	removeRecipeByID(event, [
		AE2_E("oversize_interface"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_E('oversize_interface'), [
		'CDBDC',
		'DAGAD',
		'BG GB',
		'EAGAE',
		'CEBEC',
	], {
		A: AE2_E("ingredient_buffer"),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: AE2('formation_core'),
		E: AE2('annihilation_core'),
		G: AE2_E('#extended_interface'),
	})
	
	//matrix
	removeRecipeByID(event, [
		AE2_E("assembler_matrix_wall"),
		AE2_E("assembler_matrix_frame"),
		AE2_E("assembler_matrix_pattern"),
		AE2_E("assembler_matrix_crafter"),
		AE2_E("assembler_matrix_speed"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_E('assembler_matrix_wall'), [
		'DCECD',
		'CBBBC',
		'EBABE',
		'CBBBC',
		'DCECD',
	], {
		A: F("#storage_blocks/nether_star"),
		B: AE2_A("quantum_infused_dust"),
		C: AE2_A("quantum_processor"),
		D: CP('iron_2'),
		E: AE2('fluix_smart_cable'),
	})
	event.recipes.extendedcrafting.shaped_table(AE2_E('assembler_matrix_frame'), [
		'DCECD',
		'CBBBC',
		'EBABE',
		'CBBBC',
		'DCECD',
	], {
		A: AE2_E('assembler_matrix_wall'),
		B: AE2_A("quantum_infused_dust"),
		C: F("#storage_blocks/ender_star"),
		D: CP('iron_2'),
		E: AE2('fluix_smart_cable'),
	})
	event.recipes.extendedcrafting.shaped_table(Item.of(AE2_E('assembler_matrix_pattern'), 2), [
		'CDEDC',
		'DDBDD',
		'EBABE',
		'DDBDD',
		'CDEDC',
	], {
		A: AE2_E('assembler_matrix_wall'),
		B: AE2_E('#extended_pattern_provider'),
		C: CP('iron_2'),
		D: KJ('logic_processor_wafer'),
		E: AE2('fluix_smart_cable'),
	})
	event.recipes.extendedcrafting.shaped_table(Item.of(AE2_E('assembler_matrix_crafter'), 2), [
		'CDEDC',
		'DDBDD',
		'EBABE',
		'DDBDD',
		'CDEDC',
	], {
		A: AE2_E('assembler_matrix_wall'),
		B: AE2_E('ex_molecular_assembler'),
		C: CP('iron_2'),
		D: KJ('engineering_processor_wafer'),
		E: AE2('fluix_smart_cable'),
	})
	event.recipes.extendedcrafting.shaped_table(Item.of(AE2_E('assembler_matrix_speed'), 2), [
		'CDEDC',
		'DDBDD',
		'EBABE',
		'DDBDD',
		'CDEDC',
	], {
		A: AE2_E('assembler_matrix_wall'),
		B: AE2_A('quantum_crafter'),
		C: CP('iron_2'),
		D: KJ('calculation_processor_wafer'),
		E: AE2('fluix_smart_cable'),
	})
})