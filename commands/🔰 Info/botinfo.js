const Discord = require("discord.js");

module.exports = {
    name: "botinfo",
    aliases: ["bot"],
    async execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("About Early Supporter")
        .setThumbnail("https://cdn.discordapp.com/avatars/1075181364669849651/1c6339e99acdab17ff1a719f48660cf8.png")
        .setDescription("Hi, I'm Early Supporter and I'm your personal assistant and helper on your Discord journey.")
        .setColor("BLURPLE")
        .addFields(
            { name: "Bot Name", value: "Early Supporter" },
            { name: "Created On", value: `${client.user.createdAt}` },
            )
        
        message.channel.send({ embeds: [embed] })
        }
    }