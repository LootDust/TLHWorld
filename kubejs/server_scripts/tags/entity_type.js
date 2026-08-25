ServerEvents.tags("entity_type", event => {
    event.add("c:hostile", [
        'minecraft:zombie',
        'minecraft:skeleton',
        'minecraft:creeper',
        'minecraft:spider'
    ])
})