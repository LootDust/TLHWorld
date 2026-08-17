// priority: 1
const tier3_blocks = [
    'minecraft:iron_ore',
    'create_ironworks:bronze_block'
]

ServerEvents.tags("block", event => {
    event.add("tlhworld:needs_tier3_tool", tier3_blocks);
})