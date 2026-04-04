const $List = Java.loadClass("java.util.List")
const $BlockPos = Java.loadClass("net.minecraft.core.BlockPos")
const $StructureBlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.StructureBlockEntity")

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('structure')
        .requires(source => source.hasPermission(2))
        .then(Commands.literal('load')
            .then(Commands.argument('identifier', Arguments.RESOURCE_LOCATION.create(event))
                .then(Commands.argument('to', Arguments.BLOCK_POS.create(event))
                    .executes(ctx => structure_load(Arguments.RESOURCE_LOCATION.getResult(ctx, 'identifier'),
                        Arguments.BLOCK_POS.getResult(ctx, 'to'))
                    )
                )
            )
        )
        .then(Commands.literal('save')
            .then(Commands.argument('identifier', Arguments.RESOURCE_LOCATION.create(event))
                .then(Commands.argument('from', Arguments.BLOCK_POS.create(event))
                    .then(Commands.argument('to', Arguments.BLOCK_POS.create(event))
                        .executes(ctx => structure_save(ctx.getSource().getLevel(),
                                Arguments.RESOURCE_LOCATION.getResult(ctx, 'identifier'),
                                Arguments.BLOCK_POS.getResult(ctx, 'from'),
                                Arguments.BLOCK_POS.getResult(ctx, 'to'),
                                true,
                                ctx.getSource().getTextName(),
                                true
                            )
                        )
                    )
                )
            )
        )
    )
})

/**
 * @param {$ServerLevel} level
 * @param {$ResourceLocation} structureName
 * @param {$BlockPos} from
 * @param {$BlockPos} to
 * @param {boolean} ignoreEntities
 * @param {string} author
 * @param {boolean} writeToDisk
 * @param {$List<Block>} ignoredBlocks
 */
function structure_save(level, structureName, from, to, ignoreEntities, author, writeToDisk) {
    sizeX = to.getX() - from.getX();
    sizeY = to.getY() - from.getY();
    sizeZ = to.getZ() - from.getZ();
    if (sizeX <= 0 || sizeY <= 0 || sizeZ <= 0) return;
    size = new Vec3i(sizeX, sizeY, sizeZ);

    if (structureName == null) {
        return false;
    } else {
        let structureTemplateManager = level.getStructureManager();
        let structuretemplate;
        try {
            structuretemplate = structuretemplatemanager.getOrCreate(structureName);
        } catch (exception) {
            return false;
        }
        structuretemplate.fillFromWorld(level, from, size, !ignoreEntities, Blocks.STRUCTURE_VOID);
        structuretemplate.setAuthor(author);
        if (writeToDisk) {
            try {
                return structuretemplate.save(structureName)
            } catch (exception) {
                return false;
            }
        } else {
            return true
        }
    }
}

function structure_load(identifier, from, to) {
    
}