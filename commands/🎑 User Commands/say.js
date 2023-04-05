const Discord = require("discord.js");

module.exports = {
    name: "say",
    alias: [],
    async execute(client, message, args){
        const say = message.content.slice(5);
        if(say.startsWith(" ")){
            say.slice(1);
        }
        
        message.channel.send(`${say}`);


    }
}