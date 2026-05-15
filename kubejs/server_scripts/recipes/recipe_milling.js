ServerEvents.recipes(event => {
    // Mod: Create Diesel Generators
    event.recipes.create.milling([Item.of('createdieselgenerators:wood_chip', 9)], Ingredient.tagKeyOf('#minecraft:planks'));

    // Mod: Mekanism
    event.recipes.create.milling([Item.of('mekanism:dust_copper'), Output.of('mekanism:dust_copper', 0.05)], 'minecraft:copper_ingot');
    event.recipes.create.milling([Item.of('mekanism:dust_tin'), Output.of('mekanism:dust_tin', 0.08)], 'create_ironworks:tin_ingot');
    event.recipes.create.milling([Item.of('mekanism:dust_gold'), Output.of('mekanism:dust_gold', 0.03)], 'minecraft:gold_ingot');
})
