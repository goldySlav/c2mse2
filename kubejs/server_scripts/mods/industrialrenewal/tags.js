//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove(F("ingots/steel"), IR("ingot_steel"));
  event.add(F("ingots"), IR("ingot_steel"));
  event.add(F("ingots/cast_iron"), IR("ingot_steel"));
  
  event.remove(F("rods/steel"), IR("stick_steel"));
  event.add(F("rods"), IR("stick_steel"));
  event.add(F("rods/cast_iron"), IR("stick_steel"));
  
  event.remove(F("storage_blocks/steel"), IR("block_steel"));
  event.add(F("storage_blocks"), IR("block_steel"));
  event.add(F("storage_blocks/cast_iron"), IR("block_steel"));
});

ServerEvents.tags("block", (event) => {
  event.remove(F("storage_blocks/steel"), IR("block_steel"));
  event.add(F("storage_blocks"), IR("block_steel"));
  event.add(F("storage_blocks/cast_iron"), IR("block_steel"));
});

ServerEvents.tags("fluid", (event) => {
  event.remove(F("fluids/steam"), IR("steam_still"));
  event.remove(F("fluids/steam"), IR("steam_flow"));
});
