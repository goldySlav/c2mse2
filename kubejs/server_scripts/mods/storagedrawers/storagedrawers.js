// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		SD("upgrade_template"),
	])

    let drawer_sizes = ['1', '2', '4']
    event.replaceInput({ id: /storagedrawers:compacting_/ }, MC('stone'), CP('stone_2'))
    event.replaceInput({ id: /storagedrawers:compacting_/ }, MC('iron_ingot'), F('#ingots/zinc'))

    woodTypes.minecraft.log.concat(woodTypes.minecraft.stem).concat(woodTypes.minecraft.block).forEach(e => {
        let trim = SD(`${e}_trim`)
        let plank = MC(`${e}_planks`)
        event.remove({ id: trim })
        event.shaped(Item.of(trim, 4), [
            'SSS',
            'PMP',
            'SSS'
        ], {
            P: F('#ingots/zinc'),
            M: F('#chests/wooden'),
            S: plank
        })

        event.stonecutting(SD("upgrade_template"), trim)

        drawer_sizes.forEach(size => {
            let full = SD(`${e}_full_drawers_${size}`)
            let half = SD(`${e}_half_drawers_${size}`)
            event.remove({ id: full })
            event.remove({ id: half })
            event.stonecutting(full, trim)
            event.stonecutting(Item.of(half, 2), trim)
        })
    })
	
	//upgrades
	removeRecipeByOutput(event, [
		SD("obsidian_storage_upgrade"),
		SD("iron_storage_upgrade"),
		SD("gold_storage_upgrade"),
		SD("diamond_storage_upgrade"),
		SD("emerald_storage_upgrade"),
		SD("one_stack_upgrade"),
		SD("void_upgrade"),
	])
	
	donutCraftFull(event, SD("obsidian_storage_upgrade"), MC("obsidian"), SD("upgrade_template"))
	donutCraftFull(event, SD("iron_storage_upgrade"), F("#storage_blocks/iron"), SD("obsidian_storage_upgrade"))
	donutCraftFull(event, SD("gold_storage_upgrade"), F("#storage_blocks/gold"), SD("iron_storage_upgrade"))
	donutCraftFull(event, SD("diamond_storage_upgrade"), F("#storage_blocks/diamond"), SD("gold_storage_upgrade"))
	donutCraftFull(event, SD("emerald_storage_upgrade"), F("#storage_blocks/emerald"), SD("diamond_storage_upgrade"))
	donutCraftFull(event, SD("one_stack_upgrade"), MC("flint"), SD("upgrade_template"))
	event.shaped(SD("void_upgrade"), [
		'AAA',
		'ABA',
		'ACA'
	], {
		A: MC('obsidian'),
		B: SD("upgrade_template"),
		C: TC("item_trash_can"),
	})
})