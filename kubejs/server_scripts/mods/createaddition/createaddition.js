// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		CR_A("mixing/netherrack"),
		CR_A("liquid_burning/biofuel"),
		CR_A("compat/tconstruct/pig_iron"),
		CR_A("compat/tconstruct/pig_iron_2"),
	])
	removeRecipeByOutput(event, [
		CR_A("electrum_block"),
		CR_A("electrum_ingot"),
		CR_A("electrum_nugget"),
		CR_A("electrum_amulet"),
		CR_A("electrum_wire"),
		CR_A("electrum_rod"),
		CR_A("electrum_sheet"),
		CR_A("electrum_spool"),
		CR_A("barbed_wire"),
	])
	
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
	const sheetsAA = ["zinc"]
	sheetsAA.forEach(sheet => {
		customRecipes.ad_astra.compressing(event, CR_A(`${sheet}_sheet`), F(`#ingots/${sheet}`))
	})
	
	//sheets compat Mekanism
	const sheetsM = ["zinc"]
	sheetsM.forEach(sheet => {
		event.recipes.mekanism.sawing(F(`#ingots/${sheet}`), Item.of(CR_A(`${sheet}_sheet`), 1))
	})
	
	//wires compat Mekanism
	const wiresM = ["copper", "iron", "gold"]
	wiresM.forEach(wire => {
		event.recipes.mekanism.sawing(F(`#plates/${wire}`), Item.of(CR_A(`${wire}_wire`), 2))
	})
	
	//rods compat TCT
	const rods = ["copper", "gold", "brass"]
	const temps = [500, 700, 605]
	rods.forEach((rod, i) => {
		event.recipes.tconstruct.casting_table(CR_A(`${rod}_rod`), Fluid.of(TCT(`molten_${rod}`), 45), TCT(`rod_cast`), false, 40)
		event.recipes.tconstruct.melting(Fluid.of(TCT(`molten_${rod}`), 45), CR_A(`${rod}_rod`), temps[i], 12)
	})
})