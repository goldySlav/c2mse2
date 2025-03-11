// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		CR_DD(),
	])
	
	//inverse box (simple gearshift)
	event.shapeless(Item.of(CR('gearshift'), 2), [CR_DD('inverse_box')])
	
	//inverse box (simple gearshift)
	event.shapeless(Item.of(KJ('copper_machine'), 2), [CR_DD('hydraulic_press')])
	
	//cogcrank
	event.shapeless(Item.of(CR("hand_crank"), 2), [CR_DD('cog_crank')])
	
	//multimeter
	event.shapeless(Item.of(CR("stressometer"), 2), [CR_DD('multimeter')])
	
	//coal piece
	event.shapeless(Item.of(MC("coal"), 2), [Item.of(CR_DD('coal_piece'), 8)])
	
	//tank from reservoir
	event.shapeless(Item.of(CR("fluid_tank"), 2), CR_DD('fluid_reservoir'))
	
	//vault from stockpile
	event.shapeless(Item.of(CR("item_vault"), 2), CR_DD('item_stockpile'))
	
	//kinetic motor
	event.shapeless(Item.of(KJ("andesite_machine"), 2), CR_DD('kinetic_motor'))
	
	//industrial fan
	event.shapeless(Item.of(KJ("brass_machine"), 2), CR_DD('industrial_fan'))
	
	//catalysts
	event.shapeless(Item.of(CR("white_sail"), 8), CR_DD('splashing_sail'))
	event.shapeless(Item.of(CR("white_sail"), 8), CR_DD('haunting_sail'))
	event.shapeless(Item.of(CR("white_sail"), 8), CR_DD('smoking_sail'))
	event.shapeless(Item.of(CR("white_sail"), 8), CR_DD('blasting_sail'))
})