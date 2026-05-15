ServerEvents.recipes(event => {
    // 农业粗磨

    // 材料粗磨
    event.recipes.kaleidoscope_cookery.millstone(Output.of('minecraft:gravel'), Ingredient.of('minecraft:cobblestone'));
    event.recipes.kaleidoscope_cookery.millstone(Output.of('createdieselgenerators:wood_chip'), Ingredient.of('#minecraft:planks'));
})
