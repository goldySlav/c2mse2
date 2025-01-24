// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
        FFB("market"),
    ])



    //fertilizers
    const colors = ["green", "red", "yellow"]

    colors.forEach(color => {
        event.remove({ id: FFB(`${color}_fertilizer`) })

        event.shapeless(Item.of(FFB(`${color}_fertilizer`), 4), [
            Item.of(CR('tree_fertilizer'), 4),
            F(`#dyes/${color}`),
            Item.of(MC("bone_meal"), 4)
        ])
    })

    //market
    event.shaped(FFB("market"), [
		'III',
		'DED',
		'LRL'
	], {
		I: F("#plates/iron"),
		D: F("#rods/iron"),
		L: MC("#logs"),
		R: F("#wool/red"),
		E: F("#gems/emerald")
	})

    //fertilizer farmland
    event.recipes.create.deploying(FFB('fertilized_farmland_healthy'), [MC("farmland"), FFB("red_fertilizer")])
    event.recipes.create.deploying(FFB('fertilized_farmland_rich'), [MC("farmland"), FFB("green_fertilizer")])
    event.recipes.create.deploying(FFB('fertilized_farmland_stable'), [MC("farmland"), FFB("yellow_fertilizer")])
    event.recipes.create.deploying(FFB('fertilized_farmland_healthy_stable'), [FFB('fertilized_farmland_healthy'), FFB("yellow_fertilizer")])
    event.recipes.create.deploying(FFB('fertilized_farmland_healthy_stable'), [FFB('fertilized_farmland_stable'), FFB("red_fertilizer")])
    event.recipes.create.deploying(FFB('fertilized_farmland_rich_stable'), [FFB('fertilized_farmland_rich'), FFB("yellow_fertilizer")])
    event.recipes.create.deploying(FFB('fertilized_farmland_rich_stable'), [FFB('fertilized_farmland_stable'), FFB("green_fertilizer")])
})