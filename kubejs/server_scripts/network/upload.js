const whitelist = [
    '60455505-b311-4060-9ee8-4de6c4dd086f'
]

NetworkEvents.dataReceived('tlh:upload', event => {
    let { channel, player, data } = event;
    let uuid = player.getUuid().toString();
    if (uuid == undefined || uuid == '') {
        uuid = data.getString('player');
    }
    if (uuid == '') {
        console.warn('Error occured when receiving data in "tlh:upload" channel: No UUID');
        event.cancel();
    } else {
        if (player.hasPermissions(2) && whitelist.includes(uuid.toString())) {
            let path = data.getString('path');
            let lineList = data.getList('lines', 8);
            if (!(path == "" || lineList == NBT.listTag())) {
                let lines = [];
                lineList.forEach((tag) => {
                    player.sendSystemMessage(Component.literal(tag.getAsString()))
                    lines.push(tag.getAsString());
                })
                FilesJS.writeLines(path, lines);
            }
        } else {
            player.sendSystemMessage(Component.translatable('operation.tlh.feedback.permission_denied.with_player_uuid', player.getUuid().toString()).red());
        }
    }
})

/**
 * 
 * @param {$Player} player 
 * @param {StringJS} path 
 * @param {StringJS[]} lines 
 */
const func_tlh__network__upload = (player, path, lines) => {
    let uuid = player.getUuid().toString();
    if (uuid == undefined || uuid == '') {
        console.warn('server_scripts: network/upload.js$func_tlh__network__upload(): Error occured when trying to upload file: No UUID. Upload interrupted.');
        return false;
    } else {
        if (player.hasPermissions(2) && /** @type {string[]} */(global.WHITELISTS.FILES.WRITE).includes(uuid)) {
            console.log('server_scripts: network/upload.js$func_tlh__network__upload(): Player ' + uuid + ' succeeded to upload file: ' + path);
            FilesJS.writeLines(path, lines);
            return true;
        } else {
            console.warn('server_scripts: network/upload.js$func_tlh__network__upload(): Error occured when trying to upload file: Permission Denied (' + uuid + '). Upload interrupted.');
            return false;
        }
    }
}