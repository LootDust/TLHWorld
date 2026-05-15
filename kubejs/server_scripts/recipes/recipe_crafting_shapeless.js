ServerEvents.recipes(event => {
    // Basics
    event.shapeless(Item.of('minecraft:rooted_dirt'), ['minecraft:dirt', 'minecraft:stick', 'minecraft:stick', 'minecraft:stick']);
    event.shapeless(Item.of('minecraft:yellow_dye'), ['mekanism:dust_gold']);

    // TLH Island专属
    event.shapeless(Item.of('tlhworld:mehvahdjukaars_foolish'), ['minecraft:copper_block', 'minecraft:exposed_copper', 'minecraft:weathered_copper', 'minecraft:oxidized_copper',
        'minecraft:copper_ingot', 'minecraft:waxed_copper_block', 'minecraft:waxed_exposed_copper', 'minecraft:waxed_weathered_copper', 'minecraft:waxed_oxidized_copper'
    ]);

    // 普轴配方重写
    event.shapeless(Item.of('createadditionallogistics:lazy_cogwheel'), ['#createadditionallogistics:basic_shafts', '#minecraft:planks']);
    event.shapeless(Item.of('createadditionallogistics:lazy_large_cogwheel'), ['#createadditionallogistics:basic_shafts', '#minecraft:planks', '#minecraft:planks']);

    // 懒轴与普轴转换
    event.shapeless('createadditionallogistics:lazy_shaft', ['create:shaft']);
    event.shapeless('createadditionallogistics:lazy_cogwheel', ['create:cogwheel']);
    event.shapeless('createadditionallogistics:lazy_large_cogwheel', ['create:large_cogwheel']);
    event.shapeless('create:shaft', ['createadditionallogistics:lazy_shaft']);
    event.shapeless('create:cogwheel', ['createadditionallogistics:lazy_cogwheel']);
    event.shapeless('create:large_cogwheel', ['createadditionallogistics:lazy_large_cogwheel']);

    // Mod: Create
    event.shapeless(Item.of('create:depot'), ['createdeco:andesite_sheet', 'create:andesite_casing']);
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "type": "neoforge:components",
                "items": [ "tacz:modern_kinetic_gun"],
                "components": {
                    "minecraft:custom_data": {
                        "GunId":"create_armorer:special_melee_wrench"
                    }
                }
            }
        ],
        "result": {
            "id": "create:wrench"
        }
    });
    
    // Mod: Create Compression
    from9xCompressed(event, 'createcompression:compressed_raw_zinc', 'create:raw_zinc_block');
    from9xCompressed(event, 'createcompression:compressed_raw_tin', 'create_ironworks:raw_tin_block');
    from9xCompressed(event, 'createcompression:compressed_tin', 'create_ironworks:tin_block');

    // Mod: Create Diesel Generators
    event.shapeless(Item.of('createdieselgenerators:wood_chip', 9), ['createdieselgenerators:chip_wood_block']);

    // Mod: Create Sifting
    event.shapeless(Item.of('minecraft:cobblestone'), ['createsifter:stone_pebble', 'createsifter:stone_pebble', 'createsifter:stone_pebble', 'createsifter:stone_pebble']);
    event.shapeless(Item.of('minecraft:andesite'), ['createsifter:andesite_pebble', 'createsifter:andesite_pebble', 'createsifter:andesite_pebble', 'createsifter:andesite_pebble']);
    event.shapeless(Item.of('minecraft:granite'), ['createsifter:granite_pebble', 'createsifter:granite_pebble', 'createsifter:granite_pebble', 'createsifter:granite_pebble']);
    event.shapeless(Item.of('minecraft:diorite'), ['createsifter:diorite_pebble', 'createsifter:diorite_pebble', 'createsifter:diorite_pebble', 'createsifter:diorite_pebble']);
    event.shapeless(Item.of('minecraft:tuff'), ['createsifter:tuff_pebble', 'createsifter:tuff_pebble', 'createsifter:tuff_pebble', 'createsifter:tuff_pebble']);
    event.shapeless(Item.of('minecraft:calcite'), ['createsifter:calcite_pebble', 'createsifter:calcite_pebble', 'createsifter:calcite_pebble', 'createsifter:calcite_pebble']);
    event.shapeless(Item.of('minecraft:basalt'), ['createsifter:basalt_pebble', 'createsifter:basalt_pebble', 'createsifter:basalt_pebble', 'createsifter:basalt_pebble']);
    event.shapeless(Item.of('minecraft:blackstone'), ['createsifter:blackstone_pebble', 'createsifter:blackstone_pebble', 'createsifter:blackstone_pebble', 'createsifter:blackstone_pebble']);
    
    // Mod: Homeostatic
    event.shapeless(Item.of('homeostatic:water_filter', 2), ['minecraft:paper', 'minecraft:charcoal'])
    event.shapeless(Item.of('homeostatic:water_filter', 3), ['minecraft:paper', 'mekanism:dust_charcoal'])

    // Mod: Supplementaries
    event.shapeless(Item.of('supplementaries:ash', 4), ['regions_unexplored:ash']);

    // Mod: TaCZ
    event.shapeless(Item.of('tacz:ammo[minecraft:custom_data={"AmmoId":"tacz:9mm"}]', 10), ['minecraft:gunpowder', 'create:copper_nugget', 'create:copper_nugget']);
    event.shapeless(Item.of('tacz:ammo[minecraft:custom_data={"AmmoId":"tacz:45_70"}]', 4), ['minecraft:gunpowder', 'create:copper_sheet', 'create:copper_nugget']);
    event.shapeless(Item.of('tacz:modern_kinetic_gun[minecraft:custom_data={"GunFireMode":"SEMI","HasBulletInBarrel":1,"GunId":"create_armorer:special_melee_wrench","GunCurrentAmmoCount":1}]'), ['create:wrench']);  
})

/**
 * 
 * @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Original} event 
 * @param {import("@package/net/minecraft/world/item").$ItemStack_} storageBlock 
 * @param {import("@package/net/minecraft/world/item").$ItemStack_} material 
 */
const fromStorageBlock = (event, storageBlock, material) => {
    event.shapeless(Item.of(material, 9), [storageBlock]);
}

/**
 * 
 * @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Original} event 
 * @param {import("@package/net/minecraft/world/item").$ItemStack_} storageBlock 
 * @param {import("@package/net/minecraft/world/item").$ItemStack_} material 
 */
const from9xCompressed = (event, storageBlock, material) => {
    fromStorageBlock(event, storageBlock + "_1x", material);
    for(let i = 2; i < 10; i++) {
        fromStorageBlock(event, storageBlock + "_" + i.toString() + "x", storageBlock + "_" + (i - 1).toString() + "x");
    }
}
