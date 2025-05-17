// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		P("crafting/blazing_crystal_block"),
		P("crafting/crystal_blazing"),
		P("crafting/niotic_crystal_block"),
		P("crafting/crystal_niotic"),
		P("crafting/spirited_crystal_block"),
		P("crafting/crystal_spirited"),
		P("crafting/nitro_crystal_block"),
		P("crafting/crystal_nitro"),
	])
	
	removeRecipeByOutput(event, [
		P("uraninite"),
		P("uraninite_block"),
		P("crystal_blazing"),
		P("blazing_crystal_block"),
		P("crystal_niotic"),
		P("niotic_crystal_block"),
		P("crystal_spirited"),
		P("spirited_crystal_block"),
		P("crystal_nitro"),
		P("nitro_crystal_block"),
		P("capacitor_basic_tiny"),
		P("capacitor_basic"),
		P("capacitor_basic_large"),
		P("capacitor_hardened"),
		P("capacitor_blazing"),
		P("capacitor_niotic"),
		P("capacitor_spirited"),
		P("capacitor_nitro"),
		P("crystal_blazing"),
		P("lens_of_ender"),
		P("aerial_pearl"),
		P("player_aerial_pearl"),
		P("reactor_starter"),
		P("reactor_basic"),
		P("reactor_hardened"),
		P("reactor_blazing"),
		P("reactor_niotic"),
		P("reactor_spirited"),
		P("reactor_nitro"),
	])
	
	const levels = ["starter", "basic", "hardened", "blazing", "niotic", "spirited", "nitro"]
	
	//wrench
	removeRecipeByOutput(event, [
		P("wrench"),
	])
	event.smithing(P("wrench"), tieredItems.ch2.circuit, FB('framed_wrench'), P('dielectric_paste'))
	
	//ender core fix
	removeRecipeByID(event, [
		P("energizing/ender_core"),
	])
	event.recipes.create.mixing(P("ender_core"), [MC("ender_eye"), P("dielectric_casing"), Fluid.of(TCT("molten_ender"), 90)])
	
	//thermoelectric plate
	removeRecipeByOutput(event, [
		P("thermoelectric_plate"),
	])
	event.shaped(P("thermoelectric_plate"), ["ABA", "BCB", "ABA"], {
		A: MC("blaze_powder"),
		B: PRE("alchemical_coal"),
		C: tieredItems.ch1.circuit,
	})
	
	//photoelectric pane
	removeRecipeByOutput(event, [
		P("photoelectric_pane"),
	])
	event.shaped(P("photoelectric_pane"), ["AAA", "BCB", "ADA"], {
		A: P("dielectric_paste"),
		B: F("#dusts/obsidian"),
		C: F("#glass/tinted"),
		D: tieredItems.ch1.circuit,
	})
	
	//dielectric_paste
	removeRecipeByOutput(event, [
		P("dielectric_paste"),
	])
	event.shapeless(Item.of(P("dielectric_paste"), 8), [Item.of(KJ("nourished_coke"), 2), MC("clay_ball"), MC("blaze_powder")])
	
	//charged snowball from curving
	removeRecipeByID(event, [
		P("energizing/charged_snowball"),
	])
	event.recipes.ae2.charger(P('charged_snowball'), MC("snowball"))
	customRecipes.create.charge(event, P('charged_snowball'), MC("snowball"), 100000)
	event.recipes.powah.energizing([MC("snowball")], P('charged_snowball'), 200000)
	


	//mass fix
	levels.forEach((level, i) => {
		const leveledCircuit = tieredItems["ch" + (i + 2)].circuit
		
		//battery to use mechanisms
		removeRecipeByOutput(event, [
			P(`battery_${level}`),
		])
		const batteryCenter = i == 0 ? IR("battery") : P(`battery_${levels[i - 1]}`)
		event.recipes.create.compacting(P(`battery_${level}`), [`16x ${P('dielectric_paste')}`, `8x ${leveledCircuit}`, batteryCenter])
		event.recipes.create.mechanical_crafting(P(`battery_${level}`), [
			'AAAAA',
			'ABBBA',
			'ABCBA',
			'ABBBA',
			'AAAAA',
		], {
			A: P('dielectric_paste'),
			B: leveledCircuit,
			C: batteryCenter,
		})
		event.recipes.extendedcrafting.shaped_table(P(`battery_${level}`), [
			'AAAAA',
			'ABBBA',
			'ABCBA',
			'ABBBA',
			'AAAAA',
		], {
			A: P('dielectric_paste'),
			B: leveledCircuit,
			C: batteryCenter,
		})
		
		
		
		//cable
		removeRecipeByOutput(event, [
			P(`energy_cable_${level}`),
		])
		const cableCenter = i == 0 ? F("#wires/copper") : P(`energy_cable_${levels[i - 1]}`)
		donutCraftFull(event, Item.of(P(`energy_cable_${level}`), 8), cableCenter, leveledCircuit)
	})
	
	//energized alloy
	removeRecipeByID(event, [
		P("energizing/energized_steel"),
	])
	event.recipes.powah.energizing([F("#ingots/gold"), F("#silicon"), IF("dryrubber")], P('steel_energized'), 100000)
	event.custom({
	type: AE2_A("reaction"),
	energy: 3200000,
	fluid: {
		fluidStack: {
			Amount: 16000,
			FluidName: IF("latex")
		}
	},
	input_items: [
		{
			amount: 64,
			ingredient: {
				tag: F("ingots/gold")
			}
		},
		{
			amount: 64,
			ingredient: {
				tag: F("silicon")
			}
		},
	],
	output: {
		"#": 64,
		"#c": "ae2:i",
		id: P("steel_energized"),
	}
})
})

PowahEvents.registerCoolants(event => {
    // .addFluid(fluid, coolness)
    // .addSolid(item, coolness)
	event.addFluid(KJ("sky_solution"), 5);
	event.addFluid(KJ("abstruse_waste"), 10);
})

PowahEvents.registerHeatSource(event => {
    // .add(fluid, hotness)
    // .add(block, hotness)
	event.add(PRE("dark_matter_block"), 2000);
	event.add(PRE("red_matter_block"), 3000);
})