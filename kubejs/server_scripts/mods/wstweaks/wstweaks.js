// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		WST('lava_blade'),
		WST('blaze_blade'),
	])
})
