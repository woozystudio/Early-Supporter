const client = require('..');

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return; //If it is not interaction command the return
    const slashCommand = client.slashCommands.get(interaction.commandName);
    if(!slashCommand) return; //If no slash command name then return
    try {
        await slashCommand.run(client, interaction) //Run the command
    } catch (err) {
        console.log(err);
        await interaction.reply({ content: 'There was an error!', ephemeral: true })
    }
})