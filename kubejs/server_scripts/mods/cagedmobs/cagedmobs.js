// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		CM("crafting/nether_star_from_fragments"),
		CM("crafting/experience_bottle_from_experience_orb"),
	])
	removeRecipeByInputOutput(event, [
		CM("experience_upgrade"),
		CM("crystallized_experience"),
		CM("crystallized_experience_block"),
	])
	
	event.shapeless(Item.of(CM('nether_star_fragment'), 9), MC('nether_star'))
    event.recipes.create.mechanical_crafting(Item.of(CM('nether_star_fragment'), 9), "A", { A: MC('nether_star') })
	event.shapeless(MC('nether_star'), Item.of(CM('nether_star_fragment'), 9))

	event.shapeless(Item.of(CM('honey_drop'), 4), MC('honeycomb'))
    event.recipes.create.mechanical_crafting(Item.of(CM('honey_drop'), 4), "A", { A: MC('honeycomb') })
	event.shapeless(MC('honeycomb'), Item.of(CM('honey_drop'), 4))
	
	event.shapeless(Item.of(CM('empty_spawn_egg'), 1), [MU("magical_egg"), EIO("broken_spawner")])
	
	
	
	function grow(mobId, samplerTier, envArr, growTicks, waterLoggedBool) {
		growTicks = growTicks ? growTicks : 1800
		event.custom({
			type: CM("entity_data"),
			entity: mobId,
			samplerTier: samplerTier,
			environments: envArr, // cave = stone/sand/farm = grass/snow/nether = netherrack/end = endstone/sculk
			growTicks: growTicks,
			requiresWater: waterLoggedBool == true,
			results: [
			]
		})
	}
	
	grow(ART("mimic"), 3, ["cave"])
	grow(CR_DD("seething_ablaze"), 3, ["nether"])
	
	

	const smallEntities = [
		MC("allay"), MC("axolotl"), MC("bat"), MC("bee"), MC("camel"), MC("cat"), MC("chicken"), MC("cod"), MC("cow"), 
		MC("dolphin"), MC("donkey"), MC("fox"), MC("frog"), MC("glow_squid"), MC("goat"), MC("horse"), MC("llama"), 
		MC("mooshroom"), MC("mule"), MC("ocelot"), MC("panda"), MC("parrot"), MC("pig"), MC("polar_bear"), 
		MC("pufferfish"), MC("rabbit"), MC("salmon"), MC("sheep"), MC("silverfish"), MC("sniffer"),
		MC("squid"), MC("strider"), MC("tadpole"), MC("trader_llama"), MC("tropical_fish"), MC("turtle"), 
		MC("villager"), MC("wandering_trader"), MC("wolf"), Q("crab"), Q("toretoise"),Q("stoneling"), 
		//AM("grizzly_bear"), AM("roadrunner"), 
		//AM("gazelle"), AM("fly"), AM("rattlesnake"), AM("endergrade"), AM("lobster"), AM("capuchin_monkey"), 
		//AM("warped_toad"), AM("moose"), AM("mimicube"), AM("raccoon"), AM("blobfish"), AM("seal"), AM("cockroach"), 
		//AM("shoebill"), AM("elephant"), AM("soul_vulture"), AM("crow"), AM("alligator_snapping_turtle"), 
		//AM("mungus"), AM("straddler"), AM("emu"), AM("platypus"), AM("tasmanian_devil"), AM("kangaroo"), 
		//AM("leafcutter_ant"), AM("bald_eagle"), AM("mimic_octopus"), AM("seagull"),
	]

	const midEntities = [
		MC("blaze"), MC("cave_spider"), MC("creeper"), MC("drowned"), MC("enderman"), MC("illusioner"),
		MC("endermite"), MC("evoker"), MC("ghast"), MC("guardian"), MC("hoglin"), MC("husk"), MC("iron_golem"), 
		MC("magma_cube"), MC("phantom"), MC("piglin"), MC("piglin_brute"), MC("pillager"), MC("ravager"), 
		MC("shulker"), MC("skeleton"), MC("skeleton_horse"), MC("slime"), MC("snow_golem"), 
		MC("spider"), MC("stray"), MC("vex"), MC("vindicator"), MC("witch"), MC("wither_skeleton"), 
		MC("zoglin"), MC("zombie"), MC("zombie_horse"), MC("zombie_villager"), MC("zombified_piglin"),
		Q("forgotten"), Q("foxhound"), Q("wraith"), ART("mimic"), CR_DD("seething_ablaze"),
		//AM("bone_serpent"), AM("crocodile"), AM("sunbird"), 
		//AM("gorilla"), AM("crimson_mosquito"), AM("hammerhead_shark"), AM("komodo_dragon"), 
		//AM("guster"), AM("warped_mosco"), AM("dropbear"), AM("cachalot_whale"), AM("enderiophage"), 
		//AM("tarantula_hawk"), AM("frilled_shark"), AM("froststalker"), AM("tusklin"), AM("laviathan"), 
		//AM("cosmaw"), AM("centipede"), AM("centipede_head"), AM("centipede_tail"), AM("centipede_body"), 
	]
	
	const bigEntities = [
		MC("ender_dragon"), MC("wither"), MC("elder_guardian"), MC("warden"),
		//AM("void_worm"),  
		
	]
	
	function addLoot(entity, item, chance, minAmount, maxAmount) {
		chance = chance ? chance : 1.0
		minAmount = minAmount ? minAmount : 1
		maxAmount = maxAmount ? maxAmount : 1
		event.custom({
			type: CM("additional_loot_data"),
			entity: entity,
			results: [
				{
					chance: chance,
					output: {
						item: item
					},
					minAmount: minAmount,
					maxAmount: maxAmount
				}
			]
		})
	}
	
	smallEntities.forEach(entity => {
		addLoot(entity, CR("experience_nugget"), 0.5, 1, 1)
	})
	midEntities.forEach(entity => {
		addLoot(entity, CR("experience_nugget"), 0.75, 1, 3)
	})
	bigEntities.forEach(entity => {
		addLoot(entity, CR("experience_nugget"), 1.0, 1, 16)
	})
	
	addLoot(MC("warden"), MC("sculk_shrieker"), 0.15, 1, 2)
	addLoot(MC("warden"), MC("echo_shard"), 0.5, 3, 6)
	
	
	
	//artifacts to mimic
	const artifacts = [
		ART("umbrella"), ART("everlasting_beef"), ART("plastic_drinking_hat"), ART("novelty_drinking_hat"), 
		ART("snorkel"), ART("night_vision_goggles"), ART("villager_hat"), ART("superstitious_hat"), 
		ART("cowboy_hat"), ART("anglers_hat"), ART("lucky_scarf"), ART("scarf_of_invisibility"), 
		ART("cross_necklace"), ART("panic_necklace"), ART("shock_pendant"), ART("flame_pendant"), 
		ART("thorn_pendant"), ART("charm_of_sinking"), ART("cloud_in_a_bottle"), ART("obsidian_skull"), 
		ART("antidote_vessel"), ART("universal_attractor"), ART("crystal_heart"), ART("helium_flamingo"), 
		ART("chorus_totem"), ART("digging_claws"), ART("feral_claws"), ART("power_glove"), ART("fire_gauntlet"), 
		ART("pocket_piston"), ART("vampiric_glove"), ART("golden_hook"), ART("onion_ring"), ART("flippers"), 
		ART("aqua_dashers"), ART("bunny_hoppers"), ART("kitty_slippers"), ART("running_shoes"), ART("snowshoes"), 
		ART("steadfast_spikes"), ART("rooted_boots"), ART("whoopee_cushion"), 
	]
	
	artifacts.forEach(artifact => {
		addLoot(ART("mimic"), artifact, 0.005)
	})
	
	//seething ablaze
	addLoot(CR_DD("seething_ablaze"), CR_DD("seething_ablaze_rod"), 0.15, 1, 2)
	
	//cobweb from spider
	addLoot(MC("spider"), MC("cobweb"), 0.1)
	
	//sponge fragments from guardian
	addLoot(MC("guardian"), CM("sponge_fragment"), 0.1)
	
	//warden receptor
	event.recipes.create.crushing([
		Item.of(CM('warden_receptor')).withChance(0.01)
	], MC('sculk_shrieker')).processingTime(processingTimesDefault.crushing)
})