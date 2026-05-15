ServerEvents.recipes(event => {
    // Mod: Create Diesel Generators
    event.recipes.create.crushing([Item.of('createdieselgenerators:wood_chip', 48), Output.of('farmersdelight:tree_bark', 0.8)], Ingredient.tagKeyOf('#minecraft:logs'))
})
