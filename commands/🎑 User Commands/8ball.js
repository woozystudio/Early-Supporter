const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    alias: [],
    async execute(client, message, args){
        const pregunta = args.join(" ")
        if(!pregunta) return message.channel.send("❌ `|` Write a question so I can answer it!")

        let respuestas = ["Yes.", "No.", "Maybe.", "Maybe no."]
        let random = respuestas[Math.floor(Math.random() * respuestas.length)]

        const embed = new Discord.MessageEmbed()
        .setTitle("8ball questions!")
        .setColor("BLURPLE")
        .setDescription(`**Your question:**\n${pregunta}\n \n**My Answer:**\n${random}`)

        message.channel.send({ embeds: [embed] })
    }
}