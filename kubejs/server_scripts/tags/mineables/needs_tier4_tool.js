// priority: 1
const tier4_blocks = [
    'minecraft:iron_block'
]

ServerEvents.tags("block", event => {
    event.add("tlhworld:needs_tier4_tool", tier4_blocks);

    event.add("tlhworld:needs_tier4_tool", [
        '#minecraft:needs_iron_tool'
    ]);
})