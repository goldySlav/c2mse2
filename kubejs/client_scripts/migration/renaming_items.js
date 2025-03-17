ClientEvents.lang('en_us', event => {
	//create DD
	event.renameBlock('create_dd:inverse_box', "Inverse Box §4(DEPRECATED)")
	event.renameBlock('create_dd:hydraulic_press', "Hydraulic Press §4(DEPRECATED)")
	event.renameBlock('create_dd:cog_crank', "Cog Crank §4(DEPRECATED)")
	event.renameBlock('create_dd:multimeter', "Multimeter §4(DEPRECATED)")
	event.renameBlock('create_dd:fluid_reservoir', "Fluid Reservoir §4(DEPRECATED)")
	event.renameBlock('create_dd:item_stockpile', "Item Stockpile §4(DEPRECATED)")
	event.renameBlock('create_dd:kinetic_motor', "Kinetic Motor §4(DEPRECATED)")
	event.renameBlock('create_dd:industrial_fan', "Industrial Fan §4(DEPRECATED)")
	event.renameBlock('create_dd:splashing_sail', "Splashing Catalyst Sail §4(DEPRECATED)")
	event.renameBlock('create_dd:haunting_sail', "Haunting Catalyst Sail §4(DEPRECATED)")
	event.renameBlock('create_dd:smoking_sail', "Smoking Catalyst Sail §4(DEPRECATED)")
	event.renameBlock('create_dd:blasting_sail', "Blasting Catalyst Sail §4(DEPRECATED)")
	
	//createmetallurgy
	event.renameItem('createmetallurgy:coke', "Coke §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:coke_block', "Coke Block §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:casting_table', "Casting Table §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:casting_basin', "Casting Basin §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:foundry_basin', "Foundry Basin §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:foundry_lid', "Foundry Lid §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:glassed_foundry_lid', "Glassed Foundry Lid §4(DEPRECATED)")
	event.renameBlock('createmetallurgy:foundry_mixer', "Foundry Mixer §4(DEPRECATED)")
	
	//framedcompactdrawers
	event.renameBlock('framedcompactdrawers:framed_compact_drawer', "Framed Compacting Drawer §4(DEPRECATED)")
	event.renameBlock('framedcompactdrawers:framed_drawer_controller', "Framed Drawer Controller §4(DEPRECATED)")
	event.renameBlock('framedcompactdrawers:framed_slave', "Framed Controller Slave §4(DEPRECATED)")
	event.renameBlock('framedcompactdrawers:framed_full_one', "Framed Drawer §4(DEPRECATED)")
	event.renameBlock('framedcompactdrawers:framed_full_two', "Framed Drawer 1x2 §4(DEPRECATED)")
	event.renameBlock('framedcompactdrawers:framed_full_four', "Framed Drawer 2x2 §4(DEPRECATED)")
	
	//storagedrawers
	const drawerSizes = [1, 2, 4]
	const woodTypes = {
		minecraft: {
			log: [
				"Oak",
				"Spruce",
				"Birch",
				"Jungle",
				"Acacia",
				"Dark_oak",
				"Mangrove",
				"Cherry",
				"Bamboo",
			],
			stem: [
				"Warped",
				"Crimson",
			],
		},
	}
	const drawerWoodTypes = woodTypes.minecraft.log.concat(woodTypes.minecraft.stem)
	
	drawerSizes.forEach(size => {
		drawerWoodTypes.forEach(wood => {
			const woodenDrawerSD = `storagedrawers:${wood.toLowerCase()}_full_drawers_${size}`
			
			event.renameBlock(woodenDrawerSD, `${wood} Drawers ${size == 4 ? "2" : "1"}x${size == 4 ? "2" : size} §4(DEPRECATED)`)
		})
	})
	event.renameBlock('storagedrawers:compacting_drawers_2', "Compacting Drawers (2-Tier) §4(DEPRECATED)")
	event.renameBlock('storagedrawers:compacting_drawers_3', "Compacting Drawers (3-Tier) §4(DEPRECATED)")
	event.renameBlock('storagedrawers:controller', "Drawer Controller §4(DEPRECATED)")
	event.renameBlock('storagedrawers:controller_slave', "Drawer Controller Slave §4(DEPRECATED)")
	
	//vintage improvements
	event.renameBlock('vintageimprovements:belt_grinder', "Belt Grinder §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:spring_coiling_machine', "Spring Coiling Machine §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:vibrating_table', "Vibrating Table §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:centrifuge', "Centrifuge §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:curving_press', "Curving Press §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:helve_hammer', "Helve Hammer §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:lathe', "Lathe §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:vacuum_chamber', "Compressor §4(DEPRECATED)")
	event.renameBlock('vintageimprovements:laser', "Laser §4(DEPRECATED)")
	event.renameItem('vintageimprovements:laser_item', "Laser §4(DEPRECATED)")
	event.renameItem('vintageimprovements:andesite_sheet', "Andesite Sheet §4(DEPRECATED)")
	event.renameItem('vintageimprovements:refined_radiance_sheet', "Refined Radiance Sheet §4(DEPRECATED)")
	event.renameItem('vintageimprovements:copper_spring', "Copper Spring §4(DEPRECATED)")
	event.renameItem('vintageimprovements:iron_spring', "Iron Spring §4(DEPRECATED)")
	event.renameItem('vintageimprovements:redstone_module', "Redstone Module §4(DEPRECATED)")
	
	//avaritia
	event.renameItem('avaritia:diamond_lattice', "Diamond Lattice §4(DEPRECATED)")
	event.renameItem('avaritia:crystal_matrix_ingot', "Crystal Matrix Ingot §4(DEPRECATED)")
	event.renameItem('avaritia:pileof_neutrons', "Pile of Neutrons §4(DEPRECATED)")
	event.renameItem('avaritia:neutronium_nugget', "Neutronium Nugget §4(DEPRECATED)")
	event.renameItem('avaritia:neutronium_ingot', "Neutronium Ingot §4(DEPRECATED)")
	event.renameItem('avaritia:infinity_catalyst', "The Ultimate Star §4(DEPRECATED)")
	event.renameBlock('avaritia:compressed_crafting_table', "Compressed Crafting Table §4(DEPRECATED)")
	event.renameBlock('avaritia:double_compressed_crafting_table', "Double Compressed Crafting Table §4(DEPRECATED)")
	event.renameBlock('avaritia:neutronium_block', "Neutronium Block §4(DEPRECATED)")
	event.renameBlock('avaritia:crystal_matrix', "Crystal Matrix §4(DEPRECATED)")
	event.renameItem('avaritia:ultimate_stew', "Ultimate Stew §4(DEPRECATED)")
	event.renameItem('avaritia:cosmic_meatballs', "Cosmic Meatballs §4(DEPRECATED)")
	event.renameItem('avaritia:endest_pearl', "The Ultimate Pearl §4(DEPRECATED)")
});

