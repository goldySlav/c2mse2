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
		B: PET("pure_emerald"),
	})

	//pickaxe
	shapedSaveNBT(e, PET('pure_emerald_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: MC('diamond_pickaxe'),
		B: PET("pure_emerald"),
	})

	//axe
	shapedSaveNBT(e, PET('pure_emerald_axe'), [
		'BB',
		'BA',
	], {
		A: MC('diamond_axe'),
		B: PET("pure_emerald"),
	})

	//sword
	shapedSaveNBT(e, PET('pure_emerald_sword'), [
		'B',
		'B',
		'A',
	], {
		A: MC('diamond_sword'),
		B: PET("pure_emerald"),
	})

	//hoe
	shapedSaveNBT(e, PET('pure_emerald_hoe'), [
		'BB',
		'A ',
	], {
		A: MC('diamond_hoe'),
		B: PET("pure_emerald"),
	})
})