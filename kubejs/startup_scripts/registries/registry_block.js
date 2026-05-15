
/** @import { $MapColor } from "net.minecraft.world.level.material.MapColor" */
const $MapColor = Java.loadClass("net.minecraft.world.level.material.MapColor");

StartupEvents.registry("block", event => {
    event.create('tlhworld:hideout_barrier')
        .hardness(-1).resistance(3600000.75).mapColor($MapColor.COLOR_GRAY).instrument('basedrum').noDrops();
    event.create('tlhworld:hideout_light')
        .hardness(-1).resistance(3600000.75).mapColor($MapColor.COLOR_GRAY).instrument('basedrum').noDrops().lightLevel(1.0);

    createCompressedRawOre(event, 'zinc', ['minecraft:needs_iron_tool', 'minecraft:mineable/pickaxe'], $MapColor.GLOW_LICHEN);
    createCompressedRawOre(event, 'tin', ['minecraft:needs_iron_tool', 'minecraft:mineable/pickaxe'], $MapColor.TERRACOTTA_WHITE);
    createCompressedBlock(event, 'tin', ['minecraft:needs_iron_tool', 'minecraft:mineable/pickaxe'], $MapColor.TERRACOTTA_WHITE, 5.0, 6.0, SoundType.METAL, true);
})

/**
 * 
 * @param {import("moe.wolfgirl.probejs.generated.registry.minecraft.Block").$Block$$Original} event 
 * @param {StringJS} name 
 * @param {"probejs$$tag$$minecraft:block"[]} blockTags
 * @param {$MapColor} mapColor
 */
const createCompressedRawOre = (event, name, blockTags, mapColor) => {
    for (let i = 1; i < 10; i++) {
        event.create('createcompression:compressed_raw_' + name + '_' + i.toString() + 'x')
            .hardness(5).resistance(6).instrument('basedrum').requiresTool()
            .tagBlock(blockTags).mapColor(mapColor);
    }
}

/**
 * 
 * @param {import("moe.wolfgirl.probejs.generated.registry.minecraft.Block").$Block$$Original} event 
 * @param {StringJS} name 
 * @param {"probejs$$tag$$minecraft:block"[]} blockTags
 * @param {$MapColor} mapColor
 */
const createCompressedMetalBlock = (event, name, blockTags, mapColor) => {
    for (let i = 1; i < 10; i++) {
        event.create('createcompression:compressed_' + name + '_' + i.toString() + 'x')
            .hardness(5).resistance(6).soundType(SoundType.METAL).requiresTool()
            .tagBlock(blockTags).mapColor(mapColor);
    }
}

/**
 * 
 * @param {import("moe.wolfgirl.probejs.generated.registry.minecraft.Block").$Block$$Original} event 
 * @param {StringJS} name 
 * @param {"probejs$$tag$$minecraft:block"[]} blockTags 
 * @param {import("net.minecraft.world.level.material.MapColor").$MapColor$$Type} mapColor
 * @param {float} hardness 
 * @param {float} resistance 
 * @param {import("net.minecraft.world.level.block.SoundType").$SoundType$$Type} soundType 
 * @param {boolean} requiresTool 
 */
const createCompressedBlock = (event, name, blockTags, mapColor,  hardness, resistance, soundType, requiresTool) => {
    blockTags == undefined ? ['c:storage_blocks'] : blockTags;
    mapColor == undefined ? $MapColor.NONE : mapColor;
    hardness == undefined ? 1.5 : hardness;
    resistance == undefined ? 3.0 : resistance;
    soundType == undefined ? SoundType.WOOD : soundType;
    requiresTool == undefined ? false : requiresTool;
    for (let i = 1; i < 10; i++) {
        event.create('createcompression:compressed_' + name + '_' + i.toString() + 'x')
            .hardness(hardness).resistance(resistance).soundType(soundType).requiresTool(requiresTool)
            .tagBlock(blockTags).mapColor(mapColor);
    }
}
