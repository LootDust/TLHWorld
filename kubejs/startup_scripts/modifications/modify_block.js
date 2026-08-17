BlockEvents.modification(event => {
    event.modify('createnuclear:reactor_casing', block => {
        block.destroySpeed = 60.0;
    })
})
