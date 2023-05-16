const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle("Embed Title")
        .setDescription("Embed Description")
        .setColor("Blurple")
        .setImage("https://cdn.discordapp.com/attachments/1082058449669603378/1082058654024466462/Active_Developer.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/1082058449669603378/1082058654628446378/Bug_Hunter_Level_1.png")
        .setTimestamp()
        .setAuthor({ name: "Discord.js API 14.11.0", url: "https://github.com/discordjs/discord.js", iconURL: `${client.user.displayAvatarURL()}` })
        .setFooter({ iconURL: `${client.user.displayAvatarURL()}`, text: `${client.user.tag}` })
        .setURL(`https://github.com/discordjs/discord.js`)
        .addFields([
            {
                name: `Field 1`,
                value: `field1 value (desc)`,
                inline: true
            },
            {
                name: `Field 2`,
                value: `field2 value (desc)`,
                inline: true
            },
        ])

        await interaction.reply({ embeds: [embed] })
    }
}