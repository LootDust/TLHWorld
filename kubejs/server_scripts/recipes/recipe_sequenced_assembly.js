ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('tlhworld:andesite_mechanism')
        ],
        'createdeco:andesite_sheet',
        [
            event.recipes.create.cutting('tlhworld:incomplete_andesite_mechanism', 'tlhworld:incomplete_andesite_mechanism'),
            event.recipes.create.deploying('tlhworld:incomplete_andesite_mechanism', ['tlhworld:incomplete_andesite_mechanism', 'create:cogwheel']),
            event.recipes.create.pressing('tlhworld:incomplete_andesite_mechanism', 'tlhworld:incomplete_andesite_mechanism'),
        ]
    )
    .transitionalItem('tlhworld:incomplete_andesite_mechanism')
    .loops(1)
    .id("tlhworld:sequenced_assembly/andesite_mechanism")
})