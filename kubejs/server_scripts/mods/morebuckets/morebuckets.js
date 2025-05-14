// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		MBCK(),
	])
	
	event.shaped(MBCK("golden_bucket"), [
		'BAB',
		' B ',
	], {
		A: MC("bucket"),
		B: MU("gold_opinium_core"),
	})
	
	event.shaped(MBCK("diamond_bucket"), [
		'BAB',
		' B ',
	], {
		A: MBCK("golden_bucket"),
		B: MU("diamond_opinium_core"),
	})
	
	event.shaped(MBCK("emerald_bucket"), [
		'BAB',
		' B ',
	], {
		A: MBCK("diamond_bucket"),
		B: MU("emerald_opinium_core"),
	})
	
	event.shaped(MBCK("obsidian_bucket"), [
		'BAB',
		' B ',
	], {
		A: MBCK("emerald_bucket"),
		B: MU("netherite_opinium_core"),
	})
})