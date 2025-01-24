// priority: 0

ServerEvents.recipes((event) => {
	//glass light
	removeRecipeByOutput(event, [
		GS("glass_light"),
	])
	donutCraftFull(event, Item.of(GS("glass_light"), 8), MC("glass"), F("#dusts/glowstone"))
	
	//glass redstone
	removeRecipeByOutput(event, [
		GS("glass_redstone"),
	])
	donutCraftFull(event, Item.of(GS("glass_redstone"), 8), MC("glass"), F("#dusts/redstone"))
	
	//glass ethereal
	removeRecipeByOutput(event, [
		GS("glass_ethereal"),
	])
	donutCraftFull(event, Item.of(GS("glass_ethereal"), 8), MC("glass"), EIO("player_token"))
	
	//glass ghostly
	removeRecipeByOutput(event, [
		GS("glass_ghostly"),
	])
	event.shaped(Item.of(GS("glass_ghostly"), 6), [
        'DBD',
        'DAD',
        'DCD'
    ], {
        A: EIO("player_token"),
        B: EIO("animal_token"),
		C: EIO("monster_token"),
		D: MC("glass"),
    })
	
	//glass ghostly from ethereal
	event.shaped(Item.of(GS("glass_ghostly"), 6), [
        'DBD',
        'D D',
        'DCD'
    ], {
        B: EIO("animal_token"),
		C: EIO("monster_token"),
		D: GS("glass_ethereal"),
    })
	
	//glass dark ethereal
	removeRecipeByOutput(event, [
		GS("glass_dark_ethereal"),
	])
	donutCraftFull(event, Item.of(GS("glass_dark_ethereal"), 8), GS("glass_ethereal"), MC("black_dye"))
	
	//glass dark ethereal
	removeRecipeByOutput(event, [
		GS("glass_dark_ethereal_reverse"),
	])
	donutCraftFull(event, Item.of(GS("glass_dark_ethereal_reverse"), 8), GS("glass_ethereal_reverse"), MC("black_dye"))
	
	//glass door
	event.stonecutting(GS("glass_door"), MI_D("#doors_glass"))
})