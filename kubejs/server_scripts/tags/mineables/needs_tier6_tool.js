// priority: 1
const tier6_blocks = [
    'cataclysm:black_steel_block'
]

ServerEvents.tags("block", event => {
    event.remove("minecraft:needs_diamond_tool", [
        'createnuclear:reactor_casing',
    ])

    event.add("tlhworld:needs_tier6_tool", tier6_blocks);

    event.add("tlhworld:needs_tier6_tool", [
        '#minecraft:needs_diamond_tool'
    ]);
})