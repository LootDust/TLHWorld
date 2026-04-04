ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('recipebuilder')
        .requires(source => source.hasPermission(2))
        .then(Commands.literal('add')
            .then(Commands.literal('craft_shaped')
                .executes(ctx => add_recipe_craft_shaped(ctx.source))
            )
        )
        .then(Commands.literal('remove')
            .then(Commands.literal('from')
                .then(Commands.literal('id')
                    .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
                        .executes(ctx => remove_recipe_from_id(ctx.getSource(), Arguments.RESOURCE_LOCATION.getResult(ctx, 'id')))
                    )
                )
                .then(Commands.literal('input')
                    .then(Commands.argument('input', Arguments.RESOURCE_LOCATION.create(event))
                        .executes(ctx => remove_recipe_from_input(ctx.getSource(), Arguments.RESOURCE_LOCATION.getResult(ctx, 'input')))
                    )
                )
                .then(Commands.literal('mod')
                    .then(Commands.argument('modid', Arguments.STRING.create(event))
                        .executes(ctx => remove_recipe_from_mod(ctx.getSource(), Arguments.STRING.getResult(ctx, 'modid')))
                    )
                )
                .then(Commands.literal('output')
                    .then(Commands.argument('output', Arguments.RESOURCE_LOCATION.create(event))
                        .executes(ctx => remove_recipe_from_output(ctx.getSource(), Arguments.RESOURCE_LOCATION.getResult(ctx, 'output')))
                    )
                )
            )
        )
        .then(Commands.literal('edit')
            .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
                .executes(ctx => edit_recipe_from_id(ctx.getSource(), Arguments.RESOURCE_LOCATION.getResult(ctx, 'id')))
            )
        )
    );
})

/**
 * 
 * @param {$CommandSourceStack} player player who executed this command
 * @returns is command success
 */
const add_recipe_craft_shaped = (player) => {
    if (!player.getEntity().isPlayer()) {
        return 0;
    } else {
        LDLib2UIFactory.openPlayerUI(player.getPlayer(), 'tlhisland:add_recipe_craft_shaped');
        return 1;
    }
}


const remove_recipe_froms = (type, source, froms) => {
    try {
        if (!FilesJS.exists('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js')) {
            FilesJS.createFiles('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js', 'ServerEvents.recipes(event => {\n' + '})');
        }
        let lines = FilesJS.readLines('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js');
        if (lines.getFirst() != 'ServerEvents.recipes(event => {' || lines.getLast() != '})') {
            FilesJS.createFiles('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js', 'ServerEvents.recipes(event => {\n' + '})');
            lines = FilesJS.readLines('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js');
        }
        let newlines = [];
        for (let i = 0; i < lines.size() - 1; i++) {
            newlines[i] = lines.get(i);
        }
        
        newlines[lines.size() - 1] = '    event.remove({ ' + type + ': \'' + froms.toString() + '\' });';
        newlines[lines.size()] = '})';
        FilesJS.writeLines('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js', newlines);
        source.sendSuccess(Component.translatable('配方已删除！'), false);
        return 1;
    } catch (error) {
        source.getPlayer().sendSystemMessage(Component.literal('删除配方时出错，请联系相关管理员：'));
        source.getPlayer().sendSystemMessage(Component.literal(error.toString()));
        return 0;
    }
}

const remove_recipe_from_id = (source, id) => {
    let recipe = source.getServer().getRecipeManager().byKey(id).orElse(null);
    if (recipe == null) {
        source.getPlayer().sendSystemMessage(Component.literal('未找到配方！').color(Color.RED));
        return 0;
    }
    return remove_recipe_froms('id', source, id);
}


const remove_recipe_from_input = (source, input) => {
    return remove_recipe_froms('input', source, input);
}


/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {string} modid 
 * @returns 
 */
const remove_recipe_from_mod = (source, modid) => {
    return remove_recipe_froms('modid', source, modid)
    /*
    try {
        if (!FilesJS.exists('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js')) {
            FilesJS.createFiles('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js', 'ServerEvents.recipes(event => {\n' + '})');
        }
        let lines = FilesJS.readLines('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js');
        if (lines.getFirst() != 'ServerEvents.recipes(event => {' || lines.getLast() != '})') {
            FilesJS.createFiles('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js', 'ServerEvents.recipes(event => {\n' + '})');
            lines = FilesJS.readLines('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js');
        }
        let newlines = [];
        for (let i = 0; i < lines.size() - 1; i++) {
            newlines[i] = lines.get(i);
        }
        
        newlines[lines.size() - 1] = '    event.remove({ mod: \'' + modid.toString() + '\' });';
        newlines[lines.size()] = '})';
        FilesJS.writeLines('kubejs/server_scripts/auto_gened/recipes/recipe_removal.js', newlines);
        source.sendSuccess(Component.translatable('commands'), false);
        return 1;
    } catch (error) {
        source.getPlayer().sendSystemMessage(Component.literal('Something wrong'));
        source.getPlayer().sendSystemMessage(Component.literal(error.toString()));
        return 0;
    }*/
}

const remove_recipe_from_output = (source, output) => {
    remove_recipe_froms('output', source, output);
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {string} modid 
 * @returns 
 */
const edit_recipe_from_id = (source, id) => {
    let recipe = source.getServer().getRecipeManager().byKey(id).orElse(null);
    if (recipe == null) {
        source.getPlayer().sendSystemMessage(Component.literal('未找到配方！').color(Color.RED));
        return 0;
    }
    switch (recipe.getType()) {
        case 'minecraft:crafting_shaped':
            return 1;
        default:
            source.getPlayer().sendSystemMessage(Component.literal('此配方类型暂未支持编辑！').color(Color.YELLOW));
            return 0;
    }
}