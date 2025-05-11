// priority: 0

ServerEvents.recipes(e => {
	toolTypes.forEach(type => {
		removeRecipeByOutput(e, [
			PET(`pure_emerald_${type}`)
		])
	})

	//shovel
	shapedSaveNBT(e, PET('pure_emerald_shovel'), [
		'B',
		'A',
	], {
		A: MC('diamond_shovel'),
		B: MU("emerald_opinium_core"),
	})

	//pickaxe
	shapedSaveNBT(e, PET('pure_emerald_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: MC('diamond_pickaxe'),
		B: MU("emerald_opinium_core"),
	})

	//axe
	shapedSaveNBT(e, PET('pure_emerald_axe'), [
		'BB',
		'BA',
	], {
		A: MC('diamond_axe'),
		B: MU("emerald_opinium_core"),
	})

	//sword
	shapedSaveNBT(e, PET('pure_emerald_sword'), [
		'B',
		'B',
		'A',
	], {
		A: MC('diamond_sword'),
		B: MU("emerald_opinium_core"),
	})

	//hoe
	shapedSaveNBT(e, PET('pure_emerald_hoe'), [
		'BB',
		'A ',
	], {
		A: MC('diamond_hoe'),
		B: MU("emerald_opinium_core"),
	})
})