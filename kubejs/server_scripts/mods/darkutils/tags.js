//priority: 2

ServerEvents.tags("item", (event) => {
	event.remove(DU("charms"), DU("charm_portal"));
	event.remove(DU("charms"), DU("charm_sleep"));
	event.remove(DU("charms"), DU("charm_warding"));
});
