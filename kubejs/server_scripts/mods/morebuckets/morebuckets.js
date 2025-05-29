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
		B: F("#ingots/gold"),
	})
	
	event.shaped(MBCK("diamond_bucket"), [
		'BAB',
		' B ',
	], {
		A: MBCK("golden_bucket"),
		B: F("#gems/diamond"),
	})
	
	event.shaped(MBCK("emerald_bucket"), [
		'BAB',
		' B ',
	], {
		A: MBCK("diamond_bucket"),
		B: F("#gems/emerald"),
	})
	
	event.shaped(MBCK("obsidian_bucket"), [
		'BAB',
		' B ',
	], {
		A: MBCK("emerald_bucket"),
		B: F("#ingots/netherite"),
	})
})