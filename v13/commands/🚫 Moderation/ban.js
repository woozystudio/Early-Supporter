const Discord = require("discord.js");

module.exports = {
    name: "ban",
    alias: [],
    async execute(client, message, args){

        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("❌ `|` You do not have sufficient permissions to do this command.");
        const user = message.mentions.users.first();
        if (!user) return message.reply("SyntaxisError: !ban <User/ID> <Reason>");
        if(user.id === message.author.id) return message.reply("❌ `|` You cannot ban yourself.");
        const reason = args.slice(1).join(" ");
        message.guild.members.cache.get(user.id).ban({reason: reason});
 
        const banmessage = new Discord.MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`The user ${user} has been successfully banned. Reason: \`${reason != "" ? reason : "-"}\``);
        message.channel.send({ embeds: [banmessage] });
    }
}