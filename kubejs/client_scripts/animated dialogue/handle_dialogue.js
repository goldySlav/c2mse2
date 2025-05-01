PlayerEvents.tick(event => {
    const player = event.player;
    if(player.getPersistentData().contains("DialogueSpeaker"))
    {
        printDialogueOverlay(player, 'Space Explorer #2');
    }
    else
    {
        event.player.paint({'*': {remove: true}})
    }
})