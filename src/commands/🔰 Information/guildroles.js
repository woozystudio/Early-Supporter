const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('guildroles')
    .setDescription('Displays all the server roles.'),
    async execute(interaction, client) {
        const { guild } = interaction;

        const GuildMessage = new EmbedBuilder()
        .setTitle(`${guild.name}'s Roles`)
        .setThumbnail(guild.iconURL({ dynamic: true, size: 2048 }))
        .setDescription(`${guild.roles.cache.map(r => r).join(' ')}`)
        .setColor("Blurple")
        .setTimestamp()

        await interaction.reply({ embeds: [GuildMessage] })
    }
}