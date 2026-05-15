StartupEvents.modifyCreativeTab('createcompression:createcompression', event => {
    event.addAfter('createcompression:compressed_quartz_9x', 'createcompression:compressed_raw_zinc_1x');
    event.addAfter('createcompression:compressed_raw_zinc_1x', 'createcompression:compressed_raw_zinc_2x');
    event.addAfter('createcompression:compressed_raw_zinc_2x', 'createcompression:compressed_raw_zinc_3x');
    event.addAfter('createcompression:compressed_raw_zinc_3x', 'createcompression:compressed_raw_zinc_4x');
    event.addAfter('createcompression:compressed_raw_zinc_4x', 'createcompression:compressed_raw_zinc_5x');
    event.addAfter('createcompression:compressed_raw_zinc_5x', 'createcompression:compressed_raw_zinc_6x');
    event.addAfter('createcompression:compressed_raw_zinc_6x', 'createcompression:compressed_raw_zinc_7x');
    event.addAfter('createcompression:compressed_raw_zinc_7x', 'createcompression:compressed_raw_zinc_8x');
    event.addAfter('createcompression:compressed_raw_zinc_8x', 'createcompression:compressed_raw_zinc_9x');

    event.addAfter('createcompression:compressed_raw_zinc_9x', 'createcompression:compressed_raw_tin_1x');
    event.addAfter('createcompression:compressed_raw_tin_1x', 'createcompression:compressed_raw_tin_2x');
    event.addAfter('createcompression:compressed_raw_tin_2x', 'createcompression:compressed_raw_tin_3x');
    event.addAfter('createcompression:compressed_raw_tin_3x', 'createcompression:compressed_raw_tin_4x');
    event.addAfter('createcompression:compressed_raw_tin_4x', 'createcompression:compressed_raw_tin_5x');
    event.addAfter('createcompression:compressed_raw_tin_5x', 'createcompression:compressed_raw_tin_6x');
    event.addAfter('createcompression:compressed_raw_tin_6x', 'createcompression:compressed_raw_tin_7x');
    event.addAfter('createcompression:compressed_raw_tin_7x', 'createcompression:compressed_raw_tin_8x');
    event.addAfter('createcompression:compressed_raw_tin_8x', 'createcompression:compressed_raw_tin_9x');
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

    event.remove('createsifter:tin_mesh');
    event.remove('createsifter:copper_mesh');
    event.remove('createsifter:osmium_mesh');
    event.remove('tlhworld:sale_license');
    event.remove('tlhworld:purchase_license');
    event.remove('tlhworld:mehvahdjukaars_foolish');
})
