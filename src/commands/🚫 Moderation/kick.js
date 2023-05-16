const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user from the guild as Moderator.')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption((user) => user.setName("user").setDescription("Select the user that you want to kick.").setRequired(true))
    .addStringOption((option) => option.setName("reason").setDescription('Write the reason for the kick of the user.').setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser("usuario");
        const reason = interaction.options.getString("reason");
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

        const KickMessage = new EmbedBuilder()
        .setAuthor({ name: `${client.user.tag} (${client.user.id})`, iconURL: `${client.user.displayAvatarURL()}` })
        .setDescription(`**Member**: ${user} (${user.id})\n**Action**: Kick\n**Reason**: ${reason}`)
        .setColor("Red")
        .setTimestamp()

        if(!reason) reason = "No reason was given for the expulsion.";
        await interaction.reply({ embeds: [KickMessage] });

        await member.kick(reason).catch(console.error);
    }
}