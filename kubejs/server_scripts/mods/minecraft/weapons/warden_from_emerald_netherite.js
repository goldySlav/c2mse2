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
		B: DD("reinforced_echo_shard"),
	})

	//pickaxe
	shapedSaveNBT(e, DD('warden_pickaxe'), [
		'BBB',
		' A ',
	], {
		A: PET('emerald_netherite_pickaxe'),
		B: DD("reinforced_echo_shard"),
	})

	//axe
	shapedSaveNBT(e, DD('warden_axe'), [
		'BB',
		'BA',
	], {
		A: PET('emerald_netherite_axe'),
		B: DD("reinforced_echo_shard"),
	})

	//sword
	shapedSaveNBT(e, DD('warden_sword'), [
		'B',
		'B',
		'A',
	], {
		A: PET('emerald_netherite_sword'),
		B: DD("reinforced_echo_shard"),
	})

	//hoe
	shapedSaveNBT(e, DD('warden_hoe'), [
		'BB',
		'A ',
	], {
		A: PET('emerald_netherite_hoe'),
		B: DD("reinforced_echo_shard"),
	})
})