// priority: 1
ServerEvents.tags('block', event => {
	event.add(MC('mineable/pickaxe'), FH("flopper"))
	event.add(CR('wrench_pickup'), FH("flopper"))
})