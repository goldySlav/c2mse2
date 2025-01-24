//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove(F("dusts/ender"), MU("ender_dust"));

  event.add(F("ingots"), MU("unstable_ingot"));
  event.add(F("ingots/unstable"), MU("unstable_ingot"));
});
