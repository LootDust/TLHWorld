NetworkEvents.dataReceived('tlh:delete', event => {
    let { channel, player, data } = event;

    let uuid = player.getUuid().toString();
    if (uuid == undefined || uuid == '') {
        uuid = data.getString('player');
    }
    if (uuid == '') {
        console.warn('Error occured when receiving data in "tlh:upload" channel: No UUID');
        event.cancel();
    } else {
        if (player.hasPermissions(2) && global.WHITELISTS.FILES.WRITE.includes(uuid.toString())) {
            let path = data.getString('path');
            if (!(path == "" || lineList == NBT.listTag())) {
                FilesJS.delete(path);
            }
        } else {
            player.sendSystemMessage(Component.translatable('operation.tlh.feedback.permission_denied.with_player_uuid', player.getUuid().toString()).red());
        }
    }
})
