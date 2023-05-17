const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require(`../../../config/config.json`);

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync(`./src/commands`);
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter((file) => file.endsWith('.js'));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`)
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passed through the handler.`);
            }
        }

        const clientId = config.botId;
        const rest = new REST({ version: "9" }).setToken(config.token);
        try {
            console.log('Start reistering application slash commands...');
            
            await rest.put(Routes.applicationCommands(clientId), {
                body: client.commandArray,
            });

            console.log('Sucessfully registered application slash commands.');
        } catch (error) {
            console.error(error)
        }
    }
}