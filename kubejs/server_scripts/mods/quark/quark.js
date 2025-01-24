// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
        Q("tweaks/crafting/utility/misc/easy_hopper"),
	])
	removeRecipeByOutput(event, [
        Q("cactus_paste"),
	])

    event.remove({ id: Q("building/crafting/sturdy_stone") })
    event.remove({ id: Q("building/crafting/sturdy_stone_decompress") })
    event.shaped(Item.of(Q("sturdy_stone"), 8), [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: MC('stone'),
        B: MC('cobblestone'),
    })
    event.shaped(Item.of(Q("sturdy_stone"), 8), [
        'ABA',
        'B B',
        'ABA'
    ], {
        B: MC('stone'),
        A: MC('cobblestone'),
    })
	
	event.shapeless(Q("bottled_cloud"), ART('cloud_in_a_bottle'))
})