// priority: 0

ServerEvents.recipes(event => {
	removeRecipeByID(event, [
		CR_N("netherite_fragment_by_crushing"),
		CR_N("netherite_fragment_to_ancient_debris"),
	])
})