const Discord = require('discord.js');
const client = require('..');
require('colors');

client.on("ready", () => {
    console.log(`Logged as ${client.user.tag}`.green)
    client.user.setPresence({
        status: 'online',
        activities: [{
            name: "Working on v1.0.3",
            type: "LISTENING"
        }]
    })
});

