//priority: 1

ServerEvents.tags("block", (event) => {
	event.add(F("obsidian"), M("structural_glass"));
	event.add(MC("wither_immune"), M("structural_glass"));
	event.add(MC("dragon_immune"), M("structural_glass"));
});
