// priority: 0

ServerEvents.recipes(event => {
	//golden apple stew
	removeRecipeByOutput(event, [
		WSM("golden_apple_stew")
	])
    event.recipes.create.mixing(WSM('golden_apple_stew'), [
        WSM("#cure_ingredient"),
        PHC_FC("stewitem"),
        MC("golden_apple"),
        WSM("#cure_base")
    ]).heated()
	
	//supertnt
    event.replaceInput({ id: WSM("super_tnt") }, MC("gunpowder"), AE2("tiny_tnt"))
	
	//formidibomb
	removeRecipeByOutput(event, [
		WSM("formidibomb")
	])
	customRecipes.draconicevolution.fusion_craft(
		event,
		WSM("formidibomb"),
		WSM("super_tnt"),
		[ `4x ${AE2("tiny_tnt")}`, `6x ${MC("tnt")}`, `4x ${MC("end_crystal")}`, `2x ${MC("gunpowder")}` ],
		4
	)
	
	//super support beacon
	removeRecipeByID(event, [
		WSM("super_support_beacon"),
	])
	event.shaped(WSM("super_support_beacon"), [
		'AAA',
		'ACA',
		'BBB',
	], {
		A: WSM('tainted_glass'),
		B: WSM('tainted_flesh_block'),
		C: KJ('the_ultimate_star'),
	})
})