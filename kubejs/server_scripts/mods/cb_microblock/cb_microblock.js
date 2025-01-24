// priority: 0

ServerEvents.recipes((event) => {
  //removals
  removeRecipeByInput(event, [
    CB_M("stone_rod"),
  ])
})
