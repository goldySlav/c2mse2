//priority: 0

const ultimateSword = [
	'       EE',
	'      EGE',
	'     EFE ',
	'    EFE  ',
	' C EFE   ',
	'  CDE    ',
	'  BC     ',
	' B  C    ',
	'A        ',
]

ServerEvents.recipes(e => {
    removeRecipeByOutput(e, [
		WST('lava_blade'),
		WST('blaze_blade'),
        MU("kikoku"),
        MU("etheric_sword"),
        PRE("dm_sword"),
        PRE("rm_sword"),
		IF('infinity_hammer'),
    ])
	const { unstable, infused, dm, rm, infinity } = tieredMaterials


    //etheric sword
    e.recipes.extendedcrafting.shaped_table(MU('etheric_sword'), ultimateSword, {
        A: unstable.star,
		B: unstable.opinium,
        C: unstable.wafer,
        D: PET("emerald_netherite_sword"),
		E: unstable.block,
        F: unstable.circuit,
        G: unstable.collector,
	})

    //saint kikoku sword
    e.recipes.extendedcrafting.shaped_table(MU('kikoku'), ultimateSword, {
        A: infused.star,
		B: infused.opinium,
        C: infused.wafer,
		D: MU('etheric_sword'),
		E: infused.block,
        F: infused.circuit,
        G: infused.collector,
	})

	//dm
    e.recipes.extendedcrafting.shaped_table(PRE('dm_sword'), ultimateSword, {
        A: dm.star,
		B: dm.opinium,
        C: dm.wafer,
		D: MU('kikoku'),
		E: dm.block,
        F: dm.circuit,
        G: dm.collector,
	})

    //rm
	e.recipes.extendedcrafting.shaped_table(PRE('rm_sword'), ultimateSword, {
        A: rm.star,
		B: rm.opinium,
        C: rm.wafer,
		D: PRE('dm_sword'),
		E: rm.block,
        F: rm.circuit,
        G: rm.collector,
	})

    //infinity
	e.recipes.extendedcrafting.shaped_table(infinity.hammer, ultimateSword, {
        A: infinity.star,
		B: infinity.opinium,
        C: infinity.wafer,
		D: PRE('rm_sword'),
		E: infinity.block,
        F: infinity.circuit,
        G: infinity.collector,
	})
})