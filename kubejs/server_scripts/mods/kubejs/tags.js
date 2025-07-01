//priority: 1

ServerEvents.tags("item", (event) => {
	const tagCastBrass = cast => {
		event.add(TCT(`patterns`), KJ(`${cast}_cast`))
		event.add(TCT(`patterns/reusable`), KJ(`${cast}_cast`))
		event.add(TCT(`casts`), KJ(`${cast}_cast`))
		event.add(TCT(`casts/brass`), KJ(`${cast}_cast`))
		event.add(TCT(`casts/multi_use`), KJ(`${cast}_cast`))
		event.add(TCT(`casts/multi_use/${cast}`), KJ(`${cast}_cast`))
	}
	tagCastBrass("three")
	tagCastBrass("eight")
	tagCastBrass("plus")
	tagCastBrass("minus")
	tagCastBrass("multiply")
	tagCastBrass("divide")
	
	const tagCastGold = cast => {
		event.add(TCT(`patterns`), KJ(`${cast}_cast`))
		event.add(TCT(`patterns/reusable`), KJ(`${cast}_cast`))
		event.add(TCT(`casts`), KJ(`${cast}_cast`))
		event.add(TCT(`casts/gold`), KJ(`${cast}_cast`))
		event.add(TCT(`casts/multi_use`), KJ(`${cast}_cast`))
		event.add(TCT(`casts/multi_use/${cast}`), KJ(`${cast}_cast`))
		event.add(MC(`piglin_loved`), KJ(`${cast}_cast`))
	}
	tagCastGold("ball")
  
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
	
  //coke
	event.add(F("coal_coke"), KJ("coke"));
	event.add(F("gems"), KJ("coke"));
	event.add(F("gems/coke"), KJ("coke"));
	
  //balls
	event.add(F("balls"), KJ("sand_ball"));
	
  //dusts
	event.add(F("dusts"), KJ("void_dust"));
	event.add(F("dusts/void"), KJ("void_dust"));
});

ServerEvents.tags("fluid", (event) => {
  event.add(F("redstone"), KJ("liquid_redstone"));
  event.add(F("sky_solution"), KJ("sky_solution"));
  event.add(F("matrix"), KJ("matrix"));
  event.add(F("logic"), KJ("raw_logic"));
  event.add(F("sand"), KJ("fine_sand"));
  event.add(F("waste"), KJ("abstruse_waste"));
});
