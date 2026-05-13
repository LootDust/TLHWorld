ServerEvents.tags("worldgen/biome", event => {
    event.add("c:is_fungus_grotto", [
        'biomesoplenty:glowing_grotto',
        'regions_unexplored:bioshroom_caves',
        'regions_unexplored:glowshroom_grotto',
    ])

    event.add("c:is_lush_cave", [
        '#c:is_fungus_grotto',
        'minecraft:lush_caves',
        'regions_unexplored:overgrown_caves'
    ])
})