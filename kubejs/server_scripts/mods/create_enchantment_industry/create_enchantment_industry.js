// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		CR_EI('disenchanter'),
	])
	
	event.shapeless(CR('item_drain'), CR_EI("disenchanter"))
	event.shapeless(CR_EI('disenchanter'), CR("item_drain"))
	
	//experience motor
	removeRecipeByID(event, [
		CR_EI('crafting/experience_rotor'),
	])
    donutCraftFull(event, CR_EI("experience_rotor"), CR('experience_nugget'), CR("propeller"))
})