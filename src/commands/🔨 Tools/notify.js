const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('notify')
    .setDescription('This is a command with ReactionListener features of the Java programming language.')
    .addUserOption(user => user.setName('user').setDescription("Select the user you want to notify there.").setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');

        await interaction.reply({ content: "This command will be added in the future." })
    }
}