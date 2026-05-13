/** @type {import { $BlockMusicPlayer } from "com.github.tartaricacid.netmusic.block.BlockMusicPlayer";} */
const $BlockMusicPlayer = Java.loadClass("com.github.tartaricacid.netmusic.block.BlockMusicPlayer");

BlockEvents.rightClicked('netmusic:music_player', event => {
    const { block, player, item } = event;
    if (player.isCrouching() && item.is('netmusic:music_cd')) {
        block.setBlockState(block.getBlockState().cycle($BlockMusicPlayer.CYCLE_DISABLE), 18);
        player.setStatusMessage(Component.translatable(block.getBlockState().getValue($BlockMusicPlayer.CYCLE_DISABLE)? "message.netmusic.cycleoff" : "message.netmusic.cycleon"))
    }
})