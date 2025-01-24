//priority: 1

const woodenDoorMats = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "crimson", "warped"]
const bigDoorWoodenTypes = [
	"acacia", "barn", "birch", "crimson", "dark_oak",
	"darsser", "fairy_tale", "jungle", "oak", "ship", "shiro", "spruce", "warped", "dwarf",
]
const bigDoorGlassTypes = [
	"french", "glass", "laboratory", "terrace",
]
const bigDoorCopperTypes = [
	"art", "pipe",
]
const bigDoorIronTypes = [
	"safe", "factory",
]

ServerEvents.tags("item", (event) => {
	woodenDoorMats.forEach(mat => {
		event.add(MI_D(`doors_${mat}`), MC(`${mat}_door`));
	})
	event.add(MI_D("doors_iron"), MC("iron_door"));
	
	event.add(F("concrete"), MI_C("rainbow_concrete"))
	event.add(F("concrete_powder"), MI_C("rainbow_concrete_powder"))
	
	bigDoorWoodenTypes.forEach(type => {
		event.add(MI_D("doors_big"), MI_D(`big_door_${type}`));
		event.add(MI_D("doors_big/wooden"), MI_D(`big_door_${type}`));
	})
	
	bigDoorGlassTypes.forEach(type => {
		event.add(MI_D("doors_big"), MI_D(`big_door_${type}`));
		event.add(MI_D("doors_big/glass"), MI_D(`big_door_${type}`));
	})
	
	bigDoorCopperTypes.forEach(type => {
		event.add(MI_D("doors_big"), MI_D(`big_door_${type}`));
		event.add(MI_D("doors_big/copper"), MI_D(`big_door_${type}`));
	})
	
	bigDoorIronTypes.forEach(type => {
		event.add(MI_D("doors_big"), MI_D(`big_door_${type}`));
		event.add(MI_D("doors_big/iron"), MI_D(`big_door_${type}`));
	})
	
	event.add(MI_D("doors_big"), MI_D('big_door_portcullis'));
});
