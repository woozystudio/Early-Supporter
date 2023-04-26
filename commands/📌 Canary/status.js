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

        message.channel.send({ embeds: [on] })
    }
}