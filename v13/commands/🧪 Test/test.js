const Discord = require('discord.js');

module.exports = {
    name: 'test',
    aliases: [],
    async execute(client, message, args) {
        message.channel.send(`Everything working fine for the moment <@${message.author.id}>!`)
    }
}