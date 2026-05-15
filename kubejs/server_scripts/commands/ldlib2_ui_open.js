/// <reference path="../../startup_scripts/.reference.js"/>

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('ldlib2_ui_open')
        .then(Commands.literal('player')
            .then(Commands.argument('player', Arguments.PLAYER.create(event))
                .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
                    .executes(ctx => open_player_ui(ctx.getSource(), Arguments.PLAYER.getResult(ctx, 'player'), Arguments.RESOURCE_LOCATION.getResult(ctx, 'id')))
                )
            )
        )
    )
})

const open_block_ui = (source, player, id) => {
    try {
        LDLib2UIFactory.openBlockUI(player, BlockPos.ZERO, id);
        return 1;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

const open_helditem_ui = (source, player, id) => {
    try {
        LDLib2UIFactory.openHeldItemUI(player, $InteractionHand.MAIN_HAND, id);
        return 1;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {$Player} player 
 * @param {$ResourceLocation} id 
 * @returns 
 */
const open_player_ui = (source, player, id) => {
    let bool = LDLib2UIFactory.openPlayerUI(player, id);
    if (bool) {
        source.sendSystemMessage(Component.literal('已打开UI：' + id.toString()));
        return 1;
    } else {
        source.sendSystemMessage(Component.literal('打开UI时发生错误：' + id.toString()).color(Color.RED));
        return 0;
    }
}
