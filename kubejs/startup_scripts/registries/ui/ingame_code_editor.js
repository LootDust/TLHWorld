LDLib2UI.player('tlhworld:ingame_code_editor', event => {
    let ui = UI.of(XmlUtils.loadXml('tlhworld:ingame_code_editor.xml'));

    event.ModularUI(ui);
})