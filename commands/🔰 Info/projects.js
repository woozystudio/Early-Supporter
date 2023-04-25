const Discord = require('discord.js');

module.exports = {
    name: "projects",
    alias: [],
    async execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .addFields([
            {
                name: "Upcoming Projects:", 
                value: "Early Supporter Canary\n Actualization v1.2.0"
            },
            {
                name: "Latest Project:", 
                value: "Early Supporter v1.0.3"
            }
        ])
    }
}