ServerEvents.recipes(event => {
    // 普轴配方重写
    event.recipes.create.cutting(Item.of('createadditionallogistics:lazy_shaft', 6), 'create:andesite_alloy').processingTime(200)
})
