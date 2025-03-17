//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("gears"), IF("gold_gear"));
  event.add(F("gears"), IF("diamond_gear"));
  event.add(F("balls"), IF("pink_slime"));
});
