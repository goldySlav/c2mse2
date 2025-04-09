// priority: 0

MoreJSEvents.villagerTrades(event => {
    event.removeModdedTrades();
});

MoreJSEvents.wandererTrades(event => {
    //event.removeVanillaTrades(1);
    //event.removeVanillaTrades(2);
    //event.removeModdedTrades(1);
    //event.removeModdedTrades(2);
    event.addTrade(2, [`16x ${PET("pure_emerald")}`], `1x ${CR_A("diamond_grit_sandpaper")}`).maxUses(1);
    event.addTrade(2, [`4x ${PET("pure_emerald")}`], `1x ${CM("dna_sampler")}`).maxUses(1);
    event.addTrade(2, [`16x ${PET("pure_emerald")}`], `1x ${CM("diamond_dna_sampler")}`).maxUses(1);
    event.addTrade(1, [`5x ${MC("emerald")}`], `1x ${MC("rose_bush")}`).maxUses(3);
    event.addTrade(2, [`8x ${PET("pure_emerald")}`], `1x ${PHC_T("acorn_sapling")}`).maxUses(1);
    event.addTrade(2, [`8x ${PET("pure_emerald")}`], `1x ${PHC_C("sunchokeseeditem")}`).maxUses(1);
    event.addTrade(1, [`5x ${MC("emerald")}`], `1x ${MC("sunflower")}`).maxUses(3);
    event.addTrade(1, [`3x ${MC("emerald")}`], `1x ${MC("tube_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`2x ${MC("emerald")}`], `1x ${MC("dead_tube_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`3x ${MC("emerald")}`], `1x ${MC("brain_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`2x ${MC("emerald")}`], `1x ${MC("dead_brain_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`3x ${MC("emerald")}`], `1x ${MC("bubble_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`2x ${MC("emerald")}`], `1x ${MC("dead_bubble_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`3x ${MC("emerald")}`], `1x ${MC("fire_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`2x ${MC("emerald")}`], `1x ${MC("dead_fire_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`3x ${MC("emerald")}`], `1x ${MC("horn_coral_fan")}`).maxUses(3);
    event.addTrade(1, [`2x ${MC("emerald")}`], `1x ${MC("dead_horn_coral_fan")}`).maxUses(3);
});