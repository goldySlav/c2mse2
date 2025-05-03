//priority: 0

ServerEvents.recipes(e => {

    removeRecipeByOutput(e, [
		MU('reversing_hoe'),
		PRE("dm_hoe"),
		PRE("rm_hoe"),
    ])
	const { unstable, dm, rm } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('reversing_hoe'), hoeTemplates.ultimate, {
		A: unstable.star,
		B: unstable.opinium,
		C: unstable.wafer,
		D: DD("warden_hoe"),
		E: unstable.block,
		F: unstable.circuit,
		G: unstable.collector,
	})

	//dm
	e.recipes.extendedcrafting.shaped_table(PRE('dm_hoe'), hoeTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.wafer,
		D: MU("reversing_hoe"),
		E: dm.block,
		F: dm.circuit,
		G: dm.collector,
	})

    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_hoe'), hoeTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.wafer,
		D: PRE('dm_hoe'),
		E: rm.block,
		F: rm.circuit,
		G: rm.collector,
	})
})