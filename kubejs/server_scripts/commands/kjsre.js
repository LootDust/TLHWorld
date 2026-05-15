ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('kjsre')
        .requires(source => source.hasPermission(2))
        .executes(ctx => {
            ctx.getSource().getPlayerOrException().runCommand('kubejs reload server-scripts');
            return 1;
        })
    );
})
