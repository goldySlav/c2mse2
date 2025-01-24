// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByOutput(event, [
        NMW("no_soliciting_sign"),
    ])
	donutCraftFull(event, NMW("no_soliciting_sign"), F("#gems/emerald"), MC("#signs"))
})