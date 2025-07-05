// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		MORPH("tool")
	])

	event.shaped(MORPH("tool"), [
		' GB',
		' WR',
		'I  '
	], {
		I: F('#rods/cast_iron'),
		W: FB('framed_wrench'),
		R: F("#nuggets/red_alloy"),
		G: F("#nuggets/ender_ingot"),
		B: F("#nuggets/cobalt")
	})
})
