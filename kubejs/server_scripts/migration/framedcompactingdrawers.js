// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		FCD(),
	])
	
	event.shapeless(FS("compacting_framed_drawer"), [FCD("framed_compact_drawer")])
	event.shapeless(FS("framed_storage_controller"), [FCD("framed_drawer_controller")])
	event.shapeless(FS("framed_controller_extension"), [FCD("framed_slave")])
	event.shapeless(FS("framed_1"), [FCD("framed_full_one")])
	event.shapeless(FS("framed_2"), [FCD("framed_full_two")])
	event.shapeless(FS("framed_4"), [FCD("framed_full_four")])
})