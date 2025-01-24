// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		
	])
	
	//wolframite/tungsten
	event.smelting(CR_M("tungsten_ingot"), CR_M("crushed_raw_wolframite")).xp(0.1).cookingTime(200)
	event.blasting(CR_M("tungsten_ingot"), CR_M("crushed_raw_wolframite")).xp(0.1).cookingTime(100)
	event.recipes.create.splashing([Item.of(CR_M("tungsten_nugget"), 9), Item.of(MC("gunpowder")).withChance(0.25)], CR_M("crushed_raw_wolframite"))
	event.smelting(CR_M("tungsten_ingot"), CR_M("wolframite_ore")).xp(1.0).cookingTime(200)
	event.blasting(CR_M("tungsten_ingot"), CR_M("wolframite_ore")).xp(1.0).cookingTime(100)
})