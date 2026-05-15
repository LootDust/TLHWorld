ItemEvents.modification(event => {
    event.modify("powergrid:creative_current_source", item => {
        item.rarity = "EPIC"
    })

    event.modify("powergrid:creative_voltage_source", item => {
        item.rarity = "EPIC"
    })

    event.modify("powergrid:creative_resistor", item => {
        item.rarity = "EPIC"
    })
})
