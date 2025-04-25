// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByOutput(event, [
        CR_C("incomplete_control_chip"),
        CR_C("control_chip"),
    ])

    //catalysts
	removeRecipeByOutput(event, [
        CR_C("fan_smoking_catalyst"),
        CR_C("fan_haunting_catalyst"),
    ])
	event.recipes.create.item_application(CR_C("fan_smoking_catalyst"), [CR_C("empty_fan_catalyst"), MC("campfire")])
	event.recipes.create.item_application(CR_C("fan_haunting_catalyst"), [CR_C("empty_fan_catalyst"), MC("soul_campfire")])
	
	//creative fluid tank from creative fluid tank and back :D
	event.shapeless(CR_C("creative_fluid_vessel"), [CR("creative_fluid_tank")])
	event.shapeless(CR("creative_fluid_tank"), [CR_C("creative_fluid_vessel")])
})