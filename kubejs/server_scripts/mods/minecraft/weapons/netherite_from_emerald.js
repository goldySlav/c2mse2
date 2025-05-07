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
		B: F("#ingots/netherite"),
	})

	//pickaxe
	shapedSaveNBT(e, MC('netherite_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: PET('pure_emerald_pickaxe'),
		B: F("#ingots/netherite"),
	})

	//axe
	shapedSaveNBT(e, MC('netherite_axe'), [
		'BB',
		'BA',
	], {
		A: PET('pure_emerald_axe'),
		B: F("#ingots/netherite"),
	})

	//sword
	shapedSaveNBT(e, MC('netherite_sword'), [
		'B',
		'B',
		'A',
	], {
		A: PET('pure_emerald_sword'),
		B: F("#ingots/netherite"),
	})

	//hoe
	shapedSaveNBT(e, MC('netherite_hoe'), [
		'BB',
		'A ',
	], {
		A: PET('pure_emerald_hoe'),
		B: F("#ingots/netherite"),
	})
})