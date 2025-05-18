// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByMod(event, [
		CH(),
	])
	
	//nodules
	customRecipes.draconicevolution.fusion_craft(
		event,
		CH("steel_space_nodule"),
		X("controller"),
		[
			`1x ${KJ("nodule_nose_cone")}`, `1x ${KJ("steel_engine")}`, `2x ${DE("draconium_core")}`, `2x ${DE("small_chaos_frag")}`, 
			`2x ${CP("steel_4")}`, `4x ${KJ("nodule_fin")}`, `2x ${KJ("steel_tank")}`, `2x ${M("pellet_antimatter")}`,
		]
	)
	customRecipes.draconicevolution.fusion_craft(
		event,
		CH("titanium_space_nodule"),
		CH("steel_space_nodule"),
		[
			`1x ${KJ("nodule_nose_cone")}`, `1x ${KJ("osmium_engine")}`, `2x ${DE("wyvern_core")}`, `2x ${DE("medium_chaos_frag")}`, 
			`2x ${CP("osmium_4")}`, `4x ${KJ("nodule_fin")}`, `2x ${KJ("osmium_tank")}`, `2x ${M("pellet_antimatter")}`,
		],
		2
	)
	customRecipes.draconicevolution.fusion_craft(
		event,
		CH("nickel_space_nodule"),
		CH("titanium_space_nodule"),
		[
			`1x ${KJ("nodule_nose_cone")}`, `1x ${KJ("naquadah_engine")}`, `2x ${DE("awakened_core")}`, `2x ${DE("large_chaos_frag")}`, 
			`2x ${CP("naquadah_4")}`, `4x ${KJ("nodule_fin")}`, `2x ${KJ("naquadah_tank")}`, `2x ${M("pellet_antimatter")}`,
		],
		3
	)
	
	//launchpad
	event.recipes.extendedcrafting.shapeless_table(CH("steel_landing_pad_off"), [Item.of(F("#ingots/steel"), 121)])
})