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
		W: FB('framed_wrench').consume(),
		R: EC("redstone_nugget"),
		G: EC("ender_nugget"),
		B: TCT("cobalt_nugget")
	})
})
