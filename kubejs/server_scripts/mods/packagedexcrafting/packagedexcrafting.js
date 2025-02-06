// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		PEX("advanced_crafter"),
		PEX("elite_crafter"),
		PEX("ultimate_crafter"),
		PEXEX("epic_crafter"),
		PEX("ender_crafter"),
		PEX("combination_crafter"),
		PEX("marked_pedestal"),
		PEX("basic_crafter"),
		PEX("flux_crafter"),
	])

	event.recipes.extendedcrafting.shaped_table(PEX('advanced_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: CP('gold_1'),
		B: AE2("molecular_assembler"),
		C: EC("advanced_auto_table"),
	})
	event.recipes.extendedcrafting.shaped_table(PEX('elite_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: CP('diamond_1'),
		B: AE2("molecular_assembler"),
		C: EC("elite_auto_table"),
	})
	event.recipes.extendedcrafting.shaped_table(PEX('ultimate_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: CP('emerald_1'),
		B: AE2("molecular_assembler"),
		C: EC("ultimate_auto_table"),
	})
	event.recipes.extendedcrafting.shaped_table(PEXEX('epic_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: PREXP('magenta_matter_block'),
		B: AE2("molecular_assembler"),
		C: EC("epic_auto_table"),
	})

	event.recipes.extendedcrafting.shaped_table(PEX('ender_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: EC('enhanced_ender_ingot'),
		B: AE2("molecular_assembler"),
		C: EC("auto_ender_crafter"),
	})

	event.recipes.extendedcrafting.shaped_table(PEX('flux_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: EC('enhanced_redstone_ingot'),
		B: AE2("molecular_assembler"),
		C: EC("auto_flux_crafter"),
	})

	event.recipes.extendedcrafting.shaped_table(PEX('combination_crafter'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: CP('crystaltine_1'),
		B: AE2("molecular_assembler"),
		C: EC("crafting_core"),
	})

	event.recipes.extendedcrafting.shaped_table(PEX('marked_pedestal'), [
		'AAAAAAAAAAA',
		'ABBBBBBBBBA',
		'ABAAAAAAABA',
		'ABABBBBBABA',
		'ABABAAABABA',
		'ABABACABABA',
		'ABABAAABABA',
		'ABABBBBBABA',
		'ABAAAAAAABA',
		'ABBBBBBBBBA',
		'AAAAAAAAAAA',
	], {
		A: CP('crystaltine_1'),
		B: AE2("molecular_assembler"),
		C: EC("pedestal"),
	})
})