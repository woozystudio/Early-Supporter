const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { botId, guildId, token } = require('../config/config.json');
const ascii = require('ascii-table');
let table = new ascii("Slash Commands")
table.setHeading('Commands', 'Load');

module.exports = (client) => {
    const slashCommands = [];

    fs.readdirSync('./slashCommands/').forEach(dir => {
        const slashCommandsFiles = fs.readdirSync(`./slashCommands/${dir}/`).filter(file => file.endsWith('.js'));

        for(const file of slashCommandsFiles) {
            const slashCommand = require(`../slashCommands/${dir}/${file}`);
            slashCommands.push(slashCommand.data.toJSON());
            if(slashCommand.data.name) { //If the slash command file has a name
                client.slashCommands.set(slashCommand.data.name, slashCommand)
                table.addRow(file, 'loaded') //Check if the file load and log in console
            } else {
                table.addRow(file, 'error') //If the file doesn't have command name, log it error in console.
            }
        }
    });

    console.log(table.toString().blue);
    
    const rest = new REST({ version: '9' }).setToken(token);

    (async () => {
        try {
            console.log('Start reistering application slash commands...')

            await rest.put(
                guildId
                ? Routes.applicationGuildCommands(botId, guildId) //Regisered the slashcommand in guild
                : Routes.applicationGuildCommands(botId), //Registered the slashcommand globally
                {
                    body: slashCommands,
                }
            );

            console.log('Sucessfully registered application slash commands.')
        } catch (err) {
            console.log(err);
        }
    })();
}