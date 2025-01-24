// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
		
    ])
	removeRecipeByOutput(event, [
		IFC("million_furnace"),
		IFC("rainbow_plating"),
		IFC("rainbow_coal"),
		IFC("rainbow_core"),
		IFC("heater"),
		IFC("augment_generator"),
		IFC("augment_blasting"),
		IFC("augment_smoking"),
		IFC("augment_factory"),
		IFC("augment_speed"),
		IFC("augment_fuel"),
	])
})