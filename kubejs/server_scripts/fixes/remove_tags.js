ServerEvents.tags('item', event => {
    //Removes all steel ingots and blocks except mekaism steel from the forge tag to make package crafting recipes easier
    event.removeAll('forge:storage_blocks/steel'),
    event.add('forge:storage_blocks/steel', 'mekanism:block_steel'),
    event.removeAll('forge:ingots/steel'),
    event.add('forge:ingots/steel', 'mekanism:ingot_seel')
})