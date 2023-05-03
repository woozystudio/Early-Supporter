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
                    { name: 'languages', value: '1' },
                    { name: 'github', value: '2' },
                    { name: 'version', value: '3' },
                )),
    async run(client, interaction) {
        const option = interaction.options.getString("option")

        if (option == "1") {
            interaction.reply("Early Supporter uses JavaScript as its primary language, with Java, Json and Python as secondary languages.")
        }
        if (option == "2") {
            interaction.reply("Currently the Early Supporter [GitHub](https://github.com/) repository is set to private. But these codes in some cases are reused for other bots.")
        }
        if(option == "3") {
            interaction.reply("Early Supporter is in Latest version `1.0.4`.")
        }

    }
}