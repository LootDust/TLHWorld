import { Item } from "@side-only/startup/events/registry";

StartupEvents.registry("item", event => {
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
    
    event.create('tlhworld:incomplete_' + id)
        .displayName({ translate: ('item.tlhworld.incomplete_' + id) })
        .parentModel('create:item/precision_mechanism')
        .textures({'layer0': incompleteTexture})
}