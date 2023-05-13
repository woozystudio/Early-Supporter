const Discord = require("discord.js");

module.exports = {
    name: "jumbo",
    alias: [],
    async execute(client, message, args){
        if(!args[0]) return message.reply("❌ `|` Please write a emoji in order to show you their image version!")

        const emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
        if(!emoji) return message.reply("❌ `|` This emoji is not valid or I have not found it in this server!")

        message.channel.send(emoji.url)
    }
}