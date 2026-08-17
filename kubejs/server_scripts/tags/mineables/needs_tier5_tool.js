// priority: 1
const tier5_blocks = [
    'createnuclear:steel_block'
]

ServerEvents.tags("block", event => {
    event.add("tlhworld:needs_tier5_tool", tier5_blocks);
})