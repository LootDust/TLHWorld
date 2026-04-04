KeyBindEvents.pressed("item_delete", event => {
    let player = event.getPlayer();
    if (player.hasPermissions(2) && player.isCreative() && player.getViewXRot(0) <= -60) {
        player.setItemInHand("main_hand", Item.of("minecraft:air"))
    }
});
