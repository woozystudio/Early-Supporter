const Discord = require("discord.js");

module.exports = {
    name: "list-keys",
    aliases: ["keys"],
    async execute(client, message, args){
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("❌ `|` You do not have sufficient permissions to do this command.");

        const embed = new Discord.MessageEmbed()
        .setTitle("Premium keys list")
        .setColor("BLURPLE")
        .setDescription("All premium keys are: `KV16kpu905`, `XIu53RhO91`, `qKmp35Y98A`, `973HYpq0Nm`, `63tHB9AxMq`, `poAxYe872x`, `A9172TwpLsZ`, `U40KmmnLeq`, `8e6PlaEq81`, `yHam32Ne9z`")

        message.channel.send({ embeds: [embed] })
    }
}