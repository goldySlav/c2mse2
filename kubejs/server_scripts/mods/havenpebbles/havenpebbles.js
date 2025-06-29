//priority: 0

ServerEvents.recipes(event => {
	removeRecipeByInput(event, [
		HV_P("stone_pebble"),
	])
	event.shaped(MC("stone"), [ 'AA', 'AA' ], { A: HV_P("stone_pebble") })
})