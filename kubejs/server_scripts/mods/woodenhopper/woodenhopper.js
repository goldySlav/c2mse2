// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
        WH("wooden_hopper"),
	])
    event.shaped(WH("wooden_hopper"), [
        'A A',
        'ABA',
        ' A '
    ], {
        A: MC('#planks'),
        B: F('#chests/wooden'),
    })
})