EntityEvents.spawned("item", event => {
    if (event.entity.item.id == TS("easter_egg")) {
		if (!event.entity.nbt.Thrower) event.cancel()
    }
})