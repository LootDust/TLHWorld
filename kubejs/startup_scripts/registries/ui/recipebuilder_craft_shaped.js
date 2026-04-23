/// <reference path="../../.reference.js"/>

LDLib2UI.player('tlhworld:recipebuilder_craft_shaped', event => {
    let player = event.player;

    /** @type {$ItemStackHandler} */
    let itemHandler = new $ItemStackHandler();

    itemHandler.setSize(10);

    let ui = UI.of(XmlUtils.loadXml('tlhworld:recipebuilder_craft_shaped.xml'));

    let uiLabel = ui.selectId('uiLbl').findFirst().orElse(null);
    let invLabel = ui.selectId('invLbl').findFirst().orElse(null);

    /** @type {$Button} */
    let confirmButton = ui.selectId('confirmBtn').findFirst().orElse(null);
    /** @type {$Button} */
    let cancelButton = ui.selectId('cancelBtn').findFirst().orElse(null);

    let input1Ele = ui.selectId('input1Ele').findFirst().orElse(null);
    let input2Ele = ui.selectId('input2Ele').findFirst().orElse(null);
    let input3Ele = ui.selectId('input3Ele').findFirst().orElse(null);
    let outputEle = ui.selectId('outputEle').findFirst().orElse(null);
    let invEle = ui.selectId('invEle').findFirst().orElse(null);

    let itemSlots = [];
    for (let i = 0; i < 10; i++) {
        itemSlots[i] = new ItemSlot();
    }

    let invSlots = new InventorySlots();

    uiLabel.setText(Component.translatable('container.tlhworld.recipebuilder_craft_shaped').color(Color.GRAY));
    invLabel.setText(Component.translatable('container.inventory').color(Color.GRAY));

    confirmButton.setText(Component.translatable('button.tlhworld.recipebuilder_confirm'));
    cancelButton.setText(Component.translatable('button.tlhworld.recipebuilder_cancel'));

    let recipeId = player.persistentData.getCompound('tlhData').getCompound('operatorData').getCompound('recipebuilderData').getString('recipeId');
    let recipe = player.persistentData.getCompound('tlhData').getCompound('operatorData').getCompound('recipebuilderData');
    if (recipe != null) {
        let ingredients = recipe.getList('ingredients', 8);
        for (let i = 0; i < Math.min(ingredients.size(), itemHandler.getSlots()); i++) {
            itemHandler.setStackInSlot(i, Item.of(ingredients.getString(i)));
        }
        let output = Item.of(recipe.getString('result'));
        itemHandler.setStackInSlot(9, output);
    }
    
    itemSlots[9].layout(layout => layout.top(18).left(16)).style(style => style.background(SpriteTexture.of('tlhworld:textures/gui/crafting_output.png').scale(1.44)));

    itemSlots.forEach((slot, index, array) => {
        slot.bind(new ItemHandlerSlot(itemHandler, index));
    });

    confirmButton.setOnClick(event => {
        itemSlots.forEach((slot, index, array) => {
            player.sendSystemMessage(Component.literal('ItemSlot'+ index.toString() + ': ' + slot.getSlot().getItem().getDisplayName().getString()));
        });
    })
    confirmButton.setOnServerClick(event => {
        if (recipe == null || itemSlots[9].getSlot().getItem() == Item.of('minecraft:air')) {
            event.stopImmediatePropagation;
            return;
        }
        let newResult = itemSlots[9].getSlot().getItem().toStringJS();
        let newIngredientList = [];
        if (itemSlots[2].getSlot().getItem() == Item.of('minecraft:air')
            && itemSlots[5].getSlot().getItem() == Item.of('minecraft:air')
            && itemSlots[6].getSlot().getItem() == Item.of('minecraft:air')
            && itemSlots[7].getSlot().getItem() == Item.of('minecraft:air')
            && itemSlots[8].getSlot().getItem() == Item.of('minecraft:air')) {
            newIngredientMap = [
                dissolveIngredient(itemSlots[0].getSlot().getItem()),
                dissolveIngredient(itemSlots[1].getSlot().getItem()),
                dissolveIngredient(itemSlots[3].getSlot().getItem()),
                dissolveIngredient(itemSlots[4].getSlot().getItem()),
            ]
        } else {
            newIngredientMap = [
                dissolveIngredient(itemSlots[0].getSlot().getItem()),
                dissolveIngredient(itemSlots[1].getSlot().getItem()),
                dissolveIngredient(itemSlots[2].getSlot().getItem()),
                dissolveIngredient(itemSlots[3].getSlot().getItem()),
                dissolveIngredient(itemSlots[4].getSlot().getItem()),
                dissolveIngredient(itemSlots[5].getSlot().getItem()),
                dissolveIngredient(itemSlots[6].getSlot().getItem()),
                dissolveIngredient(itemSlots[7].getSlot().getItem()),
                dissolveIngredient(itemSlots[8].getSlot().getItem()),
            ]
        }
        let newIngredients = "";
        newIngredientList.forEach(ingredient => {
            newIngredients = newIngredients + " " + ingredient
        })
        player.runCommandSilent("recipebuilder edit " + recipeId + " " + newResult + newIngredients)
    })
    
    input1Ele.addChildren(itemSlots[0], itemSlots[1], itemSlots[2]);
    input2Ele.addChildren(itemSlots[3], itemSlots[4], itemSlots[5]);
    input3Ele.addChildren(itemSlots[6], itemSlots[7], itemSlots[8]);
    outputEle.addChild(itemSlots[9]);
    invEle.addChild(invSlots);

    /*
    let remove_emitter = ui.getRootElement().addRPCEvent(ele => RPCEventBuilder.simple($UIEvent, (event, arg) => {
        /** @type {$ServerPlayer} *//*
        let player = event.modularUI.player;
        for (let i = 0; i < 10; i++) {
            player.getEnderChestInventory().setStackInSlot(i, itemHandler.getStackInSlot(i));
        }
    }))

    ui.getRootElement().addEventListener(UIEvents.REMOVED, event => {
        remove_emitter.send(remove_emitter.event())
    })
    */

    event.modularUI = ModularUI.of(ui, player);
})
/**
 * 
 * @param {import("net.minecraft.world.item.ItemStack").$ItemStack$$Original} item 
 * @returns {StringJS}
 */
const dissolveIngredient = (item) => {
    if (item.getId() == 'ftbfiltersystem:smart_filter') {
        /** @type {String} */
        let filter = item.getComponents().get('ftbfiltersystem:filter');
        if (filter.startsWith('item_tag')) {
            return '#' + filter.split('item_tag(')[1].split(')')[0];
        }
    }
    return item.getId();
}