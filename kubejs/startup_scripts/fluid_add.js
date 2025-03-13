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
		.create('abstruse_waste')
		.displayName(`Abstruse Waste`)
		.stillTexture('kubejs:fluid/waste_still')
		.flowingTexture('kubejs:fluid/waste_flow')
		.bucketColor(0x2a4524)
	
	event
		.create('molten_certus')
		.displayName(`Molten Certus`)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x03cffc)
		.bucketColor(0x03cffc)
	
	event
		.create('raw_logic')
		.displayName(`Liquified Logic (Unprocessed)`)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0xE7FFCB)
		
	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	for (let i = 0; i < colors.length; i++) {
		event
			.create(`number_${i}`)
			.displayName(`Liquified Logic (${i})`)
			.stillTexture('kubejs:fluid/number_still')
			.flowingTexture('kubejs:fluid/number_flow')
			.color(colors[i])
	}
	
	event
		.create('truthy')
		.displayName(`Liquified Logic (Truthy)`)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x8df542)
		.bucketColor(0x8df542)
	
	event
		.create('falsy')
		.displayName(`Liquified Logic (Falsy)`)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0xe03326)
		.bucketColor(0xe03326)
	
	event
		.create('matrix')
		.displayName(`Liquified Computation Matrix`)
		.stillTexture('kubejs:fluid/matrix_still')
		.flowingTexture('kubejs:fluid/matrix_flow')
		.bucketColor(0xCBE827)
	
	event
		.create('molten_ender_alloy')
		.displayName(`Molten Ender Alloy`)
		.stillTexture('kubejs:fluid/ender_alloy_still')
		.flowingTexture('kubejs:fluid/ender_alloy_flow')
		.bucketColor(0x286951)
})