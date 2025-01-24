//priority: 0

ServerEvents.recipes(e => {
    removeRecipeByOutput(e, [
		MU('precision_shears'),
		PRE("dm_shears"),
		PRE("rm_shears"),
    ])
	const { unstable, dm, rm } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('precision_shears'), shearTemplates.ultimate, {
		A: unstable.star,
		B: unstable.opinium,
		C: unstable.wafer,
		D: MI_C("mysterious_shears"),
		E: unstable.block,
		F: unstable.circuit,
		G: unstable.collector,
	})

	//dm
	e.recipes.extendedcrafting.shaped_table(PRE('dm_shears'), shearTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.wafer,
		D: MU("precision_shears"),
		E: dm.block,
		F: dm.circuit,
		G: dm.collector,
	})


    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_shears'), shearTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.wafer,
		D: PRE('dm_shears'),
		E: rm.block,
		F: rm.circuit,
		G: rm.collector,
	})
})