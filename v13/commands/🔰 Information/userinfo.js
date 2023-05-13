const Discord = require("discord.js");

module.exports = {
    name: "userinfo",
    alias: [],
    async execute(client, message, args){
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        if(!user) return message.reply("❌ `|` Please mention a user in order to show you their information!")

        const userinfo = new Discord.MessageEmbed()
        .setTitle(`About ${user.username}`)
        .setThumbnail(`${user.displayAvatarURL({ size: 2048, dynamic: true })}`)
        .setColor("BLURPLE")
        .addFields(
            { name: "Username", value: `${user.username}` },
            { name: "User ID", value: `${user.id}` },
            { name: "Created On", value: `${user.createdAt}` },
            )
        
        message.channel.send({ embeds: [userinfo] })
    }
}