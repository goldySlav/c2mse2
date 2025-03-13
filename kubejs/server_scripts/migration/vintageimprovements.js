// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		CR_V(),
	])
	
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('belt_grinder')])
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('spring_coiling_machine')])
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('vibrating_table')])
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('centrifuge')])
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('curving_press')])
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('helve_hammer')])
	event.shapeless(Item.of(KJ('andesite_machine'), 2), [CR_V('lathe')])
	event.shapeless(Item.of(KJ('copper_machine'), 2), [CR_V('vacuum_chamber')])
	event.shapeless(Item.of(KJ('brass_machine'), 2), [CR_V('laser')])
	
	
	
	event.shapeless(Item.of(CR('andesite_alloy'), 2), [CR_V('andesite_sheet')])
	
	
	event.shapeless(Item.of(MC('copper_ingot'), 2), [CR_V('copper_spring')])
	event.shapeless(Item.of(MC('iron_ingot'), 2), [CR_V('iron_spring')])
	
	
	
	event.shapeless(Item.of(LB('laser_source_block'), 2), [CR_V('laser_item')])
	
	
	
	event.shapeless(Item.of(KJ('radiant_sheet'), 2), [CR_V('refined_radiance_sheet')])
})