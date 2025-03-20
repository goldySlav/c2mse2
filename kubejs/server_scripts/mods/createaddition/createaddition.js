// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		CR_A("mixing/netherrack"),
		CR_A("liquid_burning/biofuel"),
		CR_A("compat/tconstruct/pig_iron"),
		CR_A("compat/tconstruct/pig_iron_2"),
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
		E: F('#rods/iron'),
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
		E: F('#rods/iron'),
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
		B: F('#plates/iron'),
		C: CR_A('copper_spool'),
		D: CR_A('capacitor'),
		E: F('#rods/iron'),
	})
	event.recipes.extendedcrafting.shaped_table(CR_A('alternator'), [
		'  A  ',
		' BCB ',
		'BCECB',
		' BDB ',
	], {
		A: CR('andesite_alloy'),
		B: F('#plates/iron'),
		C: CR_A('copper_spool'),
		D: CR_A('capacitor'),
		E: F('#rods/iron'),
	})
	
	//sheets compat AA
	const sheets = ["zinc"]
	sheets.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, CR_A(`${sheet}_sheet`), F(`#ingots/${sheet}`))
	})
	
	//rods compat TCT
	const rods = ["copper", "gold", "brass"]
	rods.forEach(rod => {
		event.recipes.tconstruct.casting_table(CR_A(`${rod}_rod`), Fluid.of(TCT(`molten_${rod}`), 45), TCT(`rod_cast`), false, 40)
	})
})