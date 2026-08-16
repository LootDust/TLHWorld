ItemEvents.modification(event => {
    event.modify("iceandfire:creative_dragon_meal", item => {
        item.rarity = "EPIC"
    });
    event.modify("ars_nouveau:creative_source_jar", item => {
        item.rarity = "EPIC"
    });
    event.modify("born_in_chaos_v1:supreme_measure", item => {
        item.rarity = "EPIC"
    });
    event.modify("ae2:creative_energy_cell", item => {
        item.rarity = "EPIC"
    });
    event.modify("iceandfire:godly_dragon_seeker", item => {
        item.rarity = "EPIC"
    });

    event.modify("create_ironworks:copper_axe", item => {
        item.setAdditionalTooltipHidden()
    })
})
