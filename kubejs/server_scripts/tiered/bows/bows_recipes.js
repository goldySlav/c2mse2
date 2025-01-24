//priority: 0

ServerEvents.recipes(e => {
	removeRecipeByOutput(e, [
		IF("infinity_launcher"),
	])
	
	const { infinity } = tieredMaterials
	
	//infinity
	e.recipes.extendedcrafting.shaped_table(infinity.launcher, bowTemplates.ultimate, {
		A: MC("bow"),
		B: infinity.circuit,
		C: infinity.opinium,
		D: infinity.wafer,
		E: infinity.block,
		F: infinity.collector,
        G: infinity.star,
	})
})