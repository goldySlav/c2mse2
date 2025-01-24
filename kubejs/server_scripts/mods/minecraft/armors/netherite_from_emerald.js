// priority: 0

ServerEvents.recipes(e => {
	armorPieces.vanilla.forEach(piece => {
		removeRecipeByID(e, [
			MC(`netherite_${piece}_smithing`)
		])
		e.smithing(MC(`netherite_${piece}`), PET(`pure_emerald_armor_${piece}`), MC("netherite_ingot"))
	})
})