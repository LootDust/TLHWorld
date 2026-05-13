ServerEvents.tags("block", event => {
    event.add("minecraft:needs_iron_tool", [
        'createcompression:compressed_raw_zinc_1x',
        'createcompression:compressed_raw_zinc_2x',
        'createcompression:compressed_raw_zinc_3x',
        'createcompression:compressed_raw_zinc_4x',
        'createcompression:compressed_raw_zinc_5x',
        'createcompression:compressed_raw_zinc_6x',
        'createcompression:compressed_raw_zinc_7x',
        'createcompression:compressed_raw_zinc_8x',
        'createcompression:compressed_raw_zinc_9x',
        'createcompression:compressed_raw_tin_1x',
        'createcompression:compressed_raw_tin_2x',
        'createcompression:compressed_raw_tin_3x',
        'createcompression:compressed_raw_tin_4x',
        'createcompression:compressed_raw_tin_5x',
        'createcompression:compressed_raw_tin_6x',
        'createcompression:compressed_raw_tin_7x',
        'createcompression:compressed_raw_tin_8x',
        'createcompression:compressed_raw_tin_9x'
    ])

    event.add("c:anomalies", [
        'biomesoplenty:unmapped_end_stone',
        'biomesoplenty:null_end_stone',
        'biomesoplenty:null_block',
        'biomesoplenty:null_leaves',
        'biomesoplenty:anomaly'
    ])

    event.add("c:furnace_like", [
        'minecraft:furnace',
        'minecraft:smoker',
        'minecraft:blast_furnace',
        'mekanism:energized_smelter'
    ])
    
    event.add("c:containers", [
        '#c:chests',
        '#c:barrels',
        '#c:furnace_like',
        '#c:storage_blocks',
        '#minecraft:campfires',
        '#minecraft:shulker_boxes',
        '#create:containers',
        '#sophisticatedbackpacks:backpacks',
        '#sophisticatedstorage:storages',
        '#supplementaries:presents',
        '#supplementaries:trapped_presents',
        'minecraft:jukebox',
        'minecraft:lectern',
        'minecraft:dispenser',
        'minecraft:dropper',
        'minecraft:crafter',
        'minecraft:hopper',
        'supplementaries:item_shelf',
        'supplementaries:safe',
        'supplementaries:sack'
    ])
    
    event.add("c:storage_blocks", [
        /createcompression:*/
    ])

    event.add("c:textables", [
        '#minecraft:all_signs',
        '#supplementaries:way_signs',
        'minecraft:lectern'
    ])

    event.add("create:containers", [
        '#create:postboxes',
        'create:schematicannon',
        'create:schematic_table',
        'create:belt',
        'create:basin',
        'create:depot',
        'create:weighted_ejector',
        'create:chute',
        'create:smart_chute',
        'create:fluid_tank',
        'create:item_drain',
        'create:spout',
        'create:deployer',
        'create:mechanical_crafter',
        'create:mechanical_arm',
        'create:item_vault',
        'create:packager',
        'create:repackager',
        'create:package_frogport',
        'create:placard',
        'create:brown_toolbox',
        'create:clipboard',
        'create:crushing_wheel_controller',
        'createadditionallogistics:package_editor'
    ])

    event.add("create:creatives", [
        'create:creative_motor',
        'create:creative_fluid_tank',
        'create:creative_crate',
        'createaddition:creative_energy',
        'powergrid:creative_voltage_source',
        'powergrid:creative_current_source',
        'powergrid:creative_resistor',
        'create_connected:creative_fluid_vessel',
        'createcasing:creative_cogwheel'
    ])

    event.add("sophisticatedbackpacks:backpacks", [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack'
    ])

    event.add("sophisticatedstorage:storages", [
        "sophisticatedstorage:barrel",
        "sophisticatedstorage:copper_barrel",
        "sophisticatedstorage:iron_barrel",
        "sophisticatedstorage:gold_barrel",
        "sophisticatedstorage:diamond_barrel",
        "sophisticatedstorage:netherite_barrel",
        "sophisticatedstorage:limited_barrel_1",
        "sophisticatedstorage:limited_iron_barrel_1",
        "sophisticatedstorage:limited_copper_barrel_1",
        "sophisticatedstorage:limited_gold_barrel_1",
        "sophisticatedstorage:limited_diamond_barrel_1",
        "sophisticatedstorage:limited_netherite_barrel_1",
        "sophisticatedstorage:limited_barrel_2",
        "sophisticatedstorage:limited_copper_barrel_2",
        "sophisticatedstorage:limited_iron_barrel_2",
        "sophisticatedstorage:limited_gold_barrel_2",
        "sophisticatedstorage:limited_diamond_barrel_2",
        "sophisticatedstorage:limited_netherite_barrel_2",
        "sophisticatedstorage:limited_barrel_3",
        "sophisticatedstorage:limited_copper_barrel_3",
        "sophisticatedstorage:limited_iron_barrel_3",
        "sophisticatedstorage:limited_gold_barrel_3",
        "sophisticatedstorage:limited_diamond_barrel_3",
        "sophisticatedstorage:limited_netherite_barrel_3",
        "sophisticatedstorage:limited_barrel_4",
        "sophisticatedstorage:limited_copper_barrel_4",
        "sophisticatedstorage:limited_iron_barrel_4",
        "sophisticatedstorage:limited_gold_barrel_4",
        "sophisticatedstorage:limited_diamond_barrel_4",
        "sophisticatedstorage:limited_netherite_barrel_4",
        "sophisticatedstorage:chest",
        "sophisticatedstorage:copper_chest",
        "sophisticatedstorage:iron_chest",
        "sophisticatedstorage:gold_chest",
        "sophisticatedstorage:diamond_chest",
        "sophisticatedstorage:netherite_chest",
        "sophisticatedstorage:shulker_box",
        "sophisticatedstorage:copper_shulker_box",
        "sophisticatedstorage:iron_shulker_box",
        "sophisticatedstorage:gold_shulker_box",
        "sophisticatedstorage:diamond_shulker_box",
        "sophisticatedstorage:netherite_shulker_box"
    ])

    event.add("supplementaries:way_signs", [
    "supplementaries:way_sign_acacia",
    "supplementaries:way_sign_warped",
    "supplementaries:way_sign_oak",
    "supplementaries:way_sign_spruce",
    "supplementaries:way_sign_mangrove",
    "supplementaries:way_sign_jungle",
    "supplementaries:way_sign_crimson",
    "supplementaries:way_sign_birch",
    "supplementaries:way_sign_dark_oak"
    ])
})