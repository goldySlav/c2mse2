// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		MVS("coal_shield"),
		MVS("redstone_shield"),
		MVS("amethyst_shield"),
		MVS("end_crystal_shield"),
		MVS("obsidian_shield"),
		MVS("glass_shield"),
		MVS("tinted_glass_shield"),
		MVS("brown_stained_glass_shield"),
		MVS("blue_stained_glass_shield"),
		MVS("cyan_stained_glass_shield"),
		MVS("light_blue_stained_glass_shield"),
		MVS("green_stained_glass_shield"),
		MVS("yellow_stained_glass_shield"),
		MVS("pink_stained_glass_shield"),
		MVS("orange_stained_glass_shield"),
		MVS("red_stained_glass_shield"),
    ])
	
	//leather shield
	removeRecipeByOutput(event, [
		MVS("leather_shield"),
    ])
	donutCraftFull(event, MVS("leather_shield"), MC("leather"), MC("#planks"))
	
	//gold shield
	removeRecipeByOutput(event, [
		MVS("gold_shield"),
    ])
	shapedSaveNBT(event, MVS("gold_shield"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: MC("shield"),
		B: F("#ingots/gold"),
	})
	
	//diamond shield
	removeRecipeByOutput(event, [
		MVS("diamond_shield"),
    ])
	shapedSaveNBT(event, MVS("diamond_shield"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: MVS("gold_shield"),
		B: F("#gems/diamond"),
	})
	
	//emerald shield
	removeRecipeByOutput(event, [
		MVS("emerald_shield"),
    ])
	shapedSaveNBT(event, MVS("emerald_shield"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: MVS("diamond_shield"),
		B: PET("pure_emerald"),
	})
	
	//netherite shield
	removeRecipeByOutput(event, [
		MVS("netherite_shield"),
    ])
	event.smithing(MVS("netherite_shield"), MVS("emerald_shield"), MC("netherite_ingot"))
})