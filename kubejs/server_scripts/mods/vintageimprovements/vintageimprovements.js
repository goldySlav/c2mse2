// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		CR_V("pressurizing/sulfuric_acid"),
		CR_V("pressurizing/copper_sulfate"),
		CR_V("pressurizing/sulfur_dioxide"),
		CR_V("pressurizing/sulfur_trioxide"),
		CR_V("pressurizing/sulfur_trioxide_alt"),
	])
	removeRecipeByOutput(event, [
		CR_V("vanadium_nugget"),
	])
	
	
	
	//sheets compat AA
	const sheets = ["refined_radiance", "shadow_steel", "uranium", "tin", "refined_obsidian", "refined_glowstone", "osmium", "lead", "bronze", "andesite"]
	sheets.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, CR_V(`${sheet}_sheet`), F(`#ingots/${sheet}`))
	})
	
	
	//extended crafting recipes for only mech crafted stuff
	event.recipes.extendedcrafting.shaped_table(CR_V('laser_item'), [
		' A ',
		'BCB',
		'BDB',
		' E ',
	], {
		A: MC('redstone'),
		B: F("#plates/copper"),
		C: CR("electron_tube"),
		D: MC("glowstone_dust"),
		E: MC("red_stained_glass"),
	})
	event.recipes.extendedcrafting.shaped_table(CR_V('helve_hammer'), [
		' A DD',
		'ABBBC',
		'AA  E',
	], {
		A: F('#storage_blocks/iron'),
		B: MC("#logs"),
		C: CR("andesite_casing"),
		D: CR_V("iron_spring"),
		E: CR("shaft"),
	})
	event.recipes.extendedcrafting.shaped_table(CR_V('lathe'), [
		' FCE ',
		'ABBDA',
		'  CE ',
	], {
		A: CR("shaft"),
		B: CR("andesite_casing"),
		C: CR_V("iron_spring"),
		D: F('#storage_blocks/iron'),
		E: CR("andesite_alloy"),
		F: CR("precision_mechanism"),
	})
})