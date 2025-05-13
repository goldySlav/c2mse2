// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		EC('crystaltine_ingot'),
		EC("ender_ingot"),
		EC("enhanced_redstone_ingot"),
		EC("flux_star"),
	])
	removeRecipeByInput(event, [
		EC("luminessence"),
	])
	removeRecipeByOutput(event, [
		EC('basic_table'),
		EC('basic_auto_table'),
		EC('advanced_table'),
		EC('advanced_auto_table'),
		EC('elite_table'),
		EC('elite_auto_table'),
		EC('ultimate_table'),
		EC('ultimate_auto_table'),
		EC('epic_table'),
		EC('epic_auto_table'),
		EC('auto_ender_crafter'),
		EC("flux_crafter"),
		EC("flux_alternator"),
		EC('auto_flux_crafter'),

		// w/o replace
		EC("black_iron_ingot"),
		EC("luminessence"),
		EC("crystaltine_component"),
		EC("the_ultimate_component"),
		EC("redstone_nugget"),
		EC("redstone_ingot"),
		EC("redstone_ingot_block"),
		EC('enhanced_redstone_component'),
	])

	event.recipes.tconstruct.casting_table(EC("ender_ingot"), Fluid.of(KJ("molten_ender_alloy"), 90), TCT("ingot_cast"), false, 60)
	event.recipes.tconstruct.casting_table(EC("ender_nugget"), Fluid.of(KJ("molten_ender_alloy"), 10), TCT("nugget_cast"), false, 20)
	event.custom({
		type: TCT("casting_basin"),
		cooling_time: 120,
		fluid: {
		  amount: 810,
		  fluid: KJ("molten_ender_alloy")
		},
		result: EC("ender_ingot_block")
	})
	event.recipes.tconstruct.melting(Fluid.of(KJ("molten_ender_alloy"), 90), EC("ender_ingot"), 1429, 60)
	event.recipes.tconstruct.melting(Fluid.of(KJ("molten_ender_alloy"), 10), EC("ender_nugget"), 1429, 20)

	//advanced crafting tables
	event.shaped(EC('basic_table'), [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: CP('iron_1'),
		B: KJ("compressed_crafting_table"),
		C: AE2("controller"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('basic_auto_table'), [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: CP('iron_1'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("basic_table"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('advanced_table'), [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: CP('gold_1'),
		B: KJ("compressed_crafting_table"),
		C: EC('basic_table'),
	})
	event.recipes.extendedcrafting.shaped_table(EC('advanced_auto_table'), [
		'AAAAA',
		'ABBBA',
		'ABCBA',
		'ABBBA',
		'AAAAA',
	], {
		A: CP('gold_1'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("advanced_table"),
	})

	//elite crafting tables
	event.recipes.extendedcrafting.shaped_table(EC('elite_table'), [
		'AAAAA',
		'ABBBA',
		'ABCBA',
		'ABBBA',
		'AAAAA',
	], {
		A: CP('diamond_1'),
		B: KJ("compressed_crafting_table"),
		C: EC("advanced_table"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('elite_auto_table'), [
		'AAAAAAA',
		'ABBBBBA',
		'ABAAABA',
		'ABACABA',
		'ABAAABA',
		'ABBBBBA',
		'AAAAAAA',
	], {
		A: CP('diamond_1'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("elite_table"),
	})

	//ultimate crafting tables
	event.recipes.extendedcrafting.shaped_table(EC('ultimate_table'), [
		'AAAAAAA',
		'ABBBBBA',
		'ABAAABA',
		'ABACABA',
		'ABAAABA',
		'ABBBBBA',
		'AAAAAAA',
	], {
		A: CP('emerald_1'),
		B: KJ("compressed_crafting_table"),
		C: EC("elite_table"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('ultimate_auto_table'), [
		'AAAAAAAAA',
		'ABBBBBBBA',
		'ABAAAAABA',
		'ABABBBABA',
		'ABABCBABA',
		'ABABBBABA',
		'ABAAAAABA',
		'ABBBBBBBA',
		'AAAAAAAAA',
	], {
		A: CP('emerald_1'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("ultimate_table"),
	})

	//ultimate crafting tables
	event.recipes.extendedcrafting.shaped_table(EC('epic_table'), [
		'AAAAAAAAA',
		'ABBBBBBBA',
		'ABAAAAABA',
		'ABABBBABA',
		'ABABCBABA',
		'ABABBBABA',
		'ABAAAAABA',
		'ABBBBBBBA',
		'AAAAAAAAA',
	], {
		A: CP('netherite_1'),
		B: KJ("compressed_crafting_table"),
		C: EC("ultimate_table"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('epic_auto_table'), [
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
		A: CP('netherite_1'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("epic_table"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('auto_ender_crafter'), [
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
		A: F('#storage_blocks/ender_ingot'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("ender_crafter"),
	})
	event.recipes.extendedcrafting.shaped_table(EC('auto_flux_crafter'), [
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
		A: F('#storage_blocks/red_alloy'),
		B: KJ("double_compressed_crafting_table"),
		C: EC("flux_crafter"),
	})

	//flux crafter
	event.recipes.powah.energizing([EC("ender_crafter")], EC("flux_crafter"), 300000)
	event.recipes.powah.energizing([EC("ender_alternator")], EC("flux_alternator"), 300000)

	//enhanced redstone ingot
	event.recipes.extendedcrafting.shaped_flux_crafter(Item.of(EC("enhanced_redstone_ingot"), 4), [
		' A ',
		'ABA',
		' A '
	], {
		A: F("#ingots/red_alloy"),
		B: EC("flux_star"),
	}, 800000).powerRate(400)

	//ender star (additional recipe)
	customRecipes.enderio.soulbinding(event, EC("ender_star"), MC("nether_star"), MC("enderman"), 50000, 3)

	//flux star
	event.recipes.extendedcrafting.shapeless_flux_crafter(EC("flux_star"), [EC("ender_star")], 400000).powerRate(400)

	//crystaltine ingot
	event.recipes.extendedcrafting.shaped_table(EC('crystaltine_ingot'), [
		'ABBBBBA',
		'ACDEDCA',
		'ACDEDCA',
		'ABBBBBA',
	], {
		A: MC('diamond'),
		B: MC("lapis_lazuli"),
		C: MC("gold_ingot"),
		D: MC("iron_ingot"),
		E: AE2("singularity"),
	})
	event.recipes.create.mechanical_crafting(EC('crystaltine_ingot'), [
		'ABBBBBA',
		'ACDEDCA',
		'ACDEDCA',
		'ABBBBBA',
	], {
		A: MC('diamond'),
		B: MC("lapis_lazuli"),
		C: MC("gold_ingot"),
		D: MC("iron_ingot"),
		E: AE2("singularity"),
	})

	event.replaceInput({ id: EC("guide_book") }, EC("black_iron_ingot"), EC("crystaltine_ingot"))

	//redstone ingot with red alloy compat
	event.shapeless(Item.of(PR_C("red_ingot"), 9), [F("#storage_blocks/red_alloy")])
	event.shapeless(EC("redstone_ingot_block"), [Item.of(PR_C("red_ingot"), 9)])
	event.shapeless(Item.of(EC("redstone_nugget"), 9), [F("#ingots/red_alloy")])
	event.shapeless(PR_C("red_ingot"), [Item.of(EC("redstone_nugget"), 9)])

	//singularities
    singularities.forEach(singularity => {
        const { id, core } = singularity

        event.recipes.extendedcrafting.shaped_table(singularityId(id), [
            'B    B    B',
            ' B   B   B ',
            '  B  B  B  ',
            '   B B B   ',
            '    BBB    ',
            'BBBBBABBBBB',
            '    BBB    ',
            '   B B B   ',
            '  B  B  B  ',
            ' B   B   B ',
            'B    B    B',
        ], {
			B: core,
			A: AE2("singularity"),
        })
    })
})
