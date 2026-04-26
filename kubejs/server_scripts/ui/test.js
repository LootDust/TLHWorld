LDLib2UI.player('tlh:test', event => {
    const { player } = event;

    let ui = UIResource.INSTANCE.getResourceInstance().getResource('file(./ldlib2/assets/tlh/resources/test.ui.nbt)').createUI();

    let lbl = ui.selectId('lbl').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Button").$Button$$Original} */
    let btnClear = ui.selectId('btn_Clear').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Button").$Button$$Original} */
    let btnSave = ui.selectId('btn_save').findFirst().orElse(null);

    if (btnClear != null) {
        btnClear.setOnClick(event => {
            player.sendSystemMessage(Component.literal('server-script: onClick'));
        })
        btnClear.setOnServerClick(event => {
            player.sendSystemMessage(Component.literal('server-script: onServerClick'));
        })
    }
    
    event.modularUI = ModularUI.of(ui);
})