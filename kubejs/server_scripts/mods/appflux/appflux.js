// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		AF("charged_redstone"),
		AF("insulating_resin"),
		AF("harden_insulating_resin"),
	])
	
	
	
	//inscriber press from scrap
	removeRecipeByOutput(event, [
		AF("energy_processor_press"),
	])
	customRecipes.expatternprovider.cutter(event, AF("energy_processor_press"), 1, KJ("circuit_scrap"), 1, KJ("liquid_redstone"), 100)
	
	
	
	//harden insulating resin replace
	event.replaceInput({}, AF("harden_insulating_resin"), F("#ingots/zinc"))
	
	
	
	//redstone crystal
	event.recipes.createMixing([AF('redstone_crystal')], [F('#storage_blocks/redstone'), F('#dusts/fluix'), AE2("sky_dust"), Fluid.of(MC("water"), 250)])
	
	
	
	//late game storage component recipes
	const componentsLength = componentSizes[AF()].length
	for (let i = 0; i < componentsLength; i++) {
		if (i !== componentsLength - 1)
			event.recipes.mekanism.nucleosynthesizing(AF(`core_${componentSizes[AF()][i]}`), `${i + 1}x ${M("antimatter")}`, AF(`core_${componentSizes[AF()][i + 1]}`), (i + 1) * 10)
	}
})