// priority: 3901

BlockEvents.modification(event => {
	const witherProofResistance = [
		"mekanism:structural_glass",
	]
	witherProofResistance.forEach(id => {
		event.modify(id, block => {
			block.explosionResistance = 1200.0
		})
	})
})