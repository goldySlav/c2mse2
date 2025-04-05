StartupEvents.registry("fluid", event => {
	event
		.create('sky_solution')
		.displayName('Liquid Sky Solution')
		.stillTexture('kubejs:fluid/sky_solution')
		.flowingTexture('kubejs:fluid/sky_solution')
		.bucketColor(0x787878)
		
	event
		.create('liquid_redstone')
		.displayName('Liquid Redstone Infusion')
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
		
	event
		.create('liquid_carbon')
		.displayName('Liquid Carbon Infusion')
		.thickTexture(0x080808)
		.color(0x080808)
		.bucketColor(0x080808)
		
	event
		.create('liquid_diamond')
		.displayName('Liquid Diamond Infusion')
		.thickTexture(0x82d1c0)
		.color(0x82d1c0)
		.bucketColor(0x82d1c0)
		
	event
		.create('liquid_refined_obsidian')
		.displayName('Liquid Refined Obsidian Infusion')
		.thickTexture(0x6b499e)
		.color(0x6b499e)
		.bucketColor(0x6b499e)
		
	event
		.create('liquid_radiance')
		.displayName('Liquid Radiance Infusion')
		.thickTexture(0xe4e6a1)
		.color(0xe4e6a1)
		.bucketColor(0xe4e6a1)
		
	event
		.create('liquid_thermonuclear')
		.displayName('Liquid Thermonuclear Infusion')
		.thickTexture(0xa34136)
		.color(0xa34136)
		.bucketColor(0xa34136)
		
	event
		.create('liquid_shining')
		.displayName('Liquid Shining Infusion')
		.thickTexture(0xaa82b3)
		.color(0xaa82b3)
		.bucketColor(0xaa82b3)
		
	event
		.create('liquid_spectrum')
		.displayName('Liquid Spectrum Infusion')
		.stillTexture('kubejs:fluid/matrix_still')
		.flowingTexture('kubejs:fluid/matrix_flow')
		.color(0x808080)
		.bucketColor(0x808080)
})