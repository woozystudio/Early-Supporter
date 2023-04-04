const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Test the slash commands of the bot.'),
    async run(client, interaction) {
        interaction.reply({ content: `Everything working fine for the moment <@${interaction.user.id}>!` })
    }
}