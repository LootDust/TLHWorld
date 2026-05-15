KeyBindEvents.pressed("fast_hand", event => {
    let screen = event.getClient().getCurrentScreen();
    if (screen == null) {
        let player = event.getPlayer();
        if (player.hasPermissions(2)) {
            player.runCommand("kjs hand");
        }
    }
});
