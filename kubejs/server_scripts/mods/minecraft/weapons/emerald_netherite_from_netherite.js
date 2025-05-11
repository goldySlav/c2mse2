// priority: 0

ServerEvents.recipes(e => {
	toolTypes.forEach(type => {
		removeRecipeByOutput(e, [
			PET(`emerald_netherite_${type}`)
		])
	})

	//shovel
	shapedSaveNBT(e, PET('emerald_netherite_shovel'), [
		'B',
		'A',
	], {
		A: MC('netherite_shovel'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//pickaxe
	shapedSaveNBT(e, PET('emerald_netherite_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: MC('netherite_pickaxe'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//axe
	shapedSaveNBT(e, PET('emerald_netherite_axe'), [
		'BB',
		'BA',
	], {
		A: MC('netherite_axe'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//sword
	shapedSaveNBT(e, PET('emerald_netherite_sword'), [
		'B',
		'B',
		'A',
	], {
		A: MC('netherite_sword'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//hoe
	shapedSaveNBT(e, PET('emerald_netherite_hoe'), [
		'BB',
		'A ',
	], {
		A: MC('netherite_hoe'),
		B: MU("experience_infused_emerald_opinium_core"),
	})
})