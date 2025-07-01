// priority: 0

ServerEvents.recipes((event) => {
  removeRecipeByID(event, [
    '/emc_link/basic/',
    '/emc_link/dark/',
    '/emc_link/red/',
    '/emc_link/magenta/',
    '/emc_link/pink/',
    '/emc_link/purple/',
    '/emc_link/violet/',
    '/emc_link/blue/',
    '/emc_link/cyan/',
    '/emc_link/green/',
    '/emc_link/lime/',
    '/emc_link/yellow/',
    '/emc_link/orange/',
    '/emc_link/white/',
    '/emc_link/fading/',
    '/emc_link/final/',
    '/star/final_star/',
    '/collector/magenta/',
    '/collector/pink/',
    '/collector/purple/',
    '/collector/violet/',
    '/collector/blue/',
    '/collector/cyan/',
    '/collector/green/',
    '/collector/lime/',
    '/collector/yellow/',
    '/collector/orange/',
    '/collector/white/',
    '/collector/fading/',
    '/relay/magenta/',
    '/relay/pink/',
    '/relay/purple/',
    '/relay/violet/',
    '/relay/blue/',
    '/relay/cyan/',
    '/relay/green/',
    '/relay/lime/',
    '/relay/yellow/',
    '/relay/orange/',
    '/relay/white/',
    '/relay/fading/',
    PRE("watch_of_flowing_time"),
    PRE('collector_mk1'),
    PRE('collector_mk2'),
    PRE('collector_mk3'),
    PRE('relay_mk1'),
    PRE('relay_mk2'),
    PRE('relay_mk3'),
    /projecte:(dm|rm)_hammer/,
    PRE("rm_morning_star"),
    PRE("swiftwolf_rending_gale"),
    PREXP("collector/basic"),
    PREXP("relay/basic"),
    PREXP("collector/dark"),
    PREXP("relay/dark"),
    PREXP("collector/red"),
    PREXP("relay/red"),

    //w/o replace
    PRE("interdiction_torch"), //on pedestal
    // PRE("dm_pedestal"), //on pedestal
    PRE("divining_rod_1"), //on pedestal
    PRE("divining_rod_2"), //on pedestal
    PRE("divining_rod_3"), //on pedestal
    PRE("destruction_catalyst"), //on pedestal
    PRE("hyperkinetic_lens"), //on pedestal
    PRE("tome"), //on pedestal
    PRE("iron_band"), //on pedestal
    PRE("repair_talisman"), //on pedestal
    PRE("arcana_ring"), //on pedestal
    PRE("black_hole_band"), //on pedestal
    PRE("archangel_smite"), //on pedestal
    PRE("harvest_goddess_band"), //on pedestal
    PRE("ignition_ring"), //on pedestal
    PRE("zero_ring"), //on pedestal
    PRE("evertide_amulet"),
    PRE("volcanite_amulet"),
    PRE("conversions/redstone_to_lava"),
    PRE("conversions/dirt_to_grass"),
    PRE("conversions/water_to_ice"),
    PRE("gem_of_eternal_density"), //doesn't work
    PRE("mercurial_eye"), //doesn't work
    PRE("body_stone"), //on pedestal
    PRE("soul_stone"), //on pedestal
    PRE("mind_stone"), //on pedestal
    PRE("life_stone"), //on pedestal
    PRE("void_ring"), //doesn't work
    PRE("nova_catalyst"),
    PRE("nova_cataclysm"),
    PREXP("infinite_steak"),
  ])

  removeRecipeByOutput(event, [
    PRE("alchemical_chest"),
    PREXT("alchemical_barrel"),
    PREXP("infinite_fuel"),

    //w/o replace
    PREXP("matter_upgrader"),
    PRE("catalytic_lens"), //on pedestal
  ])

  //Thanks NTC2 modpack devs for admirable balancing
  /*
   ? "basic", "dark", "red", "magenta",
   ? "pink", "purple", "violet", "blue",
   ? "cyan", "green", "lime", "yellow",
   ? "orange", "white", "fading", "final"
  */

  event.shaped(PRE('alchemical_chest'), ['LMH', 'SDS', 'IBI'], {
    L: PRE('low_covalence_dust'),
    M: PRE('medium_covalence_dust'),
    H: PRE('high_covalence_dust'),
    S: F('#stone'),
    D: MC('diamond'),
    I: F("#ingots/iron"),
    B: SS("netherite_chest"),
  }).id(KJ(`${PRE()}/alchemical_chest`))

  event.shaped(PREXT('alchemical_barrel'), ['LMH', 'SDS', 'IBI'], {
    L: PRE('low_covalence_dust'),
    M: PRE('medium_covalence_dust'),
    H: PRE('high_covalence_dust'),
    S: F('#stone'),
    D: MC('diamond'),
    I: F("#ingots/iron"),
    B: SS("netherite_barrel"),
  }).id(KJ(`${PRE()}/alchemical_barrel`))

  event.replaceInput({ id: PRE("condenser_mk1") }, MC("obsidian"), PRE("dark_matter_block"))
  event.replaceInput({ id: PRE("condenser_mk1") }, MC("diamond"), MC("diamond_block"))
  
  event.shaped(PREXP('infinite_fuel'), ['LMH', 'BWB', 'GNG'], {
    L: PRE('low_covalence_dust'),
    M: PRE('medium_covalence_dust'),
    H: PRE('high_covalence_dust'),
    B: PREXP('basic_emc_link'),
    W: F('#gems/coke'),
    G: PREXP('violet_matter'),
    N: PRE('condenser_mk2'),
  }).id(KJ(`${PREXP()}/infinite_fuel`))
  
  //repair talisman
  event.replaceInput({ id: PRE("repair_talisman_alt") }, MC("paper"), CP("experience_4"))



//Compressed Collectors
  event.shapeless(Item.of('projectexpansion:basic_collector', 9), ['projectexpansion:basic_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:blue_collector', 9), ['projectexpansion:blue_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:cyan_collector', 9), ['projectexpansion:cyan_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:dark_collector', 9), ['projectexpansion:dark_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:fading_collector', 9), ['projectexpansion:fading_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:final_collector', 9), ['projectexpansion:final_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:green_collector', 9), ['projectexpansion:green_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:lime_collector', 9), ['projectexpansion:lime_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:magenta_collector', 9), ['projectexpansion:magenta_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:orange_collector', 9), ['projectexpansion:orange_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:pink_collector', 9), ['projectexpansion:pink_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:purple_collector', 9), ['projectexpansion:purple_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:red_collector', 9), ['projectexpansion:red_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:violet_collector', 9), ['projectexpansion:violet_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:white_collector', 9), ['projectexpansion:white_compressed_collector'])
  event.shapeless(Item.of('projectexpansion:yellow_collector', 9), ['projectexpansion:yellow_compressed_collector'])

//Collectors to MK ones
  event.shapeless(Item.of('projecte:collector_mk1', 1), ['projectexpansion:basic_collector'])
  event.shapeless(Item.of('projecte:collector_mk2', 1), ['projectexpansion:dark_collector'])
  event.shapeless(Item.of('projecte:collector_mk3', 1), ['projectexpansion:red_collector'])
  event.shapeless(Item.of('projecte:relay_mk1', 1), ['projectexpansion:basic_relay'])
  event.shapeless(Item.of('projecte:relay_mk2', 1), ['projectexpansion:dark_relay'])
  event.shapeless(Item.of('projecte:relay_mk3', 1), ['projectexpansion:red_relay'])



  //EMC Links
  event.shaped('1x projectexpansion:basic_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projecte:transmutation_tablet',
    C: 'projecte:condenser_mk1'
  }).id(`kubejs:projectexpansion/basic_emc_link`)
  event.shaped('1x projectexpansion:dark_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projecte:dark_matter',
    C: 'projectexpansion:basic_emc_link'
  }).id(`kubejs:projectexpansion/dark_emc_link`)
  event.shaped('1x projectexpansion:red_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projecte:red_matter',
    C: 'projectexpansion:dark_emc_link'
  }).id(`kubejs:projectexpansion/red_emc_link`)
  event.shaped('1x projectexpansion:magenta_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:magenta_matter',
    C: 'projectexpansion:red_emc_link'
  }).id(`kubejs:projectexpansion/magenta_emc_link`)
  event.shaped('1x projectexpansion:pink_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:pink_matter',
    C: 'projectexpansion:magenta_emc_link'
  }).id(`kubejs:projectexpansion/pink_emc_link`)
  event.shaped('1x projectexpansion:purple_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:purple_matter',
    C: 'projectexpansion:pink_emc_link'
  }).id(`kubejs:projectexpansion/purple_emc_link`)
  event.shaped('1x projectexpansion:violet_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:violet_matter',
    C: 'projectexpansion:purple_emc_link'
  }).id(`kubejs:projectexpansion/violet_emc_link`)
  event.shaped('1x projectexpansion:blue_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:blue_matter',
    C: 'projectexpansion:violet_emc_link'
  }).id(`kubejs:projectexpansion/blue_emc_link`)
  event.shaped('1x projectexpansion:cyan_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:cyan_matter',
    C: 'projectexpansion:blue_emc_link'
  }).id(`kubejs:projectexpansion/cyan_emc_link`)
  event.shaped('1x projectexpansion:green_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:green_matter',
    C: 'projectexpansion:cyan_emc_link'
  }).id(`kubejs:projectexpansion/green_emc_link`)
  event.shaped('1x projectexpansion:lime_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:lime_matter',
    C: 'projectexpansion:green_emc_link'
  }).id(`kubejs:projectexpansion/lime_emc_link`)
  event.shaped('1x projectexpansion:yellow_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:yellow_matter',
    C: 'projectexpansion:lime_emc_link'
  }).id(`kubejs:projectexpansion/yellow_emc_link`)
  event.shaped('1x projectexpansion:orange_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:orange_matter',
    C: 'projectexpansion:yellow_emc_link'
  }).id(`kubejs:projectexpansion/orange_emc_link`)
  event.shaped('1x projectexpansion:white_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:white_matter',
    C: 'projectexpansion:orange_emc_link'
  }).id(`kubejs:projectexpansion/white_emc_link`)
  event.shaped('1x projectexpansion:fading_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:fading_matter',
    C: 'projectexpansion:white_emc_link'
  }).id(`kubejs:projectexpansion/fading_emc_link`)
  event.shaped('1x projectexpansion:final_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:final_star_shard',
    C: 'projectexpansion:fading_emc_link'
  }).id(`kubejs:projectexpansion/final_emc_link`)

	event.shaped(PRE("swiftwolf_rending_gale"), [
		'ABA',
		'BCB',
		'DBD'
	], {
		A: MU("netherite_opinium_core"),
		B: PREXP("blue_matter"),
		C: MC("nether_star"),
		D: F("#ingots/unstable"),
	})

  event.recipes.extendedcrafting.shaped_table('projecte:watch_of_flowing_time', [
    'GGGGGGGGG',
    'GGGGGGGGG',
    'GGKFFFKGG',
    'GGFOIOFGG',
    'GGFISIFGG',
    'GGFOIOFGG',
    'GGKFFFKGG',
    'GGGGGGGGG',
    'GGGGGGGGG'
  ], {
    G: CP('gold_5'),
    F: PREXP('fading_matter'),
    O: PREXP('magnum_star_omega'),
    I: PREXP('infinite_fuel'),
    K: PRE('relay_mk3'),
    S: singularityId("antimatter")
  })

  event.shaped(PREXP('final_star'), ['LLL', 'LML', 'LLL'], {
    L: PREXP('final_power_flower'),
    M: EC('ultimate_singularity'),
  }).id(KJ(`${PREXP()}/final_star`))

  event.shaped(PREXP('final_star_shard'), ['LLL', 'LML', 'LLL'], {
    L: PREXP('gargantuan_star_omega'),
    M: EC('the_ultimate_block')
  }).id(KJ(`${PREXP()}/final_star_shard`))



  // Relays
  event.recipes.extendedcrafting.shaped_table(PRE('relay_mk1'), [
    'ABBBA',
    'ACCCA',
    'ACDCA',
    'ACCCA',
    'AAAAA',
  ], {
    A: PRE('klein_star_ein'),
    B: CP('quartz_3'),
    C: AE2('singularity'), //crystalized chorus chunk
    D: IFC('obsidian_furnace'), //iron furnances >> diamond furnace?
  }).id(KJ(`${PRE()}/extended_crafting/relay_mk1`))

  event.recipes.createMechanicalCrafting(PRE('relay_mk1'), [
    'ABBBA',
    'ACCCA',
    'ACDCA',
    'ACCCA',
    'AAAAA',
  ], {
    A: PRE('klein_star_ein'),
    B: CP('quartz_3'),
    C: AE2('singularity'), //crystalized chorus chunk
    D: IFC('obsidian_furnace'), //iron furnances >> diamond furnace?
  }).id(KJ(`${PRE()}/mechanical_crafting/relay_mk1`))

  event.recipes.extendedcrafting.shaped_table(PRE('relay_mk2'), [
    'ABBBBBA',
    'ACCCCCA',
    'ACDDDCA',
    'ACDEDCA',
    'ACDDDCA',
    'ACCCCCA',
    'AAAAAAA',
  ], {
    A: PRE('klein_star_zwei'),
    B: CP('obsidian_3'),
    C: IF('plastic'), //enhanced ender catalyst
    D: IF('pink_slime_ingot'), //ender resonator
    E: PRE("relay_mk1"),
  }).id(KJ(`${PRE()}/relay_mk2`))

  event.recipes.extendedcrafting.shaped_table(PRE('relay_mk3'), [
    'ABBBBBBBA',
    'ACCCCCCCA',
    'ACDDDDDCA',
    'ACDEEEDCA',
    'ACDEFEDCA',
    'ACDEEEDCA',
    'ACDDDDDCA',
    'ACCCCCCCA',
    'AAAAAAAAA',
  ], {
    A: PRE('klein_star_drei'),
    B: CP('redstone_3'),
    C: M('ingot_refined_obsidian'), //universal mass
    D: AE2('cell_component_64k'),
    E: M('hdpe_sheet'), //oganesson ingot
    F: PRE("relay_mk2"),
  }).id(KJ(`${PRE()}/relay_mk3`))



  // Balance collectors
  event.recipes.extendedcrafting.shaped_table(PRE('collector_mk1'), [
    'ABBBA',
    'ACCCA',
    'ACDCA',
    'ACCCA',
    'AAAAA',
  ], {
    A: PRE('klein_star_ein'),
    B: CP('quartz_3'),
    C: AE2('singularity'), //crystalized chorus chunk
    D: IFC('emerald_furnace'), //iron furnances >> diamond furnace?
  }).id(KJ(`${PRE()}/extended_crafting/collector_mk1`))

  event.recipes.createMechanicalCrafting(PRE('collector_mk1'), [
    'ABBBA',
    'ACCCA',
    'ACDCA',
    'ACCCA',
    'AAAAA',
  ], {
    A: PRE('klein_star_ein'),
    B: CP('quartz_3'),
    C: AE2('singularity'), //crystalized chorus chunk
    D: IFC('emerald_furnace'), //iron furnances >> diamond furnace?
  }).id(KJ(`${PRE()}/mechanical_crafting/collector_mk1`))

  event.recipes.extendedcrafting.shaped_table(PRE('collector_mk2'), [
    'ABBBBBA',
    'ACCCCCA',
    'ACDDDCA',
    'ACDEDCA',
    'ACDDDCA',
    'ACCCCCA',
    'AAAAAAA',
  ], {
    A: PRE('klein_star_zwei'),
    B: CP('obsidian_3'),
    C: IF('plastic'), //enchanced ender catalyst
    D: IF('pink_slime_ingot'), //ender resonator
    E: PRE("collector_mk1"),
  }).id(KJ(`${PRE()}/collector_mk2`))

  event.recipes.extendedcrafting.shaped_table(PRE('collector_mk3'), [
    'ABBBBBBBA',
    'ACCCCCCCA',
    'ACDDDDDCA',
    'ACDEEEDCA',
    'ACDEFEDCA',
    'ACDEEEDCA',
    'ACDDDDDCA',
    'ACCCCCCCA',
    'AAAAAAAAA',
  ], {
    A: PRE('klein_star_drei'),
    B: CP('redstone_3'),
    C: M('ingot_refined_glowstone'), //universal mass
    D: AE2('cell_component_64k'),
    E: M('hdpe_sheet'), //lutetium ingot
    F: PRE("collector_mk2"),
  }).id(KJ(`${PRE()}/collector_mk3`))

  event.recipes.extendedcrafting.shaped_table(PREXP('magenta_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: PREXP('red_collector'),
    B: AE2('cell_component_1k'),
    C: PREXP('magenta_matter'),
  }).id(KJ(`${PREXP()}/magenta_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('magenta_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: PREXP('red_relay'),
    B: AE2('cell_component_1k'),
    C: PREXP('magenta_matter'),
  }).id(KJ(`${PREXP()}/magenta_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('pink_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:magenta_collector',
    B: AE2('cell_component_4k'),
    C: 'projectexpansion:pink_matter'
  }).id(KJ(`${PREXP()}/pink_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('pink_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:magenta_relay',
    B: AE2('cell_component_4k'),
    C: 'projectexpansion:pink_matter'
  }).id(KJ(`${PREXP()}/pink_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('purple_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:pink_collector',
    B: AE2('cell_component_16k'),
    C: 'projectexpansion:purple_matter'
  }).id(KJ(`${PREXP()}/purple_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('purple_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:pink_relay',
    B: AE2('cell_component_16k'),
    C: 'projectexpansion:purple_matter'
  }).id(KJ(`${PREXP()}/purple_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('violet_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:purple_collector',
    B: AE2('cell_component_64k'),
    C: 'projectexpansion:violet_matter'
  }).id(KJ(`${PREXP()}/violet_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('violet_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:purple_relay',
    B: AE2('cell_component_64k'),
    C: 'projectexpansion:violet_matter'
  }).id(KJ(`${PREXP()}/violet_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('blue_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:violet_collector',
    B: AE2('cell_component_256k'),
    C: 'projectexpansion:blue_matter'
  }).id(KJ(`${PREXP()}/blue_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('blue_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:violet_relay',
    B: AE2('cell_component_256k'),
    C: 'projectexpansion:blue_matter'
  }).id(KJ(`${PREXP()}/blue_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('cyan_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:blue_collector',
    B: MGC('cell_component_1m'),
    C: 'projectexpansion:cyan_matter'
  }).id(KJ(`${PREXP()}/cyan_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('cyan_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:blue_relay',
    B: MGC('cell_component_1m'),
    C: 'projectexpansion:cyan_matter'
  }).id(KJ(`${PREXP()}/cyan_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('green_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:cyan_collector',
    B: MGC('cell_component_4m'),
    C: 'projectexpansion:green_matter'
  }).id(KJ(`${PREXP()}/green_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('green_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:cyan_relay',
    B: MGC('cell_component_4m'),
    C: 'projectexpansion:green_matter'
  }).id(KJ(`${PREXP()}/green_relay`))

  event.recipes.extendedcrafting.shaped_table(PREXP('lime_collector'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:green_collector',
    B: MGC("cell_component_16m"),
    C: 'projectexpansion:lime_matter'
  }).id(KJ(`${PREXP()}/lime_collector`))

  event.recipes.extendedcrafting.shaped_table(PREXP('lime_relay'), [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:green_relay',
    B: MGC("cell_component_16m"),
    C: 'projectexpansion:lime_matter'
  }).id(KJ(`${PREXP()}/lime_relay`))
  
  event.recipes.extendedcrafting.shaped_table('projectexpansion:yellow_collector', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:lime_collector',
    B: MGC("cell_component_64m"),
    C: 'projectexpansion:yellow_matter'
  }).id(KJ(`${PREXP()}/yellow_collector`))
  
  event.recipes.extendedcrafting.shaped_table('projectexpansion:yellow_relay', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:lime_relay',
    B: MGC("cell_component_64m"),
    C: 'projectexpansion:yellow_matter'
  }).id(KJ(`${PREXP()}/yellow_relay`))

  event.recipes.extendedcrafting.shaped_table('projectexpansion:orange_collector', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:yellow_collector',
    B: MGC("cell_component_256m"),
    C: 'projectexpansion:orange_matter'
  }).id(KJ(`${PREXP()}/orange_collector`))

  event.recipes.extendedcrafting.shaped_table('projectexpansion:orange_relay', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:yellow_relay',
    B: MGC("cell_component_256m"),
    C: 'projectexpansion:orange_matter'
  }).id(KJ(`${PREXP()}/orange_relay`))
  
  event.recipes.extendedcrafting.shaped_table('projectexpansion:white_collector', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:orange_collector',
    B: KJ("wafer_component_64m"),
    C: 'projectexpansion:white_matter'
  }).id(KJ(`${PREXP()}/white_collector`))
  
  event.recipes.extendedcrafting.shaped_table('projectexpansion:white_relay', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:orange_relay',
    B: KJ("wafer_component_64m"),
    C: 'projectexpansion:white_matter'
  }).id(KJ(`${PREXP()}/white_relay`))
    
  event.recipes.extendedcrafting.shaped_table('projectexpansion:fading_collector', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:white_collector',
    B: KJ("wafer_component_256m"),
    C: 'projectexpansion:fading_matter'
  }).id(KJ(`${PREXP()}/fading_collector`))
    
  event.recipes.extendedcrafting.shaped_table('projectexpansion:fading_relay', [
    'CCCCC',
    'CBBBC',
    'CBABC',
    'CBBBC',
    'CCCCC'
  ], {
    A: 'projectexpansion:white_relay',
    B: KJ("wafer_component_256m"),
    C: 'projectexpansion:fading_matter'
  }).id(KJ(`${PREXP()}/fading_relay`))

  //emc interface
  removeRecipeByID(event, [
	PREXP("transmutation_interface"),
  ])
  
  event.recipes.extendedcrafting.shaped_table(PREXP('transmutation_interface'), [
	'CEBEC',
	'EGDGE',
	'BGAGB',
	'EGFGE',
	'CEBEC',
  ], {
	A: PRE('transmutation_tablet'),
	B: AE2('fluix_glass_cable'),
	C: CP('iron_1'),
	D: AE2('formation_core'),
	E: AE2('engineering_processor'),
	F: AE2('annihilation_core'),
	G: PREXP('pink_matter'),
  })
	
	//dm & rm axes
    removeRecipeByOutput(event, [
		PRE("dm_axe"),
		PRE("rm_axe"),
    ])
	shapedSaveNBT(event, PRE("dm_axe"), [
		'B',
		'A',
	], {
		A: MU("healing_axe"),
		B: PRE("dm_axe_part"),
	})
	shapedSaveNBT(event, PRE("rm_axe"), [
		'B',
		'A',
	], {
		A: PRE("dm_axe"),
		B: PRE("rm_axe_part"),
	})
	
	//dm & rm hoes
    removeRecipeByOutput(event, [
		PRE("dm_hoe"),
		PRE("rm_hoe"),
    ])
	shapedSaveNBT(event, PRE("dm_hoe"), [
		'B',
		'A',
	], {
		A: MU("reversing_hoe"),
		B: PRE("dm_hoe_part"),
	})
	shapedSaveNBT(event, PRE("rm_hoe"), [
		'B',
		'A',
	], {
		A: PRE("dm_hoe"),
		B: PRE("rm_hoe_part"),
	})
	
	//dm & rm pickaxes
    removeRecipeByOutput(event, [
		PRE("dm_pick"),
		PRE("rm_pick"),
    ])
	shapedSaveNBT(event, PRE("dm_pick"), [
		'B',
		'A',
	], {
		A: MU("destruction_pickaxe"),
		B: PRE("dm_pickaxe_part"),
	})
	shapedSaveNBT(event, PRE("rm_pick"), [
		'B',
		'A',
	], {
		A: PRE("dm_pick"),
		B: PRE("rm_pickaxe_part"),
	})
	
	//dm & rm shovels
    removeRecipeByOutput(event, [
		PRE("dm_shovel"),
		PRE("rm_shovel"),
    ])
	shapedSaveNBT(event, PRE("dm_shovel"), [
		'B',
		'A',
	], {
		A: MU("erosion_shovel"),
		B: PRE("dm_shovel_part"),
	})
	shapedSaveNBT(event, PRE("rm_shovel"), [
		'B',
		'A',
	], {
		A: PRE("dm_shovel"),
		B: PRE("rm_shovel_part"),
	})
	
	//dm & rm swords
    removeRecipeByOutput(event, [
		PRE("dm_sword"),
		PRE("rm_sword"),
    ])
	shapedSaveNBT(event, PRE("dm_sword"), [
		'B',
		'A',
	], {
		A: MU("kikoku"),
		B: PRE("dm_sword_part"),
	})
	shapedSaveNBT(event, PRE("rm_sword"), [
		'B',
		'A',
	], {
		A: PRE("dm_sword"),
		B: PRE("rm_sword_part"),
	})

    removeRecipeByOutput(event, [
		PREXP("basic_alchemical_book"),
		PREXP("advanced_alchemical_book"),
		PREXP("master_alchemical_book"),
		PREXP("arcane_alchemical_book"),
    ])
	event.shaped(PREXP('basic_alchemical_book'), [
		'ADA',
		'BCB',
		'ADA'
	], {
		A: PRE('klein_star_drei'),
		B: MC("ender_pearl"),
		C: MC("book"),
		D: tieredItems.ch1.circuit,
	})
	event.shaped(PREXP('advanced_alchemical_book'), [
		'ADA',
		'BCB',
		'ADA'
	], {
		A: PRE('klein_star_omega'),
		B: M("teleportation_core"),
		C: PREXP('basic_alchemical_book'),
		D: tieredItems.ch3.circuit,
	})
	event.shaped(PREXP('master_alchemical_book'), [
		'ADA',
		'BCB',
		'ADA'
	], {
		A: PREXP('magnum_star_drei'),
		B: KJ("the_ultimate_pearl"),
		C: PREXP('advanced_alchemical_book'),
		D: tieredItems.ch7.circuit,
	})
	event.shaped(PREXP('arcane_alchemical_book'), [
		'ADA',
		'BCB',
		'ADA'
	], {
		A: PREXP('magnum_star_omega'),
		B: singularityId("the_ultimate_pearl"),
		C: PREXP('master_alchemical_book'),
		D: tieredItems.ch10.circuit,
	})
})
