// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		MBCK(),
	])
	
	donutCraftFull(event, MBCK("golden_bucket"), F("#ingots/gold"), MC("bucket"))
	donutCraftFull(event, MBCK("diamond_bucket"), F("#gems/diamond"), MBCK("golden_bucket"))
	donutCraftFull(event, MBCK("emerald_bucket"), PET("pure_emerald"), MBCK("diamond_bucket"))
	donutCraftFull(event, MBCK("obsidian_bucket"), MC("obsidian"), MBCK("emerald_bucket"))
})