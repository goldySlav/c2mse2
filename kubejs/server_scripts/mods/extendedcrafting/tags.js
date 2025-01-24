//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("gems"), EC("flux_star"));
  event.add(F("gems/flux_star"), EC("flux_star"));
  event.add(F("gems"), EC("ender_star"));
  event.add(F("gems/ender_star"), EC("ender_star"));
  event.remove(F("storage_blocks/redstone_ingot"), EC("redstone_ingot_block"));
  event.add(F("storage_blocks"), EC("redstone_ingot_block"));
  event.add(F("storage_blocks/red_alloy"), EC("redstone_ingot_block"));
  event.remove(F("nuggets/redstone_ingot"), EC("redstone_nugget"));
  event.add(F("nuggets"), EC("redstone_nugget"));
  event.add(F("nuggets/red_alloy"), EC("redstone_nugget"));
});
