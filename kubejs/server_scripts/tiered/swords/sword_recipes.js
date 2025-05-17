//priority: 0

ServerEvents.recipes(e => {
	const { unstable, infused, dm, rm, infinity } = tieredMaterials


    //etheric sword
    e.recipes.extendedcrafting.shaped_table(MU('unstable_sword_part'), swordTemplates.part, {
        A: unstable.star,
        C: unstable.wafer,
		E: unstable.opinium,
        F: unstable.circuit,
        G: unstable.collector,
	})

    //saint kikoku sword
    e.recipes.extendedcrafting.shaped_table(MU('kikoku_sword_part'), swordTemplates.part, {
        A: infused.star,
        C: infused.wafer,
		E: infused.opinium,
        F: infused.circuit,
        G: infused.collector,
	})

	//dm
    e.recipes.extendedcrafting.shaped_table(PRE('dm_sword_part'), swordTemplates.part, {
        A: dm.star,
        C: dm.wafer,
		E: dm.opinium,
        F: dm.circuit,
        G: dm.collector,
	})

    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_sword_part'), swordTemplates.part, {
        A: rm.star,
        C: rm.wafer,
		E: rm.opinium,
        F: rm.circuit,
        G: rm.collector,
	})

    //infinity
    removeRecipeByOutput(e, [
		IF('infinity_hammer'),
    ])
	e.recipes.extendedcrafting.shaped_table(infinity.hammer, swordTemplates.ultimate, {
        A: infinity.star,
		B: infinity.opinium,
        C: infinity.wafer,
		D: PRE('rm_sword'),
		E: infinity.block,
        F: infinity.circuit,
        G: infinity.collector,
	})
})