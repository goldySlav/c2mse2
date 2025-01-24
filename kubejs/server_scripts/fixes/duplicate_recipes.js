// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		//steel
		AA("steel_block"),
		AA("steel_ingot"),
	])
})