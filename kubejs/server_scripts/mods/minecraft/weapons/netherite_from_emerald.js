// priority: 0

ServerEvents.recipes(e => {
	toolTypes.forEach(tool => {
		removeRecipeByID(e, [
			MC(`netherite_${tool}_smithing`)
		])
		e.smithing(MC(`netherite_${tool}`), PET(`pure_emerald_${tool}`), MC("netherite_ingot"))
	})
})