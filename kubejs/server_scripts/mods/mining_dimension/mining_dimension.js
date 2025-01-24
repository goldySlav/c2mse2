// priority: 0

ServerEvents.recipes(event => {
	removeRecipeByMod(event, [
		MD(),
	])
	
	customRecipes.industrialforegoing.dissolution(event, MD("teleporter"), [
		M("teleportation_core"),
		F("#ores"),
		M("teleportation_core"),
		PET("emerald_netherite_pickaxe"),
		PET("emerald_netherite_pickaxe"),
		KJ("ether_gem"),
		IF("machine_frame_supreme"),
		KJ("ether_gem"),
	], IF("ether_gas"), 1000, 120)
})