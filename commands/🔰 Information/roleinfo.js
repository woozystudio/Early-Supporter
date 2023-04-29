const Discord = require("discord.js");

module.exports = {
    name: "roleinfo",
    alias: [],
    async execute(client, message, args){
        const role = message.mentions.roles.first()
        if(!role) return message.reply("❌ `|` Please mention a role in order to show you their information!")

        const roleinfo = new Discord.MessageEmbed()
        .setTitle(`About ${role.name}`)
        .setThumbnail(client.user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setColor(`0x${role.hexColor}`)
        .addFields(
            { name: "Role Name", value: `${role.name}` },
            { name: "Role Color", value: `${role.hexColor}` },
            { name: "Role ID", value: `${role.id}` },
            { name: "Mention", value: `<@&${role.id}>` },
            { name: "Created On", value: `${role.createdAt}` },
            )
        
        message.channel.send({ embeds: [roleinfo] })
    }
}