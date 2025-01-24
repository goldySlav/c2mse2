// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
	
	])
	
	event.replaceInput({ id: "uppers:upper" }, MC("chest"), WH("wooden_hopper"))
})
