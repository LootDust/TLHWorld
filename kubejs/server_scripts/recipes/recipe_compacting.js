ServerEvents.recipes(event => {
    event.recipes.create.compacting(Item.of('ae2:certus_quartz_crystal'), ['ae2:certus_quartz_dust', 'ae2:certus_quartz_dust', 'ae2:certus_quartz_dust', 'ae2:certus_quartz_dust']);

    event.recipes.create.compacting(Item.of('minecraft:stick', 64).withCustomName(Component.literal('棍木')), ['tlhworld:mehvahdjukaars_foolish']);

    event.recipes.create.compacting(Item.of('luncheonmeatsdelight:luncheon_meat', 4), [Fluid.of('luncheonmeatsdelight:flesh_mud', 250)]).heated();
    event.recipes.create.compacting(Item.of('luncheonmeatsdelight:fry_luncheon_meat', 4), [Fluid.of('luncheonmeatsdelight:flesh_mud', 250)]).superheated();
})
