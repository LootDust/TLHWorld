/// <reference path="../../startup_scripts/.reference.js"/>

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
        .then(Commands.literal('editor')
            .executes(ctx => {
                ctx.getSource().sendSystemMessage(Component.literal('WIP').color(Color.RED));
                return 1;
            })
        )
        .then(Commands.literal('edit')
            .then(Commands.literal('of')
                .then(Commands.literal('crafting_shaped')
                    .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
                        .then(Commands.argument('result', Arguments.STRING.create(event))
                            .then(Commands.argument('ingredient1', Arguments.STRING.create(event))
                                .then(Commands.argument('ingredient2', Arguments.STRING.create(event))
                                    .then(Commands.argument('ingredient3', Arguments.STRING.create(event))
                                        .then(Commands.argument('ingredient4', Arguments.STRING.create(event))
                                            .executes(ctx => edit_recipe_of_crafting_shaped(
                                                ctx.getSource(),
                                                Arguments.RESOURCE_LOCATION.getResult(ctx, 'id'),
                                                Arguments.STRING.getResult(ctx, 'result'),
                                                [
                                                    Arguments.STRING.getResult(ctx, 'ingredient1'),
                                                    Arguments.STRING.getResult(ctx, 'ingredient2'),
                                                    Arguments.STRING.getResult(ctx, 'ingredient3'),
                                                    Arguments.STRING.getResult(ctx, 'ingredient4')
                                                ]
                                            ))
                                            .then(Commands.argument('ingredient5', Arguments.STRING.create(event))
                                                .then(Commands.argument('ingredient6', Arguments.STRING.create(event))
                                                    .then(Commands.argument('ingredient7', Arguments.STRING.create(event))
                                                        .then(Commands.argument('ingredient8', Arguments.STRING.create(event))
                                                            .then(Commands.argument('ingredient9', Arguments.STRING.create(event))
                                                                .executes(ctx => edit_recipe_of_crafting_shaped(
                                                                    ctx.getSource(),
                                                                    Arguments.RESOURCE_LOCATION.getResult(ctx, 'id'),
                                                                    Arguments.STRING.getResult(ctx, 'result'),
                                                                    [
                                                                        Arguments.STRING.getResult(ctx, 'ingredient1'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient2'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient3'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient4'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient5'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient6'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient7'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient8'),
                                                                        Arguments.STRING.getResult(ctx, 'ingredient9')
                                                                    ]
                                                                ))
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
        /*
        .then(Commands.literal('edit')
            .then(Commands.argument('type', Arguments.RESOURCE_LOCATION.create(event))
                .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
                    .executes(ctx => edit_recipe_from_id(ctx.getSource(), Arguments.RESOURCE_LOCATION.getResult(ctx, 'id')))
                    .then(Commands.argument('result', Arguments.STRING.create(event))
                        .then(Commands.argument('ingredient1', Arguments.STRING.create(event))
                            .then(Commands.argument('ingredient2', Arguments.STRING.create(event))
                                .then(Commands.argument('ingredient3', Arguments.STRING.create(event))
                                    .then(Commands.argument('ingredient4', Arguments.STRING.create(event))
                                        .executes(ctx => serialization_craft_shaped(
                                            Arguments.RESOURCE_LOCATION.getResult(ctx, 'id'),
                                            Arguments.STRING.getResult(ctx, 'result'),
                                            [ "AB", "CD" ],
                                            {
                                                "A": Arguments.STRING.getResult(ctx, 'ingredient1'),
                                                "B": Arguments.STRING.getResult(ctx, 'ingredient2'),
                                                "C": Arguments.STRING.getResult(ctx, 'ingredient3'),
                                                "D": Arguments.STRING.getResult(ctx, 'ingredient4')
                                            }
                                        ))
                                        .then(Commands.argument('ingredient5', Arguments.STRING.create(event))
                                            .then(Commands.argument('ingredient6', Arguments.STRING.create(event))
                                                .then(Commands.argument('ingredient7', Arguments.STRING.create(event))
                                                    .then(Commands.argument('ingredient8', Arguments.STRING.create(event))
                                                        .then(Commands.argument('ingredient9', Arguments.STRING.create(event))
                                                            .executes(ctx => serialization_craft_shaped(
                                                                Arguments.RESOURCE_LOCATION.getResult(ctx, 'id'),
                                                                Arguments.STRING.getResult(ctx, 'result'),
                                                                [ "ABC", "CDE", "FGI" ],
                                                                {
                                                                    "A": Arguments.STRING.getResult(ctx, 'ingredient1'),
                                                                    "B": Arguments.STRING.getResult(ctx, 'ingredient2'),
                                                                    "C": Arguments.STRING.getResult(ctx, 'ingredient3'),
                                                                    "D": Arguments.STRING.getResult(ctx, 'ingredient4'),
                                                                    "E": Arguments.STRING.getResult(ctx, 'ingredient5'),
                                                                    "F": Arguments.STRING.getResult(ctx, 'ingredient6'),
                                                                    "G": Arguments.STRING.getResult(ctx, 'ingredient7'),
                                                                    "H": Arguments.STRING.getResult(ctx, 'ingredient8'),
                                                                    "I": Arguments.STRING.getResult(ctx, 'ingredient9')
                                                                }
                                                            ))
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )*/
    );
})


const add_recipe_craft_shaped = (source) => {
    if (!source.getEntity().isPlayer()) {
        source.sendSystemMessage(Component.translatable('permissions.requires.player').color(Color.RED)); // 需要一名玩家来执行此命令
        return 0;
    } else {
        source.getEntity()
        return 1;
    }
}

/**
 * 
 * @param {$ResourceLocation} type 待删除的配方类型
 * @param {$CommandSourceStack} source 
 * @param {StringJS} froms 
 * @returns 
 */
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
        source.sendSuccess(Component.literal('配方已删除！'), false);
        return 1;
    } catch (error) {
        source.sendSystemMessage(Component.literal('删除配方时出错，请联系相关管理员：'));
        source.sendSystemMessage(Component.literal(error.toString()));
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
 * @param {import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type} id 
 * @param {StringJS} result 
 * @param {StringJS[]} ingredients 
 * @returns {Boolean}
 */
const edit_recipe_of_crafting_shaped = (source, id, result, ingredients) => {
    Item.of()
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type} id 
 * @param {StringJS} result 
 * @param {StringJS[]} ingredients 
 * @returns {Boolean}
 */
const edit_recipe_of_crafting_shapeless = (source, id, result, ingredients) => {

}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {string} id 
 * @returns 
 */
const edit_recipe_from_id = (source, id) => {
    try{
        let recipe = source.getServer().getRecipeManager().byKey(id).orElse(null);
        if (recipe == null) {
            source.getPlayer().sendSystemMessage(Component.literal('未找到配方！').color(Color.RED));
            return 0;
        } else {
            let ingredient_list = [];
            recipe.getRecipe().getIngredients().forEach(ingredient => {
                ingredient_list.push(ingredient.first.toStringJS());
            })

            let tlhData = source.getPlayer().getPersistentData().getCompound('tlhData');
                let operatorData = tlhData.getCompound('operatorData');
                    let recipebuilderData = operatorData.getCompound('recipebuilderData');
                        recipebuilderData.putString('recipeId', id);
                        recipebuilderData.putString('recipeResult', recipe.getRecipe().getResultItem().toStringJS());
                        recipebuilderData.getList('recipeIngredients', 8);
                    
        }
        switch (recipe.getType()) {
            case 'minecraft:crafting_shaped':
                LDLib2UIFactory.openPlayerUI(source.getPlayer(), 'tlhworld:recipebuilder_craft_shaped');
                return 1;
            default:
                source.getPlayer().sendSystemMessage(Component.literal('此配方类型暂未支持编辑！').color(Color.YELLOW));
                return 0;
        }
    } catch (err) {
        source.getPlayer().sendSystemMessage(Component.literal(err.toString()).color(Color.RED));
    }
}

/**
 * 
 * @param {import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type} id
 * @param {import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type} outputs 
 * @param {Array<(import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type)>} patterns 
 * @param {Map<(StringJS),(import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type)>} keys 
 * @returns {boolean}
 */
const serialization_craft_shaped = (id, output, patterns, keys) => {
    try {
        if (!FilesJS.exists('kubejs/server_scripts/auto_gened/recipes/recipe_craft_shaped.js')) {
            FilesJS.createFiles('kubejs/server_scripts/auto_gened/recipes/recipe_craft_shaped.js', 'ServerEvents.recipes(event => {\n' + '})');
        }
        let lines = FilesJS.readLines('kubejs/server_scripts/auto_gened/recipes/recipe_craft_shaped.js');
        if (lines.getFirst() != 'ServerEvents.recipes(event => {' || lines.getLast() != '})') {
            FilesJS.createFiles('kubejs/server_scripts/auto_gened/recipes/recipe_craft_shaped.js', 'ServerEvents.recipes(event => {\n' + '})');
            lines = FilesJS.readLines('kubejs/server_scripts/auto_gened/recipes/recipe_craft_shaped.js');
        }
        
        let pattern_string = ''
        patterns.forEach((pattern) => {
            pattern_string = pattern_string + pattern + ', '
        })
        let keys_string = ''
        keys.forEach((ingredient, key) => {
            keys_string = keys_string + key + ': ' + ingredient + ', '
        })
        
        let recipe_line_index = 0;
        for (let i = 0; i < lines.size(); i++) {
            if (lines.get(i) == '    // ID: ' + id) {
                recipe_line_index = i;
                break;
            }
        }
        let newlines = [];
        for (let i = 0; i < lines.size(); i++) {
            newlines[i] = lines.get(i);
        }

        if (recipe_line_index == 0) {
            newlines[lines.size() - 1] = '    // ID: ' + id;
            newlines[lines.size()] = '    event.shaped(' + output + ', [' + pattern_string + '], {' + keys_string + '} }).id(' + id + ');';
            newlines[lines.size() + 1] = '})';
        } else {
            newlines[recipe_line_index + 1] = '    event.shaped(' + output + ', [' + pattern_string + '], {' + keys_string + '} }).id(' + id + ');';
        }
        FilesJS.writeLines('kubejs/server_scripts/auto_gened/recipes/recipe_craft_shaped.js', newlines);
        source.sendSuccess(Component.literal('配方已保存！'), false);
        return true;
    } catch (error) {
        source.sendSystemMessage(Component.literal('保存配方时出错，请联系相关管理员：').color(Color.RED));
        source.sendSystemMessage(Component.literal(error.toString()).color(Color.RED));
        return false;
    }
}