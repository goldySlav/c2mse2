// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		CR_EI('disenchanter'),
	])
	
	event.shapeless(CR('item_drain'), CR_EI("disenchanter"))
	event.shapeless(CR_EI('disenchanter'), CR("item_drain"))
})