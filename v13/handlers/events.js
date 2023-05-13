const fs = require('fs');
require('colors');

module.exports = (client) => {
    fs.readdirSync('./events/').forEach(file => {
        const events = fs.readdirSync(`./events/`).filter((file) => file.endsWith('.js'));
        for(let file of events) {
            let pull = require(`../events/${file}`);
            if(pull.name) {
                client.events.set(pull.name, pull);
            }
        }

        console.log(`${file} event loaded.`.yellow)
    });
}