/** @import { $ArmorMaterial$Layer } from "net.minecraft.world.item.ArmorMaterial$Layer";  */
const $ArmorMaterial$Layer = Java.loadClass("net.minecraft.world.item.ArmorMaterial$Layer")

StartupEvents.registry("armor_material", event => {
    event.create('create_ironworks:andesite_armor')
        .defense({ "helmet": 2, "chestplate": 3, "leggings": 3, "boots": 1})
        .toughness(3)
        .knockbackResistance(0.1)
        .enchantmentValue(4)
        .layers([new $ArmorMaterial$Layer('create_ironworks:andesite_armor')])
})