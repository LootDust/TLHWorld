// priority: 1
const tier7_blocks = [
    'minecraft:reinforced_deepslate'
]

ServerEvents.tags("block", event => {
    event.add("tlhworld:needs_tier7_tool", tier7_blocks);
})