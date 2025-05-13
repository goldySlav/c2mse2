ServerEvents.loaded((event) => {
	//attempt to remove annoying rain crash site
	event.server.runCommandSilent(`/weather clear`)
	event.server.runCommandSilent(`/gamerule doWeatherCycle false`)
	
	//disable pickaxe heater
	event.server.runCommandSilent(`/gamerule artifacts.pickaxeHeater.enabled false`)
});