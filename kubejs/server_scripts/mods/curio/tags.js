//priority: 1

ServerEvents.tags("item", (event) => {
	function charmToNecklace(item) {
		event.remove(C("charm"), item);
		event.add(C("necklace"), item);
	}
	
	charmToNecklace(MC("totem_of_undying"));
	charmToNecklace(DU("charm_portal"));
	charmToNecklace(DU("charm_sleep"));
	charmToNecklace(DU("charm_warding"));
	charmToNecklace(HS("heartstone"));
	charmToNecklace(NMW("no_mo_wanderer_totem"));
	
	
	
	function curioToBelt(item) {
		event.remove(C("curio"), item);
		event.add(C("belt"), item);
	}
	
	curioToBelt(DE("advanced_dislocator"))
	curioToBelt(DE("advanced_magnet"))
	curioToBelt(DE("chaotic_capacitor"))
	curioToBelt(DE("creative_capacitor"))
	curioToBelt(DE("draconic_capacitor"))
	curioToBelt(DE("magnet"))
	curioToBelt(DE("wyvern_capacitor"))
	curioToBelt(P("battery_starter"))
	curioToBelt(P("battery_basic"))
	curioToBelt(P("battery_hardened"))
	curioToBelt(P("battery_blazing"))
	curioToBelt(P("battery_niotic"))
	curioToBelt(P("battery_spirited"))
	curioToBelt(P("battery_nitro"))
	
	
	
	function curioToHead(item) {
		event.remove(C("curio"), item);
		event.add(C("head"), item);
	}
	
	curioToHead(ART("whoopee_cushion"))
	
	
	event.remove(C("belt"), ART("chorus_totem"));
	event.add(C("necklace"), ART("chorus_totem"));
});
