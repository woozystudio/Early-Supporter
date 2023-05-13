const Discord = require("discord.js");

module.exports = {
    name: "generate-keys",
    alias: [],
    async execute(client, message, args){
        if(message.author.id !== '869583777884667964') return message.reply("❌ `|`You do not have sufficient permissions to use this command. Try again later!")
        let keys = ["KV16kpu905", "XIu53RhO91", "qKmp35Y98A", "973HYpq0Nm", "63tHB9AxMq", "poAxYe872x", "A9172TwpLsZ", "U40KmmnLeq", "8e6PlaEq81", "yHam32Ne9z"]
        let generate_random_keys = keys[Math.floor(Math.random() * keys.length)]

        const embed = new Discord.MessageEmbed()
        .setTitle("Generate a new Premium Key")
        .setColor("BLURPLE")
        .setDescription(`The key generated was: \`${generate_random_keys}\``)

        message.channel.send({ embeds: [embed] })
    }
}