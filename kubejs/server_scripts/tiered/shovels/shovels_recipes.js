//priority: 0

ServerEvents.recipes(e => {
    removeRecipeByOutput(e, [
		MU('erosion_shovel'),
		PRE("dm_shovel"),
		PRE("rm_shovel"),
    ])
	const { unstable, dm, rm } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('erosion_shovel'), shovelTemplates.ultimate, {
		A: unstable.star,
		B: unstable.opinium,
		C: unstable.wafer,
		D: PET("emerald_netherite_shovel"),
		E: unstable.block,
		F: unstable.circuit,
		G: unstable.collector,
	})

	//dm
	e.recipes.extendedcrafting.shaped_table(PRE('dm_shovel'), shovelTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.wafer,
		D: MU("erosion_shovel"),
		E: dm.block,
		F: dm.circuit,
		G: dm.collector,
	})


    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_shovel'), shovelTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.wafer,
		D: PRE('dm_shovel'),
		E: rm.block,
		F: rm.circuit,
		G: rm.collector,
	})
})