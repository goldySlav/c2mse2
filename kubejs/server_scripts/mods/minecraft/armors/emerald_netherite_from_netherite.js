// priority: 0

ServerEvents.recipes(e => {
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByOutput(e, [
			PET(`emerald_netherite_armor_${piece}`)
		])
	})

	//helmet
	shapedSaveNBT(e, PET('emerald_netherite_armor_helmet'), [
		'BBB',
		'BAB',
	], {
		A: MC('netherite_helmet'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//chestplate
	shapedSaveNBT(e, PET('emerald_netherite_armor_chestplate'), [
		'BAB',
		'BBB',
		'BBB',
	], {
		A: MC('netherite_chestplate'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//leggings
	shapedSaveNBT(e, PET('emerald_netherite_armor_leggings'), [
		'BBB',
		'BAB',
		'B B'
	], {
		A: MC('netherite_leggings'),
		B: MU("experience_infused_emerald_opinium_core"),
	})

	//boots
	shapedSaveNBT(e, PET('emerald_netherite_armor_boots'), [
		'BAB',
		'B B'
	], {
		A: MC('netherite_boots'),
		B: MU("experience_infused_emerald_opinium_core"),
	})
})