const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Reviews the profile or information of a user.')
    .addUserOption(user => user.setName("user").setDescription("Select the user you want to display.").setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser("user") || interaction.user;
        const member = await interaction.guild.members.fetch(user.id)

        const UserMessage = new EmbedBuilder()
        .setTitle(`About ${user.username}`)
        .setThumbnail(`${user.displayAvatarURL({ dynamic: true, size: 2048 })}`)
        .setColor("Blurple")
        .setTimestamp()
        .addFields([
            { name: "Username", value: `${user}` },
            { name: "User ID", value: `${user.id}` },
            { name: "Discord Member Since", value: `<t:${parseInt(user.createdTimestamp / 1000)}> (<t:${parseInt(user.createdTimestamp / 1000)}:R>)` },
            { name: "Server Member Since", value: `<t:${parseInt(member.joinedAt / 1000)}> (<t:${parseInt(member.joinedAt / 1000)}:R>)` },        
            { name: "Roles", value: `${member.roles.cache.map(r => r).join(' ')}` },        
        ])

        await interaction.reply({ embeds: [UserMessage] })
    }
}