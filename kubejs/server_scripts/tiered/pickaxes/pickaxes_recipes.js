//priority: 0

ServerEvents.recipes(e => {
    removeRecipeByOutput(e, [
		MU('destruction_pickaxe'),
		PRE('dm_pick'),
		PRE('rm_pick'),
		IF('infinity_drill'),
    ])
	const { unstable, dm, rm, infinity } = tieredMaterials


	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('destruction_pickaxe'), pickaxeTemplates.ultimate, {
		A: unstable.star,
		B: unstable.opinium,
		C: unstable.circuit,
		D: PET("emerald_netherite_pickaxe"),
		E: unstable.block,
		F: unstable.wafer,
		G: unstable.collector,
	})

	//dm pick
	e.recipes.extendedcrafting.shaped_table(PRE('dm_pick'), pickaxeTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.circuit,
		D: MU('destruction_pickaxe'),
		E: dm.block,
		F: dm.wafer,
		G: dm.collector,
	})

    //rm pick
	e.recipes.extendedcrafting.shaped_table(PRE('rm_pick'), pickaxeTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.circuit,
		D: PRE('dm_pick'),
		E: rm.block,
		F: rm.wafer,
		G: rm.collector,
	})

    //infinity pick
	e.recipes.extendedcrafting.shaped_table(infinity.drill, pickaxeTemplates.ultimate, {
		A: infinity.star,
		B: infinity.opinium,
		C: infinity.circuit,
		D: PRE('rm_pick'),
		E: infinity.block,
		F: infinity.wafer,
		G: infinity.collector,
	})
})