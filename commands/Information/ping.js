const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    async execute(client, message, args) {
        const msg = await message.channel.send('Pinging...')
        await msg.edit(`Pong! The API ping is **${client.ws.ping}ms**`)
    }
}