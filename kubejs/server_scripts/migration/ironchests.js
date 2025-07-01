// priority: 0

ServerEvents.recipes((event) => {
    //removal
	const IC = (id, x) => MOD("ironchest", id, x)
	
    removeRecipeByMod(event, [ IC() ])
	
	event.shapeless(Item.of(SS("copper_chest"), {woodType:"oak"}), [ IC("copper_chest") ])
	event.shapeless(Item.of(SS("iron_chest"), {woodType:"oak"}), [ IC("iron_chest") ])
	event.shapeless(Item.of(SS("gold_chest"), {woodType:"oak"}), [ IC("gold_chest") ])
	event.shapeless(Item.of(SS("diamond_chest"), {woodType:"oak"}), [ IC("diamond_chest") ])
})