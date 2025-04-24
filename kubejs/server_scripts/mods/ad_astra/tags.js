//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("cheese"), AA("cheese"));
  event.add(F("cheese/cheese"), AA("cheese"));
  
  event.add(MI_D("doors_big"), AA("reinforced_door"));
  event.add(MI_D("doors_big/iron"), AA("reinforced_door"));
  event.add(MI_D("doors_big"), AA("airlock"));
  event.add(MI_D("doors_big/iron"), AA("airlock"));
  event.add(MI_D("doors_big"), AA("steel_sliding_door"));
  event.add(MI_D("doors_big/iron"), AA("steel_sliding_door"));
  event.add(MI_D("doors_big"), AA("iron_sliding_door"));
  event.add(MI_D("doors_big/iron"), AA("iron_sliding_door"));
  
  event.add(MI_D("doors_iron"), AA("steel_door"));

  event.remove(F("storage_blocks/steel"), AA("steel_block"));
  event.remove(F("ingots/steel"), AA("steel_ingot"));
});
