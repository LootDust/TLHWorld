const $InteractionHand = Java.loadClass("net.minecraft.world.InteractionHand");

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('ldlib2_ui_open')
        .then(Commands.literal('player')
            .then(Commands.argument('player', Arguments.PLAYER.create(event))
                .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
                    .executes(ctx => open_player_ui(Arguments.PLAYER.getResult(ctx, 'player'), Arguments.RESOURCE_LOCATION.getResult(ctx, 'id')))
                )
            )
        )
    )
})

const open_block_ui = (player, id) => {
    try {
        LDLib2UIFactory.openBlockUI(player, BlockPos.ZERO, id);
        return 1;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

const open_helditem_ui = (player, id) => {
    try {
        LDLib2UIFactory.openHeldItemUI(player, $InteractionHand.MAIN_HAND, id);
        return 1;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

const open_player_ui = (player, id) => {
    try {
        LDLib2UIFactory.openPlayerUI(player, id);
        return 1;
    } catch (err) {
        console.error(err);
        return 0;
    }
}