// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByOutput(event, [
        //pipez
        PZ("item_pipe"),
        PZ("fluid_pipe"),
        PZ("energy_pipe"),

        //upgrades
        PZ("basic_upgrade"),
        PZ("improved_upgrade"),
        PZ("advanced_upgrade"),
        PZ("ultimate_upgrade"),
        PZ("wrench"),

        //w/o replace
        PZ("gas_pipe"),
    ])

    //pipez
    donutCraftFull(event, Item.of(PZ("item_pipe"), 8), PP("pipe"), KJ("blank_upgrade"))
    donutCraftFull(event, Item.of(PZ("fluid_pipe"), 8), CR("fluid_pipe"), KJ("blank_upgrade"))
    donutCraftFull(event, Item.of(PZ("energy_pipe"), 8), AE2('fluix_glass_cable'), KJ("blank_upgrade"))

    //upgrades
    donutCraftFull(event, PZ("basic_upgrade"), CP("iron_1"), KJ("blank_upgrade"))

    donutCraftFull(event, PZ("improved_upgrade"), CP("gold_1"), PZ("basic_upgrade"))

    donutCraftFull(event, PZ("advanced_upgrade"), CP("diamond_1"), PZ("improved_upgrade"))

    donutCraftFull(event, PZ("ultimate_upgrade"), CP("netherite_1"), PZ("advanced_upgrade"))

    //universal pipe
    event.replaceInput({ id: PZ("universal_pipe") }, MC("iron_ingot"), F("#ingots/red_alloy"))

    //filter destination tool
    event.replaceInput({ id: PZ("filter_destination_tool") }, MC("redstone"), PR_T("red_alloy_wire"))
    
    //wrench
	event.smithing(PZ("wrench"), tieredItems.ch4.circuit, FB("framed_wrench"), KJ("blank_upgrade"))
})