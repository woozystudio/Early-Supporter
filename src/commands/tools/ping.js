const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns with the bot ping.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Pong! The API ping is **${client.ws.ping}ms**`
        await interaction.editReply({ content: newMessage });
    }
}