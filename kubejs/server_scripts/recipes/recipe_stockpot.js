ServerEvents.recipes(event => {
    // Kaleidoscope Cookery
    // 配方修复
    event.recipes.kaleidoscope_cookery.stockpot(Item.of('kaleidoscope_cookery:udon_noodle', 3), [
        Ingredient.tagKeyOf('#c:raw_meats'),
        Ingredient.tagKeyOf('#c:raw_meats'),
        Ingredient.tagKeyOf('#c:foods/cooked_egg'),
        Ingredient.tagKeyOf('#c:vegetables/lettuce'),
        Ingredient.tagKeyOf('#c:vegetables/lettuce'),
        Ingredient.tagKeyOf('#c:foods/raw_noodles')
    ])

    // Kaleidoscope End
    // 配方修复
    event.recipes.kaleidoscope_cookery.stockpot(Item.of('kaleidoscope_end:mint_noodle_soup', 3), [
        Ingredient.of('kaleidoscope_end:ender_mint'),
        Ingredient.of('kaleidoscope_end:ender_mint'),
        Ingredient.tagKeyOf('#c:foods/cooked_egg'),
        Ingredient.tagKeyOf('#c:vegetables/lettuce'),
        Ingredient.tagKeyOf('#c:vegetables/lettuce'),
        Ingredient.tagKeyOf('#c:pasta'),
        Ingredient.tagKeyOf('#c:pasta'),
        Ingredient.tagKeyOf('#c:pasta')
    ], 'minecraft:water', 300, Ingredient.of('minecraft:bowl'),
    'kaleidoscope_cookery:stockpot/default_cooking', 'kaleidoscope_cookery:stockpot/default_finished',
    16772291, 16034443)
})
