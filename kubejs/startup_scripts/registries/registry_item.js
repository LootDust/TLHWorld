const $Type = Java.loadClass("net.minecraft.world.item.ArmorItem$Type");

StartupEvents.registry("item", event => {
    // Create : Ironworks
    event.create('create_ironworks:andesite_armor_helmet', 'kubejs:helmet')
        .displayName({ translate: 'item.create_ironworks.andesite_armor_helmet' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_armor_helmet' })
        .material('create_ironworks:andesite_armor')
        .maxDamage($Type.HELMET.getDurability(19));
    event.create('create_ironworks:andesite_armor_chestplate', 'kubejs:chestplate')
        .displayName({ translate: 'item.create_ironworks.andesite_armor_chestplate' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_armor_chestplate' })
        .material('create_ironworks:andesite_armor')
        .maxDamage($Type.BODY.getDurability(19));
    event.create('create_ironworks:andesite_armor_leggings', 'kubejs:leggings')
        .displayName({ translate: 'item.create_ironworks.andesite_armor_leggings' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_armor_leggings' })
        .material('create_ironworks:andesite_armor')
        .maxDamage($Type.LEGGINGS.getDurability(19));
    event.create('create_ironworks:andesite_armor_boots', 'kubejs:boots')
        .displayName({ translate: 'item.create_ironworks.andesite_armor_boots' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_armor_boots' })
        .material('create_ironworks:andesite_armor')
        .maxDamage($Type.BOOTS.getDurability(19));
    event.create('create_ironworks:andesite_axe', 'kubejs:axe')
        .displayName({ translate: 'item.create_ironworks.andesite_axe' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_axe' })
        .tier('create_ironworks:andesite')
        .attackDamageBaseline(7.0)
        .speedBaseline(-3.2);
    event.create('create_ironworks:andesite_hoe', 'kubejs:hoe')
        .displayName({ translate: 'item.create_ironworks.andesite_hoe' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_hoe' })
        .tier('create_ironworks:andesite')
        .attackDamageBaseline(-1.0)
        .speedBaseline(-2.0);
    event.create('create_ironworks:andesite_sword', 'kubejs:sword')
        .displayName({ translate: 'item.create_ironworks.andesite_sword' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_sword' })
        .tier('create_ironworks:andesite')
        .attackDamageBaseline(4.0)
        .speedBaseline(-2.4);
    event.create('create_ironworks:andesite_shovel', 'kubejs:shovel')
        .displayName({ translate: 'item.create_ironworks.andesite_shovel' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_shovel' })
        .tier('create_ironworks:andesite')
        .attackDamageBaseline(1.5)
        .speedBaseline(-3.0);
    event.create('create_ironworks:andesite_hammer')
        .displayName({ translate: 'item.create_ironworks.andesite_hammer' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_hammer' });
    event.create('create_ironworks:andesite_pickaxe', 'kubejs:pickaxe')
        .displayName({ translate: 'item.create_ironworks.andesite_pickaxe' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'create_ironworks:item/andesite_pickaxe' })
        .tier('create_ironworks:andesite')
        .attackDamageBaseline(1.0)
        .speedBaseline(-2.8);

    // Create : Sifter
    event.create('createsifter:tin_mesh', 'createsifter:mesh')
        .displayName({ translate: 'item.createsifter.tin_mesh' })
        .parentModel('createsifter:block/meshes/mesh')
        .texture('mesh', 'tlhworld:item/tin_mesh')
        .maxDamage(12);

    event.create('createsifter:copper_mesh', 'createsifter:mesh')
        .displayName({ translate: 'item.createsifter.copper_mesh' })
        .parentModel('createsifter:block/meshes/mesh')
        .texture('mesh', 'tlhworld:item/copper_mesh')
        .maxDamage(24);

    event.create('createsifter:osmium_mesh', 'createsifter:mesh')
        .displayName({ translate: 'item.createsifter.osmium_mesh' })
        .parentModel('createsifter:block/meshes/mesh')
        .texture('mesh', 'tlhworld:item/osmium_mesh')
        .maxDamage(128);


    // TLHWorld
    // Mechanisms
    createMechanism(event, 'andesite_mechanism', 'tlhworld:item/mechanism/andesite_mechanism', 'tlhworld:item/mechanism/incomplete/andesite_mechanism');
    createMechanism(event, 'experience_mechanism', 'tlhworld:item/mechanism/experience_mechanism', 'tlhworld:item/mechanism/incomplete/experience_mechanism');
    createMechanism(event, 'super_experience_mechanism', 'tlhworld:item/mechanism/super_experience_mechanism', 'tlhworld:item/mechanism/incomplete/super_experience_mechanism');
    createMechanism(event, 'ferrite_mechanism', 'tlhworld:item/mechanism/ferrite_mechanism', 'tlhworld:item/mechanism/incomplete/ferrite_mechanism');
    createMechanism(event, 'fluid_mechanism', 'tlhworld:item/mechanism/fluid_mechanism', 'tlhworld:item/mechanism/incomplete/fluid_mechanism');
    createMechanism(event, 'advanced_fluid_mechanism', 'tlhworld:item/mechanism/advanced_fluid_mechanism', 'tlhworld:item/mechanism/incomplete/advanced_fluid_mechanism');
    createMechanism(event, 'low_heat_mechanism', 'tlhworld:item/mechanism/low_heat_mechanism', 'tlhworld:item/mechanism/incomplete/low_heat_mechanism');
    createMechanism(event, 'heat_mechanism', 'tlhworld:item/mechanism/heat_mechanism', 'tlhworld:item/mechanism/incomplete/heat_mechanism');
    createMechanism(event, 'advanced_heat_mechanism', 'tlhworld:item/mechanism/advanced_heat_mechanism', 'tlhworld:item/mechanism/incomplete/advanced_heat_mechanism');
    createMechanism(event, 'infused_mechanism', 'tlhworld:item/mechanism/infused_mechanism', 'tlhworld:item/mechanism/incomplete/infused_mechanism');
    createMechanism(event, 'logic_mechanism', 'tlhworld:item/mechanism/logic_mechanism', 'tlhworld:item/mechanism/incomplete/logic_mechanism');
    createMechanism(event, 'computing_mechanism', 'tlhworld:item/mechanism/computing_mechanism', 'tlhworld:item/mechanism/incomplete/computing_mechanism');
    createMechanism(event, 'nuclear_mechanism', 'tlhworld:item/mechanism/nuclear_mechanism', 'tlhworld:item/mechanism/incomplete/nuclear_mechanism');
    createMechanism(event, 'advanced_precision_mechanism', 'tlhworld:item/mechanism/advanced_precision_mechanism', 'tlhworld:item/mechanism/incomplete/advanced_precision_mechanism');
    createMechanism(event, 'redstone_mechanism', 'tlhworld:item/mechanism/redstone_mechanism', 'tlhworld:item/mechanism/incomplete/redstone_mechanism');
    createMechanism(event, 'automation_mechanism', 'tlhworld:item/mechanism/automation_mechanism', 'tlhworld:item/mechanism/incomplete/automation_mechanism');

    // Music discs
    event.create('tlhworld:music_disc_hideout')
        .displayName({ translate: 'item.tlhworld.music_disc_hideout' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'tlhworld:item/music_disc/hideout' })
        .maxStackSize(1)
        .jukeboxPlayable("tlhworld:hideout", true);

    // Materials
    event.create('tlhworld:magnet')
        .displayName({ translate: 'item.tlhworld.magnet' })
        .parentModel('minecraft:item/generated')
        .textures({ 'layer0': 'tlhworld:item/magnet' });

    // Miscs
    event.create('tlhworld:sale_license')
        .displayName({ translate: 'item.tlhworld.sale_license' })
        .parentModel('minecraft:item/generated')
        .texture('tlhworld:item/sale_license')
        .maxStackSize(1);
    
    event.create('tlhworld:purchase_license')
        .displayName({ translate: 'item.tlhworld.purchanse_license' })
        .parentModel('minecraft:item/generated')
        .texture('tlhworld:item/purchase_license')
        .maxStackSize(1);

    event.create('tlhworld:mehvahdjukaars_foolish')
        .displayName({ translate: 'item.tlhworld.mehvahdjukaars_foolish'})
        .parentModel('minecraft:item/generated')
        .texture('minecraft:item/copper_ingot')
        .tooltip(Component.translatable('item.tlhworld.mehvahdjukaars_foolish.tooltip').color(Color.GRAY).italic())
        .tooltip(Component.translatable('item.tlhworld.mehvahdjukaars_foolish.tooltip1').color(Color.GRAY).italic())
        .tooltip(Component.translatable('item.tlhworld.mehvahdjukaars_foolish.tooltip2').color(Color.GRAY).italic())
        .tooltip(Component.translatable('item.tlhworld.mehvahdjukaars_foolish.tooltip3').color(Color.GRAY).italic())
        .tooltip(Component.translatable('item.tlhworld.mehvahdjukaars_foolish.tooltip4').color(Color.GRAY).italic())
        .maxStackSize(1);
})

/**
    * 
    * @param {Item} event 
    * @param {string} id 
    * @param {string} texture 
    * @param {string} uncompletedTexture 
    */
const createMechanism = (event, id, texture, incompleteTexture) => {
    event.create('tlhworld:' + id)
        .displayName({ translate: ('item.tlhworld.' + id) })
        .parentModel('create:item/incomplete_precision_mechanism')
        .textures({'layer0': texture})
    
    event.create('tlhworld:incomplete_' + id, 'create:sequenced_assembly')
        .displayName({ translate: ('item.tlhworld.incomplete_' + id) })
        .parentModel('create:item/precision_mechanism')
        .textures({'layer0': incompleteTexture})
}