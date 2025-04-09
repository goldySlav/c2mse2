// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		DU("charm_sleep"),
		/darkutils:filter_*/,
	])

	//sleep charm
	event.shaped(DU("charm_sleep"), [
		'ABA',
		'CDE',
		'AFA',
	], {
		A: MC("string"),
		B: F('#dyes/white'),
		C: F('#dyes/black'),
		D: MC('phantom_membrane'),
		E: F('#dyes/yellow'),
		F: F('#dyes/red'),
	}).id(KJ(`${DU()}/charm_sleep`))
	
	//cobblestone to sturdy stone
    event.replaceInput({ id: DU("crafting/shielded_redstone") }, F("#cobblestone"), Q("sturdy_stone"))
	
	//gates to tokens
	event.recipes.create.deploying(Item.of(DU("filter_player"), 4), [MC("#logs"), EIO("player_token")])
	event.recipes.create.deploying(Item.of(DU("filter_hostile"), 4), [MC("#logs"), EIO("monster_token")])
	event.recipes.create.deploying(Item.of(DU("filter_animal"), 4), [MC("#logs"), EIO("animal_token")])

	const filterTypes = {
		player: [
			{ id: "villager", add: F("#gems/emerald") },
			{ id: "child", add: MC("egg") },
			{ id: "named", add: MC("name_tag") },
			{ id: "equipment", add: MC("golden_chestplate") },
			{ id: "passenger", add: MC("minecart") },
		],
		hostile: [
			{ id: "undead", add: MC("bone") },
			{ id: "arthropod", add: MC("spider_eye") },
			{ id: "illager", add: MC("crossbow") },
			{ id: "raider", add: MC("bell") },
			{ id: "slime", add: MC("slime_ball") },
			{ id: "child", add: MC("egg") },
			{ id: "fire_immune", add: MC("blaze_powder") },
			{ id: "golem", add: MC("carved_pumpkin") },
			{ id: "water", add: MC("water_bucket") },
			{ id: "named", add: MC("name_tag") },
			{ id: "freeze_immune", add: MC("snowball") },
			{ id: "equipment", add: MC("golden_chestplate") },
			{ id: "passenger", add: MC("minecart") },
		],
		animal: [
			{ id: "child", add: MC("egg") },
			{ id: "pet", add: MC("milk_bucket") },
			{ id: "fire_immune", add: MC("blaze_powder") },
			{ id: "golem", add: MC("carved_pumpkin") },
			{ id: "water", add: MC("water_bucket") },
			{ id: "named", add: MC("name_tag") },
			{ id: "freeze_immune", add: MC("snowball") },
			{ id: "equipment", add: MC("golden_chestplate") },
			{ id: "passenger", add: MC("minecart") },
		],
	}
	Object.keys(filterTypes).forEach(type => {
		filterTypes[type].forEach(typeObj => {
			event.recipes.create.mixing(Item.of(DU(`filter_${typeObj.id}`), 1), [DU(`filter_${type}`), typeObj.add])
			event.recipes.mekanismCombining(Item.of(DU(`filter_${typeObj.id}`), 1), DU(`filter_${type}`), typeObj.add)
		})
	})
})