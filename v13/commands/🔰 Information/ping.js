const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    alias: [],
    async execute(client, message, args) {
        const msg = await message.channel.send('Pinging...')
        await msg.edit(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    }
}