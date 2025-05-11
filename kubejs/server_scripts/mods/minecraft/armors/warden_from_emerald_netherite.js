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
		B: MU("reinforced_echo_shard_opinium_core"),
		C: CM("warden_receptor"),
	})

	//chestplate
	shapedSaveNBT(e, DD('warden_chestplate'), [
		'BAB',
		'BBB',
		'BBB',
	], {
		A: PET('emerald_netherite_armor_chestplate'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})

	//leggings
	shapedSaveNBT(e, DD('warden_leggings'), [
		'BBB',
		'BAB',
		'B B'
	], {
		A: PET('emerald_netherite_armor_leggings'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})

	//boots
	shapedSaveNBT(e, DD('warden_boots'), [
		'BAB',
		'B B'
	], {
		A: PET('emerald_netherite_armor_boots'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})
})