ServerEvents.recipes(event => {
    event.smelting(Item.of('create_ironworks:tin_nugget'), 'createsifter:raw_tin_piece', 0.7, 200)
    event.smelting(Item.of('minecraft:iron_nugget'), 'createsifter:raw_iron_piece', 0.7, 200)
    event.smelting(Item.of('create:copper_nugget'), 'createsifter:raw_copper_piece', 0.7, 200)
    event.smelting(Item.of('minecraft:gold_nugget'), 'createsifter:raw_gold_piece', 0.7, 200)
    event.smelting(Item.of('create:zinc_nugget'), 'createsifter:raw_zinc_piece', 0.7, 200)
    event.smelting(Item.of('mekanism:nugget_osmium'), 'createsifter:raw_osmium_piece', 0.7, 200)

    // Mod: Etched
    event.smelting(Item.of('etched:blank_music_disc'), Item.of('supplementaries:pancake'), 0, 200)

    // Mod: Homeostatic
    //event.smelting(Item.of('homeostatic:purified_water_bottle'), 'minecraft:potion[potion_contents={potion:"minecraft:water"}]', 0.2, 100)
    //event.smelting(Item.of('homeostatic:purified_water_bucket'), 'minecraft:water_bucket', 0.2, 300).id('homeostatic:furnace_purified_water_bucket_manual_only')
})