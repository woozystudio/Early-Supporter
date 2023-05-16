const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns with a menu to interact.'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(new StringSelectMenuOptionBuilder({
                label: `Option #1`,
                value: `https://youtube.com/@WoozyStudio`
            }), new StringSelectMenuOptionBuilder({
                label: `Option #2`,
                value: `https://discord.com/`
            }));

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}