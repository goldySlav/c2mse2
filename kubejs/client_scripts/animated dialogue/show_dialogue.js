NetworkEvents.dataReceived('textTask', event => {
    const {entity, data, level, player} = event
    let message = data.message
    BeginDialogue(player, 'npc_reeve', message);
})

function BeginDialogue(player, npc, text)
{
    if(player.persistentData.contains('DialogueSpeaker'))
    {
        player.persistentData.remove('DialogueAnimation');
        player.persistentData.remove('DialogueSpeaker');
        return;
    }
    player.persistentData.put('DialogueSpeaker', [npc, text]);
    // Current Tick - Current Animation X - Current Text Limit - CurrentDisplayTime
    player.persistentData.put('DialogueAnimation', [0, -100, 0, 0]);
}