const Discord = require("discord.js");
module.exports = {
    name: "rules",
    alias: [],
    async execute(client, message, args) {
        if(message.author.id !== '869583777884667964') return message.reply("❌ `|`You do not have sufficient permissions to use this command. Try again later!")
        const embed1 = new Discord.MessageEmbed()
        .setTitle("Community Guidelines")
        .setDescription("<:ES_blurpleheart:1100571564522618930> Sending any form of malicious content and spamming (repetitive messages, emojis, images, reactions, etc.)\n<:ES_blurpleheart:1100571564522618930> Discrimination, harassment and misconduct are not tolerated on this server.\n<:ES_blurpleheart:1100571564522618930> You must correctly follow the [Terms of Service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines).\n\nOn behalf of the development and administration team we ask you to behave with the best attitude you can so as not to cause problems!")
        .setColor(0x5865F2)   

        const embed2 = new Discord.MessageEmbed()
        .setTitle("Early Supporter's Guild")
        .setDescription("<:ES_Brush:1100573841840930856> It is not a server to send random images, inappropriate multimedia, memes, spam, etc.\n\n<:ES_Brush:1100573841840930856> This is a server to talk about the bot. You can give your opinion, complain, you can report a user or a bug, etc.")
        .setColor(0x5865F2)     

        message.channel.send({ content: "Welcome to the Early Supporter server! The official bot support server.", embeds: [embed1, embed2] })
    }
}