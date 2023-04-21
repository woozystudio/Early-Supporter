const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h"],
    async execute(client, message, args){
        const MainHelpPage = new Discord.MessageEmbed()
        .setTitle("Early Suporter's Helper")
        .setImage("https://cdn.discordapp.com/attachments/1071442841278087288/1079178377841344522/cd7f2c8e460d2735a6ecdaf4248f0891.png")
        .setDescription("Hi, I'm Early Supporter and I'm your personal assistant and helper on your Discord journey. To navegate into this menu, use the buttons below.")
        .setColor("BLURPLE")
        .addFields([
            {
              name: "Categories", value: "`📦` Menu (Page 1)\n`⭐` Premium (Page 2)\n`🎑` User Commands (Page 3)\n`🎫` Developer (Page 3)\n`🔰` Information (Page 4)\n`🧪` Test (Page 5)\n`🚫` Moderation (Page 6)\n`🛒` Configuration (Page 7)"
            }
          ])
        .setFooter({ text: "Besides that, I'm in charge of unlocking the text channels for those who don't have a microphone. My creator Woozy's YT is working on me to implement new features." })

        const ButtonPage1 = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("page1")
            .setLabel("Page 1/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

            new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )

        message.channel.send({ embeds: [MainHelpPage], components: [ButtonPage1] })
    }
}