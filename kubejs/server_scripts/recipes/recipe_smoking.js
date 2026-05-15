ServerEvents.recipes(event => {
    // Mod: Homeostatic
    event.smoking(Item.of('homeostatic:purified_water_bottle'), 'minecraft:potion[potion_contents={potion:"minecraft:water"}]', 0.3, 50)
    event.smoking(Item.of('homeostatic:purified_water_bucket'), 'minecraft:water_bucket', 0.3, 100)
})
