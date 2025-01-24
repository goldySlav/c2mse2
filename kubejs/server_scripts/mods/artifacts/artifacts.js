// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		
	])

	event.shapeless(ART('cloud_in_a_bottle'), Q("bottled_cloud"))
	customRecipes.ae2.transform.fluid(event, ART("chorus_totem"), [MC("totem_of_undying")], F("witch_water"))
	event.shapeless(ART('universal_attractor'), KJ("chromatic_resonator"))
})