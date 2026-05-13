ServerEvents.recipes(event => {

    // Mod: Create Crafts & Additions
    event.recipes.create.mixing([Output.of('createaddition:biomass', 0.8), Output.of('createaddition:biomass', 0.2)], ['createdieselgenerators:wood_chip']);
    // Mod: Create Diesel Generators


    // Mod: Create Sifting
    event.recipes.create.mixing([Output.of('minecraft:cobblestone'), Output.of('minecraft:cobblestone', 0.2)], ['createsifter:stone_pebble', 'createsifter:stone_pebble', 'createsifter:stone_pebble', 'createsifter:stone_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:andesite'), Output.of('minecraft:andesite', 0.2)], ['createsifter:andesite_pebble', 'createsifter:andesite_pebble', 'createsifter:andesite_pebble', 'createsifter:andesite_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:granite'), Output.of('minecraft:granite', 0.2)], ['createsifter:granite_pebble', 'createsifter:granite_pebble', 'createsifter:granite_pebble', 'createsifter:granite_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:diorite'), Output.of('minecraft:diorite', 0.2)], ['createsifter:diorite_pebble', 'createsifter:diorite_pebble', 'createsifter:diorite_pebble', 'createsifter:diorite_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:tuff'), Output.of('minecraft:tuff', 0.2)], ['createsifter:tuff_pebble', 'createsifter:tuff_pebble', 'createsifter:tuff_pebble', 'createsifter:tuff_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:calcite'), Output.of('minecraft:calcite', 0.2)], ['createsifter:calcite_pebble', 'createsifter:calcite_pebble', 'createsifter:calcite_pebble', 'createsifter:calcite_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:basalt'), Output.of('minecraft:basalt', 0.2)], ['createsifter:basalt_pebble', 'createsifter:basalt_pebble', 'createsifter:basalt_pebble', 'createsifter:basalt_pebble']);
    event.recipes.create.mixing([Output.of('minecraft:blackstone'), Output.of('minecraft:blackstone')], ['createsifter:blackstone_pebble', 'createsifter:blackstone_pebble', 'createsifter:blackstone_pebble', 'createsifter:blackstone_pebble']);
    
    // Mod: Kalaidoscope Cookery
    //event.recipes.create.mixing(Item.of('kaleidoscope_cookery:raw_dough'), [Fluid.of('homeostatic:purified_water', 125), 'kaleidoscope_cookery:flour'])
})