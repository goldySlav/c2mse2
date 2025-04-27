// priority: 0
ItemEvents.tooltip(event => {
	/*colors
    §1 - dark blue
    §2 - dark green
    §3 - dark aqua
    §4 - dark red
    §5 - purple
    §6 - orange
    §8 - dark gray
    §9 - blue
    §0 - black
    §a - light green
    §b - light aqua
    §c - light red
    §d - pink
    §e - light yellow
    §f - white*/

	function addDeprecated(itemId) {
		event.add(itemId, '§4WILL BE DELETED FROM THE GAME IN THE NEXT UPDATES, PLEASE GET RID OF THIS ITEM')
	}

	//appliede
    addDeprecated('appliede:emc_interface')
    addDeprecated('appliede:cable_emc_interface')
    addDeprecated('appliede:emc_module')
    addDeprecated('appliede:emc_export_bus')
    addDeprecated('appliede:emc_import_bus')
    addDeprecated('appliede:transmutation_terminal')
    addDeprecated('appliede:learning_card')
    addDeprecated('appliede:wireless_transmutation_terminal')
})
