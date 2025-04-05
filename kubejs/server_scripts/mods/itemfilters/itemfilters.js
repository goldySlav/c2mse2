// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByMod(event, [
		"itemfilters",
    ])
})