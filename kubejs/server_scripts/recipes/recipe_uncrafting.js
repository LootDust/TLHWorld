ServerEvents.recipes(event => {
    event.custom({
        "type": "twilightforest:uncrafting",
        "cost": 0,
        "input": {
            "item": "minecraft:bamboo_block"
        },
        "input_count": 1,
        "key": {
            "A": {
            "item": "minecraft:bamboo"
            }
        },
        "pattern": [
            "AAA",
            "AAA",
            "AAA"
        ]
    })
})