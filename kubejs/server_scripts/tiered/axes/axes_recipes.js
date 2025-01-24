//priority: 0

ServerEvents.recipes(e => {

    removeRecipeByOutput(e, [
		MU('healing_axe'),
		PRE("dm_axe"),
		PRE("rm_axe"),
		IF("infinity_saw"),
    ])
	
	const { unstable, dm, rm, infinity } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('healing_axe'), axeTemplates.ultimate, {
		A: unstable.star,
		B: unstable.opinium,
		C: unstable.wafer,
		D: PET("emerald_netherite_axe"),
		E: unstable.block,
		F: unstable.circuit,
		G: unstable.collector,
	})


	//dm axe
	e.recipes.extendedcrafting.shaped_table(PRE('dm_axe'), axeTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.wafer,
		D: MU("healing_axe"),
		E: dm.block,
		F: dm.circuit,
		G: dm.collector,
	})


    //rm axe
	e.recipes.extendedcrafting.shaped_table(PRE('rm_axe'), axeTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.wafer,
		D: PRE("dm_axe"),
		E: rm.block,
		F: rm.circuit,
		G: rm.collector,
	})


    //infinity axe
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