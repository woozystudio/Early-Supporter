const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Answers frequently asked questions about the bot.')
        .addStringOption(option =>
            option.setName('option')
                .setDescription('The test category')
                .setRequired(true)
                .addChoices(
                    { name: 'test1', value: '1' },
                    { name: 'test2', value: '2' },
                    { name: 'test', value: '3' },
                )),
    async run(client, interaction) {
        //const options = interaction.options.getString("category")

        const option = interaction.options.getString("category")

        if (option == "1") {
            interaction.reply("🐧")
        }
        if (option == "2") {
            interaction.reply("⭐")
        }

    }
}