// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		FCD(),
	])
	
	event.shapeless(Item.of(FS("compacting_framed_drawer"), 2), [FCD("framed_compact_drawer")])
	event.shapeless(Item.of(FS("framed_storage_controller"), 2), [FCD("framed_drawer_controller")])
	event.shapeless(Item.of(FS("framed_controller_extension"), 2), [FCD("framed_slave")])
	event.shapeless(Item.of(FS("framed_1"), 2), [FCD("framed_full_one")])
	event.shapeless(Item.of(FS("framed_2"), 2), [FCD("framed_full_two")])
	event.shapeless(Item.of(FS("framed_4"), 2), [FCD("framed_full_four")])
})