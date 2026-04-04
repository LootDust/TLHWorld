LDLib2UI.player('tlhisland:ingame_code_editor', event => {
    let ui = UI.of(XmlUtils.loadXml('tlhisland:ingame_code_editor.xml'));

    event.ModularUI(ui);
})