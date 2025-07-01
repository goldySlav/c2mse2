// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		AE2_R("requester"),
	])

	//requester
	event.recipes.extendedcrafting.shaped_table(AE2_R("requester"), [
		'CFEFC',
		'FDEDF',
		'EEAEE',
		'FDEDF',
		'CFEFC',
	], {
		A: SS("netherite_chest"),
		C: CP('iron_2'),
		D: KJ('engineering_processor_wafer'),
		E: AE2('fluix_block'),
		F: AE2('smooth_sky_stone_block'),
	})
})