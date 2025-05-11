// priority: 0

ServerEvents.recipes(e => {
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByOutput(e, [
			PET(`pure_emerald_armor_${piece}`)
		])
	})

	//helmet
	shapedSaveNBT(e, PET('pure_emerald_armor_helmet'), [
		'BBB',
		'BAB'
	], {
		A: MC('diamond_helmet'),
		B: MU("emerald_opinium_core"),
	})

	//chestplate
	shapedSaveNBT(e, PET('pure_emerald_armor_chestplate'), [
		'BAB',
		'BBB',
		'BBB',
	], {
		A: MC('diamond_chestplate'),
		B: MU("emerald_opinium_core"),
	})

	//leggings
	shapedSaveNBT(e, PET(`pure_emerald_armor_leggings`), [
		'BBB',
		'BAB',
		'B B'
	], {
		A: MC('diamond_leggings'),
		B: MU("emerald_opinium_core"),
	})

	//boots
	shapedSaveNBT(e, PET(`pure_emerald_armor_boots`), [
		'BAB',
		'B B'
	], {
		A: MC('diamond_boots'),
		B: MU("emerald_opinium_core"),
	})
})