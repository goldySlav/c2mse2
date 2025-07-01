// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
        AK_T("tome")
	])
	
    event.shaped(AK_T("tome"), [
        'III',
        'CBC',
        'III'
    ], {
        I: F('#ingots/cast_iron'),
        C: MC('chiseled_bookshelf'),
        B: MC('book')
    })
})
