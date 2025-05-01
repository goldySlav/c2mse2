// priority: 0

ServerEvents.recipes((event) => {
	//prediction matrix
	removeRecipeByOutput(event, [
		HNN("prediction_matrix"),
	])

	event.shaped(Item.of(HNN('prediction_matrix'), 16), [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: KJ('inductive_mechanism'),
		B: F('#glass_panes'),
		C: F('#nuggets/zinc'),
	})
})