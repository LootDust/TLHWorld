NetworkEvents.dataReceived('tlh:sysmsgs', event => {
    const { channel, player, data } = event;

    let uuid = player.UUID;

    if (player == undefined || player == null) {
        console.warn('Error occured when receiving data in "tlh:upload" channel: No player');
        event.cancel();
    } else {
        let msgs = data.getList('msgs', 8);
        msgs.forEach((string) => {
            player.sendSystemMessage(Component.literal(string));
        })
    }
})