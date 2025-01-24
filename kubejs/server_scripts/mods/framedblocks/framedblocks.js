// priority: 0

ServerEvents.recipes((event) => {
  	//removals
	removeRecipeByOutput(event, [
		
	])

	event.replaceInput({ id: FB("framing_saw") }, MC("iron_ingot"), KJ("saw_blade"))
})
