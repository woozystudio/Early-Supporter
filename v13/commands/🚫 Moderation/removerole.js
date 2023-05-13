const Discord = require('discord.js');

module.exports = {
    name: "removerole",
    aliases: [],
    async execute(client, message, args) {

        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('❌ `|` Please mention a user in order to remove the role!');
            return;
        }

        const targetMember = message.guild.members.cache.get(targetUser.id);
        if (!targetMember) {
            message.reply('❌ `|` This user is not on the server.');
            return;
        }

        const role = message.mentions.roles.first()
        if (!role) {
            message.reply(`❌ \`|\` The role ${role} was not found.`);
            return;
        }

        try {
            await targetMember.roles.remove(role);
            message.reply(`Successfully removed the role ${role} to <@${targetMember.id}>!`);
          } catch (error) {
            console.error(error);
            message.reply('❌ `|` There was an error when trying to remove the role.');
          }
    }
}