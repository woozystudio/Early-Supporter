const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('guildinfo')
    .setDescription('Review the server information.'),
    async execute(interaction, client) {
        const { guild } = interaction;
        const botcount = guild.members.cache.filter((member) => member.user.bot).size;

        const GuildMessage = new EmbedBuilder()
        .setTitle(`About ${guild.name}`)
        .setThumbnail(guild.iconURL({ dynamic: true, size: 2048 }))
        .setDescription("Server Information")
        .setColor("Blurple")
        .setTimestamp()
        .addFields([
            { name: "Guild Name", value: `${guild.name}` },
            { name: "Created On", value: `<t:${parseInt(guild.createdTimestamp / 1000)}> (<t:${parseInt(guild.createdTimestamp / 1000)}:R>)` },
            { name: "Total Members", value: `${guild.memberCount}` }
        ])

        await interaction.reply({ embeds: [GuildMessage] })
    }
}