//priority: 1

ServerEvents.tags("item", (event) => {
	event.remove(F("ores"), M_E("end_naquadah_ore"));
	event.remove(F("ores/naquadah"), M_E("end_naquadah_ore"));
});
