//priority: 0

ServerEvents.recipes(e => {
    removeRecipeByOutput(e, [
      PREXT("dark_matter_trident"),
      PREXT("red_matter_trident"),
	  IF("infinity_trident"),
    ])
	const { dm, rm, infinity } = tieredMaterials

	//dm
	e.recipes.extendedcrafting.shaped_table(PREXT("dark_matter_trident"), tridentTemplates.ultimate, {
		A: dm.star,
		B: dm.opinium,
		C: dm.wafer,
		D: MC("trident"),
		E: dm.block,
		F: dm.circuit,
		G: dm.collector,
	})


    //rm
	e.recipes.extendedcrafting.shaped_table(PREXT("red_matter_trident"), tridentTemplates.ultimate, {
		A: rm.star,
		B: rm.opinium,
		C: rm.wafer,
		D: PREXT("dark_matter_trident"),
		E: rm.block,
		F: rm.circuit,
		G: rm.collector,
	})


    //infinity_trident
	e.recipes.extendedcrafting.shaped_table(infinity.trident, tridentTemplates.ultimate, {
		A: infinity.star,
		B: infinity.opinium,
		C: infinity.wafer,
		D: PREXT("red_matter_trident"),
		E: infinity.block,
		F: infinity.circuit,
		G: infinity.collector,
	})
})