const Discord = require('discord.js');
const config = require('../../config/config.json');
const color = require('../../js/hexadecimalColors');

module.exports = {
    name: "setup-ticket",
    aliases: [],
    async execute(client, message, args) {
        const MessageTicketES = new Discord.MessageEmbed()
        .setTitle("¿Necesitas Ayuda? | Tickets")
        .setImage("https://cdn.discordapp.com/attachments/1059645728391168010/1094096820935856189/Tickets.png")
        .setColor(`${color.rolesYellow}`)
        .setDescription("Hola! ¿Necesitas Ayuda en algo? ¡No dudes es preguntarnoslo aqui por medio de tickets! Los tickets son una forma de comunicación entre el staff del servidor y el cliente o el usuario, a la hora de crear un ticket tienes que responder con tiempo ya que tu ticket se eliminará. Le pedimos que no cree tickets innecesarios y que sea respetuoso a la hora de hablar.")

        const MessageTicketsButtonsES = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("createTicketES")
            .setLabel("General")
            .setEmoji('📩')
            .setStyle("SECONDARY"),

            new Discord.MessageButton()
            .setCustomId("reportTicketES")
            .setLabel("Reporte")
            .setEmoji('⛔')
            .setStyle("DANGER")
        )

        const MessageTicketUS = new Discord.MessageEmbed()
        .setTitle("You need help? | Tickets")
        .setImage("https://cdn.discordapp.com/attachments/1059645728391168010/1094096820935856189/Tickets.png")
        .setColor(`${color.rolesYellow}`)
        .setDescription("Hi, do you need help with anything, don't hesitate to ask us here via tickets! Tickets are a way of communication between the server staff and the client or user, when creating a ticket you have to answer in time because your ticket will be deleted. We ask you not to create unnecessary tickets and to be respectful when talking.")

        const MessageTicketsButtonsUS = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("createTicketUS")
            .setLabel("General")
            .setEmoji('📩')
            .setStyle("SECONDARY"),

            new Discord.MessageButton()
            .setCustomId("reportTicketUS")
            .setLabel("Report")
            .setEmoji('⛔')
            .setStyle("DANGER")
        )

        let m = args[0]
        if(!m) return message.channel.send(`Hey <@${message.author.id}>, you have to select a language for the ticket. Here are the options: \`en_US\` or \`es_MX\`. Type: \`!setup-ticket (lang)\``) // You have to select a language.
            if(args[0] === "es_MX") return message.channel.send({ embeds: [MessageTicketES], components: [MessageTicketsButtonsES] })
            if(args[0] === "en_US") return message.channel.send({ embeds: [MessageTicketUS], components: [MessageTicketsButtonsUS] })
    }
}