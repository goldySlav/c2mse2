// priority: 0

ServerEvents.recipes((event) => {
    //removal
	const MB = (id, x) => MOD("metalbarrels", id, x)
	
    removeRecipeByMod(event, [ MB() ])
	
	event.shapeless(Item.of(SS("copper_barrel"), {woodType:"oak"}), [ MB("copper_barrel") ])
	event.shapeless(Item.of(SS("iron_barrel"), {woodType:"oak"}), [ MB("iron_barrel") ])
	event.shapeless(Item.of(SS("gold_barrel"), {woodType:"oak"}), [ MB("gold_barrel") ])
	event.shapeless(Item.of(SS("diamond_barrel"), {woodType:"oak"}), [ MB("diamond_barrel") ])
	event.shapeless(Item.of(SS("netherite_barrel"), {woodType:"oak"}), [ MB("netherite_barrel") ])
	
	
})