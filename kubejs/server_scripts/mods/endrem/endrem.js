// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		ER(),
	])
	
	function combEye(eyeName, inputArr, nrg, rate) {
		nrg = nrg ? nrg : 1000000
		rate = rate ? rate : 2000
		event.recipes.extendedcrafting.combination(ER(`${eyeName}_eye`), MC('ender_eye'), shuffleArray(separate(inputArr)), nrg).powerRate(rate);
	}
	combEye("black", [
		`3x ${tieredItems.ch2.circuit}`,
		`2x ${KJ("polished_coke")}`,
		PRE("black_alchemical_bag"),
		`2x ${PRE("dark_matter")}`,
	]) //ch2
	combEye("cold", [
		`3x ${AE2("charged_certus_quartz_crystal")}`,
		`2x ${CR("electron_tube")}`,
		`2x ${tieredItems.ch3.circuit}`,
		`4x ${PRE("red_matter")}`,
		MC("blue_ice"),
	]) //ch3
	combEye("lost", [
		`3x ${AE2("singularity")}`,
		`3x ${KJ("radiant_coil")}`,
		`2x ${tieredItems.ch4.circuit}`,
		`3x ${PREXP("magenta_matter")}`,
		CR("shadow_steel"),
		MC("compass"),
	]) //ch4
	combEye("nether", [
		`2x ${KJ("logic_processor_wafer")}`,
		`3x ${AE2("controller")}`,
		`2x ${EC("ender_star")}`,
		`6x ${PREXP("pink_matter")}`,
		`2x ${tieredItems.ch5.circuit}`,
		KJ("unstable_chromatic_resonator"),
	]) //ch5
	combEye("rogue", [
		`7x ${KJ("computation_matrix")}`,
		`1x ${EC("flux_star")}`,
		`4x ${PREXP("purple_matter")}`,
		`2x ${tieredItems.ch6.circuit}`,
	]) //ch6
	combEye("cursed", [
		`4x ${IF("plastic")}`,
		`2x ${EC("flux_star")}`,
		`1x ${KJ("unstable_charged_calculator")}`,
		`3x ${tieredItems.ch7.circuit}`,
		`4x ${PREXP("violet_matter")}`,
	]) //ch7
	combEye("exotic", [
		`4x ${tieredItems.ch8.circuit}`,
		`4x ${F("#dusts/flux")}`,
		`2x ${PREXP("blue_matter")}`,
		`3x ${IF("pink_slime_ingot")}`,
	]) //ch8
	combEye("evil", [
		`3x ${KJ("ether_gem")}`,
		`4x ${tieredItems.ch9.circuit}`,
		`3x ${KJ("unstable_charged_calculator")}`,
		`3x ${PREXP("cyan_matter")}`,
	]) //ch9
	combEye("corrupted", [
		`3x ${CP("steel_2")}`,
		`1x ${EC("flux_star")}`,
		`5x ${tieredItems.ch10.circuit}`,
		`2x ${PREXP("green_matter")}`,
	]) //ch10
	combEye("magical", [
		`3x ${CM("nether_star_fragment")}`,
		`3x ${CM("milk_drop")}`,
		`6x ${CM("sponge_fragment")}`,
		`4x ${CM("honey_drop")}`,
		`1x ${CM("empty_spawn_egg")}`,
	]) //mob farming
	combEye("cryptic", [
		`4x ${CR("experience_nugget")}`,
		`5x ${CR("experience_block")}`,
		`3x ${CP("experience_1")}`,
		`2x ${CP("experience_2")}`,
		`1x ${CP("experience_3")}`,
		`2x ${CR_EI("hyper_experience_bottle")}`,
		`1x ${EIO("experience_rod")}`,
	]) //exp
	combEye("guardian", [
		`1x ${AE2("singularity")}`,
		`1x ${AE2("controller")}`,
		`1x ${KJ("wafer_component_256k")}`,
		`1x ${KJ("core_256k_wafer")}`,
		`1x ${KJ("printed_silicon_wafer")}`,
		`1x ${KJ("calculation_processor_wafer")}`,
		`1x ${KJ("logic_processor_wafer")}`,
		`1x ${KJ("engineering_processor_wafer")}`,
		`1x ${KJ("energy_processor_wafer")}`,
		`1x ${KJ("accumulation_processor_wafer")}`,
		`1x ${KJ("quantum_processor_wafer")}`,
		`1x ${PREXP("transmutation_interface")}`,
		`1x ${AE2_C("kitchen_station")}`,
		`2x ${AE2("spatial_cell_component_128")}`,
	]) //ae2
	combEye("wither", [
		`2x ${KJ("ultimate_salad")}`,
		`2x ${KJ("cosmic_meatballs")}`,
		`1x ${KJ("ultimate_stew")}`,
	]) //crop farming
	combEye("witch", [
		`1x ${MC("zombie_head")}`,
		`1x ${MC("creeper_head")}`,
		`1x ${MC("skeleton_skull")}`,
		`1x ${MC("wither_skeleton_skull")}`,
		`1x ${MC("piglin_head")}`,
		`1x ${EIO("enderman_head")}`,
		`1x ${TCT("blaze_head")}`,
		`1x ${TCT("enderman_head")}`,
		`1x ${TCT("husk_head")}`,
		`1x ${TCT("drowned_head")}`,
		`1x ${TCT("spider_head")}`,
		`1x ${TCT("cave_spider_head")}`,
		`1x ${TCT("piglin_brute_head")}`,
		`1x ${TCT("zombified_piglin_head")}`,
		`4x ${AP("gem_dust")}`,
	]) //treasure hunter
})