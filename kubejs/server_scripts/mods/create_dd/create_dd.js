// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		CR_DD(),
	])
	
	//inverse box (simple gearshift)
	event.shapeless(CR_DD('inverse_box'), [CR("andesite_casing"), CR("cogwheel")])
	
	//cogcrank
	event.shapeless(CR_DD('cog_crank'), [CR("hand_crank"), CR("cogwheel")])
	
	//multimeter
	event.shapeless(CR_DD('multimeter'), [CR("speedometer"), CR("stressometer")])
	
	//seething blaze powder
	event.shapeless(Item.of(CR_DD('seething_ablaze_powder'), 2), [CR_DD("seething_ablaze_rod")])
	
	//coal piece
	event.shapeless(Item.of(CR_DD('coal_piece'), 8), [MC("coal")])
	event.shapeless(MC("coal"), [Item.of(CR_DD('coal_piece'), 8)])
	
	//catalysts
	event.shaped(CR_DD('splashing_sail'), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CR('sail_frame'),
		B: MC('water_bucket'),
		C: F('#wool'),
	})
	event.shaped(CR_DD('haunting_sail'), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CR('sail_frame'),
		B: MC('soul_campfire'),
		C: F('#wool'),
	})
	event.shaped(CR_DD('smoking_sail'), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CR('sail_frame'),
		B: MC('campfire'),
		C: F('#wool'),
	})
	event.shaped(CR_DD('blasting_sail'), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: CR('sail_frame'),
		B: MC('lava_bucket'),
		C: F('#wool'),
	})
	
	//fluid reservoir
	event.shaped(CR_DD('fluid_reservoir'), [
		'ABA',
	], {
		A: F('#plates/copper'),
		B: F('#barrels/wooden'),
	})
	event.shapeless(CR_DD('fluid_reservoir'), CR("fluid_tank"))
	
	//item stockpile
	event.shaped(CR_DD('item_stockpile'), [
		'ABA',
	], {
		A: F('#plates/iron'),
		B: F('#barrels/wooden'),
	})
	event.shapeless(CR_DD('item_stockpile'), CR("item_vault"))
})