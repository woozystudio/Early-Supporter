const Discord = require('discord.js');
const config = require('../../config/config.json')

module.exports = {
    name: "projects",
    aliases: [],
    async execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setFooter({ iconURL: `${config.avatarURL}`, text: "Early Supporter" })
        .setColor('BLURPLE')
        .addFields([
            {
                name: "Upcoming Projects:", 
                value: "Early Supporter Canary\n Actualization v1.2.0"
            },
            {
                name: "Latest Project:", 
                value: "[Early Supporter v1.0.4](https://github.com/WoozyStudio/Early-Supporter/releases/tag/1.0.4)"
            }
        ])

        message.channel.send({ embeds: [embed] })
    }
}