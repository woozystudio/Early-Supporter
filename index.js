const Discord = require('discord.js');
const api = require('discord-api-types');
const fs = require('fs');
const path = require('path');
const os = require('os');
const client = new Discord.Client({ intents: 32767 })
require('colors');

client.on('ready', async() => {
    console.log(`Logged as ${client.user.tag}`)
}).setMaxListeners(200)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection();

function requirehandlers() {
    ["command"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.log(e)
        }
    })
}
requirehandlers()