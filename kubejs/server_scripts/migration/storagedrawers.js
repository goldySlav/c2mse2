// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		SD(),
	])
	
	drawerSizes.forEach(size => {
		drawerWoodTypes.forEach(wood => {
			const woodenDrawerFS = FS(`${wood}_${size}`)
			const woodenDrawerSD = SD(`${wood}_full_drawers_${size}`)
			
			event.shapeless(woodenDrawerFS, [woodenDrawerSD])
		})
	})
	
	event.shapeless(Item.of(FS("simple_compacting_drawer"), 2), [SD("compacting_drawers_2")])
	event.shapeless(Item.of(FS("compacting_drawer"), 2), [SD("compacting_drawers_3")])
	event.shapeless(Item.of(FS("storage_controller"), 2), [SD("controller")])
	event.shapeless(Item.of(FS("controller_extension"), 2), [SD("controller_slave")])
})