// priority: 0

ServerEvents.recipes(event => {
	event.shapeless(ART('cloud_in_a_bottle'), Q("bottled_cloud"))
	event.recipes.ae2.transform(ART("chorus_totem"), [MC("totem_of_undying")]).circumstance({ type: 'fluid', tag: F('witch_water') })
	event.shapeless(ART('universal_attractor'), KJ("chromatic_resonator"))
})