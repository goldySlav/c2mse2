// priority: 0

ServerEvents.recipes((event) => {
  //removals
  removeRecipeByOutput(event, [
    FH("flopper"),
  ])

  event.shaped(FH("flopper"), [
		'A A',
		'ABA',
		' A '
	], {
		A: F("#ingots/iron"),
		B: MC("bucket")
	}).id(KJ(`${FH()}/fluid_hopper`))
})
