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
		`3x ${KJ("sealed_mechanism")}`,
		`2x ${KJ("polished_coke")}`,
		PRE("black_alchemical_bag"),
		`2x ${PRE("dark_matter")}`,
	]) //ch2
	combEye("cold", [
		`3x ${AE2("charged_certus_quartz_crystal")}`,
		`2x ${CR("electron_tube")}`,
		`2x ${CR("precision_mechanism")}`,
		`4x ${PRE("red_matter")}`,
		MC("blue_ice"),
	]) //ch3
	combEye("lost", [
		`3x ${AE2("singularity")}`,
		`2x ${CR_V("refined_radiance_spring")}`,
		`2x ${KJ("inductive_mechanism")}`,
		`3x ${PREXP("magenta_matter")}`,
		KJ("radiant_coil"),
		MC("compass"),
	]) //ch4
	combEye("nether", [
		`2x ${KJ("logic_processor_wafer")}`,
		`3x ${AE2("controller")}`,
		`2x ${EC("ender_star")}`,
		`6x ${PREXP("pink_matter")}`,
		`2x ${KJ("calculation_mechanism")}`,
		KJ("unstable_chromatic_resonator"),
	]) //ch5
	combEye("rogue", [
		`7x ${KJ("computation_matrix")}`,
		`1x ${EC("flux_star")}`,
		`4x ${PREXP("purple_matter")}`,
		`2x ${KJ("abstruse_mechanism")}`,
	]) //ch6
	combEye("cursed", [
		`4x ${IF("plastic")}`,
		`2x ${EC("flux_star")}`,
		`1x ${KJ("unstable_charged_calculator")}`,
		`3x ${KJ("integrated_mechanism")}`,
		`4x ${PREXP("violet_matter")}`,
	]) //ch7
	combEye("exotic", [
		`4x ${KJ("embedded_mechanism")}`,
		`4x ${F("#dusts/flux")}`,
		`2x ${PREXP("blue_matter")}`,
		`3x ${IF("pink_slime_ingot")}`,
	]) //ch8
	combEye("evil", [
		`3x ${KJ("ether_gem")}`,
		`4x ${KJ("portable_mechanism")}`,
		`3x ${KJ("unstable_charged_calculator")}`,
		`3x ${PREXP("cyan_matter")}`,
	]) //ch9
	combEye("corrupted", [
		`3x ${CP("steel_2")}`,
		`1x ${EC("flux_star")}`,
		`5x ${KJ("electric_mechanism")}`,
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
		`2x ${MU("experience_opinium_core")}`,
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
		`1x ${AE2_E("ex_emc_interface")}`,
		`1x ${AE2_C("kitchen_station")}`,
		`2x ${AE2("spatial_cell_component_128")}`,
	]) //ae2
	combEye("wither", [
		`2x ${KJ("ultimate_salad")}`,
		`2x ${AV("cosmic_meatballs")}`,
		`1x ${AV("ultimate_stew")}`,
	]) //crop farming
	combEye("witch", [
		`1x ${MC("zombie_head")}`,
		`1x ${MC("creeper_head")}`,
		`1x ${MC("skeleton_skull")}`,
		`1x ${MC("wither_skeleton_skull")}`,
		`1x ${MC("piglin_head")}`,
		`1x ${EIO("enderman_head")}`,
		`1x ${ART("plastic_drinking_hat")}`,
		`1x ${ART("novelty_drinking_hat")}`,
		`1x ${ART("snorkel")}`,
		`1x ${ART("night_vision_goggles")}`,
		`1x ${ART("villager_hat")}`,
		`1x ${ART("superstitious_hat")}`,
		`1x ${ART("cowboy_hat")}`,
		`1x ${ART("anglers_hat")}`,
		`4x ${AP("gem_dust")}`,
	]) //treasure hunter
})