// priority: 0

ServerEvents.recipes(e => {
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByID(e, [
			MC(`netherite_${piece}_smithing`)
		])
	})

	//helmet
	shapedSaveNBT(e, MC('netherite_helmet'), [
		'BBB',
		'BAB',
	], {
		A: PET('pure_emerald_armor_helmet'),
		B: MU("netherite_opinium_core"),
	})

	//chestplate
	shapedSaveNBT(e, MC('netherite_chestplate'), [
		'BAB',
		'BBB',
		'BBB',
	], {
		A: PET('pure_emerald_armor_chestplate'),
		B: MU("netherite_opinium_core"),
	})

	//leggings
	shapedSaveNBT(e, MC('netherite_leggings'), [
		'BBB',
		'BAB',
		'B B'
	], {
		A: PET('pure_emerald_armor_leggings'),
		B: MU("netherite_opinium_core"),
	})

	//boots
	shapedSaveNBT(e, MC('netherite_boots'), [
		'BAB',
		'B B'
	], {
		A: PET('pure_emerald_armor_boots'),
		B: MU("netherite_opinium_core"),
	})
})