//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("gems"), CR_M("coke"));
  event.add(F("gems/coke"), CR_M("coke"));
  event.add(F("storage_blocks/coke"), CR_M("coke_block"));
  event.remove(F("storage_blocks/steel"), CR_M("coke_block"));
  
  event.remove(F("dirty_dusts/dirty_wolframite"), CR_M("dirty_wolframite_dust"));
  event.add(F("dirty_dusts/tungsten"), CR_M("dirty_wolframite_dust"));
  
  event.remove(F("storage_blocks/raw_wolframite"), CR_M("raw_wolframite_block"));
  event.add(F("storage_blocks/raw_tungsten"), CR_M("raw_wolframite_block"));
  
  event.remove(F("ores/wolframite"), CR_M("wolframite_ore"));
  event.add(F("ores/tungsten"), CR_M("wolframite_ore"));
  
  event.remove(F("raw_materials/wolframite"), CR_M("raw_wolframite"));
  event.add(F("raw_materials/tungsten"), CR_M("raw_wolframite"));
  
  event.remove(F("crushed_raw_materials/wolframite"), CR_M("crushed_raw_wolframite"));
  event.add(F("crushed_raw_materials/tungsten"), CR_M("crushed_raw_wolframite"));
  
  event.remove(F("dusts/wolframite"), CR_M("wolframite_dust"));
  event.add(F("dusts/tungsten"), CR_M("wolframite_dust"));
});

ServerEvents.tags("fluid", (event) => {
  event.add(F("ender_alloy"), CR_M("molten_void_steel"));
});
