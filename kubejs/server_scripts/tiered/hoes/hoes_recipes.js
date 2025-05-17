//priority: 0

ServerEvents.recipes(e => {
	const { unstable, dm, rm } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('unstable_hoe_part'), hoeTemplates.part, {
		A: unstable.star,
		C: unstable.wafer,
		E: unstable.opinium,
		F: unstable.circuit,
		G: unstable.collector,
	})

	//dm
	e.recipes.extendedcrafting.shaped_table(PRE('dm_hoe_part'), hoeTemplates.part, {
		A: dm.star,
		E: dm.opinium,
		C: dm.wafer,
		F: dm.circuit,
		G: dm.collector,
	})

    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_hoe_part'), hoeTemplates.part, {
		A: rm.star,
		E: rm.opinium,
		C: rm.wafer,
		F: rm.circuit,
		G: rm.collector,
	})
})