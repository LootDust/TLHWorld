ServerEvents.recipes(event => {
    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "create_ironworks:tin_ingot"
            }
        ],
        "results": [
            {
                "id": "create_ironworks:tin_sheet"
            }
        ]
    })
    
    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "results": [
            {
                "id": "create:golden_sheet"
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "create:zinc_ingot"
            }
        ],
        "results": [
            {
                "id": "createdeco:zinc_sheet"
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "minecraft:copper_ingot"
            }
        ],
        "results": [
            {
                "id": "create:copper_sheet"
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "create:andesite_alloy"
            }
        ],
        "results": [
            {
                "id": "createdeco:andesite_sheet"
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "create:pulp"
            }
        ],
        "results": [
            {
                "id": "create:cardboard"
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [
            {
                "item": "minecraft:rotten_flesh"
            }
        ],
        "results": [
            {
                "id": "minecraft:brown_dye"
            }
        ]
    })
})