ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:wheat_seeds', 0.01),
        Output.of('minecraft:beetroot_seeds', 0.01),
        Output.of('minecraft:melon_seeds', 0.01),
        Output.of('minecraft:pumpkin_seeds', 0.01),
        Output.of('minecraft:poisonous_potato', 0.01),
        Output.of('minersdelight:cave_carrot', 0.01),
        Output.of('farmersdelight:tomato_seeds', 0.01),
        Output.of('farmersdelight:rice', 0.01),
        Output.of('farmersdelight:cabbage_seeds', 0.01),
        Output.of('farmersdelight:onion', 0.01)
    ], Item.of('minecraft:dirt'), Item.of('createsifter:string_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:lily_pad', 0.05),
        Output.of('minecraft:seagrass', 0.2),
        Output.of('minecraft:kelp', 0.08),
        Output.of('minecraft:sea_pickle', 0.1)
    ], Item.of('minecraft:dirt'), Item.of('createsifter:string_mesh')).processingTime(800).waterlogged(true).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:oak_sapling', 0.05),
        Output.of('minecraft:birch_sapling', 0.05),
        Output.of('minecraft:spruce_sapling', 0.05),
        Output.of('minecraft:jungle_sapling', 0.05),
        Output.of('minecraft:acacia_sapling', 0.05),
        Output.of('minecraft:dark_oak_sapling', 0.05),
        Output.of('minecraft:cherry_sapling', 0.05)
    ], Item.of('minecraft:rooted_dirt'), Item.of('createsifter:string_mesh')).processingTime(600).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:mangrove_propagule', 0.05),
        Output.of('minecraft:azalea', 0.05),
        Output.of('minecraft:small_dripleaf', 0.05),
        Output.of('minecraft:big_dripleaf', 0.05)
    ], Item.of('minecraft:rooted_dirt'), Item.of('createsifter:string_mesh')).processingTime(600).waterlogged(true).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('createsifter:raw_tin_piece', 0.01),
        Output.of('createsifter:andesite_pebble', 0.05),
        Output.of('createsifter:stone_pebble', 0.45),
        Output.of('createsifter:deepslate_pebble', 0.1),
        Output.of('minecraft:flint', 0.33),
        Output.of('mekanism:dust_charcoal', 0.2)
    ], Item.of('minecraft:gravel'), Item.of('createsifter:string_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('createsifter:raw_tin_piece', 0.1),
        Output.of('createsifter:andesite_pebble', 0.1),
        Output.of('createsifter:stone_pebble', 0.45),
        Output.of('createsifter:deepslate_pebble', 0.2),
        Output.of('minecraft:flint', 0.2),
        Output.of('mekanism:dust_charcoal', 0.2)
    ], Item.of('minecraft:gravel'), Item.of('createsifter:tin_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:bone_meal', 0.1),
        Output.of('minecraft:redstone', 0.005),
        Output.of('createsifter:dust', 0.5)
    ], Item.of('minecraft:sand'), Item.of('createsifter:string_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:clay_ball', 0.1),
        Output.of('minecraft:redstone', 0.001),
        Output.of('createsifter:dust', 0.01)
    ], Item.of('minecraft:sand'), Item.of('createsifter:string_mesh')).processingTime(600).waterlogged(true).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:bone_meal', 0.1),
        Output.of('minecraft:redstone', 0.01),
        Output.of('minecraft:glowstone_dust', 0.05),
        Output.of('mekanism:dust_sulfur', 0.01),
        Output.of('createsifter:dust', 0.5),
        Output.of('ae2:sky_dust', 0.01)
    ], Item.of('minecraft:sand'), Item.of('createsifter:tin_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)
    
    event.recipes.createsifter.sifting([
        Output.of('createsifter:raw_tin_piece', 0.1),
        Output.of('createsifter:raw_copper_piece', 0.05),
        Output.of('createsifter:andesite_pebble', 0.15),
        Output.of('createsifter:stone_pebble', 0.3),
        Output.of('createsifter:deepslate_pebble', 0.3),
        Output.of('minecraft:gunpowder', 0.1)
    ], Item.of('minecraft:gravel'), Item.of('createsifter:andesite_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:redstone', 0.1),
        Output.of('minecraft:glowstone_dust', 0.15),
        Output.of('mekanism:dust_sulfur', 0.05),
        Output.of('createsifter:dust', 0.35),
        Output.of('ae2:sky_dust', 0.05),
        Output.of('ae2:certus_quartz_dust', 0.01)
    ], Item.of('minecraft:sand'), Item.of('createsifter:andesite_mesh')).processingTime(500).waterlogged(false).advancedSifter(false)

    event.recipes.createsifter.sifting([
        Output.of('minecraft:white_concrete_powder', 0.125),
        Output.of('minecraft:light_gray_concrete_powder', 0.125),
        Output.of('minecraft:gray_concrete_powder', 0.125),
        Output.of('minecraft:black_concrete_powder', 0.125),
        Output.of('minecraft:brown_concrete_powder', 0.125),
        Output.of('minecraft:red_concrete_powder', 0.125),
        Output.of('minecraft:orange_concrete_powder', 0.125),
        Output.of('minecraft:yellow_concrete_powder', 0.125),
        Output.of('minecraft:lime_concrete_powder', 0.125),
        Output.of('minecraft:green_concrete_powder', 0.125),
        Output.of('minecraft:cyan_concrete_powder', 0.125),
        Output.of('minecraft:light_blue_concrete_powder', 0.125),
        Output.of('minecraft:blue_concrete_powder', 0.125),
        Output.of('minecraft:purple_concrete_powder', 0.125),
        Output.of('minecraft:magenta_concrete_powder', 0.125),
        Output.of('minecraft:pink_concrete_powder', 0.125)
    ], Item.of('createsifter:dust'), Item.of('createsifter:string_mesh')).processingTime(10).waterlogged(true).advancedSifter(false)
})