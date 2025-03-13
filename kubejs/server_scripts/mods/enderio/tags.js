//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove(F("gears/wood"), EIO("wood_gear"));
  event.remove(F("gears/stone"), EIO("stone_gear"));
  event.remove(F("gears/iron"), EIO("iron_gear"));
  event.add(F("heads"), EIO("enderman_head"));
  event.remove(F("silicon"), EIO("silicon"));
  event.remove(F("dusts"), EIO("powdered_ender_pearl"));
  event.remove(F("dusts/ender_pearl"), EIO("powdered_ender_pearl"));
  event.remove(F("dusts"), EIO("powdered_quartz"));
  event.remove(F("dusts/quartz"), EIO("powdered_quartz"));
  event.remove(F("dusts"), EIO("powdered_cobalt"));
  event.remove(F("dusts/cobalt"), EIO("powdered_cobalt"));
  event.add(F("balls"), EIO("soularium_grinding_ball"));
});
