//rarities: cosmic, uncommon, common, advanced, rare, epic, pity, simple, supreme

StartupEvents.registry('item', event => {
	event.create('industrial_screwdriver').parentModel("kubejs:item/industrial_screwdriver").maxDamage(1024).displayName('Industrial Screwdriver §4(DEPRECATED)§7').rarity('uncommon')
});