//priority: 0

ServerEvents.recipes(e => {
	const { unstable, dm, rm } = tieredMaterials

	//unstable
	e.recipes.extendedcrafting.shaped_table(MU('unstable_shovel_part'), shovelTemplates.part, {
		A: unstable.star,
		C: unstable.wafer,
		E: unstable.opinium,
		F: unstable.circuit,
		G: unstable.collector,
	})

	//dm
	e.recipes.extendedcrafting.shaped_table(PRE('dm_shovel_part'), shovelTemplates.part, {
		A: dm.star,
		C: dm.wafer,
		E: dm.opinium,
		F: dm.circuit,
		G: dm.collector,
	})

    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_shovel_part'), shovelTemplates.part, {
		A: rm.star,
		C: rm.wafer,
		E: rm.opinium,
		F: rm.circuit,
		G: rm.collector,
	})
})