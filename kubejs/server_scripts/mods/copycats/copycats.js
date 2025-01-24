// priority: 0

ServerEvents.recipes((event) => {
	//copycat iron door
	removeRecipeByOutput(event, [
		CR_CC("copycat_iron_door"),
	])

	event.shapeless(CR_CC("copycat_iron_door"), [MI_D("#doors_iron"), F("#ingots/zinc")])
})
