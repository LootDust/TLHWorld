ServerEvents.tags("block", event => {
    // 原版标签
    event.removeAll("minecraft:incorrect_for_wooden_tool");
    event.removeAll("minecraft:incorrect_for_stone_tool");
    event.removeAll("minecraft:incorrect_for_iron_tool");
    event.removeAll("minecraft:incorrect_for_golden_tool");
    event.removeAll("minecraft:incorrect_for_diamond_tool");
    event.removeAll("minecraft:incorrect_for_netherite_tool");

    event.add("minecraft:mineable/pickaxe", [
        'minecraft:reinforced_deepslate'
    ])

    // 通用标签
    event.add("c:anomalies", [
        'biomesoplenty:unmapped_end_stone',
        'biomesoplenty:null_end_stone',
        'biomesoplenty:null_block',
        'biomesoplenty:null_leaves',
        'biomesoplenty:anomaly'
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
    
    event.add("c:furnace_like", [
        'minecraft:furnace',
        'minecraft:smoker',
        'minecraft:blast_furnace',
        'mekanism:energized_smelter'
    ])

    event.add("c:indestructible", [
        'minecraft:bedrock',
        'minecraft:barrier',
        'minecraft:command_block',
        'minecraft:chain_command_block',
        'minecraft:repeating_command_block',
        'minecraft:jigsaw',
        'minecraft:structure_block',
        'minecraft:structure_void',
        'minecraft:light',
        'moonlight:spawn_box',
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

    // Mod: Create
    event.add("create:creatives", [
        'create:creative_motor',
        'create:creative_fluid_tank',
        'create:creative_crate',
        'create_enchantment_industry:creative_bookshelf',
        'createaddition:creative_energy',
        'create_connected:creative_fluid_vessel',
        'createcasing:creative_cogwheel'
    ])

    // Mod: Sophisticated Backpacks
    event.add("sophisticatedbackpacks:backpacks", [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack'
    ])

    // Mod: Sophisticated Storage
    event.add("sophisticatedstorage:storages", [
        'sophisticatedstorage:barrel',
        'sophisticatedstorage:copper_barrel',
        'sophisticatedstorage:iron_barrel',
        'sophisticatedstorage:gold_barrel',
        'sophisticatedstorage:diamond_barrel',
        'sophisticatedstorage:netherite_barrel',
        'sophisticatedstorage:limited_barrel_1',
        'sophisticatedstorage:limited_iron_barrel_1',
        'sophisticatedstorage:limited_copper_barrel_1',
        'sophisticatedstorage:limited_gold_barrel_1',
        'sophisticatedstorage:limited_diamond_barrel_1',
        'sophisticatedstorage:limited_netherite_barrel_1',
        'sophisticatedstorage:limited_barrel_2',
        'sophisticatedstorage:limited_copper_barrel_2',
        'sophisticatedstorage:limited_iron_barrel_2',
        'sophisticatedstorage:limited_gold_barrel_2',
        'sophisticatedstorage:limited_diamond_barrel_2',
        'sophisticatedstorage:limited_netherite_barrel_2',
        'sophisticatedstorage:limited_barrel_3',
        'sophisticatedstorage:limited_copper_barrel_3',
        'sophisticatedstorage:limited_iron_barrel_3',
        'sophisticatedstorage:limited_gold_barrel_3',
        'sophisticatedstorage:limited_diamond_barrel_3',
        'sophisticatedstorage:limited_netherite_barrel_3',
        'sophisticatedstorage:limited_barrel_4',
        'sophisticatedstorage:limited_copper_barrel_4',
        'sophisticatedstorage:limited_iron_barrel_4',
        'sophisticatedstorage:limited_gold_barrel_4',
        'sophisticatedstorage:limited_diamond_barrel_4',
        'sophisticatedstorage:limited_netherite_barrel_4',
        'sophisticatedstorage:chest',
        'sophisticatedstorage:copper_chest',
        'sophisticatedstorage:iron_chest',
        'sophisticatedstorage:gold_chest',
        'sophisticatedstorage:diamond_chest',
        'sophisticatedstorage:netherite_chest',
        'sophisticatedstorage:shulker_box',
        'sophisticatedstorage:copper_shulker_box',
        'sophisticatedstorage:iron_shulker_box',
        'sophisticatedstorage:gold_shulker_box',
        'sophisticatedstorage:diamond_shulker_box',
        'sophisticatedstorage:netherite_shulker_box'
    ])

    // Mod: Supplementaries
    event.add("supplementaries:way_signs", [
    'supplementaries:way_sign_acacia',
    'supplementaries:way_sign_warped',
    'supplementaries:way_sign_oak',
    'supplementaries:way_sign_spruce',
    'supplementaries:way_sign_mangrove',
    'supplementaries:way_sign_jungle',
    'supplementaries:way_sign_crimson',
    'supplementaries:way_sign_birch',
    'supplementaries:way_sign_dark_oak'
    ])

    // TLHWorld
    // 挖掘等级标签修改
    event.add("tlhworld:incorrect_for_wooden_tool", [
        '#tlhworld:needs_tier2_tool',
        '#tlhworld:incorrect_for_stone_tool'
    ]);
    event.add("tlhworld:incorrect_for_stone_tool", [
        '#tlhworld:needs_tier3_tool',
        '#tlhworld:incorrect_for_copper_tool'
    ]);
    event.add("tlhworld:incorrect_for_copper_tool", [
        '#tlhworld:needs_tier4_tool',
        '#tlhworld:incorrect_for_bronze_tool'
    ]);
    event.add("tlhworld:incorrect_for_bronze_tool", [
        '#tlhworld:needs_tier5_tool',
        '#tlhworld:incorrect_for_iron_tool'
    ]);
    event.add("tlhworld:incorrect_for_iron_tool", [
        '#tlhworld:needs_tier6_tool',
        '#tlhworld:incorrect_for_steel_tool'
    ]);
    event.add("tlhworld:incorrect_for_steel_tool", [
        '#tlhworld:needs_tier7_tool',
        '#tlhworld:incorrect_for_obsidianite_tool'
    ]);
    event.add("tlhworld:incorrect_for_obsidianite_tool", [
        '#tlhworld:needs_tier8_tool',
        '#tlhworld:incorrect_for_ultimate_tool'
    ]);
    event.add("tlhworld:incorrect_for_ultimate_tool", [
        '#c:indestructible'
    ]);
})
