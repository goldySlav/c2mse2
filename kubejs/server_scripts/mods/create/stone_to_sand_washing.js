// priority: 0

const splashPrimaryChance = 0.25
const splashSecondaryChance = 0.25

ServerEvents.recipes(event => {

    //cobbleGravelIron
	event.remove({ id: CR("splashing/gravel") })
	event.recipes.create.splashing([
		Item.of(MC("iron_nugget")).withChance(splashPrimaryChance),
		Item.of(MC("flint")).withChance(splashSecondaryChance)
	], MC("gravel"))

    //gravelSand
    event.remove({ id: CR("milling/gravel") })
	event.remove({ id: CR("crushing/gravel") })
	event.recipes.create.milling([
		MC("sand"), MC("flint"),
	], MC("gravel")).processingTime(processingTimesDefault.milling)

    //graniteCrushedCopper
    event.remove({ id: MC("granite") })
	event.remove({ id: CR("compacting/granite_from_flint") })
	event.remove({ id: CR("milling/granite") })
	event.remove({ id: CR("crushing/granite") })
	event.recipes.createMilling([KJ("crushed_granite")], MC("granite")).processingTime(processingTimesDefault.milling)

	event.recipes.createSplashing([
		Item.of(CR("copper_nugget")).withChance(splashPrimaryChance),
		Item.of(MC("redstone")).withChance(splashSecondaryChance)
	], KJ("crushed_granite"))

    //dioriteCrushedZinc
    event.remove({ id: MC("diorite") })
	event.remove({ id: CR("compacting/diorite_from_flint") })
	event.remove({ id: CR("milling/diorite") })
	event.remove({ id: CR("crushing/diorite") })
	event.remove({ id: CR("crushing/diorite_recycling") })
	event.recipes.createMilling([KJ("crushed_diorite")], MC("diorite")).processingTime(processingTimesDefault.milling)

	event.recipes.createSplashing([
		Item.of(CR("zinc_nugget")).withChance(splashPrimaryChance),
		Item.of(MC("quartz")).withChance(splashSecondaryChance)
	], KJ("crushed_diorite"))

    //crushedAndesiteCobalt
    event.remove({ id: MC("andesite") })
	event.remove({ id: CR("compacting/andesite_from_flint") })
	event.remove({ id: CR("milling/andesite") })
	event.remove({ id: CR("crushing/andesite") })
	event.remove({ id: CR("crushing/andesite_recycling") })
	event.recipes.createMilling([KJ("crushed_andesite")], MC("andesite")).processingTime(processingTimesDefault.milling)

	event.recipes.createSplashing([
		Item.of(TCT("cobalt_nugget")).withChance(splashPrimaryChance),
		Item.of(MC("gunpowder")).withChance(splashSecondaryChance)
	], KJ("crushed_andesite"))

    //netherrackCrushedGold
	event.remove({ id: CR("milling/netherrack") })
	event.remove({ id: CR("crushing/netherrack") })
	event.recipes.createMilling([EXD("crushed_netherrack")], MC("netherrack")).processingTime(processingTimesDefault.milling)
	
	event.remove({ id: CR("splashing/red_sand") })
	event.recipes.createSplashing([
		Item.of(MC("gold_nugget")).withChance(splashPrimaryChance),
		Item.of(CR("cinder_flour")).withChance(splashSecondaryChance)
	], EXD("crushed_netherrack"))

    //soulSoilSand
	event.recipes.createMilling([MC("soul_sand")], MC("soul_soil")).processingTime(processingTimesDefault.milling)

    //endstone
	event.recipes.createMilling([EXD("crushed_end_stone")], MC("end_stone")).processingTime(processingTimesDefault.milling)

    //endstone
	event.recipes.createMilling([EXD("crushed_deepslate")], MC("deepslate")).processingTime(processingTimesDefault.milling)

    //blackstone
	event.recipes.createMilling([EXD("crushed_blackstone")], MC("blackstone")).processingTime(processingTimesDefault.milling)
})