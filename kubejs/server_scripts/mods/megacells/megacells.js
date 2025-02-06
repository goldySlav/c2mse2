// priority: 0

ServerEvents.recipes(event => {
  	//removals
	removeRecipeByOutput(event, [
		MGC("mega_emc_interface"),
		MGC("mega_pattern_provider"),
		MGC("mega_interface"),
	])
	
	//matter ball to singularity in recipes
	event.replaceInput({ id: /megacells/ }, AE2("matter_ball"), AE2("singularity"))

	//mega energy cell
	removeRecipeByOutput(event, [
		MGC("mega_energy_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(MGC('mega_energy_cell'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: P('dielectric_casing'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('dense_energy_cell'),
		E: AE2('fluix_pearl'),
	})
	event.recipes.mekanism.nucleosynthesizing(AE2('dense_energy_cell'), `4x ${M("antimatter")}`, MGC('mega_energy_cell'), 40)
	
	//inscriber press from scrap
	removeRecipeByOutput(event, [
		MGC("accumulation_processor_press"),
	])
	customRecipes.expatternprovider.cutter(event, MGC("accumulation_processor_press"), 1, KJ("circuit_scrap"), 1, KJ("abstruse_waste"), 100)
	
	//late game storage component recipes
	event.recipes.mekanism.nucleosynthesizing(AE2('cell_component_256k'), `5x ${M("antimatter")}`, MGC('cell_component_1m'), 50)
	
	const componentsLength = componentSizes[MGC()].length
	for (let i = 0; i < componentsLength; i++) {
		if (i !== componentsLength - 1)
			event.recipes.mekanism.nucleosynthesizing(MGC(`cell_component_${componentSizes[MGC()][i]}`), `${i + 6}x ${M("antimatter")}`, MGC(`cell_component_${componentSizes[MGC()][i + 1]}`), (i + 6) * 10)
	}

	//MEGA crafting co-processor unit
	removeRecipeByOutput(event, [
		MGC("mega_crafting_accelerator"),
	])
	event.recipes.extendedcrafting.shaped_table(MGC('mega_crafting_accelerator'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: MGC('mega_crafting_unit'),
		B: AE2('fluix_smart_cable'),
		C: CP('iron_2'),
		D: KJ('engineering_processor_wafer'),
		E: CP('fluix_1'),
	})
})
