//priority: 1

const reduntandCasts = [
	"repair_kit", "pick_head", "small_axe_head", "small_blade", "adze_head", "hammer_head", "broad_axe_head",
	"broad_blade", "large_plate", "tool_handle", "tool_binding", "tough_handle", "tough_binding", "bow_limb",
	"bow_grip", "helmet_plating", "chestplate_plating", "leggings_plating", "boots_plating", "maille", "coin",
]

ServerEvents.tags("item", (event) => {
	reduntandCasts.forEach(cast => {
		event.remove(TCT(`patterns`), TCT(`${cast}_cast`))
		event.remove(TCT(`patterns/reusable`), TCT(`${cast}_cast`))
		event.remove(TCT(`casts`), TCT(`${cast}_cast`))
		event.remove(TCT(`casts/gold`), TCT(`${cast}_cast`))
		event.remove(TCT(`casts/multi_use`), TCT(`${cast}_cast`))
		event.remove(TCT(`casts/multi_use/${cast}`), TCT(`${cast}_cast`))
	})
	
	event.add(F("balls"), TCT("sky_slime_ball"));
	event.add(F("balls"), TCT("ichor_slime_ball"));
	event.add(F("balls"), TCT("ender_slime_ball"));
	event.add(F("balls"), TCT("glow_ball"));
});
