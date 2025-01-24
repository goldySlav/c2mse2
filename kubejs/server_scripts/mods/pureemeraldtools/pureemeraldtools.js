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
	
	//tools
	toolTypes.forEach(tool => {
		removeRecipeByID(event, [
			PET(`emerald_netherite_${tool}_smith`)
		])
		event.smithing(PET(`emerald_netherite_${tool}`), MC(`netherite_${tool}`), CP("emerald_1"))
	})
	
	//armors
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByID(event, [
			PET(`emerald_netherite_${piece}_smith`)
		])
		event.smithing(PET(`emerald_netherite_armor_${piece}`), MC(`netherite_${piece}`), CP("emerald_1"))
	})
})
