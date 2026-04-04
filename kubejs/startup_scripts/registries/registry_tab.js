StartupEvents.modifyCreativeTab("createsifter:main", event => {
    event.addAfter("createsifter:string_mesh", "createsifter:tin_mesh")
    event.addAfter("createsifter:andesite_mesh", "createsifter:copper_mesh")
    event.addAfter("createsifter:sturdy_mesh", "createsifter:osmium_mesh")
})

StartupEvents.modifyCreativeTab("kubejs:main", event => {
    event.remove("createsifter:tin_mesh")
    event.remove("createsifter:copper_mesh")
    event.remove("createsifter:osmium_mesh")
})