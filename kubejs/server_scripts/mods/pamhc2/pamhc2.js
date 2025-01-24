// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByID(event, [
        PHC_FC("freshmilk_x8"),
		PHC_C("bakedsweet_potatoitem_campfire"),
		PHC_C("bakedsweet_potatoitem_smoker"),
		PHC_C("bakedsweet_potatoitem_forge"),
    ])
    //fresh milk
    event.shapeless(Item.of(PHC_FC("freshmilkitem"), 8), [[MC("milk_bucket"), CM("milk_drop")]])
	
	//rainbow curry
    removeRecipeByOutput(event, [
		PHC_FE("rainbowcurryitem")
    ])
	event.shapeless(PHC_FE("rainbowcurryitem"), [ PHC_FC("skilletitem"), PHC_C("riceitem"), MI_C("dye_rainbow") ])
	
	//cooked ground pork (absent for some reason)
	event.smelting(PHC_FC('cookedgroundporkitem'), PHC_FC('groundporkitem')).xp(1.0).cookingTime(100)
	event.smoking(PHC_FC('cookedgroundporkitem'), PHC_FC('groundporkitem')).xp(1.0).cookingTime(100)
	event.campfireCooking(PHC_FC('cookedgroundporkitem'), PHC_FC('groundporkitem')).cookingTime(100)
})