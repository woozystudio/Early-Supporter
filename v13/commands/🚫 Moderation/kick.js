const Discord = require("discord.js");

module.exports = {
    name: "kick",
    alias: [],
    async execute(client, message, args){

        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("❌ `|` You do not have sufficient permissions to do this command.");
        const user = message.mentions.users.first();
        if (!user) return message.reply("SyntaxisError: !kick <User/ID> <Reason>");
        if(user.id === message.author.id) return message.reply("❌ `|` You cannot kick yourself.");
        const reason = args.slice(1).join(" ");
        message.guild.members.cache.get(user.id).kick(reason);
 
        const kickmessage = new Discord.MessageEmbed()
        .setColor(0x6b8de6)
        .setDescription(`The user ${user} has been successfully kicked. Reason: \`${reason != "" ? reason : "-"}\``);
        message.channel.send({ embeds: [kickmessage] });
    }
}