//priority: 0

ServerEvents.recipes(event => {
	removeRecipeByOutput(event, [
		AV("endest_pearl"),
		AV("cosmic_meatballs"),
		AV("ultimate_stew"),
		AV("infinity_catalyst"),
		IFC("rainbow_coal"),
	])

	//the ultimate ingot
	event.recipes.extendedcrafting.shapeless_table(EC("the_ultimate_ingot"), [
		F("#ingots/iron"), F("#ingots/copper"), F("#ingots/zinc"), CR("andesite_alloy"), F("#ingots/gold"), F("#ingots/netherite"),
		F("#ingots/desh"), F("#ingots/refined_radiance"), F("#ingots/shadow_steel"), AE2_A("quantum_alloy"),
		F("#ingots/ostrum"), F("#ingots/calorite"), CM("#ingots/star_infused_netherite"), F("#ingots/tungsten"), F("#ingots/brass"), 
		F("#ingots/draconium_awakened"), F("#ingots/draconium"), F("#ingots/enhanced_redstone_ingot"), F("#ingots/ender_ingot"), 
		F("#ingots/enhanced_ender_ingot"), IF("pink_slime_ingot"), F("#ingots/sky_steel"), F("#ingots/bronze"), F("#ingots/steel"), 
		F("#ingots/refined_obsidian"), F("#ingots/refined_glowstone"), F("#ingots/osmium"), F("#ingots/tin"), F("#ingots/lead"), 
		F("#ingots/uranium"), F("#ingots/naquadah"), F("#ingots/unstable"), F("#ingots/red_alloy"), AV("crystal_matrix_ingot"),
		AV("neutronium_ingot"), 
	]).id(KJ(`${EC()}/the_ultimate_ingot`)).tier(5)

	//the ultimate pearl
	event.recipes.extendedcrafting.shaped_table(AV("endest_pearl"), [
		"   AAAAA   ",
		"  ABBBBBA  ",
		" ABCCCCCBA ",
		"ABC  D  CBA",
		"ABC  D  CBA",
		"ABCDDDDDCBA",
		"ABC  D  CBA",
		"ABC  D  CBA",
		" ABCCCCCBA ",
		"  ABBBBBA  ",
		"   AAAAA   ",
	], {
		A: MC("ender_pearl"),
		B: AE2("fluix_pearl"),
		C: TM("frozen_pearl"),
		D: MC("ender_eye"),
	})

	//ultimate salad
	event.recipes.extendedcrafting.shapeless_table(KJ("ultimate_salad"), [
		PHC_C("agaveitem"), PHC_C("amaranthitem"), PHC_C("arrowrootitem"), PHC_C("artichokeitem"), PHC_C("asparagusitem"), PHC_C("barleyitem"),
		PHC_C("beanitem"), PHC_C("bellpepperitem"), PHC_C("blackberryitem"), PHC_C("eggplantitem"), PHC_C("elderberryitem"), PHC_C("flaxitem"),
		PHC_C("garlicitem"), PHC_C("gingeritem"), PHC_C("grapeitem"), PHC_C("greengrapeitem"), PHC_C("huckleberryitem"), PHC_C("jicamaitem"),
		PHC_C("caulifloweritem"), PHC_C("celeryitem"), PHC_C("chickpeaitem"), PHC_C("chilipepperitem"), PHC_C("coffeebeanitem"), PHC_C("cornitem"),
		PHC_C("cottonitem"), PHC_C("cranberryitem"), PHC_C("cucumberitem"), PHC_C("blueberryitem"), PHC_C("broccoliitem"), PHC_C("brusselsproutitem"),
		PHC_C("cabbageitem"), PHC_C("cactusfruititem"), PHC_C("candleberryitem"), PHC_C("cantaloupeitem"), PHC_C("cassavaitem"), PHC_C("juniperberryitem"),
		PHC_C("juteitem"), PHC_C("kaleitem"), PHC_C("kenafitem"), PHC_C("kiwiitem"), PHC_C("kohlrabiitem"), PHC_C("lentilitem"), PHC_C("lettuceitem"),
		PHC_C("leekitem"), PHC_C("milletitem"), PHC_C("sesameseedsitem"), PHC_C("sisalitem"), PHC_C("soybeanitem"), PHC_C("spiceleafitem"), PHC_C("spinachitem"),
		PHC_C("strawberryitem"), PHC_C("sweetpotatoitem"), PHC_C("taroitem"), PHC_C("tealeafitem"), PHC_C("pineappleitem"), PHC_C("quinoaitem"),
		PHC_C("radishitem"), PHC_C("raspberryitem"), PHC_C("rhubarbitem"), PHC_C("riceitem"), PHC_C("rutabagaitem"), PHC_C("ryeitem"), PHC_C("scallionitem"),
		PHC_C("mulberryitem"), PHC_C("mustardseedsitem"), PHC_C("oatsitem"), PHC_C("okraitem"), PHC_C("onionitem"), PHC_C("parsnipitem"), PHC_C("peanutitem"),
		PHC_C("peasitem"), PHC_T("avocadoitem"), PHC_T("peachitem"), PHC_T("almonditem"), PHC_T("bananaitem"), PHC_T("coconutitem"), PHC_T("dragonfruititem"),
		PHC_T("figitem"), PHC_T("grapefruititem"), PHC_T("limeitem"), PHC_T("mangoitem"),
	]).tier(5)

	//cosmic meatballs
	removeRecipeByOutput(event, [
		AV("cosmic_meatballs"),
	])
	event.recipes.extendedcrafting.shapeless_table(AV("cosmic_meatballs"), [
		MC("porkchop"), MC("beef"), MC("chicken"), MC("rabbit"), MC("mutton"), PHC_FC("groundchickenitem"), PHC_FC("basicchickensandwichitem"),
		PHC_FC("chickennuggetitem"), PHC_FC("meatloafitem"), PHC_FC("groundbeefitem"), PHC_FE("gourmetbeefpattyitem"), PHC_FE("sweetandsourmeatballsitem"),
		PHC_FC("baconcheeseburgeritem"), PHC_FC("basiccheeseburgeritem"), PHC_FE("baconmushroomburgeritem"), PHC_FE("bolognaitem"), PHC_FC("basichamburgeritem"),
		PHC_FE("deluxecheeseburgeritem"), PHC_FE("cottagepieitem"), PHC_FE("mcpamitem"), PHC_FE("swedishmeatballsitem"), PHC_FC("groundporkitem"),
		PHC_FE("corndogitem"), PHC_FE("gourmetporkpattyitem"), PHC_FC("hotdogitem"), PHC_FE("hashitem"), PHC_FC("fishsticksitem"), PHC_FC("basicfishsandwichitem"),
		PHC_FC("groundfishitem"), PHC_FE("gourmetmuttonpattyitem"), PHC_FC("groundmuttonitem"), PHC_FE("gourmetmuttonburgeritem"), PHC_FE("gourmetbeefburgeritem"),
		PHC_FE("gourmetporkburgeritem"), PHC_FC("muttonjerkyitem"), PHC_FE("bakedhamitem"), PHC_FE("porkrindsitem"), PHC_FE("pepperoniitem"), 
		PHC_FC("chickenjerkyitem"), PHC_FC("groundrabbititem"), PHC_FC("rabbitjerkyitem"), PHC_FC("beefjerkyitem"), PHC_FC("porkjerkyitem"),
		PHC_FC("fishjerkyitem"), PHC_FE("spicymustardporkitem"), PHC_FE("honeysoyribsitem"), PHC_FE("meatfeastpizzaitem"), PHC_FE("spagettiandmeatballsitem"), 
		PHC_FE("meatpieitem"), PHC_FE("meatloafsandwichitem"), PHC_FE("beetburgeritem"), PHC_FE("coleslawburgeritem"), PHC_FE("onionhamburgeritem"),
		PHC_FE("paradiseburgeritem"), PHC_FE("jalapenoburgeritem"),
	]).tier(5)

 	//ultimate stew
	removeRecipeByOutput(event, [
		AV("ultimate_stew"),
	])
 	event.recipes.extendedcrafting.shapeless_table(AV("ultimate_stew"), [KJ("ultimate_salad"), AV("cosmic_meatballs")]).tier(5)

	//the ultimate dust
	event.recipes.extendedcrafting.shapeless_table(KJ("the_ultimate_dust"), [
		F("#dusts/redstone"), F("#dusts/glowstone"), F("#dusts/certus_quartz"), F("#dusts/fluix"), AE2("sky_dust"), F("#dusts/ender_pearl"), F("#dusts/obsidian"),
		F("#dusts/diamond"), F("#dusts/draconium"), F("#dusts/grains_of_infinity"), F("#dusts/flux"), F("#dusts/fluorite"), AE2_A("quantum_infused_dust"),
		F("#dusts/netherite"), F("#dusts/charcoal"), F("#dusts/sulfur"), F("#dusts/bronze"), F("#dusts/lapis"), F("#dusts/quartz"), F("#dusts/emerald"),
		F("#dusts/steel"), F("#dusts/refined_obsidian"), F("#dusts/iron"), F("#dusts/gold"), F("#dusts/osmium"), F("#dusts/copper"), F("#dusts/tin"),
		F("#dusts/lead"), F("#dusts/uranium"), F("#dusts/naquadah"), F("#dusts/radiance"), F("#dusts/lithium"), PRE("low_covalence_dust"),
		PRE("medium_covalence_dust"), PRE("high_covalence_dust"), F("#dusts/tungsten"), F("#dusts/zinc"), AP("gem_dust"),
	]).tier(5).id(KJ('the_ultimate_dust'))

	//the ultimate shard
	event.recipes.extendedcrafting.shaped_table(KJ("the_ultimate_shard"), [
		'FFFFFFFFFFF',
		'FEEEEEEEEEF',
		'FEDDDDDDDEF',
		'FEDCCCCCDEF',
		'FEDCBBBCDEF',
		'FEDCBABCDEF',
		'FEDCBBBCDEF',
		'FEDCCCCCDEF',
		'FEDDDDDDDEF',
		'FEEEEEEEEEF',
		'FFFFFFFFFFF',
	], {
		A: DE("chaos_shard"),
		B: AA("ice_shard"),
		C: MC("amethyst_shard"),
		D: MC("prismarine_shard"),
		E: MC("echo_shard"),
		F: RTB("dimensionalshard"),
	})

	//the ultimate matter
	event.recipes.extendedcrafting.shapeless_table(KJ("the_ultimate_matter"), [
		PRE("dark_matter"), PRE("red_matter"), PREXP("magenta_matter"), PREXP("pink_matter"), PREXP("purple_matter"),
		PREXP("violet_matter"), PREXP("blue_matter"), PREXP("cyan_matter"), PREXP("green_matter"), PREXP("lime_matter"),
		PREXP("yellow_matter"), PREXP("orange_matter"), PREXP("white_matter"), PREXP("fading_matter"),
	]).tier(5).id(KJ('the_ultimate_matter'))

	//the ultimate coal (rainbow coal)
	removeRecipeByOutput(event, [
		IFC("rainbow_coal"),
	])
	event.recipes.extendedcrafting.shapeless_table(IFC("rainbow_coal"), [
		MC("coal"), PRE("alchemical_coal"), PRE("mobius_fuel"), PRE("aeternalis_fuel"), PREXP("magenta_fuel"),
		PREXP("pink_fuel"), PREXP("purple_fuel"), PREXP("violet_fuel"), PREXP("blue_fuel"), PREXP("cyan_fuel"),
		PREXP("green_fuel"), PREXP("lime_fuel"), PREXP("yellow_fuel"), PREXP("orange_fuel"), PREXP("white_fuel"),
	]).tier(5).id(KJ(`${IFC()}/rainbow_coal`))

	//the ultimate star (infinity catalyst)
	removeRecipeByOutput(event, [
		AV("infinity_catalyst"),
	])
	event.recipes.extendedcrafting.shaped_table(AV("infinity_catalyst"), [
		"E    E    E",
		" D   A   D ",
		"  D  A  D  ",
		"   D A D   ",
		"    DAD    ",
		"EAAAAEAAAAE",
		"    DAD    ",
		"   D A D   ",
		"  D  A  D  ",
		" D   A   D ",
		"E    E    E",
	], {
		A: MC("nether_star"),
		D: EC("ender_star"),
		E: EC("flux_star"),
	}).tier(5)
	
	//ultimate singularity
	event.recipes.extendedcrafting.shapeless_table(EC("ultimate_singularity"), singularitiesList).tier(5).id(KJ(`ultimate_items/ultimate_singularity`))
	
	
	
	//creative items
	const creativeItemMix = (e, output, input, additionalItem) => {
		const inputArr = [input, PREXP("final_star")]
		
		if (additionalItem) {
			inputArr.push(additionalItem)
		}
		
		customRecipes.witherstormmod.beacon_item_crafting(event, output, inputArr)
	}
	
	//avaritia
	removeRecipeByOutput(event, [
		AV("swordofthe_cosmos"),
		AV("longbowofthe_heavens"),
		AV("world_breaker"),
		AV("planet_eater"),
		AV("natures_ruin"),
		AV("hoeofthe_green_earth"),
		AV("infinity_armor_helmet"),
		AV("infinity_armor_chestplate"),
		AV("infinity_armor_leggings"),
		AV("infinity_armor_boots"),
	])
	creativeItemMix(event, AV("swordofthe_cosmos"), DE("chaotic_sword"))
	creativeItemMix(event, AV("longbowofthe_heavens"), DE("chaotic_bow"))
	creativeItemMix(event, AV("world_breaker"), DE("chaotic_pickaxe"))
	creativeItemMix(event, AV("planet_eater"), DE("chaotic_shovel"))
	creativeItemMix(event, AV("natures_ruin"), DE("chaotic_axe"))
	creativeItemMix(event, AV("hoeofthe_green_earth"), DE("chaotic_hoe"))
	creativeItemMix(event, AV("infinity_armor_helmet"), M("mekasuit_helmet"))
	creativeItemMix(event, AV("infinity_armor_chestplate"), M("mekasuit_bodyarmor"), DE("chaotic_chestpiece"))
	creativeItemMix(event, AV("infinity_armor_leggings"), M("mekasuit_pants"))
	creativeItemMix(event, AV("infinity_armor_boots"), M("mekasuit_boots"))
	
	//AE2
	creativeItemMix(event, AE2("creative_energy_cell"), MGC("mega_energy_cell"))
	creativeItemMix(event, AE2("creative_item_cell"), MGC("item_storage_cell_256m"))
	creativeItemMix(event, AE2("creative_fluid_cell"), MGC("fluid_storage_cell_256m"))
	creativeItemMix(event, AE2_M("creative_chemical_cell"), MGC("chemical_storage_cell_256m"))
	
	//powah
	creativeItemMix(event, P("energy_cell_creative"), P("energy_cell_nitro"))
	
	//mekanism
	creativeItemMix(event, M("creative_fluid_tank"), M_E("infinite_fluid_tank"))
	creativeItemMix(event, M("creative_chemical_tank"), M_E("infinite_chemical_tank"))
	creativeItemMix(event, M("creative_bin"), M_E("infinite_bin"))
	event.recipes.create.mixing(
		[ 
			Item.of(M('creative_energy_cube'), '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'),
			WSM("withered_nether_star"),
		], [
			PREXP("final_star"), M_E("infinite_energy_cube"), WSM("withered_nether_star"),
		],
	).superheated()
	
	//create
	creativeItemMix(event, CR("creative_motor"), CR_A("electric_motor"))
	creativeItemMix(event, CR("creative_fluid_tank"), CR("fluid_tank"))
	creativeItemMix(event, CR("creative_blaze_cake"), CR("blaze_cake"))
	
	//furnace
	creativeItemMix(event, IFC("million_furnace"), PRE("rm_furnace"))
	
	//storage drawers
	creativeItemMix(event, SD("creative_vending_upgrade"), SD("emerald_storage_upgrade"))
	
	//DE
	creativeItemMix(event, DE("creative_op_capacitor"), DE("creative_capacitor"))
	creativeItemMix(event, DE("creative_capacitor"), DE("chaotic_capacitor"))
	
	//command_block
	creativeItemMix(event, MC("command_block"), MC("grass_block"))
	
	//CM
	creativeItemMix(event, CM("creative_upgrade"), CM("speed_iii_upgrade"))
	
	//infinity pipe upgrade (@pipez)
	creativeItemMix(event, PZ("infinity_upgrade"), PZ("ultimate_upgrade"))
})