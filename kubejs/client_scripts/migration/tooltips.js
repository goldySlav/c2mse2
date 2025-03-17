// priority: 0
ItemEvents.tooltip(event => {
	/*colors
    §1 - dark blue
    §2 - dark green
    §3 - dark aqua
    §4 - dark red
    §5 - purple
    §6 - orange
    §8 - dark gray
    §9 - blue
    §0 - black
    §a - light green
    §b - light aqua
    §c - light red
    §d - pink
    §e - light yellow
    §f - white*/

	function addDeprecated(itemId) {
		event.add(itemId, '§4WILL BE DELETED FROM THE GAME IN THE NEXT UPDATES, PLEASE GET RID OF THIS ITEM')
	}

	//create_dd
    addDeprecated('create_dd:inverse_box')
    addDeprecated('create_dd:hydraulic_press')
    addDeprecated('create_dd:cog_crank')
    addDeprecated('create_dd:multimeter')
    addDeprecated('create_dd:fluid_reservoir')
    addDeprecated('create_dd:item_stockpile')
    addDeprecated('create_dd:kinetic_motor')
    addDeprecated('create_dd:industrial_fan')
    addDeprecated('create_dd:splashing_sail')
    addDeprecated('create_dd:haunting_sail')
    addDeprecated('create_dd:smoking_sail')
    addDeprecated('create_dd:blasting_sail')
	
	//createmetallurgy
    addDeprecated('createmetallurgy:coke')
    addDeprecated('createmetallurgy:coke_block')
    addDeprecated('createmetallurgy:casting_table')
    addDeprecated('createmetallurgy:casting_basin')
    addDeprecated('createmetallurgy:foundry_basin')
    addDeprecated('createmetallurgy:foundry_lid')
    addDeprecated('createmetallurgy:glassed_foundry_lid')
    addDeprecated('createmetallurgy:foundry_mixer')
	
	//framedcompactdrawers
    addDeprecated('framedcompactdrawers:framed_compact_drawer')
    addDeprecated('framedcompactdrawers:framed_drawer_controller')
    addDeprecated('framedcompactdrawers:framed_slave')
    addDeprecated('framedcompactdrawers:framed_full_one')
    addDeprecated('framedcompactdrawers:framed_full_two')
    addDeprecated('framedcompactdrawers:framed_full_four')
	
	//storagedrawers
	const drawerSizes = [1, 2, 4]
	const woodTypes = {
		minecraft: {
			log: [
				"oak",
				"spruce",
				"birch",
				"jungle",
				"acacia",
				"dark_oak",
				"mangrove",
				"cherry",
				"bamboo",
			],
			stem: [
				"warped",
				"crimson",
			],
		},
	}
	const drawerWoodTypes = woodTypes.minecraft.log.concat(woodTypes.minecraft.stem)
	
	drawerSizes.forEach(size => {
		drawerWoodTypes.forEach(wood => {
			const woodenDrawerSD = `storagedrawers:${wood}_full_drawers_${size}`
			
			addDeprecated(woodenDrawerSD)
		})
	})
    addDeprecated('storagedrawers:compacting_drawers_2')
    addDeprecated('storagedrawers:compacting_drawers_3')
    addDeprecated('storagedrawers:controller')
    addDeprecated('storagedrawers:controller_slave')
	
	//vintageimprovements
    addDeprecated('vintageimprovements:belt_grinder')
    addDeprecated('vintageimprovements:spring_coiling_machine')
    addDeprecated('vintageimprovements:vibrating_table')
    addDeprecated('vintageimprovements:centrifuge')
    addDeprecated('vintageimprovements:curving_press')
    addDeprecated('vintageimprovements:helve_hammer')
    addDeprecated('vintageimprovements:lathe')
    addDeprecated('vintageimprovements:vacuum_chamber')
    addDeprecated('vintageimprovements:laser')
    addDeprecated('vintageimprovements:laser_item')
	
    addDeprecated('vintageimprovements:andesite_sheet')
    addDeprecated('vintageimprovements:refined_radiance_sheet')
	
    addDeprecated('vintageimprovements:copper_spring')
    addDeprecated('vintageimprovements:iron_spring')

    addDeprecated('vintageimprovements:redstone_module')
	
	//avaritia
	addDeprecated('avaritia:diamond_lattice')
	addDeprecated('avaritia:crystal_matrix_ingot')
	addDeprecated('avaritia:pileof_neutrons')
	addDeprecated('avaritia:neutronium_nugget')
	addDeprecated('avaritia:neutronium_ingot')
	addDeprecated('avaritia:infinity_catalyst')
	addDeprecated('avaritia:compressed_crafting_table')
	addDeprecated('avaritia:double_compressed_crafting_table')
	addDeprecated('avaritia:neutronium_block')
	addDeprecated('avaritia:crystal_matrix')
	addDeprecated('avaritia:ultimate_stew')
	addDeprecated('avaritia:cosmic_meatballs')
	addDeprecated('avaritia:endest_pearl')
})
