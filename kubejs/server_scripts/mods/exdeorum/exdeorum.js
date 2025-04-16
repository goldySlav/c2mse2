//priority: 0

ServerEvents.recipes(event => {
  removeRecipeByID(event, [
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/sky_dust/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/iron_nugget/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/gold_nugget/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/certus_quartz_dust/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/certus_quartz_crystal/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/charged_certus_quartz_crystal/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/random_pottery_sherd/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/random_armor_trim/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/raw_gold/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/chorus_flower/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/\b.*_ore_chunk/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/diamond/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/emerald/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/amethyst/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/lapis_lazuli/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/ancient_debris/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/ghast_tear/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/ender_eye/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/blaze_powder/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/glowstone_dust/,
	/exdeorum:(sieve|compressed_sieve)\/\b.*\/\b.*\/magma_cream/,
	/exdeorum:sieve\/(soul_sand|crushed_netherrack)\/(string|flint)\/quartz/,
	EXD("sponge"),
  ])
  
  removeRecipeByInputOutput(event, [
	/exdeorum:\b.*_compressed_sieve/,
	/exdeorum:compressed_*/,
	/exdeorum:\b.*_watering_can/,
	/exdeorum:\b.*_hammer/,
	/exdeorum:compressed_*_hammer/,
	/exdeorum:\b.*_ore_chunk/,
	EXD("silk_worm"),
	EXD("cooked_silk_worm"),
	EXD("crook"),
	EXD("bone_crook"),
	EXD("sculk_core"),
	EXD("random_armor_trim"),
	EXD("random_pottery_sherd"),
	EXD("end_cake"),
	EXD("mechanical_sieve"),
  ])
  
  removeRecipeByType(event, [
	EXD("hammer"),
	EXD("compressed_hammer"),
	EXD("crook"),
	EXD("compressed_sieve"),
  ])
  
	event.remove({ input: EXD("stone_pebble") })
    event.shapeless(Item.of(MC("stone"), 1), [Item.of(EXD("stone_pebble"), 4)])
	
    event.shapeless(EXD("string_mesh"), [CR_S("string_mesh")])
	
	event.remove({ output: EXD("flint_mesh") })
	event.shaped(EXD("flint_mesh"), [
		'A A',
		'ABA',
		'A A'
	], {
		A: MC("flint"),
		B: EXD("string_mesh"),
	})
	
	event.remove({ output: EXD("iron_mesh") })
	event.shaped(EXD("iron_mesh"), [
		'A A',
		'ABA',
		'A A'
	], {
		A: MC("iron_ingot"),
		B: EXD("flint_mesh"),
	})
    event.shapeless(EXD("iron_mesh"), [CR_S("zinc_mesh")])
	
	event.remove({ output: EXD("golden_mesh") })
	event.shaped(EXD("golden_mesh"), [
		'A A',
		'ABA',
		'A A'
	], {
		A: MC("gold_ingot"),
		B: EXD("iron_mesh"),
	})
    event.shapeless(EXD("golden_mesh"), [CR_S("brass_mesh")])
	
	event.remove({ output: EXD("diamond_mesh") })
	event.shaped(EXD("diamond_mesh"), [
		'A A',
		'ABA',
		'A A'
	], {
		A: MC("diamond"),
		B: EXD("golden_mesh"),
	})
    event.shapeless(EXD("diamond_mesh"), [CR_S("custom_mesh")])
	
    event.shapeless(EXD("netherite_mesh"), [CR_S("andesite_mesh")])
	
	//dust
    event.shapeless(Item.of(EXD("dust"), 1), [PHC_FC("grinderitem"), MC("sand")]).id(KJ("dust_manual_only"))
	event.recipes.create.milling(EXD("dust"), MC("sand")).processingTime(processingTimesDefault.milling)
	
	//zinc chunk
    event.shapeless(Item.of(CR("raw_zinc"), 1), [Item.of(EXD("zinc_ore_chunk"), 9)])
})