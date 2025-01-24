// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		ENT("block"),
	])

	//entangled block
	event.shaped(ENT("block"), [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: IC("obsidian_chest"),
		B: CP('obsidian_2'),
		C: M('teleportation_core'),
	})
})