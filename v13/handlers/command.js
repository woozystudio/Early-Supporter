const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Commands")
table.setHeading('Commands', 'Load');
require('colors');

module.exports = (client) => {
    fs.readdirSync('./commands/').forEach(dir => {
        const commands = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, 'loaded')
            } else {
                table.addRow(file, 'Error - Missing a help.name or it is not a string...');
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.alias.set(alias, pull.name))
        }
    });

    console.log(table.toString().red);
}