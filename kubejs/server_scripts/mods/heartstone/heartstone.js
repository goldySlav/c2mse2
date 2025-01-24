// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		
	])

	event.shapeless(HS('heartstone'), [Item.of(ART("crystal_heart"), 2)])
})