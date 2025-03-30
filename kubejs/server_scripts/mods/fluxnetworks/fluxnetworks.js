// priority: 0

ServerEvents.recipes((event) => {
	//flux dust
	customRecipes.industrialforegoing.dissolution(event, `8x ${FN("flux_dust")}`, [
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
		F("#dusts/obsidian"),
	],
		KJ("liquid_redstone"),
		500
	)

  //flux core
    removeRecipeByOutput(event, [
		FN("flux_core"),
    ])
	event.shaped(FN("flux_core"), [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: FN("flux_dust"),
		B: CP("obsidian_2"),
		C: F("#dusts/lithium"),
	})

  //flux point
    removeRecipeByOutput(event, [
		FN("flux_point"),
    ])
	event.shaped(FN("flux_point"), [
		' A ',
		'ABA',
		' A ',
	], {
		A: FN("flux_core"),
		B: AE2("export_bus"),
	})

  //flux plug
    removeRecipeByOutput(event, [
		FN("flux_plug"),
    ])
	event.shaped(FN("flux_plug"), [
		' A ',
		'ABA',
		' A ',
	], {
		A: FN("flux_core"),
		B: AE2("import_bus"),
	})

  //controller
    removeRecipeByOutput(event, [
		FN("flux_controller"),
    ])
	event.recipes.extendedcrafting.shaped_table(FN("flux_controller"), [
		'CCCCACCCC',
		'DGGGGGGGD',
		'DGFFFFFGD',
		'DGFEEEFGD',
		'AGFEBEFGA',
		'DGFEEEFGD',
		'DGFFFFFGD',
		'DGGGGGGGD',
		'CCCCACCCC',
	], {
		A: PREXP('magnum_star_drei'), // 1.6 bil
		B: PREXP("magenta_compressed_collector"),
		C: FN('flux_block'),
		D: MU('chorus_opinium_core'),
		E: F("#dusts/lithium"),
		F: KJ("wafer_component_64k"),
		G: FN('flux_core'),
	}).tier(5)

  //basic flux storage
    removeRecipeByOutput(event, [
		FN("basic_flux_storage"),
    ])
	event.recipes.extendedcrafting.shaped_table(FN("basic_flux_storage"), [
		'CCCACACCC',
		'DGGGGGGGD',
		'DGFFFFFGD',
		'AGFEEEFGA',
		'DGFEBEFGD',
		'AGFEEEFGA',
		'DGFFFFFGD',
		'DGGGGGGGD',
		'CCCACACCC',
	], {
		A: M('ultimate_induction_provider'),
		B: PREXP('magnum_star_drei'),
		C: FN('flux_block'),
		D: MU('chorus_opinium_core'),
		E: M('ultimate_induction_cell'),
		F: KJ("wafer_component_64k"),
		G: FN('flux_core'),
	}).tier(5)
	event.recipes.mekanism.nucleosynthesizing(M("ultimate_induction_cell"), `300x ${M("antimatter")}`, FN("basic_flux_storage"), 300)

  //herculean_flux_storage
    removeRecipeByOutput(event, [
		FN("herculean_flux_storage"),
    ])
	event.recipes.extendedcrafting.shaped_table(FN("herculean_flux_storage"), [
		'CCCCCCCCC',
		'DGGGGGGGD',
		'DGFFFFFGD',
		'DGFEEEFGD',
		'DGFEBEFGD',
		'DGFEEEFGD',
		'DGFFFFFGD',
		'DGGGGGGGD',
		'CCCCCCCCC',
	], {
		B: PREXP('magnum_star_vier'),
		C: FN('flux_block'),
		D: MU('experience_opinium_core'),
		E: FN("basic_flux_storage"),
		F: KJ("wafer_component_256k"),
		G: FN('flux_core'),
	}).tier(5)
	event.recipes.mekanism.nucleosynthesizing(FN("basic_flux_storage"), `500x ${M("antimatter")}`, FN("herculean_flux_storage"), 500)

  //gargantuan_flux_storage
    removeRecipeByOutput(event, [
		FN("gargantuan_flux_storage"),
    ])
	event.recipes.extendedcrafting.shaped_table(FN("gargantuan_flux_storage"), [
		'CCCCCCCCC',
		'DGGGGGGGD',
		'DGFFFFFGD',
		'DGFEEEFGD',
		'DGFEBEFGD',
		'DGFEEEFGD',
		'DGFFFFFGD',
		'DGGGGGGGD',
		'CCCCCCCCC',
	], {
		B: PREXP('magnum_star_sphere'),
		C: FN('flux_block'),
		D: MU('nether_star_opinium_core'),
		E: FN("herculean_flux_storage"),
		F: KJ("wafer_component_1m"),
		G: FN('flux_core'),
	}).tier(5)
	event.recipes.mekanism.nucleosynthesizing(FN("herculean_flux_storage"), `1000x ${M("antimatter")}`, FN("gargantuan_flux_storage"), 1000)
})