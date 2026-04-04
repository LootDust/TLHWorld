//const { $ArrayList } = require("java.util.ArrayList");
/*
let $Collectors = Java.loadClass("java.util.stream.Collectors");
let $ArrayList = Java.loadClass("java.util.ArrayList");
let $Stylesheet = Java.loadClass("com.lowdragmc.lowdraglib2.gui.ui.style.Stylesheet");
let $UI = Java.loadClass("com.lowdragmc.lowdraglib2.gui.ui.UI");

LDLib2UI.player("tlhisland:add_recipe_craft_shaped", event => {

    let stylesheet = StylesheetManager.INSTANCE.getStylesheetSafe('ldlib2:lss/mc.lss');

    var list = Array.of(stylesheet);

    event.modularUI = ModularUI.of($UI.of(new UIElement().addClass('panel_bg').layout(layout => layout.paddingAll(7).flex(1)).addChildren(
        new Label().setText(Component.translatable('container.tlhisland.add_recipe_craft_shaped').font('minecraft:uniform')),
        new UIElement().layout(layout => layout.alignItems('center').setFlexDirection('row').left(-11)).addChildren(
            new UIElement().layout(layout => layout.setFlexDirection('column')).addChildren(
                new UIElement().layout(layout => layout.setFlexDirection('row')).addChildren(
                    new ItemSlot(),
                    new ItemSlot(),
                    new ItemSlot()
                ),
                new UIElement().layout(layout => layout.setFlexDirection('row')).addChildren(
                    new ItemSlot(),
                    new ItemSlot(),
                    new ItemSlot()
                ),
                new UIElement().layout(layout => layout.setFlexDirection('row')).addChildren(
                    new ItemSlot(),
                    new ItemSlot(),
                    new ItemSlot()
                )
            ),
            new UIElement().layout(layout => layout.height(17).width(24).top(18).left(6)).style(style => style.background(SpriteTexture.of('tlhisland:textures/gui/progress_arrow_empty'))),
            new ItemSlot().layout(layout => layout.top(18).left(16)).style(style => style.background(SpriteTexture.of('tlhisland:textures/gui/crafting_output').scale(1.44)))
        ),
        new Label().setText(Component.translatable('container.inventory').font('minecraft:uniform')),
        new InventorySlots()
    ), list), event.player);
})*/

LDLib2UI.player('tlhisland:recipebuilder_craft_shaped', event => {
    let ui = UI.of(XmlUtils.loadXml('tlhisland:recipebuilder_craft_shaped.xml'));

    let uiLabel = ui.selectId('uiLbl').findFirst().orElse(null);
    let invLabel = ui.selectId('invLbl').findFirst().orElse(null);

    let confirmButton = ui.selectId('confirmBtn').findFirst().orElse(null);

    let item0 = ui.selectId('item0').findFirst().orElse(null);
    let item1 = ui.selectId('item1').findFirst().orElse(null);
    let item2 = ui.selectId('item2').findFirst().orElse(null);
    let item3 = ui.selectId('item3').findFirst().orElse(null);
    let item4 = ui.selectId('item4').findFirst().orElse(null);
    let item5 = ui.selectId('item5').findFirst().orElse(null);
    let item6 = ui.selectId('item6').findFirst().orElse(null);
    let item7 = ui.selectId('item7').findFirst().orElse(null);
    let item8 = ui.selectId('item8').findFirst().orElse(null);
    let item9 = ui.selectId('item9').findFirst().orElse(null);

    uiLabel.setText(Component.translatable('container.tlhisland.recipebuilder_craft_shaped').color(Color.GRAY));
    invLabel.setText(Component.translatable('container.inventory').color(Color.GRAY));

    confirmButton.setText(Component.translatable('button.tlhisland.recipebuilder_confirm'));

    event.modularUI = ModularUI.of(ui);
})