//priority: 1

ServerEvents.tags("item", (event) => {
	woodTypes.minecraft.log.concat(woodTypes.minecraft.stem).concat(woodTypes.minecraft.block).forEach(wood => {
		event.add(EXD("sieves"), EXD(`${wood}_sieve`));
	})
});

ServerEvents.tags("fluid", (event) => {
	event.add(F("witch_water"), EXD("witch_water"));
});
