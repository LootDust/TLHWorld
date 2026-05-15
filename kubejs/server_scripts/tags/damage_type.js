ServerEvents.tags('damage_type', event => {
    event.add("minecraft:bypass_invulnerability", [
        'apotheosis_modern_ragnarok:bullet_fire',
        'apotheosis_modern_ragnarok:bullet_ice',
        'apotheosis_modern_ragnarok:bullet_iceandfire'
    ])

    event.add("twilightforest:breaks_lich_shields", [
        'apotheosis_modern_ragnarok:bullet_iceandfire',
        'apotheosis_modern_ragnarok:execution'
    ])
})
