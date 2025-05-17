//priority: 0

ServerEvents.recipes(e => {
	const { unstable, dm, rm, infinity } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('unstable_axe_part'), axeTemplates.part, {
		A: unstable.star,
		C: unstable.wafer,
		E: unstable.opinium,
		F: unstable.circuit,
		G: unstable.collector,
	})


	//dm axe
	e.recipes.extendedcrafting.shaped_table(PRE('dm_axe_part'), axeTemplates.part, {
		A: dm.star,
		E: dm.opinium,
		C: dm.wafer,
		F: dm.circuit,
		G: dm.collector,
	})


    //rm axe
	e.recipes.extendedcrafting.shaped_table(PRE('rm_axe_part'), axeTemplates.part, {
		A: rm.star,
		E: rm.opinium,
		C: rm.wafer,
		F: rm.circuit,
		G: rm.collector,
	})


    //infinity axe
    removeRecipeByOutput(e, [
		IF('infinity_saw'),
    ])
	e.recipes.extendedcrafting.shaped_table(infinity.saw, axeTemplates.ultimate, {
		A: infinity.star,
		B: infinity.opinium,
		C: infinity.wafer,
		D: PRE("rm_axe"),
		E: infinity.block,
		F: infinity.circuit,
		G: infinity.collector,
	})
})