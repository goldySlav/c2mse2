//priority: 1001
// Registry of soils for use in botany pots
const soilRegistry = [
   {
      block: 'minecraft:coarse_dirt',
      categories: [ 'dirt', 'coarse_dirt' ],
      growthModifier: 1.1
   },
   {
      block: 'minecraft:crimson_nylium',
      categories: [ 'dirt', 'crimson_nylium', 'nylium', 'mushroom' ],
      growthModifier: 1.1
   },
   {
      block: 'minecraft:farmland',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 1.3
   },
   {
      block: 'farmingforblockheads:fertilized_farmland_rich',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 2
   },
   {
      block: 'farmingforblockheads:fertilized_farmland_healthy',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 1.8
   },
   {
      block: 'farmingforblockheads:fertilized_farmland_stable',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 1.8
   },
   {
      block: 'farmingforblockheads:fertilized_farmland_rich_stable',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 3
   },
   {
      block: 'farmingforblockheads:fertilized_farmland_healthy_stable',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 2.5
   },
   {
      block: 'minecraft:podzol',
      categories: [ 'dirt', 'grass', 'podzol', 'mushroom' ],
      growthModifier: 1.1
   },
   {
      block: 'minecraft:grass_block',
      categories: [ 'dirt', 'grass' ],
      growthModifier: 1.3
   },
   {
      block: 'minecraft:mycelium',
      categories: [ 'dirt', 'mushroom' ],
      growthModifier: 1.1
   },
   {
      block: 'minecraft:warped_nylium',
      categories: [ 'dirt', 'warped_nylium', 'nylium', 'mushroom' ],
      growthModifier: 1.1
   },
   {
      block: 'minecraft:dirt',
      categories: [ 'dirt' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:end_stone',
      categories: [ 'end_stone' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:lava_bucket',
      categories: [ 'fluid', 'liquid', 'lava' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:water_bucket',
      categories: [ 'fluid', 'liquid', 'water' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:netherrack',
      categories: [ 'nether', 'netherrack' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:red_sand',
      categories: [ 'sand', 'red_sand' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:sand',
      categories: [ 'sand', 'red_sand' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:soul_sand',
      categories: [ 'soul_sand', 'nether' ],
      growthModifier: 0.7
   },
   {
      block: 'minecraft:soul_soil',
      categories: [ 'soul_sand', 'nether', 'soul_soil' ],
      growthModifier: 1
   },
   {
      block: 'minecraft:basalt',
      categories: [ 'basalt', 'nether' ],
      growthModifier: 1
   },
   {
      block: 'tconstruct:earth_slime_dirt',
      categories: [ 'slime' ],
      growthModifier: 1
   },
   {
      block: 'tconstruct:sky_slime_dirt',
      categories: [ 'slime' ],
      growthModifier: 1
   },
   {
      block: 'tconstruct:ichor_slime_dirt',
      categories: [ 'slime' ],
      growthModifier: 1
   },
   {
      block: 'tconstruct:ender_slime_dirt',
      categories: [ 'slime' ],
      growthModifier: 1
   },
   {
      block: 'tconstruct:earth_vanilla_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:earth_earth_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:earth_sky_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:earth_ichor_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:earth_ender_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:sky_vanilla_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:sky_earth_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:sky_sky_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:sky_ichor_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:sky_ender_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:ender_vanilla_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:ender_earth_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:ender_sky_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:ender_ichor_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:ender_ender_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:blood_vanilla_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:blood_earth_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:blood_sky_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:blood_ichor_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
   {
      block: 'tconstruct:blood_ender_slime_grass',
      categories: [ 'slime' ],
      growthModifier: 1.5
   },
];
