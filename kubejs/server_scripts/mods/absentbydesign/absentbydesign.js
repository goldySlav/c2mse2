// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		ABD("slab_glass"),
	])
})