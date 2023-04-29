const Discord = require('discord.js');
const ver = require(`../../package.json`);

module.exports = {
    name: 'version',
    aliases: ["ver", "v"],
    async execute(client, message, args) {
        message.channel.send(`Early Supporter's Version: \`Latest ${ver.version}\``)
    }
}