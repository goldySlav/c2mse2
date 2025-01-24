// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		PAU("package_component"),
		PAU('distributor'),
	])
	
	event.shaped(PAU('package_component'), [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: F('#plates/gold'),
		B: MC('shulker_shell'),
		C: AE2('calculation_processor')
	})
	
	event.replaceInput({ output: PAU('encoder') }, MC("glowstone"), AE2("controller"))
	event.replaceInput({ output: PAU('packager') }, MC("crafting_table"), AE2("controller"))
	event.replaceInput({ output: PAU('packager_extension') }, MC("crafting_table"), AE2("controller"))
	event.replaceInput({ output: PAU('unpackager') }, F("#chests/wooden"), AE2("controller"))
	
	event.shaped(PAU('distributor'), [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: MC('ender_pearl'),
		B: PAU('package_component'),
		C: MC('shulker_shell'),
		D: AE2("controller"),
		E: PAU('distributor_marker'),
	})
})