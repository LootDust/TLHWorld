const $Tool = Java.loadClass("net.minecraft.world.item.component.Tool");
const $Rule = Java.loadClass("net.minecraft.world.item.component.Tool$Rule");

ItemEvents.modification(event => {
    event.modify("iceandfire:creative_dragon_meal", item => {
        item.rarity = "EPIC";
    });
    event.modify("ars_nouveau:creative_source_jar", item => {
        item.rarity = "EPIC";
    });
    event.modify("born_in_chaos_v1:supreme_measure", item => {
        item.rarity = "EPIC";
    });
    event.modify("ae2:creative_energy_cell", item => {
        item.rarity = "EPIC";
    });
    event.modify("iceandfire:godly_dragon_seeker", item => {
        item.rarity = "EPIC";
    });

    event.modify("create_ironworks:copper_axe", item => {
        item.setAdditionalTooltipHidden();
    });

    event.modify("minecraft:wooden_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_wooden_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 2.0, true)], 1.0, 1));
    });
    event.modify("minecraft:stone_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_stone_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 4.0, true)], 1.0, 1));
    });
    event.modify("create_ironworks:copper_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_copper_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 5.0, true)], 1.0, 1));
    });
    event.modify("create_ironworks:bronze_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_bronze_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 6.0, true)], 1.0, 1));
    });
    event.modify("minecraft:iron_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_iron_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 8.0, true)], 1.0, 1));
    });
    event.modify("create_ironworks:steel_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_steel_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 9.0, true)], 1.0, 1));
    });
    event.modify("rainbowcompound:obsidianite_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_obsidianite_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 12.0, true)], 1.0, 1));
    });
    event.modify("rainbowcompound:rainbow_pickaxe", item => {
        item.setTool(new $Tool([new $Rule("#tlhworld:incorrect_for_ultimate_tool", 0.0, false), new $Rule("#minecraft:mineable/pickaxe", 16.0, true)], 1.0, 1));
    });
})
