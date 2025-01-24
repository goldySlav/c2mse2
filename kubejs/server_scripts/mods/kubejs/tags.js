//priority: 1

ServerEvents.tags("item", (event) => {
	const tagCast = castName => {
		event.add(F("graphite_molds"), KJ(`${castName}_cast`));
		event.add(F(`graphite_molds/${castName}`), KJ(`${castName}_cast`));
	}
	event.add(F("bones"), KJ("necrotic_bone"));
	tagCast("three")
	tagCast("eight")
	tagCast("plus")
	tagCast("minus")
	tagCast("multiply")
	tagCast("divide")
	tagCast("ball")
	tagCast("ingot")
	tagCast("nugget")
	tagCast("plate")
	tagCast("rod")
	tagCast("gem")
  
  //tools
	event.add(F("tools/saws"), KJ("flint_saw"));
	event.add(F("tools/saws"), KJ("iron_saw"));
	event.add(F("tools/saws"), KJ("diamond_saw"));
	event.add(F("tools/saws"), KJ("unstable_saw"));
	event.add(F("tools/screwdrivers"), KJ("unstable_screwdriver"));
	event.add(F("tools/chromatic_resonators"), KJ("chromatic_resonator"));
	event.add(F("tools/chromatic_resonators"), KJ("unstable_chromatic_resonator"));
	event.add(F("tools/calculators"), KJ("charged_calculator"));
	event.add(F("tools/calculators"), KJ("unstable_charged_calculator"));
});

ServerEvents.tags("fluid", (event) => {
  event.add(F("redstone"), KJ("liquid_redstone"));
  event.add(F("sky_solution"), KJ("sky_solution"));
  event.add(F("matrix"), KJ("matrix"));
  event.add(F("logic"), KJ("raw_logic"));
  event.add(F("sand"), KJ("fine_sand"));
  event.add(F("ender"), KJ("ender"));
  event.add(F("waste"), KJ("abstruse_waste"));
});
