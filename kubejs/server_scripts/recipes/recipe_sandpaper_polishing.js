ServerEvents.recipes(event => {
    event.recipes.create.sandpaper_polishing(Item.of('minecraft:carrot'), 'minersdelight:cave_carrot')
    event.recipes.create.sandpaper_polishing(Item.of('minecraft:potato'), 'minecraft:poisonous_potato')
})