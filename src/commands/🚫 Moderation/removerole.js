const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('removerole')
    .setDescription('Remove a role to a specific user.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addUserOption(user => user.setName('user').setDescription("Select the user you want to remove the role to.").setRequired(true))
    .addRoleOption(role => role.setName('role').setDescription("Select the role to remove to the user.").setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        const role = interaction.options.getRole('role');
        const member = await interaction.guild.members.fetch(user.id);

        if (!member.roles.cache.has(role.id)) {
            await interaction.reply({ content: `❌ \`|\` ${user} doesn't have the role <@&${role.id}>!` })
            return;
        } try {
            await interaction.guild.members.cache.get(user.id).roles.remove(role)
            await interaction.reply({ content: `Successfully removed the role <@&${role.id}> to ${user}!` })
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: `Failed to remove the role <@&${role.id}> to ${user}` })
        }
    }
}