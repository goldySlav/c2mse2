//priority: 1

ServerEvents.tags("item", (event) => {
	event.add(MI_D("doors_copper"), CR("copper_door"));
	event.add(MI_D("doors_glass"), CR("framed_glass_door"));
	
	event.add(F("ingots/andesite"), CR("andesite_alloy"));
});
