// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
        CFB("kitchen_floor"),
    ])
	
	//fridge
	removeRecipeByOutput(event, [
		CFB("fridge"),
	])

	event.shapeless(CFB("fridge"), [F("#chests/wooden"), MI_D("#doors_iron")])
	
	//sink
	removeRecipeByOutput(event, [
		CFB("sink"),
	])
	event.shaped(CFB('sink'), [
		'ABA',
		'BCB',
		'DBD',
	], {
		A: F("#plates/iron"),
		B: MC('water_bucket'),
		C: IF('water_condensator'),
		D: MC('terracotta'),
	})
})