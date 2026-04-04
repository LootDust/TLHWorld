ServerEvents.recipes(event => {
    event.custom({
    "type": "create_mechanical_extruder:extruding",
    "blockIngredients": {
        "first": {
            "blocks": "minecraft:water"
        },
        "second": {
            "blocks": "minecraft:lava"
        }
    },
    "requirements": [
        {
        "type": "mechanicals:min_speed",
        "value": 32.0
        }
    ],
    "result": {
        "id": "minecraft:cobblestone"
    }
})
})