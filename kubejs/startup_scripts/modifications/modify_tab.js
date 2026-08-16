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

StartupEvents.modifyCreativeTab('createsifter:main', event => {
    event.addAfter('createsifter:string_mesh', 'createsifter:tin_mesh');
    event.addAfter('createsifter:andesite_mesh', 'createsifter:copper_mesh');
    event.addAfter('createsifter:sturdy_mesh', 'createsifter:osmium_mesh');
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    event.remove('createcompression:compressed_raw_tin_1x');
    event.remove('createcompression:compressed_raw_tin_2x');
    event.remove('createcompression:compressed_raw_tin_3x');
    event.remove('createcompression:compressed_raw_tin_4x');
    event.remove('createcompression:compressed_raw_tin_5x');
    event.remove('createcompression:compressed_raw_tin_6x');
    event.remove('createcompression:compressed_raw_tin_7x');
    event.remove('createcompression:compressed_raw_tin_8x');
    event.remove('createcompression:compressed_raw_tin_9x');

    event.remove('createcompression:compressed_raw_zinc_1x');
    event.remove('createcompression:compressed_raw_zinc_2x');
    event.remove('createcompression:compressed_raw_zinc_3x');
    event.remove('createcompression:compressed_raw_zinc_4x');
    event.remove('createcompression:compressed_raw_zinc_5x');
    event.remove('createcompression:compressed_raw_zinc_6x');
    event.remove('createcompression:compressed_raw_zinc_7x');
    event.remove('createcompression:compressed_raw_zinc_8x');
    event.remove('createcompression:compressed_raw_zinc_9x');

    event.remove('createcompression:compressed_tin_1x');
    event.remove('createcompression:compressed_tin_2x');
    event.remove('createcompression:compressed_tin_3x');
    event.remove('createcompression:compressed_tin_4x');
    event.remove('createcompression:compressed_tin_5x');
    event.remove('createcompression:compressed_tin_6x');
    event.remove('createcompression:compressed_tin_7x');
    event.remove('createcompression:compressed_tin_8x');
    event.remove('createcompression:compressed_tin_9x');

    event.remove('tlhworld:incomplete_andesite_mechanism');
    event.remove('tlhworld:incomplete_experience_mechanism');
    event.remove('tlhworld:incomplete_super_experience_mechanism');
    event.remove('tlhworld:incomplete_ferrite_mechanism');
    event.remove('tlhworld:incomplete_fluid_mechanism');
    event.remove('tlhworld:incomplete_advanced_fluid_mechanism');
    event.remove('tlhworld:incomplete_low_heat_mechanism');
    event.remove('tlhworld:incomplete_heat_mechanism');
    event.remove('tlhworld:incomplete_advanced_heat_mechanism');
    event.remove('tlhworld:incomplete_infused_mechanism');
    event.remove('tlhworld:incomplete_logic_mechanism');
    event.remove('tlhworld:incomplete_computing_mechanism');
    event.remove('tlhworld:incomplete_nuclear_mechanism');
    event.remove('tlhworld:incomplete_advanced_precision_mechanism');
    event.remove('tlhworld:incomplete_redstone_mechanism');
    event.remove('tlhworld:incomplete_automation_mechanism');

    event.remove('createsifter:tin_mesh');
    event.remove('createsifter:copper_mesh');
    event.remove('createsifter:osmium_mesh');
    event.remove('tlhworld:sale_license');
    event.remove('tlhworld:purchase_license');
    event.remove('tlhworld:mehvahdjukaars_foolish');
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
