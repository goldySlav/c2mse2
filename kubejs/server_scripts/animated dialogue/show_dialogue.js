const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

//find transmutation table
FTBQuestsEvents.completed('40D115852A0164D5', event => {
	let tag = new $CompoundTag
	tag.putString('message', "...Hey?... do you copy? The nodule... it’s gone. I barely made it. Are you alive?")
	event.player.sendData('textTask', tag)
})

//crafting table
FTBQuestsEvents.completed('6E6E24468D9F6CF1', event => {
	let tag = new $CompoundTag
	tag.putString('message', "I’m drifting... somewhere out here. Systems failing. You need to survive. Find a way... rebuild...")
	event.player.sendData('textTask', tag)
})

//zinc ore chunk
FTBQuestsEvents.completed('5055909CC3C8048D', event => {
	let tag = new $CompoundTag
	tag.putString('message', "We weren’t meant to end like this. You have to restart everything. Piece by piece... tech by tech...")
	event.player.sendData('textTask', tag)
})

//coal
FTBQuestsEvents.completed('5569DED57157B576', event => {
	let tag = new $CompoundTag
	tag.putString('message', "There’s still hope. If you can build a new nodule... maybe you make it back. Defeat him...")
	event.player.sendData('textTask', tag)
})

//kinetic mechanism
FTBQuestsEvents.completed('1CED050B23075E82', event => {
	let tag = new $CompoundTag
	tag.putString('message', "I won’t make it. Thrusters dead. The Sun... I'm too close. But you... you can still live.")
	event.player.sendData('textTask', tag)
})

//emerald
FTBQuestsEvents.completed('28780B6E562030B4', event => {
	let tag = new $CompoundTag
	tag.putString('message', "My journey ends here. Yours doesn’t. Survive, rebuild, return, and defeat him. For both of us. Goodbye...")
	event.player.sendData('textTask', tag)
})