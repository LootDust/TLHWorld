ServerEvents.recipes(event => {
    event.remove({ mod: 'create_dragons_plus' });
    event.remove({ mod: 'createdieselgenerators' });
    event.remove({ mod: 'create_fantasizing' });
    event.remove({ mod: 'createaddition' });
    // Create: Aeronautics
    event.remove({ mod: 'simulated' });
    event.remove({ mod: 'aeronautics'});
    event.remove({ mod: 'offroad' });
    event.remove({ mod: 'createmetalogistics' });
    event.remove({ mod: 'createnuclear' })
    //event.remove({ mod: 'createnetherindustry' })
    event.remove({ mod: 'create_mechanical_extruder' });
    event.remove({ mod: 'createsifter' });
    event.remove({ mod: 'mekanism' });
    event.remove({ mod: 'ae2' });
    //event.remove({ mod: 'torchmaster' })

    
    // 普轴配方删除
    event.remove({ id: 'create:crafting/kinetics/shaft' });
    event.remove({ id: 'create:crafting/kinetics/cogwheel' });
    event.remove({ id: 'create:crafting/kinetics/large_cogwheel' });
    event.remove({ id: 'create:cutting/andesite_alloy' });

    // 蓝图物品删除
    event.remove({ output: '#c:schematics' });

    // Mod: Minecraft
    event.remove({ id: 'minecraft:jukebox'});

    // Mod: Create
    event.remove({ id: 'create:crafting/kinetics/chute' });
    event.remove({ id: 'create:crafting/kinetics/propeller' });
    event.remove({ id: 'create:crafting/kinetics/whisk' });
    event.remove({ id: 'create:crafting/kinetics/basin'});
    event.remove({ id: 'create:crafting/kinetics/depot'});
    event.remove({ id: 'create:crafting/kinetics/wrench' });
    event.remove({ id: 'create:crafting/kinetics/mechanical_crafter' });
    event.remove({ id: 'create:item_application/andesite_casing_from_log' });
    event.remove({ id: 'create:item_application/andesite_casing_from_wood' });
    event.remove({ id: 'create:item_application/brass_casing_from_log' });
    event.remove({ id: 'create:item_application/brass_casing_from_wood' });
    event.remove({ id: 'create:item_application/copper_casing_from_log' });
    event.remove({ id: 'create:item_application/copper_casing_from_wood' });
    event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' });

    // Mod: Etched
    event.remove({ id: 'etched:etching_table' });

    // Mod: Homeostatic
    //event.remove({ id: 'homeostatic:water_filter' })
    //event.remove({ id: 'homeostatic:campfire_purified_water_bottle' })
    //event.remove({ id: 'homeostatic:furnace_purified_water_bottle' })

    // Mod: Kaleidoscope Cookery
    event.remove({ id: 'kaleidoscope_cookery:millstone/smooth_stone_from_cobblestone' });
    event.remove({ id: 'kaleidoscope_cookery:stockpot/udon_noodle_cooked_eggs' })

    // Mod: Kaleidoscope Nether
    // 这个配方一定要移除，不移除会导致EMI不显示森罗厨房的配方，KN1.0.5未修复，已提交issue
    event.remove({ id: 'regions_unexplored:stockpot/glowing_soup' });

    // Mod: Kaleidoscope End
    // 配方修复
    event.remove({ id: 'kaleidoscope_end:stockpot/mint_noodle_soup' });

    // Mod: Regions Unexplored
    event.remove({ id: 'regions_unexplored:ash'})

    // Mod: Sophisticated Backpacks
    event.remove({ id: 'sophisticatedbackpacks:backpack' });

    // Mod: TaCZ
    event.remove({ output: 'tacz:gun_smith_table' });
    event.remove({ output: 'tacz:workbench_a' });
    event.remove({ output: 'tacz:workbench_b' });
    event.remove({ output: 'tacz:workbench_c' });
})
