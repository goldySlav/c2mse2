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
	
	event.shapeless(FS("simple_compacting_drawer"), [SD("compacting_drawers_2")])
	event.shapeless(FS("compacting_drawer"), [SD("compacting_drawers_3")])
	event.shapeless(FS("storage_controller"), [SD("controller")])
	event.shapeless(FS("controller_extension"), [SD("controller_slave")])
})