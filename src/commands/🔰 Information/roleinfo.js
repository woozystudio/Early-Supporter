const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roleinfo')
    .setDescription('Reviews the information of a role.')
    .addRoleOption(role => role.setName("role").setDescription("Select the role you want to display.").setRequired(true)),
    async execute(interaction, client) {
        const role = interaction.options.getRole("role");

        const RoleMessage = new EmbedBuilder()
        .setTitle(`About ${role.name}`)
        .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true, size: 2048 })}`)
        .setColor(`${role.hexColor}`)
        .setTimestamp()
        .addFields([
            { name: "Role Name", value: `${role.name}` },
            { name: "Role Hex Color", value: `${role.hexColor}` },
            { name: "Role ID", value: `${role.id}` },
            { name: "Mention", value: `<@&${role.id}>` },        
            { name: "Created On", value: `<t:${parseInt(role.createdTimestamp / 1000)}> (<t:${parseInt(role.createdTimestamp / 1000)}:R>)` },        
        ])

        await interaction.reply({ embeds: [RoleMessage] })
    }
}