const { Client, Message, Collection } = require('discord.js');
const mongoose = require('mongoose');
const config = require('./config/config.json');
const fs = require('fs');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
require('colors');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://EarlySupporter:EarlyCluser23@earlysupporter.7mc0qrn.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("☁ Connected to the MongoDB database successfully!".blue)
}).catch((error) => {
  console.log("☁ An error occurred while connecting to the MongoDB database!".red)
})

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