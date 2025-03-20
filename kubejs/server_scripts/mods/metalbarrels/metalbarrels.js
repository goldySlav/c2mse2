// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
		/metalbarrels:upgrades\/.*silver.*/,
		/metalbarrels:barrels\/.*silver.*/,
    ])
})