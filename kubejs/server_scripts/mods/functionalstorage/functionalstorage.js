// priority: 0

ServerEvents.recipes((event) => {
	const framedMat = MC("stick")
	
	//drawers
	const drawerCraftingShapes = {
		1: [
			'SSS',
			'PMP',
			'SSS'
		],
		2: [
			'SMS',
			'PSP',
			'SMS'
		],
		4: [
			'MSM',
			'PSP',
			'MSM'
		],
	}
	drawerSizes.forEach(size => {
		//wooden drawers
		drawerWoodTypes.forEach(wood => {
			const woodenDrawer = Item.of(FS(`${wood}_${size}`), size)
			
			removeRecipeByOutput(event, [
				woodenDrawer,
			])
			
			event.shaped(woodenDrawer, drawerCraftingShapes[size], {
				P: F('#ingots/zinc'),
				M: F('#chests/wooden'),
				S: MC(`${wood}_planks`)
			})
		})
		
		
		//fluid drawers
		const fluidDrawer = Item.of(FS(`fluid_${size}`), size)
		
		removeRecipeByOutput(event, [
			fluidDrawer,
		])

		event.shaped(fluidDrawer, drawerCraftingShapes[size], {
			P: F('#ingots/copper'),
			M: CR('fluid_tank'),
			S: MC(`#planks`)
		})
		
		
		//framed drawers
		const framedDrawer = FS(`framed_${size}`)
		
		removeRecipeByOutput(event, [
			framedDrawer,
		])
		
		donutCraftFull(event, framedDrawer, framedMat, FS(`#drawer/${size}`))
	})
	
	
	
	//compacting drawers
    event.replaceInput({ id: /functionalstorage:.*compacting_/ }, MC('stone'), CP('stone_2'))
    event.replaceInput({ id: /functionalstorage:.*compacting_/ }, MC('iron_ingot'), F('#ingots/zinc'))
	
	
	
	//framed misc
	removeRecipeByOutput(event, [
		FS("framed_simple_compacting_drawer"),
		FS("compacting_framed_drawer"),
		FS("framed_storage_controller"),
		FS("framed_controller_extension"),
	])
	donutCraftFull(event, FS("framed_simple_compacting_drawer"), framedMat, FS("simple_compacting_drawer"))
	donutCraftFull(event, FS("compacting_framed_drawer"), framedMat, FS("compacting_drawer"))
	donutCraftFull(event, FS("framed_storage_controller"), framedMat, FS("storage_controller"))
	donutCraftFull(event, FS("framed_controller_extension"), framedMat, FS("controller_extension"))
	
	
	
	//upgrades
	removeRecipeByOutput(event, [
		FS("void_upgrade"),
		FS("pusher_upgrade"),
		FS("collector_upgrade"),
	])
	
	donutCraftFull(event, FS("void_upgrade"), MC("obsidian"), TC("item_trash_can"))
	event.shaped(FS("pusher_upgrade"), [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: F(`#stone`),
		B: "uppers:upper",
		C: FS("#drawer"),
		D: MC("redstone"),
	})
	event.shaped(FS("collector_upgrade"), [
		'EBE',
		'ACA',
		'ADA'
	], {
		A: F(`#ingots/iron`),
		B: M("teleportation_core"),
		C: FS("#drawer"),
		D: KJ("chromatic_resonator"),
		E: MC("ender_pearl"),
	})
	
	//ender drawer clear nbt recipe
	event.shapeless(FS("ender_drawer"), [FS("ender_drawer")])
})