// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		PET("emerald_sword"),
		PET("emerald_shovel"),
		PET("emerald_axe"),
		PET("emerald_pickaxe"),
		PET("emerald_hoe"),
		PET("emerald_armor_helmet"),
		PET("emerald_armor_chestplate"),
		PET("emerald_armor_leggings"),
		PET("emerald_armor_boots"),
	])
	
	//pure emerald back and forth
	event.shapeless(PET("pure_emerald"), [MC("emerald"), CR("experience_nugget")])
	event.recipes.create.milling([MC("emerald"), Item.of(CR("experience_nugget")).withChance(0.25)], PET("pure_emerald")).processingTime(processingTimesDefault.milling).id(KJ(`${PET()}/pure_emerald_milling`))
	event.recipes.tconstruct.casting_table(PET("pure_emerald"), Fluid.of(CR_EI("experience"), 3), MC("emerald"), true, 20)
	event.recipes.tconstruct.casting_table(PET("pure_emerald"), Fluid.of(TCT("molten_emerald"), 100), CR("experience_nugget"), true, 20)
})
