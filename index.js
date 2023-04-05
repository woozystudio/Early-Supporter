const { Client, Message, Collection } = require('discord.js');
const config = require('./config/config.json');
const fs = require('fs');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});

module.exports = client;

const prefix = config.prefix;

client.commands = new Collection();
client.alias = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync('./commands');

//Load all the files
['command', 'events', 'slashCommands'].forEach((handler) => {
    require(`./handlers/${handler}`)(client)
});

client.login(config.token)