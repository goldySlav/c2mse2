// priority: 0
const $CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $Items = Java.loadClass('net.minecraft.world.item.Items')
const $Item = Java.loadClass('net.minecraft.world.item.Item')
const $Block = Java.loadClass('net.minecraft.world.level.block.Block')

StartupEvents.postInit(event => {
  let frameBlock = $ForgeRegistries.BLOCKS.getValue(new $ResourceLocation("create:andesite_casing"))
  let lightItem = $ForgeRegistries.ITEMS.getValue(new $ResourceLocation("kubejs:kinetic_mechanism"))

  if (!frameBlock || !lightItem) {
    console.error("Frame block or light item not found!")
    return
  }

  let builder = $CustomPortalBuilder.beginPortal()

  // Force correct overloads
  builder.getClass().getMethod("frameBlock", $Block).invoke(builder, frameBlock)
  builder.getClass().getMethod("lightWithItem", $Item).invoke(builder, lightItem)

  builder
    .destDimID(new $ResourceLocation("minecraft:the_nether"))
    .returnDim(new $ResourceLocation("kubejs:crash_site"), false)
    .tintColor(45,65,101)
    .registerPortal()

  console.log("Custom portal registered using custom item to light it.")
})