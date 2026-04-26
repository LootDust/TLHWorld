/// <reference path="../../startup_scripts/.reference.js"/>

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    const DEL_WHITELIST = [
        '60455505-b311-4060-9ee8-4de6c4dd086f'
    ]

    event.register(Commands.literal('file')
        .requires(source => source.hasPermission(2) && source.getPlayer() != null)
        .then(Commands.literal('create')
            .then(Commands.literal('dir')
                .then(Commands.argument('pathUsingSlash', Arguments.STRING.create(event))
                    .executes(ctx => dir_create(ctx.getSource(), Arguments.STRING.getResult(ctx, 'pathUsingSlash')))
                )
            )
            .then(Commands.literal('file')
                .then(Commands.argument('pathUsingSlashWithSuffix', Arguments.STRING.create(event))
                    .executes(ctx => file_create(ctx.getSource(), Arguments.STRING.getResult(ctx, 'pathUsingSlashWithSuffix')))
                )
            )
        )
        .then(Commands.literal('edit')
            .then(Commands.argument('pathUsingSlash', Arguments.STRING.create(event))
                .executes(ctx => file_edit(ctx.getSource(), Arguments.STRING.getResult(ctx, 'pathUsingSlash')))
            )
        )
        .then(Commands.literal('list')
            .executes(ctx => dir_list(ctx.getSource(), './', false))
            .then(Commands.argument('pathUsingSlash', Arguments.STRING.create(event))
                .executes(ctx => dir_list(ctx.getSource(), Arguments.STRING.getResult(ctx, 'pathUsingSlash'), false))
            )
            .then(Commands.literal('-a')
                .executes(ctx => dir_list(ctx.getSource(), './', true))
                .then(Commands.argument('pathUsingSlash', Arguments.STRING.create(event))
                    .executes(ctx => dir_list(ctx.getSource(), Arguments.STRING.getResult(ctx, 'pathUsingSlash'), true))
                )
            )
        )
        .then(Commands.literal('delete')
            .requires(source => DEL_WHITELIST.includes(source.getPlayer().getUuid().toString().toString()))
            .then(Commands.argument('pathUsingSlash', Arguments.STRING.create(event))
                .executes(ctx => file_delete(ctx.getSource(), Arguments.STRING.getResult(ctx, 'pathUsingSlash')))
            )
        )
    );
})

/**
 * 
 * @param {$CommandSourceStack} source
 * @param {StringJS} path 
 * @param {boolean} allSeeing
 * @returns 
 */
const dir_list = (source, path, allSeeing) => {
    if (path.toString().includes('\\')) {
        source.sendSystemMessage(Component.literal('No Backslash!').red());
        return 0;
    }
    if (!FilesJS.exists(path)) {
        source.sendSystemMessage(Component.literal('Directory Not Exists!').red());
        return 0;
    }
    if (path.toString().includes('..')) {
        source.sendSystemMessage(Component.literal('Directory Access Denied!').red());
        return 0;
    }
    if (path == '') path = './';
    let dirs = FilesJS.listDirectories(path);
    let files = FilesJS.listFiles(path);
    source.sendSystemMessage(Component.literal('Current in ' + path + ' :').yellow());
    if (path.toString() != './') {
        let lastPath = '';
        let paths = path.toString().split('/');
        for (let i = 0; i < paths.length - 2; i++) {
            lastPath = lastPath + paths[i] + '/';
        }
        source.sendSystemMessage(Component.literal('⨽').yellow().append(Component.literal('..').white()
            .hover(Component.literal('Click to go back last folder').gray()).clickRunCommand('/file list' + (allSeeing ? ' -a' : '') +  ' "' + lastPath + '"')));
    }
    if (dirs.size() != 0) {
        dirs.forEach((dir) => {
            let component = Component.literal('⨽').yellow().append(Component.literal('.').gray());
            let formatedDir = '';
            dir.toString().replace(global.PATH + '\\', '').split('\\').forEach((splited) => {
                formatedDir = formatedDir + splited + '/'
                component.append(Component.literal('/').gray().append(Component.literal(splited).white()));
            })
            if (!(formatedDir.startsWith('.') && !allSeeing)) {
                component.hover(Component.literal('Click to go into this folder').gray()).clickRunCommand('/file list' + (allSeeing ? ' -a' : '') +  ' "' + formatedDir + '"');
                source.sendSystemMessage(component.append(Component.literal('/').gray()));
            }
        })
    }
    if (files.size() != 0) {  
        files.forEach((file) => {
            let component = Component.literal('⨽').yellow().append(Component.literal('.').gray());
            let formatedFile = '';
            file.toString().replace(global.PATH + '\\', '').split('\\').forEach((splited) => {
                formatedFile = formatedFile + splited + '/'
                component.append(Component.literal('/').gray().append(Component.literal(splited).white()));
            })
            formatedFile = formatedFile.substring(0, formatedFile.length - 1);
            if (isEditable(file.toString().split('.').pop())) {
                component.hover(Component.literal('Click to edit this file').gray()).clickRunCommand('/file edit "' + formatedFile + '"')
            }
            if (!(formatedFile.startsWith('.') && !allSeeing)) {
                source.sendSystemMessage(component);
            }
        })
    }
    return 1;
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {StringJS} path 
 * @returns 
 */
const dir_create = (source, path) => {
    try {
        if (path.toString().includes('\\')) {
            source.sendSystemMessage(Component.literal('No Backslash!').red());
            return 0;
        }
        FilesJS.createDirectory(path);
        source.getPlayerOrException().runCommand('/file list "' + path + '"');
    } catch (err) {
        source.sendSystemMessage(Component.literal(err.toString()));
        return 0;
    }
    return 1;
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {StringJS} path 
 * @returns 
 */
const file_create = (source, path) => {
    try {
        if (path.toString().includes('\\')) {
            source.sendSystemMessage(Component.literal('No Backslash!').red());
            return 0;
        }
        FilesJS.writeFile(path, '');
        source.getPlayerOrException().runCommand('/file list "' + path + '"');
    } catch (err) {
        source.sendSystemMessage(Component.literal(err.toString()));
        return 0;
    }
    return 1;
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {StringJS} path 
 * @returns 
 */
const file_delete = (source, path) => {
    try {
        if (path.toString().includes('..')) {
            source.sendSystemMessage(Component.literal('Directory Access Denied!').red());
            return 0;
        }
        if (path.toString().includes('*')) {
            source.sendSystemMessage(Component.literal('Wildcard is not Allowed!').red());
            return 0;
        }
        if (path.toString().includes('\\')) {
            source.sendSystemMessage(Component.literal('No Backslash!').red());
            return 0;
        }
        FilesJS.delete(path);
        source.sendSystemMessage(Component.literal('Deleted!').yellow());
    } catch (err) {
        source.sendSystemMessage(Component.literal(err.toString()));
        return 0;
    }
    return 1;
}

/**
 * 
 * @param {$CommandSourceStack} source 
 * @param {StringJS} path 
 * @returns 
 */
const file_edit = (source, path) => {
    if (path.toString().includes('\\')) {
        source.sendSystemMessage(Component.literal('No Backslash!').red());
        return 0;
    }
    source.getPlayerOrException().getForgePersistentData().putString('tlh:editing_file', path);
    LDLib2UIFactory.openPlayerUI(source.getPlayerOrException(), 'tlh:code_editor');
    //source.sendSystemMessage(Component.literal('WIP').red());
    //lines.forEach((line) => {
    //    source.sendSystemMessage(Component.literal(line));
    //})
    return 1;
}
/**
 * 
 * @param {StringJS} endsWith 
 * @returns 
 */
const isEditable = (endsWith) => {
    const supportedTypes = ['gitignore', 'ini', 'js', 'json', 'md','toml', 'txt', 'yaml', 'yml', 'xml'];
    return supportedTypes.includes(endsWith);
}