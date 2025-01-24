// priority: 0

ServerEvents.recipes(event => {
	removeRecipeByMod(event, [
		CR_S(),
	])
	
	donutCraftFull(event, CR_S("string_mesh"), MC("stick"), EXD("string_mesh"))
	donutCraftFull(event, CR_S("andesite_mesh"), MC("stick"), EXD("netherite_mesh"))
	donutCraftFull(event, CR_S("custom_mesh"), MC("stick"), EXD("diamond_mesh"))
	donutCraftFull(event, CR_S("zinc_mesh"), MC("stick"), EXD("iron_mesh"))
	donutCraftFull(event, CR_S("brass_mesh"), MC("stick"), EXD("golden_mesh"))
	
	
})