ServerEvents.recipes(event => {
    event.custom({
        "type": "kaleidoscope_tavern:pressing_tub",
        "fluid": "ratatouille:mince_meat",
        "ingredient": {
            "tag": "ratatouille:raw_meat"
        },
        "fluid_amount": 500
    })

    
    event.custom({
        "type": "kaleidoscope_tavern:pressing_tub",
        "fluid": "createdieselgenerators:plant_oil",
        "ingredient": {
            "tag": "c:seeds"
        },
        "fluid_amount": 250
    })
})
