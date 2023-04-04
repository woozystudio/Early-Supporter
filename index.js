const Discord = require('discord.js');
const api = require('discord-api-types');
const fs = require('fs');
const path = require('path');
const os = require('os');
const client = new Discord.Client({ intents: 32767 })
require('colors');

client.on('ready', async() => {
    console.log(`Logged as ${client.user.tag}`)
})
client.setMaxListeners(200)
