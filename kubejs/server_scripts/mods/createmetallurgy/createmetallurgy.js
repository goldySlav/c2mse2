// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		CR_M("alloying/steel"),
		CR_M("alloying/brass"),
		CR_M("alloying/void_steel"),
		CR_M("alloying/invar"),
		CR_M("alloying/bronze"),
		CR_M("alloying/electrum"),
		CR_M("alloying/constantan"),
		CR_M("alloying/netherite"),
		CR_M("blasting/coke_from_coal"),
		CR_M("tungsten_wire"),
		CR_M("compat/create_enchantment_industry/spout_experience_nugget"),
		CR_M("casting_in_basin/andesite_alloy_from_iron"),
		CR_M("casting_in_basin/andesite_alloy_from_zinc"),
	])
	removeRecipeByOutput(event, [
		CR_M("wolframite_dust"),
		CR_M("gold_dust"),
		CR_M("iron_dust"),
		CR_M("copper_dust"),
		CR_M("zinc_dust"),

		CR_M("graphite"),
		CR_M("graphite_blank_mold"),
		CR_M("graphite_ingot_mold"),
		CR_M("graphite_nugget_mold"),
		CR_M("graphite_plate_mold"),
		CR_M("graphite_rod_mold"),
		CR_M("graphite_gear_mold"),
		
		CR_M("sandpaper_belt"),
		CR_M("mechanical_belt_grinder"),
	])
	removeRecipeByInputOutput(event, [
		CR_M("dirty_wolframite_dust"),
		CR_M("dirty_gold_dust"),
		CR_M("dirty_iron_dust"),
		CR_M("dirty_copper_dust"),
		CR_M("dirty_zinc_dust"),
		CR_M("tungsten_wire_spool"),
	])
	removeRecipeByType(event, [
		CR_M("grinding"),
	])
	colours.forEach(color => {
		removeRecipeByInputOutput(event, [
			CR_M(`${color}_light_bulb`),
		])
	})
	
	//smelting tungsten ore to tungsten ingot (absent by default)
	event.smelting(CR_M('tungsten_ingot'), CR_M('raw_wolframite')).xp(0.7).cookingTime(200)
	event.blasting(CR_M('tungsten_ingot'), CR_M('raw_wolframite')).xp(0.7).cookingTime(100)
	
	const metalRecipesToDelete = ["iron", "steel", "gold", "copper", "zinc", "brass", "tungsten", "silver", "electrum", "tin", "osmium", "bronze", "constantan", "invar", "netherite", "nickel", "aluminum", "silver", "lead"]
	metalRecipesToDelete.forEach(metal => {
		removeRecipeByID(event, [
			CR_M(`casting_in_table/${metal}/plate`),
			CR_M(`casting_in_table/${metal}/nugget`),
			CR_M(`casting_in_table/${metal}/ingot`),
			CR_M(`casting_in_table/${metal}/gear`),
			CR_M(`casting_in_table/${metal}/rod`),
			CR_M(`casting_in_basin/${metal}/block`),
			CR_M(`melting/${metal}/plate`),
			CR_M(`melting/${metal}/nugget`),
			CR_M(`melting/${metal}/ingot`),
			CR_M(`melting/${metal}/rod`),
			CR_M(`melting/${metal}/wire`),
			CR_M(`melting/${metal}/dust`),
			CR_M(`melting/${metal}/gear`),
		])
	})

	customRecipes.create.melting(event, [`90x ${CR_M("molten_iron")}`], [F("#ingots/iron")], 40, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_iron")}`], [F("#plates/iron")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_iron")}`], [F("#nuggets/iron")], 20, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_gold")}`], [F("#ingots/gold")], 40, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_gold")}`], [F("#plates/gold")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_gold")}`], [F("#nuggets/gold")], 20, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_copper")}`], [F("#ingots/copper")], 40, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_copper")}`], [F("#plates/copper")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_copper")}`], [F("#nuggets/copper")], 20, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_zinc")}`], [F("#ingots/zinc")], 40, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_zinc")}`], [F("#plates/zinc")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_zinc")}`], [F("#nuggets/zinc")], 20, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_brass")}`], [F("#ingots/brass")], 40, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_brass")}`], [F("#plates/brass")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_brass")}`], [F("#nuggets/brass")], 20, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_tungsten")}`], [F("#ingots/tungsten")], 40, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_tungsten")}`], [F("#plates/tungsten")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_tungsten")}`], [F("#nuggets/tungsten")], 20, 1)
	customRecipes.create.melting(event, [`90x ${CR_M("molten_void_steel")}`], [F("#ingots/ender_ingot")], 40, 1)
	customRecipes.create.melting(event, [`10x ${CR_M("molten_void_steel")}`], [F("#nuggets/ender_ingot")], 20, 1)

	customRecipes.create.casting.table(event, MC("iron_ingot"), `90x ${CR_M("molten_iron")}`, "ingot")
	customRecipes.create.casting.table(event, MC("iron_nugget"), `10x ${CR_M("molten_iron")}`, "nugget", 20)
	customRecipes.create.casting.table(event, CR("iron_sheet"), `90x ${CR_M("molten_iron")}`, "plate")
	customRecipes.create.casting.table(event, CR_A("iron_rod"), `45x ${CR_M("molten_iron")}`, "rod")
	customRecipes.create.casting.basin(event, MC("iron_block"), `810x ${CR_M("molten_iron")}`)

	customRecipes.create.casting.table(event, MC("gold_ingot"), `90x ${CR_M("molten_gold")}`, "ingot")
	customRecipes.create.casting.table(event, MC("gold_nugget"), `10x ${CR_M("molten_gold")}`, "nugget", 20)
	customRecipes.create.casting.table(event, CR("golden_sheet"), `90x ${CR_M("molten_gold")}`, "plate")
	customRecipes.create.casting.table(event, CR_A("gold_rod"), `45x ${CR_M("molten_gold")}`, "rod")
	customRecipes.create.casting.basin(event, MC("gold_block"), `810x ${CR_M("molten_gold")}`)

	customRecipes.create.casting.table(event, MC("copper_ingot"), `90x ${CR_M("molten_copper")}`, "ingot")
	customRecipes.create.casting.table(event, CR("copper_nugget"), `10x ${CR_M("molten_copper")}`, "nugget", 20)
	customRecipes.create.casting.table(event, CR("copper_sheet"), `90x ${CR_M("molten_copper")}`, "plate")
	customRecipes.create.casting.table(event, CR_A("copper_rod"), `45x ${CR_M("molten_copper")}`, "rod")
	customRecipes.create.casting.basin(event, MC("copper_block"), `810x ${CR_M("molten_copper")}`)

	customRecipes.create.casting.table(event, CR("zinc_ingot"), `90x ${CR_M("molten_zinc")}`, "ingot")
	customRecipes.create.casting.table(event, CR("zinc_nugget"), `10x ${CR_M("molten_zinc")}`, "nugget", 20)
	customRecipes.create.casting.table(event, CR_A("zinc_sheet"), `90x ${CR_M("molten_zinc")}`, "plate")
	customRecipes.create.casting.table(event, CR_V("zinc_rod"), `45x ${CR_M("molten_zinc")}`, "rod")
	customRecipes.create.casting.basin(event, CR("zinc_block"), `810x ${CR_M("molten_zinc")}`)

	customRecipes.create.casting.table(event, CR("brass_ingot"), `90x ${CR_M("molten_brass")}`, "ingot")
	customRecipes.create.casting.table(event, CR("brass_nugget"), `10x ${CR_M("molten_brass")}`, "nugget", 20)
	customRecipes.create.casting.table(event, CR("brass_sheet"), `90x ${CR_M("molten_brass")}`, "plate")
	customRecipes.create.casting.table(event, CR_A("brass_rod"), `45x ${CR_M("molten_brass")}`, "rod")
	customRecipes.create.casting.basin(event, CR("brass_block"), `810x ${CR_M("molten_brass")}`)

	customRecipes.create.casting.table(event, CR_M("tungsten_ingot"), `90x ${CR_M("molten_tungsten")}`, "ingot")
	customRecipes.create.casting.table(event, CR_M("tungsten_nugget"), `10x ${CR_M("molten_tungsten")}`, "nugget", 20)
	customRecipes.create.casting.table(event, CR_M("tungsten_sheet"), `90x ${CR_M("molten_tungsten")}`, "plate")
	customRecipes.create.casting.basin(event, CR_M("tungsten_block"), `810x ${CR_M("molten_tungsten")}`)

	customRecipes.create.casting.table(event, EC("ender_ingot"), `90x ${CR_M("molten_void_steel")}`, "ingot")
	customRecipes.create.casting.table(event, EC("ender_nugget"), `10x ${CR_M("molten_void_steel")}`, "nugget", 20)
	customRecipes.create.casting.basin(event, EC("ender_ingot_block"), `810x ${CR_M("molten_void_steel")}`)
	
	customRecipes.create.casting.table(event, CR("experience_nugget"), `3x ${CR_EI("experience")}`, "nugget", 20)
	
	//ender alloy
	customRecipes.create.alloying(event, [`20x ${CR_M("molten_void_steel")}`], [`10x ${CR_M("molten_iron")}`, `10x ${KJ("ender")}`], 40, 1)
	
	//tungsten plate pressing recipe (absent by default for some reason)
	event.recipes.create.pressing(CR_M("tungsten_sheet"), F("#ingots/tungsten"))
	
	//sheets compat AA
	const sheets = ["tungsten"]
	sheets.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, CR_M(`${sheet}_sheet`), F(`#ingots/${sheet}`))
	})
})