// priority: 0
const $CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $Items = Java.loadClass('net.minecraft.world.item.Items')
const $Item = Java.loadClass('net.minecraft.world.item.Item')
const $Block = Java.loadClass('net.minecraft.world.level.block.Block')

StartupEvents.postInit(event => {
	function customPortal(frameBlockId, lightItemId, dimDestination, dimReturn, tintColorObj) {
		
		const frameBlock = $ForgeRegistries.BLOCKS.getValue(new $ResourceLocation(frameBlockId))
		const lightItem = $ForgeRegistries.ITEMS.getValue(new $ResourceLocation(lightItemId))

		if (!frameBlock || !lightItem) {
			console.error("Frame block or light item not found!")
			return
		}

		const builder = $CustomPortalBuilder.beginPortal()

		// Force correct overloads
		builder.getClass().getMethod("frameBlock", $Block).invoke(builder, frameBlock)
		builder.getClass().getMethod("lightWithItem", $Item).invoke(builder, lightItem)
		
		const { R, G, B } = tintColorObj

		builder
			.destDimID(new $ResourceLocation(dimDestination))
			.returnDim(new $ResourceLocation(dimReturn), false)
			.tintColor(R, G, B)
			.registerPortal()

		console.log("Custom portal registered using custom item to light it.")
	}
	
	customPortal(
		"minecraft:netherrack",
		"minecraft:blaze_powder",
		"minecraft:the_nether",
		"kubejs:crash_site", 
		{ R: 255, G: 0, B: 0 }
	)
})