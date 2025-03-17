// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		AV(),
	])
	
	event.shapeless(Item.of(KJ("crystal_matrix_ingot"), 2), [AV("crystal_matrix_ingot")])
	event.shapeless(Item.of(KJ("crystal_matrix_ingot"), 18), [AV("crystal_matrix")])
	event.shapeless(Item.of(KJ("diamond_lattice"), 2), [AV("diamond_lattice")])
	event.shapeless(Item.of(KJ("pileof_neutrons"), 2), [AV("pileof_neutrons")])
	event.shapeless(Item.of(KJ("neutronium_nugget"), 2), [AV("neutronium_nugget")])
	event.shapeless(Item.of(KJ("neutronium_ingot"), 2), [AV("neutronium_ingot")])
	event.shapeless(Item.of(KJ("neutronium_ingot"), 18), [AV("neutronium_block")])
	event.shapeless(Item.of(KJ("the_ultimate_star"), 2), [AV("infinity_catalyst")])
	event.shapeless(Item.of(KJ("the_ultimate_pearl"), 2), [AV("endest_pearl")])
	event.shapeless(Item.of(KJ("compressed_crafting_table"), 2), [AV("compressed_crafting_table")])
	event.shapeless(Item.of(KJ("double_compressed_crafting_table"), 2), [AV("double_compressed_crafting_table")])
	event.shapeless(Item.of(KJ("ultimate_stew"), 2), [AV("ultimate_stew")])
	event.shapeless(Item.of(KJ("cosmic_meatballs"), 2), [AV("cosmic_meatballs")])
})