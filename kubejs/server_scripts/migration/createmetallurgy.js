// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		CR_M(),
	])
	
	event.shapeless(Item.of(KJ("coke"), 2), [CR_M("coke")])
	event.shapeless(Item.of(KJ("coke"), 18), [CR_M("coke_block")])
	
	event.shapeless(Item.of(TCT("seared_table"), 2), [CR_M("casting_table")])
	event.shapeless(Item.of(TCT("seared_basin"), 2), [CR_M("casting_basin")])
	event.shapeless(Item.of(CR("basin"), 2), [CR_M("foundry_basin")])
	
	event.shapeless(Item.of(KJ("copper_machine"), 2), [CR_M("foundry_mixer")])
})