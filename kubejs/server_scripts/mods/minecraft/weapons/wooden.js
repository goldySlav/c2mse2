// priority: 0

ServerEvents.recipes(e => {
	toolTypes.forEach(type => {
		removeRecipeByOutput(e, [
			MC(`wooden_${type}`)
		])
	})

	//shovel
	shapedSaveNBT(e, MC(`wooden_shovel`), [
		'B',
		'A',
		'A',
	], {
		A: MC("stick"),
		B: MU("wooden_opinium_core"),
	})

	//pickaxe
	shapedSaveNBT(e, MC(`wooden_pickaxe`), [
		'BBB',
		' A ',
		' A ',
	], {
		A: MC("stick"),
		B: MU("wooden_opinium_core"),
	})

	//axe
	shapedSaveNBT(e, MC(`wooden_axe`), [
		'BB',
		'BA',
		' A',
	], {
		A: MC("stick"),
		B: MU("wooden_opinium_core"),
	})

	//sword
	shapedSaveNBT(e, MC(`wooden_sword`), [
		'B',
		'B',
		'A',
	], {
		A: MC("stick"),
		B: MU("wooden_opinium_core"),
	})

	//hoe
	shapedSaveNBT(e, MC(`wooden_hoe`), [
		'BB',
		'A ',
		'A ',
	], {
		A: MC("stick"),
		B: MU("wooden_opinium_core"),
	})
})