ServerEvents.recipes(event => {
    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "createdeco:andesite_sheet"
            }
        ],
        "results": [
            {
                "id": "tlhworld:incomplete_andesite_mechanism",
                "count": 1,
                "components": {
                    "create:sequenced_assembly": {
                        "id": "tlhworld:sequenced_assembly/andesite_mechanism",
                        "progress": 0.33333334,
                        "step": 1
                    }
                }
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "results": [
            {
                "id": "createaddition:gold_rod",
                "count": 2
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "create:golden_sheet"
            }
        ],
        "results": [
            {
                "id": "createaddition:gold_wire",
                "count": 4
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "createaddition:gold_rod"
            }
        ],
        "results": [
            {
                "id": "createaddition:gold_wire",
                "count": 2
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "minecraft:copper_ingot"
            }
        ],
        "results": [
            {
                "id": "createaddition:copper_rod",
                "count": 2
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "create:copper_sheet"
            }
        ],
        "results": [
            {
                "id": "createaddition:copper_wire",
                "count": 4
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "createaddition:copper_rod"
            }
        ],
        "results": [
            {
                "id": "createaddition:copper_wire",
                "count": 2
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "create:cardboard"
            }
        ],
        "results": [
            {
                "id": "minecraft:paper",
                "count": 3
            }
        ]
    })

    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [
            {
                "item": "createdieselgenerators:chip_wood_block"
            }
        ],
        "results": [
            {
                "id": "minecraft:stick",
                "count": 12
            }
        ]
    })
})
