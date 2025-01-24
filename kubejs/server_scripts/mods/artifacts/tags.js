//priority: 1

ServerEvents.tags("item", (event) => {
	event.remove(ART("slot/all"), ART("whoopee_cushion"));
	event.add(ART("slot/head"), ART("whoopee_cushion"));
	event.remove(ART("slot/belt"), ART("chorus_totem"));
	event.add(ART("slot/necklace"), ART("chorus_totem"));
});
