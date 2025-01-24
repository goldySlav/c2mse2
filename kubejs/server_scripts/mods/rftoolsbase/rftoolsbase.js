// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByOutput(event, [
		RTB("machine_frame"),
		RTB("machine_infuser"),
		RTB("infused_diamond"),
		RTB("infused_enderpearl"),
	])
	
	//wrench
	removeRecipeByOutput(event, [
		RTB("smartwrench"),
	])
	event.smithing(RTB("smartwrench"), tieredItems.ch10.circuit, FB('framed_wrench'), RTB('dimensionalshard'))
})
