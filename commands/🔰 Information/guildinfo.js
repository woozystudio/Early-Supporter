const Discord = require("discord.js");

module.exports = {
    name: "guildinfo",
    aliases: ["serverinfo"],
    async execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle(`About the Guild`)
        .setDescription("Server Information")
        .setThumbnail(message.guild.iconURL())
        .addFields([
            { name: "Guild Name", value: `${message.guild.name}` },
            { name: "Created On", value: `${message.guild.createdAt}` },
            { name: "Total Members", value: `${message.guild.memberCount}`, inline: true },
        ])
        .setColor("BLURPLE")

        message.channel.send({ embeds: [embed] })
    }
}