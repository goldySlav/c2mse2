// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		LIO("logic_chip_raw"),
		LIO("logic_chip"),
	])
	
	//wrench
	removeRecipeByOutput(event, [
		LIO("laser_wrench"),
	])
	event.smithing(LIO("laser_wrench"), tieredItems.ch5.circuit, FB('framed_wrench'), LB("laser_source_block"))
	
	//charging recipes compat
	event.replaceInput({}, LIO("logic_chip"), tieredItems.ch5.circuit)
	
	//charging recipes compat
	event.replaceInput({ id: LIO("laser_connector_advanced") }, MC("diamond"), tieredItems.ch7.circuit)
})