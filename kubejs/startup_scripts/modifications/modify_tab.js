StartupEvents.modifyCreativeTab('createcompression:createcompression', event => {
    addAfter(event, 'createcompression:compressed_quartz_9x', [
        'createcompression:compressed_raw_zinc_1x',
        'createcompression:compressed_raw_zinc_2x',
        'createcompression:compressed_raw_zinc_3x',
        'createcompression:compressed_raw_zinc_4x',
        'createcompression:compressed_raw_zinc_5x',
        'createcompression:compressed_raw_zinc_6x',
        'createcompression:compressed_raw_zinc_7x',
        'createcompression:compressed_raw_zinc_8x',
        'createcompression:compressed_raw_zinc_9x',

        'createcompression:compressed_raw_tin_1x',
        'createcompression:compressed_raw_tin_2x',
        'createcompression:compressed_raw_tin_3x',
        'createcompression:compressed_raw_tin_4x',
        'createcompression:compressed_raw_tin_5x',
        'createcompression:compressed_raw_tin_6x',
        'createcompression:compressed_raw_tin_7x',
        'createcompression:compressed_raw_tin_8x',
        'createcompression:compressed_raw_tin_9x'
    ])
})

StartupEvents.modifyCreativeTab('create_ironworks:create_ironworks', event => {
    addAfter(event, 'create_ironworks:tin_block', [
        'create_ironworks:andesite_sword',
        'create_ironworks:andesite_pickaxe',
        'create_ironworks:andesite_axe',
        'create_ironworks:andesite_shovel',
        'create_ironworks:andesite_hoe',
        'create_ironworks:andesite_armor_helmet',
        'create_ironworks:andesite_armor_chestplate',
        'create_ironworks:andesite_armor_leggings',
        'create_ironworks:andesite_armor_boots'
    ])
})

StartupEvents.modifyCreativeTab('createsifter:main', event => {
    event.addAfter('createsifter:string_mesh', 'createsifter:tin_mesh');
    event.addAfter('createsifter:andesite_mesh', 'createsifter:copper_mesh');
    event.addAfter('createsifter:sturdy_mesh', 'createsifter:osmium_mesh');
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    removeCopressions(event, 'raw_tin');
    removeCopressions(event, 'raw_zinc');
    removeCopressions(event, 'tin');

    remove(event, [
        'create_ironworks:andesite_sword',
        'create_ironworks:andesite_pickaxe',
        'create_ironworks:andesite_axe',
        'create_ironworks:andesite_shovel',
        'create_ironworks:andesite_hoe',
        'create_ironworks:andesite_armor_helmet',
        'create_ironworks:andesite_armor_chestplate',
        'create_ironworks:andesite_armor_leggings',
        'create_ironworks:andesite_armor_boots'
    ])

    remove(event, [
        'tlhworld:incomplete_andesite_mechanism',
        'tlhworld:incomplete_experience_mechanism',
        'tlhworld:incomplete_super_experience_mechanism',
        'tlhworld:incomplete_ferrite_mechanism',
        'tlhworld:incomplete_fluid_mechanism',
        'tlhworld:incomplete_advanced_fluid_mechanism',
        'tlhworld:incomplete_low_heat_mechanism',
        'tlhworld:incomplete_heat_mechanism',
        'tlhworld:incomplete_advanced_heat_mechanism',
        'tlhworld:incomplete_infused_mechanism',
        'tlhworld:incomplete_logic_mechanism',
        'tlhworld:incomplete_computing_mechanism',
        'tlhworld:incomplete_nuclear_mechanism',
        'tlhworld:incomplete_advanced_precision_mechanism',
        'tlhworld:incomplete_redstone_mechanism',
        'tlhworld:incomplete_automation_mechanism'
    ]);

    remove(event, [
        'createsifter:tin_mesh',
        'createsifter:copper_mesh',
        'createsifter:osmium_mesh'
    ]);

    remove(event, [
        'tlhworld:sale_license',
        'tlhworld:purchase_license',
        'tlhworld:mehvahdjukaars_foolish'
    ]);
})

/** @import { $CreativeTabKubeEvent } from "@package/dev/latvian/mods/kubejs/item/creativetab";*/
/** @import { $ItemStack_ } from "@package/net/minecraft/world/item";*/
/**
 * 
 * @param {$CreativeTabKubeEvent} event 
 * @param {$ItemStack_} firstItem 
 * @param {$ItemStack_[]} itemList 
 */
const addAfter = (event, firstItem, itemList) => {
    event.addAfter(firstItem, itemList[0]);
    if (itemList.length >= 1) {
        for (let i = 1; i < itemList.length; i++) {
            event.addAfter(itemList[i - 1], itemList[i]);
        }
    }
}
/**
 * 
 * @param {$CreativeTabKubeEvent} event 
 * @param {$ItemStack_[]} itemList 
 */
const remove = (event, itemList) => {
    itemList.forEach(item => {
        event.remove(item);
    });
}
/**
 * 
 * @param {$CreativeTabKubeEvent} event 
 * @param {String} compressed 
 */
const removeCopressions= (event, compressed) => {
    remove(event, [
        'createcompression:compressed_' + compressed + '_1x',
        'createcompression:compressed_' + compressed + '_2x',
        'createcompression:compressed_' + compressed + '_3x',
        'createcompression:compressed_' + compressed + '_4x',
        'createcompression:compressed_' + compressed + '_5x',
        'createcompression:compressed_' + compressed + '_6x',
        'createcompression:compressed_' + compressed + '_7x',
        'createcompression:compressed_' + compressed + '_8x',
        'createcompression:compressed_' + compressed + '_9x'
    ])
}
