// priority: 0

ServerEvents.recipes(e => {
	toolTypes.forEach(type => {
		removeRecipeByOutput(e, [
			DD(`warden_${type}`)
		])
	})

	//shovel
	shapedSaveNBT(e, DD('warden_shovel'), [
		'B',
		'A',
	], {
		A: PET('emerald_netherite_shovel'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})

	//pickaxe
	shapedSaveNBT(e, DD('warden_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: PET('emerald_netherite_pickaxe'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})

	//axe
	shapedSaveNBT(e, DD('warden_axe'), [
		'BB',
		'BA',
	], {
		A: PET('emerald_netherite_axe'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})

	//sword
	shapedSaveNBT(e, DD('warden_sword'), [
		'B',
		'B',
		'A',
	], {
		A: PET('emerald_netherite_sword'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})

	//hoe
	shapedSaveNBT(e, DD('warden_hoe'), [
		'BB',
		'A ',
	], {
		A: PET('emerald_netherite_hoe'),
		B: MU("reinforced_echo_shard_opinium_core"),
	})
})