// priority: 0

ServerEvents.recipes(e => {
	toolTypes.forEach(tool => {
		removeRecipeByID(e, [
			MC(`netherite_${tool}_smithing`)
		])
	})

	//shovel
	shapedSaveNBT(e, MC('netherite_shovel'), [
		'B',
		'A',
	], {
		A: PET('pure_emerald_shovel'),
		B: MU("netherite_opinium_core"),
	})

	//pickaxe
	shapedSaveNBT(e, MC('netherite_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: PET('pure_emerald_pickaxe'),
		B: MU("netherite_opinium_core"),
	})

	//axe
	shapedSaveNBT(e, MC('netherite_axe'), [
		'BB',
		'BA',
	], {
		A: PET('pure_emerald_axe'),
		B: MU("netherite_opinium_core"),
	})

	//sword
	shapedSaveNBT(e, MC('netherite_sword'), [
		'B',
		'B',
		'A',
	], {
		A: PET('pure_emerald_sword'),
		B: MU("netherite_opinium_core"),
	})

	//hoe
	shapedSaveNBT(e, MC('netherite_hoe'), [
		'BB',
		'A ',
	], {
		A: PET('pure_emerald_hoe'),
		B: MU("netherite_opinium_core"),
	})
})