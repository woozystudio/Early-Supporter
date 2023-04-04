const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns with the bot ping'),
    async run(client, interaction) {
        interaction.reply({ content: `Pong! The API ping is **${client.ws.ping}ms**` })
    }
}