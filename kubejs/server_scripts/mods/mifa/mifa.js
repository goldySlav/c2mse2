// priority: 0

ServerEvents.recipes(event => {
	removeRecipeByID(event, [
		IF_MIFA("dissolution_chamber/efficiency_addon_3"),
	])
	customRecipes.industrialforegoing.dissolution(event, IF_MIFA("efficiency_addon_3"), [
		MC("redstone"),
		MC("redstone"),
		F("#glass_panes/colorless"),
		F("#glass_panes/colorless"),
		IF_MIFA("netherite_gear"),
		IF("efficiency_addon_2"),
		MC("blaze_rod"),
		MC("blaze_rod"),
	], IF("pink_slime"), 1000, 200)
})