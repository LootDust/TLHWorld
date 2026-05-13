ServerEvents.recipes(event => {
    // Basics
    event.shaped(Item.of('minecraft:tuff'), [
        "AB",
        "BA"
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:gravel'
    });
    event.shaped(Item.of('create:andesite_alloy'), [
        "AB",
        "BA"
    ], {
        A: 'create_ironworks:tin_nugget',
        B: 'minecraft:andesite'
    });
    event.shaped(Item.of('minecraft:campfire'), [
        " S ",
        "SCS",
        "WWW"
    ], {
        S: 'minecraft:stick',
        C: 'mekanism:dust_charcoal',
        W: '#minecraft:logs'
    });

    // 普轴配方重写
    event.shaped(Item.of('createadditionallogistics:lazy_shaft', 8), [
        "A",
        "A"
    ], {
        A: 'create:andesite_alloy'
    });

    event.shaped(Item.of('create_connected:crank_wheel'), [
        "PPP",
        "PAP",
        "PPP"
    ], {
        P: '#minecraft:planks',
        A: 'minecraft:andesite'
    });

    // 合金粉制取
    event.shaped(Item.of('mekanism:dust_bronze', 2), [
        "AB",
        "BA"
    ], {
        A: 'mekanism:dust_copper',
        B: 'mekanism:dust_tin'
    });

    // Mod: Minecraft
    event.shaped(Item.of('minecraft:jukebox'), [
        "WWW",
        "WBW",
        "WWW"
    ], {
        W: '#minecraft:planks',
        B: 'create_ironworks:bronze_ingot'
    });
    event.shaped(Item.of('minecraft:shears'), [
        " S",
        "TS"
    ], {
        S: 'createdeco:andesite_sheet',
        T: 'create_ironworks:tin_ingot'
    });

    // Mod: Create
    event.shaped(Item.of('create:chute', 4), [
        "S",
        "I",
        "S"
    ], {
        I: 'create:andesite_alloy',
        S: 'createdeco:andesite_sheet'
    });
    event.shaped(Item.of('create:whisk'), [
        " A ",
        "SAS",
        "SSS"
    ], {
        A: 'create:andesite_alloy',
        S: 'createdeco:andesite_sheet'
    });
    event.shaped(Item.of('create:propeller'), [
        " S ",
        "SAS",
        " S "
    ], {
        A: 'create:andesite_alloy',
        S: 'createdeco:andesite_sheet'
    });
    event.shaped(Item.of('create:basin'), [
        "S S",
        "SSS"
    ], {
        S: 'createdeco:andesite_sheet'
    });
    event.shaped(Item.of('create:wrench'), [
        "PP ",
        "PC ",
        " S "
    ], {
        P: 'create:brass_sheet',
        C: 'create:cogwheel',
        S: 'createaddition:copper_rod'
    });
    event.shaped(Item.of('create:mechanical_crafter', 3), [
        "E",
        "B",
        "C"
    ], {
        E: 'create:electron_tube',
        B: 'create:brass_casing',
        C: 'minecraft:crafter'
    });

    // Mod: Create Compression
    to9xCompressed(event, 'createcompression:compressed_raw_zinc', 'create:raw_zinc_block');
    to9xCompressed(event, 'createcompression:compressed_raw_tin', 'create_ironworks:raw_tin_block');
    to9xCompressed(event, 'createcompression:compressed_tin', 'create_ironworks:tin_block');

    // Mod: Create Diesel Generators
    event.shaped(Item.of('createdieselgenerators:chip_wood_block'), [
        "CCC",
        "CCC",
        "CCC"
    ], {
        C: 'createdieselgenerators:wood_chip'
    });
    event.shaped(Item.of('createdieselgenerators:chip_wood_beam', 3), [
        "C",
        "C"
    ], {
        C: 'createdieselgenerators:chip_wood_block'
    });
    event.shaped(Item.of('createdieselgenerators:chip_wood_stairs', 4), [
        "C ",
        "CC"
    ], {
        C: 'createdieselgenerators:chip_wood_block'
    });
    event.shaped(Item.of('createdieselgenerators:chip_wood_slab', 6), [
        "CC"
    ], {
        C: 'createdieselgenerators:chip_wood_block'
    });
    event.shaped(Item.of('createdieselgenerators:hammer[minecraft:unbreakable={}]'), [
        "TAT",
        "ASA",
        "SAT"
    ], {
        A: 'create:andesite_alloy',
        T: 'create_ironworks:tin_ingot',
        S: 'minecraft:stick'
    });
    event.shaped(Item.of('createdieselgenerators:wire_cutters[minecraft:unbreakable={}]'), [
        " A ",
        "PSA",
        " P "
    ], {
        P: '#minecraft:planks',
        A: 'create:andesite_alloy',
        S: 'minecraft:shears'
    });
    event.shaped(Item.of('createdieselgenerators:basin_lid'), [
        " A ",
        "SSS"
    ], {
        A: 'create:andesite_alloy',
        S: 'createdeco:andesite_sheet'
    });

    // Mod: Create Mechanical Extruder
    event.shaped(Item.of('create_mechanical_extruder:mechanical_extruder'), [
        "ASA",
        "GCG",
        "APA"
    ], {
        A: 'createdeco:andesite_sheet',
        P: 'create_ironworks:tin_sheet',
        C: 'create:andesite_casing',
        S: 'create:shaft',
        G: 'minecraft:glass_pane'
    });

    // Mod: Create Sifting
    event.shaped(Item.of('createsifter:string_mesh'), [
        "SMS",
        "MMM",
        "SMS"
    ], {
        S: 'minecraft:stick',
        M: 'minecraft:string'
    });
    event.shaped(Item.of('createsifter:tin_mesh'), [
        "SMS",
        "MMM",
        "SMS"
    ], {
        S: 'minecraft:stick',
        M: 'create_ironworks:tin_sheet'
    });
    event.shaped(Item.of('createsifter:andesite_mesh'), [
        "SMS",
        "MMM",
        "SMS"
    ], {
        S: 'minecraft:stick',
        M: 'createdeco:andesite_sheet'
    });
    event.shaped(Item.of('createsifter:copper_mesh'), [
        "SMS",
        "MMM",
        "SMS"
    ], {
        S: 'minecraft:stick',
        M: 'create:copper_sheet'
    });
    /*
    event.shaped(Item.of('createsifter:bronze_mesh'), [
        "SMS",
        "MMM",
        "SMS"
    ], {
        S: 'minecraft:stick',
        M: 'create_ironworks:bronze_sheet'
    })
    */
    event.shaped(Item.of('createsifter:zinc_mesh'), [
        "SMS",
        "MMM",
        "SMS"
    ], {
        S: 'minecraft:stick',
        M: 'createdeco:zinc_sheet'
    });
    event.shaped(Item.of('createsifter:sifter'), [
        "WIW",
        "SWS",
        " A "
    ], {
        W: '#minecraft:planks',
        I: 'create_ironworks:tin_ingot',
        S: 'minecraft:stick',
        A: 'minecraft:andesite'
    });

    // Mod: Net Music
    event.shaped(Item.of('netmusic:music_player'), [
        " RN",
        "BCB"
    ], {
        B: 'create_ironworks:bronze_ingot',
        C: 'create:brass_casing',
        R: 'createaddition:brass_rod',
        N: "minecraft:note_block"
    });
    event.shaped(Item.of('netmusic:cd_burner'), [
        " L ",
        "IRI",
        "BCB"
    ], {
        B: 'create_ironworks:bronze_ingot',
        C: 'create:brass_casing',
        I: 'create:iron_sheet',
        R: 'minecraft:redstone',
        L: "minecraft:lightning_rod"
    });
    event.shaped(Item.of('netmusic:computer'), [
        "GGG",
        "LEC",
        "BPB"
    ], {
        B: 'create:brass_casing',
        L: 'ae2:logic_processor',
        C: 'ae2:calculation_processor',
        E: 'ae2:engineering_processor',
        P: 'create:precision_mechanism',
        G: Ingredient.of(['minecraft:glass_pane', 'create:framed_glass_pane'])
    });
    event.shaped(Item.of('netmusic:big_megaphone'), [
        " B ",
        "BEB",
        "N C"
    ], {
        B: 'create_ironworks:bronze_ingot',
        C: 'create:brass_casing',
        E: 'create:electron_tube',
        N: "minecraft:note_block"
    });

    // Mod: Regions Unexplored
    event.shaped(Item.of('regions_unexplored:raw_redstone_block', 2), [
        "PP",
        "PP"
    ], {
        P: 'regions_unexplored:pointed_redstone'
    })
    event.shaped(Item.of('regions_unexplored:ash'), [
        "AA",
        "AA"
    ], {
        A: 'supplementaries:ash'
    })
    
    // Mod: Sophisticated Backpacks
    event.shaped(Item.of('sophisticatedbackpacks:backpack'), [
        "TLT",
        "TCT",
        "AAA"
    ], {
        T: 'create_ironworks:tin_sheet',
        L: 'minecraft:leather',
        C: '#c:chests/wooden',
        A: 'create:andesite_alloy'
    });

    // Mod: TaCZ
    event.shaped(Item.of('tacz:modern_kinetic_gun[minecraft:custom_data={"GunFireMode":"SEMI","GunId":"tacz:springfield1873","GunCurrentAmmoCount":0}]'), [
        "IIB",
        " PW"
    ], {
        B: 'create_ironworks:bronze_ingot',
        I: 'minecraft:iron_ingot',
        P: '#minecraft:planks',
        W: '#minecraft:logs'
    });
    event.shaped(Item.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:0,GunFireMode:"BURST",GunId:"tacz:b93r",HasBulletInBarrel:0b}]'), [
        "TTB",
        "AAP"
    ], {
        T: 'create_ironworks:tin_ingot',
        B: 'create_ironworks:bronze_ingot',
        A: 'create:andesite_alloy',
        P: '#minecraft:planks'
    });

    // Mod: Touhou Little Maid
    event.shaped(Item.of('touhou_little_maid:hakurei_gohei'), [
        "  C",
        " SP",
        "S P"
    ], {
        C: 'ae2:certus_quartz_crystal',
        S: 'minecraft:stick',
        P: 'minecraft:paper'
    });
})

/**
 * 
 * @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Original} event 
 * @param {StringJS} storageBlock 
 * @param {import("net.minecraft.world.item.ItemStack").$ItemStack$$Type} material 
 */
const toStorageBlock = (event, storageBlock, material) => {
    event.shaped(Item.of(storageBlock), [
        "MMM",
        "MMM",
        "MMM"
    ], {
        M: material
    });
}

/**
 * 
 * @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Original} event 
 * @param {StringJS} storageBlock 
 * @param {import("net.minecraft.world.item.ItemStack").$ItemStack$$Type} material 
 */
const to9xCompressed = (event, storageBlock, material) => {
    toStorageBlock(event, storageBlock + "_1x", material);
    for(let i = 2; i < 10; i++) {
        toStorageBlock(event, storageBlock + "_" + i.toString() + "x", storageBlock + "_" + (i - 1).toString() + "x");
    }
}