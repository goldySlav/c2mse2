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
		B: PET("pure_emerald"),
	})

	//chestplate
	shapedSaveNBT(e, PET('pure_emerald_armor_chestplate'), [
		'BAB',
		'BBB',
		'BBB',
	], {
		A: MC('diamond_chestplate'),
		B: PET("pure_emerald"),
	})

	//leggings
	shapedSaveNBT(e, PET(`pure_emerald_armor_leggings`), [
		'BBB',
		'BAB',
		'B B'
	], {
		A: MC('diamond_leggings'),
		B: PET("pure_emerald"),
	})

	//boots
	shapedSaveNBT(e, PET(`pure_emerald_armor_boots`), [
		'BAB',
		'B B'
	], {
		A: MC('diamond_boots'),
		B: PET("pure_emerald"),
	})
})