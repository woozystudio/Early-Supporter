const Discord = require("discord.js");

module.exports = {
    name: "personalrole",
    alias: [],
    async execute(client, message, args) {
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("❌ `|` You do not have sufficient permissions to do this command.");
      
          const role = message.guild.roles.create({
            name: `${message.author.username}`
          }).then(role => {
            message.member.roles.add(role.id);
            message.reply(`The role for ${message.author} was successfully created!`);
          }).catch(error => {
            console.error(error);
            message.reply('An error occurred when creating the role for the user.');
          });
    }
}