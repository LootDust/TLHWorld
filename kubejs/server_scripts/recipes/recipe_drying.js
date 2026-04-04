ServerEvents.recipes(event => {
    event.custom({
        "type": "youkaishomecoming:drying_rack",
        "category": "misc",
        "cookingtime": 800,
        "experience": 0.0,
        "ingredient": {
            "item": "minecraft:rotten_flesh"
        },
        "result": {
            "count": 1,
            "id": "minecraft:leather"
        }
    })
})