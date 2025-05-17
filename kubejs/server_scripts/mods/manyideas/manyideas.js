//priority: 0

ServerEvents.recipes(event => {
	woodenDoorMats.forEach(mat => {
		removeRecipeByOutput(event, [
			MI_C(`panel_${mat}`),
			MI_C(`planks_seamless_${mat}`),
			MI_C(`log_stripped_smooth_${mat}`),
			MI_C(`wood_stripped_smooth_${mat}`),
		])
	})
	
	removeRecipeByInputOutput(event, [
		MI_C("mortar"),
		MI_C("saw_diamond"),
		MI_C("table_saw_diamond"),
		MI_C("saw_iron"),
		MI_C("table_saw_iron"),
		MI_C("saw_stone"),
		MI_C("table_saw_stone"),
		MI_C("dye_crafting_table"),
		MI_C("plate_copper"),
		MI_C("plate_iron"),
		MI_C("plate_gold"),
		MI_C("plate_quartz"),
	])
	
	removeRecipeByOutput(event, [
		MI_C("dye_rainbow"),
		/manyideas_core:flower_*/,
	])
	
	removeRecipeByType(event, [
		MI_C("dyed"),
		MI_C("table_sawing_stone"),
		MI_C("table_sawing_iron"),
		MI_C("table_sawing_diamond"),
	])
	
	//rainbow dye fixes
    event.recipes.extendedcrafting.shapeless_table(Item.of(MI_C("dye_rainbow"), 4), dyes);
	
	donutCraftFull(event, Item.of(MI_C("rainbow_wool"), 8), MC("#wool"), MI_C("dye_rainbow"))
	
	//wooden doors
	
	const woodenDoorTypes = ["blank", "bookshelf", "cassette", "french", "frosted", "heart", "origin", "rustic", "shoji"]

	woodenDoorMats.forEach(mat => {
		woodenDoorTypes.forEach(type => {
			const door = MI_D(`door_${mat}_${type}`)
			removeRecipeByOutput(event, [
				door,
			])
			event.stonecutting(door, MI_D(`#doors_${mat}`))
		})
		event.stonecutting(MC(`${mat}_door`), MI_D(`#doors_${mat}`))
		
		const lodge = MI_D(`mini_lodge_outhouse_${mat}`)
		removeRecipeByOutput(event, [
			lodge,
		])
		event.shaped(lodge, ["AAA", "A A", "ABA"], {
			A: MC(`${mat}_planks`),
			B: MI_D(`door_${mat}_heart`),
		});
		
		const glass_door = MI_D(`door_${mat}_glass`)
		removeRecipeByOutput(event, [
			glass_door,
		])
		event.shapeless(glass_door, [MI_D(`#doors_${mat}`), MI_D(`#doors_glass`)])
	})
	
	//iron & copper doors
	
	const ironDoorTypes = ["bookshelf", "dwarf", "fantasy", "laboratory", "rusted", "safe", "ship", "space", "stone_brick"]
	ironDoorTypes.forEach(type => {
		const door = MI_D(`door_iron_${type}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.stonecutting(door, MI_D("#doors_iron"))
	})
	event.shapeless(MI_D(`door_iron_glass`), [MI_D("#doors_iron"), MI_D(`#doors_glass`)])
	
	const copperDoorTypes = ["bar", "barrel", "brick", "corrugated", "factory", "modern", "smooth_sandstone", "ship", "steampunk"]
	copperDoorTypes.forEach(type => {
		const door = MI_D(`door_copper_${type}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.stonecutting(door, MI_D("#doors_copper"))
	})
	event.shapeless(MI_D(`door_copper_glass`), [MI_D("#doors_copper"), MI_D(`#doors_glass`)])
	
	//big doors

	bigDoorWoodenTypes.forEach(type => {
		const door = MI_D(`big_door_${type}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.stonecutting(door, MI_D("#doors_big/wooden"))
	})

	bigDoorGlassTypes.forEach(type => {
		const door = MI_D(`big_door_${type}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.stonecutting(door, MI_D("#doors_big/glass"))
	})

	bigDoorCopperTypes.forEach(type => {
		const door = MI_D(`big_door_${type}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.stonecutting(door, MI_D("#doors_big/copper"))
	})

	bigDoorIronTypes.forEach(type => {
		const door = MI_D(`big_door_${type}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.stonecutting(door, MI_D("#doors_big/iron"))
	})
	
	woodenDoorMats.forEach(mat => {
		const door = MI_D(`big_door_${mat}`)
		removeRecipeByOutput(event, [
			door,
		])
		event.shaped(door, ["AAA", "AAA", "AAA"], { A: MI_D(`#doors_${mat}`) })
	})
	
	event.remove({ output: MI_D("big_door_glass") })
	event.shaped(MI_D("big_door_glass"), ["AAA", "AAA", "AAA"], { A: MI_D('#doors_glass') })
	
	event.remove({ output: MI_D("big_door_portcullis") })
	event.shaped(MI_D("big_door_portcullis"), ["AAA", "AAA", "AAA"], { A: MI_D('door_special_portcullis') })
	
	event.remove({ output: MI_D("big_door_factory") })
	event.shaped(MI_D("big_door_factory"), ["AAA", "AAA", "AAA"], { A: MI_D('#doors_iron') })
	
	event.remove({ output: MI_D("big_door_pipe") })
	event.shaped(MI_D("big_door_pipe"), ["AAA", "AAA", "AAA"], { A: MI_D('#doors_copper') })
	
	//redstone key
	event.recipes.create.filling(MI_C("redstone_key"), [FB("framed_key"), Fluid.of(KJ("liquid_redstone"), 10)])
	
	//special doors
	
	event.remove({ output: MI_D("door_special_police_box") })
	event.stonecutting(MI_D("door_special_police_box"), MC("#wooden_doors"))
	event.remove({ output: MI_D("door_special_portcullis") })
	event.shaped(MI_D("door_special_portcullis"), ["AAA", "BBB", "AAA"], {
		A: F("#ingots/iron"),
		B: MC("iron_bars"),
	});
	
	//rainbow concrete transform
	event.recipes.ae2.transform(MI_C("rainbow_concrete"), [MI_C("rainbow_concrete_powder")]).circumstance({ type: 'fluid', tag: F('water') })
});