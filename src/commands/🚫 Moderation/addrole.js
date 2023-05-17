const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('Add a role to a specific user.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addUserOption(user => user.setName('user').setDescription("Select the user you want to add the role to.").setRequired(true))
    .addRoleOption(role => role.setName('role').setDescription("Select the role to add to the user.").setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        const role = interaction.options.getRole('role');
        const member = await interaction.guild.members.fetch(user.id);

        if (member.roles.cache.has(role.id)) {
            await interaction.reply({ content: `❌ \`|\` ${user} already has this role!` })
            return;
        } try {
            await interaction.guild.members.cache.get(user.id).roles.add(role)
            await interaction.reply({ content: `Successfully added the role <@&${role.id}> to ${user}!` })
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: `Failed to add the role <@&${role.id}> to ${user}` })
        }
    }
}