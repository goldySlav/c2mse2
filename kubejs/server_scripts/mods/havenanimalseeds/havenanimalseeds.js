//priority: 0

ServerEvents.recipes(event => {
	removeRecipeByOutput(event, [
		HV_AS("glow_squid_seed"),
	])
	event.shaped(HV_AS("glow_squid_seed"), [
		'AAA',
		'BCB',
		'AAA',
	], {
		A: MC("ink_sac"),
		B: F("#dusts/glowstone"),
		C: MC("wheat_seeds"),
	})
})