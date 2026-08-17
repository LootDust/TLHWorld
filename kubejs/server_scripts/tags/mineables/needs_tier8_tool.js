// priority: 1
const tier8_blocks = [
    'createnuclear:reactor_casing'
]

ServerEvents.tags("block", event => {
    event.add("tlhworld:needs_tier8_tool", tier8_blocks);
})