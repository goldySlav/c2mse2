//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove("forge:ores", "powah:deeppslate_uraninite_ore_poor");
  event.remove("forge:ores/uraninite", "powah:deepslate_uraninite_ore_poor");
  event.remove("forge:ores", "powah:deepslate_uraninite_ore");
  event.remove("forge:ores/uraninite", "powah:deepslate_uraninite_ore");
  event.remove("forge:ores", "powah:deepslate_uraninite_ore_dense");
  event.remove("forge:ores/uraninite", "powah:deepslate_uraninite_ore_dense");
  event.remove("forge:ores", "powah:uraninite_ore_poor");
  event.remove("forge:ores/uraninite", "powah:uraninite_ore_poor");
  event.remove("forge:ores", "powah:uraninite_ore");
  event.remove("forge:ores/uraninite", "powah:uraninite_ore");
  event.remove("forge:ores", "powah:uraninite_ore_dense");
  event.remove("forge:ores/uraninite", "powah:uraninite_ore_dense");
  event.remove("forge:raw_materials", "powah:uraninite_raw");
  event.remove("forge:raw_materials/uraninite", "powah:uraninite_raw");
  event.remove("forge:storage_blocks", "powah:uraninite_block");
  event.remove("forge:storage_blocks/uraninite", "powah:uraninite_block");
});
