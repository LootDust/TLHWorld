ServerEvents.recipes(event => {
    event.custom({
        "type": "kaleidoscope_cookery:millstone",
        "ingredient": {
            "item": "minecraft:cobblestone"
        },
        "result": {
            "count": 1,
            "id": "minecraft:gravel"
        }
    })

    event.custom({
        "type": "kaleidoscope_cookery:millstone",
        "ingredient": {
            "tag": "minecraft:planks"
        },
        "result": {
            "count": 1,
            "id": "createdieselgenerators:wood_chip"
        }
    })
})