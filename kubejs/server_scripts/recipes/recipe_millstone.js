ServerEvents.recipes(event => {
    // 农业粗磨

    // 材料粗磨
    event.recipes.kaleidoscope_cookery.millstone(Item.of('minecraft:gravel'), Ingredient.of('minecraft:cobblestone'));
    event.recipes.kaleidoscope_cookery.millstone(Item.of('createdieselgenerators:wood_chip'), Ingredient.of('#minecraft:planks'));

    // Mod: Create Sifter
    event.recipes.kaleidoscope_cookery.millstone(Item.of('createsifter:raw_tin_piece'), Ingredient.of('create:limestone'));
})
