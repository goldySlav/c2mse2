// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		
	])
	
	//wrench
	removeRecipeByOutput(event, [
		LIO("laser_wrench"),
	])
	event.smithing(LIO("laser_wrench"), tieredItems.ch5.circuit, FB('framed_wrench'), LB("laser_source_block"))
	
	//charging recipes compat
	event.replaceInput({}, LIO("logic_chip"), tieredItems.ch5.circuit)
})