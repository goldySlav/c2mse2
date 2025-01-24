//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("cobblestone_generators"), CG("tier_1"));
  event.add(F("cobblestone_generators"), CG("tier_2"));
  event.add(F("cobblestone_generators"), CG("tier_3"));
  event.add(F("cobblestone_generators"), CG("tier_4"));
  event.add(F("cobblestone_generators"), CG("tier_5"));
});
