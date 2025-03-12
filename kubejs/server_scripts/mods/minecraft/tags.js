//priority: 1

ServerEvents.tags("item", (event) => {
  event.add(F("balls"), MC("clay_ball"));
  event.add(F("balls"), MC("snowball"));
  event.add(F("balls"), MC("slime_ball"));
  event.add(F("balls"), MC("ender_pearl"));
});
