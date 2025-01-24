StartupEvents.registry("fluid", event => {
	event
		.create('sky_solution')
		.displayName('Liquid Sky Solution')
		.stillTexture('kubejs:fluid/sky_solution')
		.flowingTexture('kubejs:fluid/sky_solution')
		.bucketColor(0x787878)
		
	event
		.create('liquid_redstone')
		.displayName('Liquid Redstone')
		.stillTexture('kubejs:fluid/redstone_still')
		.flowingTexture('kubejs:fluid/redstone_flow')
		.bucketColor(0xB22222)
	
	event
		.create('fine_sand')
		.displayName(`Fine Sand`)
		.stillTexture('kubejs:fluid/fine_sand_still')
		.flowingTexture('kubejs:fluid/fine_sand_flow')
		.bucketColor(0xE3DBB0)
	
	event
		.create('ender')
		.displayName(`Resonant Ender`)
		.stillTexture('kubejs:fluid/ender_still')
		.flowingTexture('kubejs:fluid/ender_flow')
		.bucketColor(0x182F38)
	
	event
		.create('abstruse_waste')
		.displayName(`Abstruse Waste`)
		.stillTexture('kubejs:fluid/waste_still')
		.flowingTexture('kubejs:fluid/waste_flow')
		.bucketColor(0x2a4524)
	
	event
		.create('molten_diamond')
		.displayName(`Molten Diamond`)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x009dbf)
		.bucketColor(0x009dbf)
	
	event
		.create('molten_certus')
		.displayName(`Molten Certus`)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x03cffc)
		.bucketColor(0x03cffc)
	
	event
		.create('matrix')
		.displayName(`Liquified Logic`)
		.stillTexture('kubejs:fluid/matrix_still')
		.flowingTexture('kubejs:fluid/matrix_flow')
		.bucketColor(0xCBE827)
})