const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Returns with a button to interact.'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId(`sub-yt`)
            .setLabel('Subscribe @WoozyStudio')
            .setStyle(ButtonStyle.Danger)

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        })
    }
}