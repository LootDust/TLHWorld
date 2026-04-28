KeyBindEvents.pressed('test', event => {
    const { player } = event;

    player.sendData('tlh:test', {'msg': ['123456']});
})