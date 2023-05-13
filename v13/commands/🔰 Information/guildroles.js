const Discord = require("discord.js");

module.exports = {
    name: "guildroles",
    aliases: ["roles"],
    async execute(client, message, args){
        const guildroles = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}'s Roles`)
        .setDescription(`${message.guild.roles.cache.map(r => r).join("\n ").replace("@everyone", "\n ")}`)
        .setThumbnail(message.guild.iconURL())
        .setColor("BLURPLE")
        
        message.channel.send({ embeds: [guildroles] })
    }
}