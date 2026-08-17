// priority: 1
const tier2_blocks = [
    'minecraft:copper_ore',
    'minecraft:waxed_copper_block'
]

ServerEvents.tags("block", event => {
    event.remove("minecraft:needs_stone_tool", [
        'create_ironworks:bronze_block',
        'minecraft:iron_block'
    ])

    event.add("tlhworld:needs_tier2_tool", tier2_blocks);

    event.add("tlhworld:needs_tier2_tool", [
        '#minecraft:needs_stone_tool'
    ]);
})