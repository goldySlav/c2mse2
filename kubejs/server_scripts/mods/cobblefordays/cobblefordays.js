// priority: 0

ServerEvents.recipes((event) => {
    //removals
    removeRecipeByID(event, [
        CG("tier_1"),
        CG("tier_2"),
        CG("tier_3"),
        CG("tier_4"),
        CG("tier_5"),
    ])



    //TIER 1
    event.shaped(CG("tier_1"), [
        'WCW',
        'BGL',
        'WCW'
    ], {
        W: MC("#logs"),
        C: CP("cobblestone_1"),
        B: MC("water_bucket"),
        G: MC("glass"),
        L: MC("lava_bucket")
    })
    
    //TIER 2
    event.shaped(CG("tier_2"), [
        'CTC',
        'BGL',
        'CTC'
    ], {
        C: MC("cobblestone"),
        T: CP("cobblestone_2"),
        B: MC("water_bucket"),
        G: CG("tier_1"),
        L: MC("lava_bucket")
    })
    
    //TIER 3
    event.shaped(CG("tier_3"), [
        'CTC',
        'BGL',
        'CTC'
    ], {
        C: CP("iron_1"),
        T: CP("cobblestone_3"),
        B: MC("water_bucket"),
        G: CG("tier_2"),
        L: MC("lava_bucket")
    })
    
    //TIER 4
    event.shaped(CG("tier_4"), [
        'CTC',
        'BGL',
        'CTC'
    ], {
        C: CP("gold_1"),
        T: CP("cobblestone_4"),
        B: MC("water_bucket"),
        G: CG("tier_3"),
        L: MC("lava_bucket")
    })
    
    //TIER 5
    event.shaped(CG("tier_5"), [
        'CTC',
        'BGL',
        'CTC'
    ], {
        C: CP("diamond_1"),
        T: CP("cobblestone_5"),
        B: MC("water_bucket"),
        G: CG("tier_4"),
        L: MC("lava_bucket")
    })
})