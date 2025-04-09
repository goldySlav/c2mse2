// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		IR("screwdriver"),
		IR("motor"),
		IR("sponge_iron"),
		IR("small_wind_blade"),
		IR("firebox_solid"),
		IR("firebox_fluid"),
		IR("coil_hv"),
		IR("solar_panel"),
		IR("solar_panel_frame"),
		IR("energy_cable_lv"),
		IR("energy_cable_mv"),
		IR("energy_cable_hv"),
		IR("fluid_pipe"),
		IR("high_pressure_pipe"),
		IR("valve_pipe_large"),
		IR("electric_pump"),
		IR("small_wind_turbine_pillar"),
		IR("small_wind_turbine"),
		IR("portable_generator"),
		IR("conveyor_bulk_basic"),
		IR("conveyor_bulk_fast"),
		IR("conveyor_bulk_express"),
		IR("steam_boiler"),
		IR("steam_turbine"),
		IR("storage_chest"),
		IR("lathe"),
		IR("dam_intake"),
		IR("dam_outflow"),
		IR("dam_turbine"),
		IR("dam_axis"),
		IR("dam_generator"),
		IR("infinity_generator"),
		IR("catwalk_hatch"),
		IR("drill_steel"),
		IR("drill_diamond"),
		IR("drill_deep"),
		IR("mining"),
		IR("transformer_hv"),
		IR("isolator_hv"),
		IR("barrel"),
	])
	
	//mass replace steel tag >> conductive iron item
	event.replaceInput({ mod: IR() }, F("#ingots/steel"), IR("ingot_steel"))
	event.replaceInput({ mod: IR() }, F("#storage_blocks/steel"), IR("block_steel"))
	event.replaceInput({ mod: IR() }, F("#rods/steel"), IR("stick_steel"))
	
	//rod compat CR_A
	event.custom({
		type: CR_A("rolling"),
		input: {
			tag: F("ingots/cast_iron")
		},
		result: {
			item: IR("stick_steel"),
			count: 2
		},
	})
	
	//trashcan
	removeRecipeByOutput(event, [
		IR("trash"),
	])
	event.shaped(IR('trash'), [
		'AAA',
		'BCD',
		'AAA'
	], {
		A: F('#ingots/cast_iron'),
		B: TC('item_trash_can'),
		C: TC('liquid_trash_can'),
		D: TC('energy_trash_can'),
	})
	event.shaped(IR('trash'), [
		'AAA',
		' B ',
		'AAA'
	], {
		A: F('#ingots/cast_iron'),
		B: TC('ultimate_trash_can'),
	})
	
	//barbed wire
	removeRecipeByOutput(event, [
		IR("razor_wire"),
	])
	event.shaped(Item.of(IR('razor_wire'), 6), [
		'C C',
		'BBB',
		'ACA',
	], {
		A: F('#rods/cast_iron'),
		B: F('#wires/iron'),
		C: F('#nuggets/iron'),
	})
	
	//battery
	removeRecipeByOutput(event, [
		IR("battery"),
	])
	event.shaped(Item.of(IR('battery'), 1), [
		'D E',
		'CAC',
		'CBC',
	], {
		A: KJ('sealed_mechanism'),
		B: P('dielectric_casing'),
		C: P('dielectric_paste'),
		D: MC('redstone'),
		E: MC('lapis_lazuli'),
	})
	
	//lithium battery
	removeRecipeByOutput(event, [
		IR("battery_lithium"),
	])
	event.recipes.create.mechanical_crafting(IR("battery_lithium"), [
		' E F ',
		'CBBBC',
		'CBABC',
		'CBBBC',
		'CDDDC',
	], {
		A: KJ('computation_matrix'),
		B: IR('battery'),
		C: F('#ingots/crystaltine'),
		D: F('#ingots/red_alloy'),
		E: PR_T('red_insulated_wire'),
		F: PR_T('blue_insulated_wire'),
	})
	event.recipes.extendedcrafting.shaped_table(IR('battery_lithium'), [
		' E F ',
		'CBBBC',
		'CBABC',
		'CBBBC',
		'CDDDC',
	], {
		A: KJ('computation_matrix'),
		B: IR('battery'),
		C: F('#ingots/crystaltine'),
		D: F('#ingots/red_alloy'),
		E: PR_T('red_insulated_wire'),
		F: PR_T('blue_insulated_wire'),
	})
	
	//industrial battery bank
	removeRecipeByOutput(event, [
		IR("ind_battery_bank"),
	])
	event.recipes.create.mechanical_crafting(IR("ind_battery_bank"), [
		'CFCFC',
		'CDEDC',
		'CABAC',
		'CDEDC',
		'CCCCC',
	], {
		A: IR('energy_level'),
		B: IR('battery_bank'),
		C: F('#ingots/cast_iron'),
		D: PR_T('red_insulated_wire'),
		E: PR_T('black_insulated_wire'),
		F: P('energy_cable_niotic'),
	})
	event.recipes.extendedcrafting.shaped_table(IR('ind_battery_bank'), [
		'CFCFC',
		'CDEDC',
		'CABAC',
		'CDEDC',
		'CCCCC',
	], {
		A: IR('energy_level'),
		B: IR('battery_bank'),
		C: F('#ingots/cast_iron'),
		D: PR_T('red_insulated_wire'),
		E: PR_T('black_insulated_wire'),
		F: P('energy_cable_niotic'),
	})
	
	//industrial fluid tank
	removeRecipeByOutput(event, [
		IR("fluid_tank"),
	])
	event.recipes.create.mechanical_crafting(IR("fluid_tank"), [
		'BBCBB',
		'BAAAB',
		'BADAB',
		'BAAAB',
		'BBCBB',
	], {
		A: CR('fluid_tank'),
		B: F('#ingots/cast_iron'),
		C: CR('fluid_pipe'),
		D: IR('fluid_gauge'),
	})
	event.recipes.extendedcrafting.shaped_table(IR('fluid_tank'), [
		'BBCBB',
		'BAAAB',
		'BADAB',
		'BAAAB',
		'BBCBB',
	], {
		A: CR('fluid_tank'),
		B: F('#ingots/cast_iron'),
		C: CR('fluid_pipe'),
		D: IR('fluid_gauge'),
	})
	
	//cast iron ingot
	removeRecipeByID(event, [
		IR("ingot_steel_from_smelting_sponge_iron"),
		IR("ingot_steel_from_blasting_sponge_iron"),
	])
	event.smelting(IR('ingot_steel'), F('#ingots/iron')).cookingTime(200)
	event.blasting(IR('ingot_steel'), F('#ingots/iron')).cookingTime(100)
})
