// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByOutput(event, [
		DD("resonarium_plate"),
		DD("resonarium_shovel"),
		DD("resonarium_pickaxe"),
		DD("resonarium_axe"),
		DD("resonarium_hoe"),
		DD("resonarium_sword"),
		DD("resonarium_helmet"),
		DD("resonarium_chestplate"),
		DD("resonarium_leggings"),
		DD("resonarium_boots"),
	])
	
	//smithing template
    event.shaped(DD("warden_upgrade_smithing_template"), [
        'ABA',
        'ACA',
		'AAA',
    ], {
        A: MC('diamond'),
        B: MC('echo_shard'),
        C: MC('sculk'),
    })
	
	//reinforced echo shard
	removeRecipeByOutput(event, [
		DD("reinforced_echo_shard"),
	])
    event.shaped(DD("reinforced_echo_shard"), [
        'CBC',
        'BAB',
		'CBC',
    ], {
        A: MC('echo_shard'),
        B: DD('warden_carapace'),
        C: DD('resonarium'),
    })
})