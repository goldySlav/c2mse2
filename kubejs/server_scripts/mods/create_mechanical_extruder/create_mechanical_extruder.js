//priority: 0

ServerEvents.recipes(event => {
	removeRecipeByID(event, [
		CR_ME("extruding/stone"),
		CR_ME("extruding/basalt"),
	])
	
    const items = [
        { material: "andesite", mod: MC() }, { material: "diorite", mod: MC() }, { material: "granite", mod: MC() },
        { material: "end_stone", block: "endstone", mod: MC() }, { material: "soul_soil", mod: MC() },
        { material: "sky_stone_block", block: "sky_stone", mod: AE2() }, { material: "netherrack", mod: MC() },
    ]
	items.forEach(item => {
		const { material, block, mod } = item
		for (let i = 1; i < 6; i++) {
			event.recipes.createMechanicalExtruderExtruding(
				Item.of(`${mod}:${material}`),[
					Fluid.of(MC('water')),
					Fluid.of(MC('lava'))
				]
			)
				.withCatalyst(CP(`${block ? block : material}_${i}`))
				.requiredBonks(6 - i)
		}
	})
	
	for (let j = 1; j < 6; j++) {
		event.recipes.createMechanicalExtruderExtruding(Item.of(MC("basalt")), [
			MC('blue_ice'),
			Fluid.of(MC('lava'))
		])
			.withCatalyst(CP(`soul_soil_${j}`))
			.requiredBonks(6 - j)
	}
})
