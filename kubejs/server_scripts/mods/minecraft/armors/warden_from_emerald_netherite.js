// priority: 0

ServerEvents.recipes(e => {
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByOutput(e, [
			DD(`warden_${piece}`)
		])
	})

	//helmet
	shapedSaveNBT(e, DD('warden_helmet'), [
		'C C',
		'BBB',
		'BAB',
	], {
		A: PET('emerald_netherite_armor_helmet'),
		B: DD("reinforced_echo_shard"),
		C: CM("warden_receptor"),
	})

	//chestplate
	shapedSaveNBT(e, DD('warden_chestplate'), [
		'BAB',
		'BBB',
		'BBB',
	], {
		A: PET('emerald_netherite_armor_chestplate'),
		B: DD("reinforced_echo_shard"),
	})

	//leggings
	shapedSaveNBT(e, DD('warden_leggings'), [
		'BBB',
		'BAB',
		'B B'
	], {
		A: PET('emerald_netherite_armor_leggings'),
		B: DD("reinforced_echo_shard"),
	})

	//boots
	shapedSaveNBT(e, DD('warden_boots'), [
		'BAB',
		'B B'
	], {
		A: PET('emerald_netherite_armor_boots'),
		B: DD("reinforced_echo_shard"),
	})
})