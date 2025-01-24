//priority: 0

ServerEvents.recipes(e => {
    removeRecipeByOutput(e, [
      PREXT("dark_matter_shield"),
      PREXT("red_matter_shield"),
    ])
	const { dm, rm } = tieredMaterials


    //dm
	e.recipes.extendedcrafting.shaped_table(PREXT("dark_matter_shield"), shieldTemplates.ultimate, {
		A: dm.star,
		B: dm.collector,
		C: dm.wafer,
		D: MVS("netherite_shield"),
		E: dm.block,
		F: dm.opinium,
		G: dm.circuit,
	})

    //rm
    e.recipes.extendedcrafting.shaped_table(PREXT("red_matter_shield"), shieldTemplates.ultimate, {
		A: rm.star,
		B: rm.collector,
		C: rm.wafer,
		D: PREXT("dark_matter_shield"),
		E: rm.block,
		F: rm.opinium,
		G: rm.circuit,
	})
})