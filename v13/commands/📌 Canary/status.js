const Discord = require('discord.js');
const config = require('../../config/config.json');

module.exports = {
    name: "status",
    aliases: [],
    async execute(client, message, args) {
        const on = new Discord.MessageEmbed()
        .setColor(`${config.colors.green}`)
        .setAuthor({ iconURL: `${config.avatarURL}`, name: `${config.tag} (${config.botId})` })
        .setDescription(`**Member**: ${config.tag} (${config.botId})\n**Action**: Turn on the client <:Online:1082091451573354496>\n**Reason**: Undefined\n**Case Reference**: [#7700](https://discord.com/users/${config.early_ID})`)
        .setFooter({ text: "#7700" })
        .setTimestamp()

        const off = new Discord.MessageEmbed()
        .setColor(`${config.colors.red}`)
        .setAuthor({ iconURL: `${config.avatarURL}`, name: `${config.tag} (${config.botId})` })
        .setDescription(`**Member**: ${config.tag} (${config.botId})\n**Action**: Turn off the client <:DoNotDistrub:1082091450268913795>\n**Reason**: Undefined\n**Case Reference**: [#7700](https://discord.com/users/${config.early_ID})`)
        .setFooter({ text: "#7700" })
        .setTimestamp()

        let m = args[0]
        if(!m) return message.channel.send("❌ `|` Enter a valid status for Early Supporter")
            if(args[0] === "on") return message.channel.send({ embeds: [on] })
            if(args[0] === "off") return message.channel.send({ embeds: [off] })
    }
}