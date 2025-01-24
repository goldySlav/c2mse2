//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("dusts"), FN("flux_dust"));
  event.add(F("dusts/flux"), FN("flux_dust"));
  event.add(F("storage_blocks"), FN("flux_block"));
  event.add(F("storage_blocks/flux"), FN("flux_block"));
});
