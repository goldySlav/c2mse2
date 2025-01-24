// priority: 0

ServerEvents.recipes((event) => {
	event.replaceInput({ id: TC("item_trash_can") }, MC("cobblestone"), CP("cobblestone_1"))
	event.replaceInput({ id: TC("liquid_trash_can") }, MC("cobblestone"), CP("cobblestone_1"))
	event.replaceInput({ id: TC("energy_trash_can") }, MC("cobblestone"), CP("cobblestone_1"))
})