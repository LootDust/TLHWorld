ServerEvents.recipes(event => {
    event.recipes.create.splashing([Output.of('create_ironworks:tin_nugget'), Output.of('create_ironworks:tin_nugget', 0.2)], 'createsifter:raw_tin_piece')
    event.recipes.create.splashing([Output.of('create:copper_nugget'), Output.of('create:copper_nugget', 0.2)], 'createsifter:raw_copper_piece')
    event.recipes.create.splashing([
        Output.of('minecraft:oak_sapling', 0.1),
        Output.of('minecraft:birch_sapling', 0.1),
        Output.of('minecraft:spruce_sapling', 0.1),
        Output.of('minecraft:jungle_sapling', 0.1),
        Output.of('minecraft:acacia_sapling', 0.1),
        Output.of('minecraft:dark_oak_sapling', 0.1),
        Output.of('minecraft:cherry_sapling', 0.1)
    ], 'createdieselgenerators:wood_chip')
})
