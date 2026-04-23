ServerEvents.tags("item", event => {
    // 木质物品
    event.removeAll("minecraft:logs")
    event.add("minecraft:logs", [
        '#c:logs',
        '#c:woods',
        '#c:branches'
    ])

    event.add("c:logs", [
        '#c:unstripped_logs',
        '#c:stripped_logs'
    ])

    event.add("c:woods", [
        '#c:unstripped_woods',
        '#c:stripped_woods'
    ])

    event.add("c:unstrippeds", [
        '#c:unstripped_logs',
        '#c:unstripped_woods'
    ])

    event.add("c:strippeds", [
        '#c:stripped_logs',
        '#c:stripped_woods'
    ])

    event.add("c:unstripped_logs", [
        '#c:unstripped_stems',
        'minecraft:oak_log',
        'minecraft:spruce_log',
        'minecraft:bamboo_block',
        'minecraft:birch_log',
        'minecraft:jungle_log',
        'minecraft:acacia_log',
        'minecraft:dark_oak_log',
        'minecraft:mangrove_log',
        'minecraft:cherry_log',
        'biomesoplenty:fir_log',
        'biomesoplenty:pine_log',
        'biomesoplenty:maple_log',
        'biomesoplenty:redwood_log',
        'biomesoplenty:mahogany_log',
        'biomesoplenty:jacaranda_log',
        'biomesoplenty:palm_log',
        'biomesoplenty:willow_log',
        'biomesoplenty:dead_log',
        'biomesoplenty:magic_log',
        'biomesoplenty:umbran_log',
        'biomesoplenty:hellbark_log',
        'biomesoplenty:empyreal_log',
        'ratatouille_fried_delights:cola_log',
        'regions_unexplored:alpha_log',
        'regions_unexplored:ashen_log',
        'regions_unexplored:bamboo_log',
        'regions_unexplored:baobab_log',
        'regions_unexplored:brimwood_log',
        'regions_unexplored:brimwood_log_magma',
        'regions_unexplored:blackwood_log',
        'regions_unexplored:cobalt_log',
        'regions_unexplored:cypress_log',
        'regions_unexplored:dead_log',
        'regions_unexplored:eucalyptus_log',
        'regions_unexplored:joshua_log',
        'regions_unexplored:kapok_log',
        'regions_unexplored:larch_log',
        'regions_unexplored:magnolia_log',
        'regions_unexplored:maple_log',
        'regions_unexplored:mauve_log',
        'regions_unexplored:palm_log',
        'regions_unexplored:pine_log',
        'regions_unexplored:redwood_log',
        'regions_unexplored:silver_birch_log',
        'regions_unexplored:socotra_log',
        'regions_unexplored:willow_log'
    ])

    event.add("c:unstripped_woods", [
        '#c:unstripped_hyphaes',
        'minecraft:oak_wood',
        'minecraft:spruce_wood',
        'minecraft:birch_wood',
        'minecraft:jungle_wood',
        'minecraft:acacia_wood',
        'minecraft:dark_oak_wood',
        'minecraft:mangrove_wood',
        'minecraft:cherry_wood',
        'biomesoplenty:fir_wood',
        'biomesoplenty:pine_wood',
        'biomesoplenty:maple_wood',
        'biomesoplenty:redwood_wood',
        'biomesoplenty:mahogany_wood',
        'biomesoplenty:jacaranda_wood',
        'biomesoplenty:palm_wood',
        'biomesoplenty:willow_wood',
        'biomesoplenty:dead_wood',
        'biomesoplenty:magic_wood',
        'biomesoplenty:umbran_wood',
        'biomesoplenty:hellbark_wood',
        'biomesoplenty:empyreal_wood',
        'ratatouille_fried_delights:cola_wood',
        'regions_unexplored:ashen_wood',
        'regions_unexplored:baobab_wood',
        'regions_unexplored:brimwood_wood',
        'regions_unexplored:blackwood_wood',
        'regions_unexplored:cobalt_wood',
        'regions_unexplored:cypress_wood',
        'regions_unexplored:dead_wood',
        'regions_unexplored:eucalyptus_wood',
        'regions_unexplored:joshua_wood',
        'regions_unexplored:kapok_wood',
        'regions_unexplored:larch_wood',
        'regions_unexplored:magnolia_wood',
        'regions_unexplored:maple_wood',
        'regions_unexplored:mauve_wood',
        'regions_unexplored:palm_wood',
        'regions_unexplored:pine_wood',
        'regions_unexplored:redwood_wood',
        'regions_unexplored:silver_birch_wood',
        'regions_unexplored:small_oak_log',
        'regions_unexplored:socotra_wood',
        'regions_unexplored:willow_wood'
    ])

    event.add("c:stripped_logs", [
        'createdieselgenerators:chip_wood_beam',
        'ratatouille_fried_delights:stripped_cola_log',
        'regions_unexplored:stripped_bamboo_log',
        'regions_unexplored:stripped_small_oak_log'
    ])

    event.add("c:stripped_woods", [
        'ratatouille_fried_delights:stripped_cola_wood'
    ])

    event.add("c:stems", [
        '#c:unstripped_stems',
        '#c:stripped_stems'
    ])

    event.add("c:hyphaes", [
        '#c:unstripped_hyphaes',
        '#c:stripped_hyphaes'
    ])

    event.add("c:unstripped_stems", [
        'minecraft:crimson_stem',
        'minecraft:warped_stem',
        'minecraft:mushroom_stem',
        'regions_unexplored:pink_bioshroom_stem',
        'regions_unexplored:yellow_bioshroom_stem',
        'regions_unexplored:blue_bioshroom_stem',
        'regions_unexplored:green_bioshroom_stem'
    ])

    event.add("c:unstripped_hyphaes", [
        'minecraft:crimson_hyphae',
        'minecraft:warped_hyphae',
        'regions_unexplored:pink_bioshroom_hyphae',
        'regions_unexplored:yellow_bioshroom_hyphae',
        'regions_unexplored:blue_bioshroom_hyphae',
        'regions_unexplored:green_bioshroom_hyphae'
    ])

    event.add("c:stripped_stems", [
        'minecraft:stripped_crimson_stem',
        'minecraft:stripped_warped_stem',
        'regions_unexplored:stripped_pink_bioshroom_stem',
        'regions_unexplored:stripped_yellow_bioshroom_stem',
        'regions_unexplored:stripped_blue_bioshroom_stem',
        'regions_unexplored:stripped_green_bioshroom_stem'
    ])

    event.add("c:stripped_hyphaes", [
        'minecraft:stripped_crimson_hyphae',
        'minecraft:stripped_warped_hyphae',
        'regions_unexplored:stripped_pink_bioshroom_hyphae',
        'regions_unexplored:stripped_yellow_bioshroom_hyphae',
        'regions_unexplored:stripped_blue_bioshroom_hyphae',
        'regions_unexplored:stripped_green_bioshroom_hyphae'
    ])

    event.add("c:branches", [
        'regions_unexplored:acacia_branch',
        'regions_unexplored:birch_branch',
        'regions_unexplored:cherry_branch',
        'regions_unexplored:dark_oak_branch',
        'regions_unexplored:jungle_branch',
        'regions_unexplored:mangrove_branch',
        'regions_unexplored:oak_branch',
        'regions_unexplored:spruce_branch',
        'regions_unexplored:baobab_branch',
        'regions_unexplored:blackwood_branch',
        'regions_unexplored:cypress_branch',
        'regions_unexplored:dead_branch',
        'regions_unexplored:eucalyptus_branch',
        'regions_unexplored:joshua_beard',
        'regions_unexplored:kapok_branch',
        'regions_unexplored:larch_branch',
        'regions_unexplored:magnolia_branch',
        'regions_unexplored:maple_branch',
        'regions_unexplored:mauve_branch',
        'regions_unexplored:palm_beard',
        'regions_unexplored:pine_branch',
        'regions_unexplored:redwood_branch',
        'regions_unexplored:silver_birch_branch',
        'regions_unexplored:socotra_branch',
        'regions_unexplored:willow_branch'
    ])

    // 石质物品
    event.add("c:stones", [
        'minecraft:calcite',
        'create:asurine',
        'create:crimsite',
        'create:veridium',
        'create:ochrum',
        'create:limestone',
        'dndecor:weathered_limestone',
        'create:scoria',
        'create:scorchia',
        'dndecor:gabbro',
        'dndecor:dolomite',
        'biomesoplenty:brimstone',
        'ae2:sky_stone_block',
        'createnuclear:autunite',
        'biomesoplenty:thermal_calcite',
        'minecraft:dripstone_block',
        'minecraft:basalt',
        'minecraft:blackstone'
    ])

    event.add("c:schematics", [
        'create:schematicannon',
        'create:schematic_table',
        'create:empty_schematic',
        'create:schematic_and_quill',
        'structure_crafter:structure_wand',
        'structure_crafter:blackboard'
    ])

    // 食材标签合并
    event.removeAll("c:foods/cooked_eggs")
    event.add("c:foods/cooked_egg", [
        '#c:foods/cooked_eggs',
        'kaleidoscope_cookery:fried_egg'
    ])

    event.add("c:foods/raw_noodles", [
        'kaleidoscope_cookery:raw_noodles'
    ])

    // 创造物品
    event.add("create:creatives", [
        'create:handheld_worldshaper',
        'create:creative_motor',
        'create:creative_fluid_tank',
        'create:creative_crate',
        'create:creative_blaze_cake',
        'createaddition:creative_energy',
        'simulated:creative_physics_staff',
        'powergrid:creative_voltage_source',
        'powergrid:creative_current_source',
        'powergrid:creative_resistor',
        'create_connected:creative_fluid_vessel',
        'createcasing:creative_cogwheel'
    ])
})