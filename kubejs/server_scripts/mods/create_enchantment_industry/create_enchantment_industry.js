// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		CR_EI('disenchanter'),
	])
	
	event.shapeless(CR('item_drain'), CR_EI("disenchanter"))
	event.shapeless(CR_EI('disenchanter'), CR("item_drain"))
	
	//experience motor
	removeRecipeByOutput(event, [
		CR_EI('experience_motor'),
	])
    donutCraftFull(event, CR_EI("experience_rotor"), CR("propeller"), CR('experience_nugget'))
})