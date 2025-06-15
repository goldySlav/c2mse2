// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByID(event, [
        "endportalrecipe:craftable_end_portal",
    ])

    //crafting table
	removeRecipeByID(event, [
		MC("crafting_table"),
	])
    event.shaped(MC("crafting_table"), [
        'FF ',
        'PP '
    ], {
        F: MC('flint'),
        P: MC('#planks'),
    })

    //furnace
	removeRecipeByID(event, [
        MC("furnace"),
	])
	donutCraftEmpty(event, MC("furnace"), Q("sturdy_stone"))
	
	//quartz from block
    event.shapeless(Item.of(MC('quartz'), 4), [MC('quartz_block')])
	
	//smithing table & stone cutter
	event.replaceInput({ id: MC("smithing_table") }, MC("iron_ingot"), F("#ingots/zinc"))
	event.replaceInput({ id: MC("stonecutter") }, MC("iron_ingot"), KJ("saw_blade"))

    //wet sponge
    event.shapeless(MC('wet_sponge'), [MC('sponge'), MC('water_bucket')])
    event.recipes.create.filling(MC('wet_sponge'), [MC('sponge'), Fluid.of(MC('water'), 1000)])
	event.recipes.ae2.transform(MC("wet_sponge"), [MC("sponge")]).circumstance({ type: 'fluid', tag: F('water') })
	
	//necrotic bone haunting
	event.recipes.create.haunting(MC('wither_rose'), MC('poppy'))
	
	//concrete
	colours.forEach(color => {
		event.recipes.ae2.transform(MC(`${color}_concrete`), [MC(`${color}_concrete_powder`)]).circumstance({ type: 'fluid', tag: F('water') })
	})

    //flint
    event.shapeless(MC('flint'), [Item.of(MC("gravel"), 3)])
	event.recipes.create.crushing([Item.of(MC('flint'), 2)], MC('gravel')).processingTime(processingTimesDefault.crushing)

    //hopper
    event.replaceInput({ id: MC("hopper") }, F("#chests/wooden"), WH("wooden_hopper"))
	
	//iron door
	event.stonecutting(MC("iron_door"), MI_D("#doors_iron"))
	
	//nether star
	event.shaped(MC("nether_star"), [
        ' A ',
        'A A',
        ' A '
    ], {
        A: KJ('ether_gem'),
    })
	
	//enchanted apple TCT
	event.recipes.tconstruct.casting_table(MC("enchanted_golden_apple"), Fluid.of(CR_EI("experience"), 1000), MC("golden_apple"), true, 40)

    //end portal
    event.recipes.create.mechanical_crafting(Item.of(MC("end_portal_frame"), 3), [
        'AABAA',
        'ECCCE',
        'ECDCE',
        'ECCCE',
        'EEEEE'
    ], {
        A: AE2('singularity'),
        B: MC("nether_star"),
        C: M("teleportation_core"),
        D: MC("ender_eye"),
        E: MC("end_stone")
    })
    event.recipes.extendedcrafting.shaped_table(Item.of(MC("end_portal_frame"), 3), [
        'AABAA',
        'ECCCE',
        'ECDCE',
        'ECCCE',
        'EEEEE'
    ], {
        A: AE2('singularity'),
        B: MC("nether_star"),
        C: M("teleportation_core"),
        D: MC("ender_eye"),
        E: MC("end_stone")
    })

    //ice
    event.shapeless(MC("ice"), [Item.of(AA("ice_shard"), 4)]).id(KJ(`${MC()}/ice_from_shard`))
    event.shapeless(Item.of(AA("ice_shard"), 4), [MC("ice")]).id(KJ(`${MC()}/shard_from_ice`))

    event.recipes.create.deploying(
        MC('farmland'), [ MC("dirt"), [
			MC("wooden_hoe"),
			MC("stone_hoe"),
			MC("iron_hoe"),
			MC("golden_hoe"),
			MC("diamond_hoe"),
			MC("netherite_hoe"),
		]]
    ).damageIngredient(1)

    //trident
    event.shaped(MC("trident"), [
        ' BB',
        ' AB',
        'A  '
    ], {
        A: F('#gems/diamond'),
        B: F("#rods/iron"),
    })

    //water mixing
	event.recipes.create.mixing([Fluid.of(MC("water"), 1000)], [MC("ice")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 250)], [AA("ice_shard")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 500)], [MC("snow_block")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 125)], [MC("snow")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 125)], [MC("snowball")])
	
	//ender pearl
	event.shapeless(Item.of(MC('ender_pearl'), 9), F('#storage_blocks/ender_pearl'))
	
	//slab from planks
	woodTypes.minecraft.log.concat(woodTypes.minecraft.stem).concat(woodTypes.minecraft.block).forEach(wood => {
		event.recipes.create.cutting('2x ' + MC(wood) + '_slab', MC(wood) + '_planks').processingTime(150)
	})
	
	//shield
    removeRecipeByOutput(event, [
		MC("shield"),
    ])
	shapedSaveNBT(event, MC("shield"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: MVS("leather_shield"),
		B: MU("iron_opinium_core"),
	})
	
	//ingots from gas
	customRecipes.mekanism.crystallizing(event, MC(`iron_ingot`), KJ("gaseous_iron_compound"), 90)
	customRecipes.mekanism.crystallizing(event, MC(`gold_ingot`), KJ("gaseous_gold_compound"), 90)
	customRecipes.mekanism.crystallizing(event, MC(`copper_ingot`), KJ("gaseous_copper_compound"), 90)
	customRecipes.mekanism.crystallizing(event, EC(`ender_ingot`), KJ("gaseous_ender_alloy_compound"), 90)
	customRecipes.mekanism.crystallizing(event, MC(`diamond`), KJ("gaseous_diamond_compound"), 90)
	customRecipes.mekanism.crystallizing(event, MC(`netherite_scrap`), KJ("gaseous_debris"), 90)
	customRecipes.mekanism.crystallizing(event, MC(`netherite_ingot`), KJ("gaseous_netherite_compound"), 90)
	customRecipes.mekanism.crystallizing(event, MC(`ender_pearl`), KJ("gaseous_ender_compound"), 250)
	customRecipes.mekanism.crystallizing(event, MC(`amethyst_shard`), KJ("gaseous_amethyst"), 100)
	
	//mycelium
	event.recipes.create.deploying(MC("mycelium"), [MC("dirt"), EXD(`mycelium_spores`)])
	
	//grass block
	event.recipes.create.deploying(MC("grass_block"), [MC("dirt"), EXD(`grass_seeds`)])
	
	//emerald dupe from diamond
	customRecipes.create.ifiniDeploying(event, MC("emerald"), MC("diamond"), MC("nether_star"))
	
	//emerald compat PET + CR_EI
	customRecipes.create.disenchanting(event, [toRecipeJsonFluid(`3x ${CR_EI("experience")}`), toRecipeJsonItem(MC("emerald"))], [PET("pure_emerald")])
	
	//spawn eggs
	souledEggedEntities.forEach(entity => {
		const entitySplitted = entity.split(":")
		//const spawnEggStr = entitySplitted[0] == AM() ? AM(`spawn_egg_${entitySplitted[1]}`) : `${entity}_spawn_egg`
		customRecipes.enderio.soulbinding(event, `${entity}_spawn_egg`, CM("empty_spawn_egg"), entity, 202000, 6)
	})
	
	//ender chest
	removeRecipeByID(event, [
		MC("ender_chest"),
	])
	donutCraftFull(event, MC("ender_chest"), MC("obsidian"), M("teleportation_core"))
	customRecipes.enderio.soulbinding(event, MC("ender_chest"), F("#chests/wooden"), MC("enderman"), 24000, 1)

    //bucket
	removeRecipeByID(event, [
		MC("bucket"),
	])
    event.shaped(MC("bucket"), [
        'BAB',
        ' B '
    ], {
        A: EXD('porcelain_bucket'),
        B: F('#ingots/iron'),
    })
	
	//rabbit hide from leather
	event.shapeless(Item.of(MC('rabbit_hide'), 4), MC('leather'))
})