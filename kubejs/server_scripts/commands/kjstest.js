/// <reference path="../../startup_scripts/.reference.js"/>

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('kjstest')
        .requires(source => source.hasPermission(2))
        .executes(ctx => {
            ctx.getSource().sendSystemMessage(Component.literal((Item.of("not_a_namespace:not_a_path") == null).toString()))
            return 1
        })
    )
})