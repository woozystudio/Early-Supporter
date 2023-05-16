const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const config = require('../../../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Display Early Supporter information.'),
    async execute(interaction, client) {
        const user = client.user;

        const BotMessage = new EmbedBuilder()
        .setAuthor({ iconURL: `${user.displayAvatarURL({ dynamic: true, size: 2048 })}`, name: `${user.tag}` })
        .setTitle(`Early Supporter`)
        .setThumbnail(`${user.displayAvatarURL({ dynamic: true, size: 2048 })}`)
        .setFooter({ text: `Version: ${config.version}` })
        .setColor("Blurple")
        .setTimestamp()
        .addFields([
            { name: "Nickname", value: `Early Supporter` },
            { name: "User", value: `<@${client.user.id}>` },
            { name: "Members in cache", value: `${config.cacheCount}` },
            { name: "Creator", value: `[Woozy's YT](https://www.youtube.com/@WoozyStudio)` },
            { name: "Discord Member Since", value: `<t:${parseInt(user.createdTimestamp / 1000)}> (<t:${parseInt(user.createdTimestamp / 1000)}:R>)` }
        ])

        await interaction.reply({ embeds: [BotMessage] })
    }
}