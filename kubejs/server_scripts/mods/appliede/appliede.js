// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
    ])

    //emc interface
	removeRecipeByID(event, [
		AE2_PRE("emc_interface"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_PRE('emc_interface'), [
		'CEBEC',
		'EGGGE',
		'BDAFB',
		'EGGGE',
		'CEBEC',
	], {
		A: PRE('transmutation_tablet'),
		B: AE2('fluix_glass_cable'),
		C: CP('iron_1'),
		D: AE2('formation_core'),
		E: AE2('engineering_processor'),
		F: AE2('annihilation_core'),
		G: PREXP('pink_matter'),
	})

    //emc module
	removeRecipeByOutput(event, [
		AE2_PRE("emc_module"),
	])
	event.recipes.extendedcrafting.shaped_table(AE2_PRE('emc_module'), [
		'CEBEC',
		'EDDDE',
		'BDADB',
		'EDDDE',
		'CEBEC',
	], {
		A: PRE('transmutation_tablet'),
		B: AE2('storage_bus'),
		C: CP('iron_1'),
		D: AE2('engineering_processor'),
		E: AE2('fluix_glass_cable'),
	})
})