ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('kjsrt')
        .requires(source => source.hasPermission(2))
        .executes(ctx => {
            ctx.getSource().getPlayerOrException().runCommand('kubejs reload startup-scripts');
            return 1;
        })
    );
})
