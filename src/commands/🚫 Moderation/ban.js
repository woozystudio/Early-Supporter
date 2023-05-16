const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user from the guild as Moderator.')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption((user) => user.setName("user").setDescription("Select the user that you want to ban.").setRequired(true))
    .addStringOption((option) => option.setName("reason").setDescription('Write the reason for the banning of the user.').setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser("user");
        const reason = interaction.options.getString("reason");
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

        const BanMessage = new EmbedBuilder()
        .setAuthor({ name: `${client.user.tag} (${client.user.id})`, iconURL: `${client.user.displayAvatarURL()}` })
        .setDescription(`**Member**: ${user} (${user.id})\n**Action**: Ban\n**Reason**: ${reason}`)
        .setColor("Red")
        .setTimestamp()

        if(!reason) reason = "No reason was given for the ban..";
        await interaction.reply({ embeds: [BanMessage] });

        await member.ban({
            days: 100
        }).catch(console.error);
    }
}