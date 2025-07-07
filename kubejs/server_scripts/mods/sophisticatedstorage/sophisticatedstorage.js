// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByID(event, [
		/sophisticatedstorage:double_*/,
	])
	
	
	
	//magnet upgrade
	removeRecipeByID(event, [
		SS("magnet_upgrade"),
		SS("advanced_magnet_upgrade")
	])
	event.shaped(SS("magnet_upgrade"), [
		'EBE',
		'ACA',
		'ADA'
	], {
		A: F(`#ingots/iron`),
		B: M("teleportation_core"),
		C: SS("pickup_upgrade"),
		D: KJ("chromatic_resonator"),
		E: MC("ender_pearl"),
	})
	event.shaped(SS("advanced_magnet_upgrade"), [
		'EBE',
		'ACA',
		'ADA'
	], {
		A: F(`#ingots/iron`),
		B: M("teleportation_core"),
		C: SS("advanced_pickup_upgrade"),
		D: KJ("chromatic_resonator"),
		E: MC("ender_pearl"),
	})
})