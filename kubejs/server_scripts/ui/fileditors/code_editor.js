/// <reference path="../../../startup_scripts/.reference.js"/>

let path = '';
let code_holder = [''];

NetworkEvents.dataReceived('tlh:codes', event => {
    let data = event.getData();
    path = data.getString('path');
    let lines = [];
    data.getList('lines', 8).forEach((tag) => {
        lines.push(tag.getAsString());
    })
    code_holder = lines;
})

LDLib2UI.player('tlh:code_editor', event => {
    const { player } = event;

    let ui = UIResource.INSTANCE.getResourceInstance().getResource('file(./ldlib2/assets/tlh/resources/editors/code_editor.ui.nbt)').createUI();

    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Label").$Label$$Original} */
    let lblPath = ui.selectId('lbl_path').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.codeeditor.CodeEditor").$CodeEditor$$Original} */
    let editor = ui.selectId('code_editor').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Button").$Button$$Original} */
    let btnCancel = ui.selectId('btn_cancel').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Button").$Button$$Original} */
    let btnSave = ui.selectId('btn_save').findFirst().orElse(null);

    if (btnSave != null) {
    }
    if (editor != null) {
        path = player.getForgePersistentData().getString('tlh:editing_file');
        let lines = FilesJS.readLines(path);
        code_holder = lines;
        player.sendData('tlh:codes', {'path': path, 'lines': lines});
    }

    if (btnSave != null && path != '') {
        
    }

    event.modularUI = ModularUI.of(ui);
})