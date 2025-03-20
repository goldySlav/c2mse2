// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		CR_EI('disenchanter'),
	])
	
	event.shapeless(CR('item_drain'), CR_EI("disenchanter"))
	event.shapeless(CR_EI('disenchanter'), CR("item_drain"))
	
	//experience rotor
	removeRecipeByID(event, [
		CR_EI('crafting/experience_rotor'),
	])
    donutCraftFull(event, CR_EI("experience_rotor"), CR('experience_nugget'), CR("propeller"))
	
	//experience melting/casting TCT compat
	event.recipes.tconstruct.casting_table(CR("experience_nugget"), Fluid.of(CR_EI("experience"), 3), TCT(`nugget_cast`), false, 10)
	event.recipes.tconstruct.melting(Fluid.of(CR_EI("experience"), 3), CR("experience_nugget"), 36, 2)
	event.recipes.tconstruct.melting(Fluid.of(CR_EI("experience"), 27), CR("experience_block"), 36, 4)
})