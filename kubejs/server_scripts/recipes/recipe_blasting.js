ServerEvents.recipes(event => {
    event.blasting(Item.of('createsifter:raw_iron_piece'), 'minecraft:tuff', 0, 100).id('kubejs:blast_tuff_manual_only');
    event.blasting(Item.of('create_ironworks:bronze_ingot'), 'mekanism:dust_bronze', 0.7, 200);
})