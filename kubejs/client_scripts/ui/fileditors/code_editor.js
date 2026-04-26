/// <reference path="../../../startup_scripts/.reference.js"/>

/** @import { $StringArray } from "[Ljava.lang.String;" */
const $StringArray = Java.loadClass("[Ljava.lang.String;");
/** @import { $ArrayList } from "java.util.ArrayList" */
const $ArrayList = Java.loadClass("java.util.ArrayList");

let path = '';
let codeHolder = [''];

NetworkEvents.dataReceived('tlh:codes', event => {
    let data = event.getData();
    path = data.getString('path');
    let lines = [];
    data.getList('lines', 8).forEach((tag) => {
        lines.push(tag.getAsString());
    })
    codeHolder = lines;
})

LDLib2UI.player('tlh:code_editor', event => {
    const { player } = event;

    let mCodeHolder = codeHolder;

    let ui = UIResource.INSTANCE.getResourceInstance().getResource('file(./ldlib2/assets/tlh/resources/editors/code_editor.ui.nbt)').createUI();

    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Label").$Label$$Original} */
    let lblPath = ui.selectId('lbl_path').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.codeeditor.CodeEditor").$CodeEditor$$Original} */
    let editor = ui.selectId('code_editor').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Button").$Button$$Original} */
    let btnCancel = ui.selectId('btn_cancel').findFirst().orElse(null);
    /** @type {import("com.lowdragmc.lowdraglib2.gui.ui.elements.Button").$Button$$Original} */
    let btnSave = ui.selectId('btn_save').findFirst().orElse(null);

    if (lblPath != null) {
        lblPath.setText(Component.literal(path));
    }
    if (btnCancel != null) {
        btnCancel.setText(Component.translatable('ui.tlh.common.button.cancel'));
    }
    if (btnSave != null) {
        btnSave.setText(Component.translatable('ui.tlh.common.button.save'));
        btnSave.setOnClick(event => {
            //editor.getValue().forEach((/** @type {String} */line) => {
            //    player.sendSystemMessage(Component.literal(line));
            //})
            player.sendSystemMessage(Component.literal('clicked!'));
            //player.sendSystemMessage(Component.literal(mCodeHolder[0]));
            //player.sendSystemMessage(Component.literal(editor.getValue()[0]));
            let data = editor.getValue();
            let lines = []
            data.forEach((string) => {
                lines.push(string);
            })
            player.sendData('tlh:upload', {'player': player.getUuid().toString(), 'path': path, 'lines': lines});
        })
    }
    if (editor != null) {
        try {
            editor.setValue(codeHolder);
            editor.bind(DataBindingBuilder.create(() => Java.cast($StringArray, mCodeHolder), (value) => mCodeHolder = value).build());
        } catch (err) {
            editor.setValue(['Error occured when reading file:', err.toString()]);
        }
    }

    event.modularUI = ModularUI.of(ui);
})