// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		CR_M(),
	])
	
	event.shapeless(KJ("coke"), [CR_M("coke")])
	event.shapeless(Item.of(KJ("coke"), 9), [CR_M("coke_block")])
	
	event.shapeless(TCT("seared_table"), [CR_M("casting_table")])
	event.shapeless(TCT("seared_basin"), [CR_M("casting_basin")])
})