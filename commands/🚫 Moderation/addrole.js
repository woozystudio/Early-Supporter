const Discord = require('discord.js');

module.exports = {
    name: "addrole",
    aliases: [],
    async execute(client, message, args) {
        /*const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        const role = message.mentions.roles.first()
        if(!user) return message.reply("❌ `|` Please mention a user in order to add the role!")
        if(!role) return message.reply("❌ `|` Please mention a role in order to add the role!")

        message.channel.send({ content: `Successfully added the role <@&${role.id}> to <@${user.id}>!` })*/

        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('❌ `|` Please mention a user in order to add the role!');
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

        if (targetMember.roles.cache.has(role.id)) {
            message.reply(`❌ \`|\` ${targetMember.id} already has this role.`);
            return;
        }

        targetMember.roles.add(role);
        message.reply(`Successfully added the role ${role} to <@${targetMember.id}>!`);
    }
}