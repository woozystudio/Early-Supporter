require('colors');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`Logged as ${client.user.tag}.`.green);
        client.user.setPresence({
            status: 'online',
            activities: [{
                name: "Discord.js v14",
                type: "LISTENING"
            }]
        })
    }
}