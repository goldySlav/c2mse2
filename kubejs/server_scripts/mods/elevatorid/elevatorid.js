// priority: 0

ServerEvents.recipes((event) => {
    //removal
    removeRecipeByID(event, [
    ])

    //elevator from teleportation core
    colours.forEach(color => {
        event.replaceInput({ id: `elevatorid:elevator_${color}` }, MC("ender_pearl"), M("teleportation_core"))
    })
})