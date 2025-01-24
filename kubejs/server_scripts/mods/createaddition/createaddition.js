// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		CR_A("mixing/netherrack"),
		CR_A("liquid_burning/biofuel"),
	])
	
	event.recipes.create.pressing(CR_A("zinc_sheet"), F("#ingots/zinc"))
	
	//electric motor
	removeRecipeByOutput(event, [
		CR_A("electric_motor"),
	])
	event.recipes.create.mechanical_crafting(CR_A('electric_motor'), [
		'  A  ',
		' BCB ',
		'BCECB',
		' BDB ',
	], {
		A: CR('andesite_alloy'),
		B: F('#plates/brass'),
		C: CR_A('copper_spool'),
		D: CR_A('capacitor'),
		E: CR_DD('kinetic_motor'),
	})
	event.recipes.extendedcrafting.shaped_table(CR_A('electric_motor'), [
		'  A  ',
		' BCB ',
		'BCECB',
		' BDB ',
	], {
		A: CR('andesite_alloy'),
		B: F('#plates/brass'),
		C: CR_A('copper_spool'),
		D: CR_A('capacitor'),
		E: CR_DD('kinetic_motor'),
	})
	
	//alternator
	removeRecipeByOutput(event, [
		CR_A("alternator"),
	])
	event.recipes.create.mechanical_crafting(CR_A('alternator'), [
		'  A  ',
		' BCB ',
		'BCECB',
		' BDB ',
	], {
		A: CR('andesite_alloy'),
		B: F('#plates/andesite'),
		C: CR_A('copper_spool'),
		D: CR_A('capacitor'),
		E: CR_DD('kinetic_motor'),
	})
	event.recipes.extendedcrafting.shaped_table(CR_A('alternator'), [
		'  A  ',
		' BCB ',
		'BCECB',
		' BDB ',
	], {
		A: CR('andesite_alloy'),
		B: F('#plates/andesite'),
		C: CR_A('copper_spool'),
		D: CR_A('capacitor'),
		E: CR_DD('kinetic_motor'),
	})
	
	//sheets compat AA
	const sheets = ["zinc"]
	sheets.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, CR_A(`${sheet}_sheet`), F(`#ingots/${sheet}`))
	})
})