const Discord = require("discord.js");

module.exports = {
    name: "premiuminfo",
    alias: [], 
    async execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("🏆 About Premium Subscription ⭐")
        .setThumbnail("https://cdn.discordapp.com/avatars/1075181364669849651/1c6339e99acdab17ff1a719f48660cf8.png")
        .setDescription("Premium status in Early Supporter brings with it unique commands, unique systems and benefits.\n \n**Frequently asked Questions:**")
        .setColor(0xF1C40F)
        .addFields(
            { name: "1. How can I become premium?", value: "To be premium you must be a veteran user who uses the bot a lot, and also have it on your server. You must have the bot on at least 3 servers with at least 3 people." },
            { name: "2. How can I claim my Premium?", value: "To claim your premium rank you must do the command `!premium` and enter the key or the promo-code." },
            { name: "3. How do I get a key?", value: "To get the key you must first send a dm to my creator and show him proof that you have the 3 servers with at least 3 people." },
            { name: "4. How do I get a promo-code?", value: "To get a promo-code you must be a friend of my creator, if you are a friend you can ask his dm if he will give you a promo-code. To claim your promo-code do the command `!promo` and type the code." },
        )
        
        message.channel.send({ embeds: [embed] })
        }
    }