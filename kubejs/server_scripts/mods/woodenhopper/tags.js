// priority: 1
ServerEvents.tags('block', event => {
	event.add(CR('wrench_pickup'), WH("wooden_hopper"))
})