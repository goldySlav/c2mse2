//priority: 0

ServerEvents.recipes(e => {
	const { unstable, dm, rm, infinity } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('unstable_pickaxe_part'), pickaxeTemplates.part, {
		A: unstable.star,
		C: unstable.wafer,
		E: unstable.opinium,
		F: unstable.circuit,
		G: unstable.collector,
	})

	//dm pick
	e.recipes.extendedcrafting.shaped_table(PRE('dm_pickaxe_part'), pickaxeTemplates.part, {
		A: dm.star,
		C: dm.wafer,
		E: dm.opinium,
		F: dm.circuit,
		G: dm.collector,
	})

    //rm pick
	e.recipes.extendedcrafting.shaped_table(PRE('rm_pickaxe_part'), pickaxeTemplates.part, {
		A: rm.star,
		C: rm.wafer,
		E: rm.opinium,
		F: rm.circuit,
		G: rm.collector,
	})

    //infinity pick
    removeRecipeByOutput(e, [
		IF('infinity_drill'),
    ])
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