//priority: 0

ServerEvents.recipes(e => {

	removeRecipeByOutput(e, [
		PRE("dm_furnace"),
		PRE("rm_furnace"),
	])
	const { dm, rm } = tieredMaterials

	//dm
	e.recipes.extendedcrafting.shaped_table(PRE("dm_furnace"), furnaceTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.wafer,
		D: IFC("netherite_furnace"),
		E: dm.block,
		F: dm.circuit,
		G: dm.collector,
	})


	//rm
	e.recipes.extendedcrafting.shaped_table(PRE("rm_furnace"), furnaceTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.wafer,
		D: PRE("dm_furnace"),
		E: rm.block,
		F: rm.circuit,
		G: rm.collector,
	})
})