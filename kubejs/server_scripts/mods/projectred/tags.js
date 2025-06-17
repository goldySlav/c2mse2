//priority: 1

ServerEvents.tags("item", (event) => {
	event.add(F("tools/screwdrivers"), PR_C("screwdriver"));
});

ServerEvents.tags("block", (event) => {
	event.add(CR("wrench_pickup"), "cb_multipart:multipart");
});
