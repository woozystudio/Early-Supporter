const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: [],
    async execute(client, message, args) {
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        if(!user) return message.reply("❌ `|` Please mention a user in order to show you their information!")
        
        const avatar = new Discord.MessageEmbed()
        .setTitle(`${user.tag}`)
        .setColor("BLURPLE")
        .setImage(`${user.displayAvatarURL({ size: 2048, dynamic: true })}`)
        .setFooter({ text: `Requested by ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ size: 2048, dynamic: true })}` })
        
        message.channel.send({ embeds: [avatar] })
    } 
}