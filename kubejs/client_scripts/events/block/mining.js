BlockEvents.leftClicked(event => {
    let { block, player } = event;
    if (player != null && !player.isCreative()) {
        if ((player.getMainHandItem().isEmpty() || !player.getMainHandItem().isCorrectToolForDrops(block))
                && (block.hasTag('tlhworld:incorrect_for_wooden_tool') || block.hasTag('tlhworld:needs_tier1_tool'))) {
            event.cancel();
        }
    }
})