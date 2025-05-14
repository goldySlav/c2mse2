// priority: 0

ServerEvents.recipes(e => {
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByOutput(e, [
			MC(`leather_${piece}`)
		])
	})

	//helmet
	shapedSaveNBT(e, MC(`leather_helmet`), [
		'BBB',
		'B B'
	], {
		B: MU("leather_opinium_core"),
	})

	//chestplate
	shapedSaveNBT(e, MC(`leather_chestplate`), [
		'B B',
		'BBB',
		'BBB',
	], {
		B: MU("leather_opinium_core"),
	})

	//leggings
	shapedSaveNBT(e, MC(`leather_leggings`), [
		'BBB',
		'B B',
		'B B'
	], {
		B: MU("leather_opinium_core"),
	})

	//boots
	shapedSaveNBT(e, MC(`leather_boots`), [
		'B B',
		'B B'
	], {
		B: MU("leather_opinium_core"),
	})
})