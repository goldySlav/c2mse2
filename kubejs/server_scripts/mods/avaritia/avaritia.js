// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		AV("record_fragment"),
		AV("neutronium_compressor"),
		AV("extreme_crafting_table"),
	])
	removeRecipeByID(event, [
		
	])

	//compressed crafting table
	removeRecipeByOutput(event, [
		AV("compressed_crafting_table"),
		AV("double_compressed_crafting_table"),
	])
	event.recipes.extendedcrafting.shapeless_ender_crafter(AV('compressed_crafting_table'), Item.of(MC("crafting_table"), 9)).craftingTime(90)
	event.recipes.extendedcrafting.shapeless_ender_crafter(AV('double_compressed_crafting_table'), Item.of(AV('compressed_crafting_table'), 9)).craftingTime(90)

  	//neutron pile
	event.custom({
		type: M('crystallizing'),
		chemicalType: 'gas',
		input: { amount: 100, gas: KJ("neutron_gas") },
		output: AV("pileof_neutrons"),
	})
})
