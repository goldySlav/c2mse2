// priority: 0

const AE2_PRE = (id, x) => MOD("appliede", id, x)

ServerEvents.recipes((event) => {
	removeRecipeByMod(event, [
		AE2_PRE(),
	])
	
	//transmutation interface
	event.shapeless(Item.of(PREXP('transmutation_interface'), 1), [AE2_PRE('emc_interface')])
	event.shapeless(Item.of(PREXP('transmutation_interface'), 1), [AE2_PRE('cable_emc_interface')])
})