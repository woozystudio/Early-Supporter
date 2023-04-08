const { Client, Message, Collection } = require('discord.js');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const color = require('./config/hexadecimalColors');
const config = require('./config/config.json');
const fs = require('fs');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
require('colors');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://EarlySupporter:EarlyCluser23@earlysupporter.7mc0qrn.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("☁ Connected to the MongoDB database successfully!".blue)
}).catch((error) => {
  console.log("☁ An error occurred while connecting to the MongoDB database!".red)
})

module.exports = client;

const prefix = config.prefix;

client.commands = new Collection();
client.alias = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync('./commands');

//Load all the files
['command', 'events', 'slashCommands'].forEach((handler) => {
    require(`./handlers/${handler}`)(client)
});

client.on('interactionCreate', async(interaction) => {
  //SPANISH ES_MX
  if(interaction.isButton()) {
    if(interaction.customId === "createTicketES") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-ticket`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },{
            id: everyone.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ]
      }).then(c => {
        const buttongeneral = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
          .setCustomId("closeTicketES")
          .setEmoji("🔒")
          .setLabel("Cerrar Ticket")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setCustomId("transcriptTicketES")
          .setEmoji("📑")
          .setDisabled(true)
          .setLabel("Transcribir")
          .setStyle("SECONDARY"),
        )

        const general = new Discord.MessageEmbed()
        .setTitle(`${interaction.user.username} Ticket`)
        .setColor(`${color.rolesYellow}`)
        .setDescription(`Bienvenido a tu ticket <@${interaction.user.id}>! ¿En que podemos ayudarte? Escribe a continuación la razón de tu ticket. El staff puede tardar en contestar ya que estan administrando y moderando todo el servidor, se paciente y espera a que un Miembro del Staff te conteste.`)
        .setThumbnail(`${config.avatarURL}`)

        c.send({ content: `<@${interaction.user.id}>`, embeds: [general], components: [buttongeneral] })
      })

      interaction.reply({ content: `<@${interaction.user.id}>, tu ticket se creó con éxito!`, ephemeral: true })

    }
  }

  if(interaction.isButton()) {
    if(interaction.customId === "reportTicketES") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-report`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },{
            id: everyone.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ]
      }).then(c => {
        const buttongeneral = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
          .setCustomId("closeTicketES")
          .setEmoji("🔒")
          .setLabel("Close Ticket")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setCustomId("transcriptTicketES")
          .setEmoji("📑")
          .setLabel("Transcribir")
          .setDisabled(true)
          .setStyle("SECONDARY"),
        )

        const general = new Discord.MessageEmbed()
        .setTitle(`Reporte de ${interaction.user.username}`)
        .setColor(`${color.rolesYellow}`)
        .setDescription(`Bienvenido a tu reporte <@${interaction.user.id}>! El staff necesita que le menciones tu problema, bug, reporte hacia un usuario entre otros. Porfavor de escribir información hacerca de un tema de los mencionados anteriormente, ya que este es un ticket de reporte. El staff puede tardar en contestar ya que estan administrando y moderando todo el servidor, se paciente y espera a que un Miembro del Staff te conteste.`)
        .setThumbnail(`${config.avatarURL}`)

        c.send({ content: `<@${interaction.user.id}>`, embeds: [general], components: [buttongeneral] })
      })

      interaction.reply({ content: `<@${interaction.user.id}>, tu reporte se creó con éxito!`, ephemeral: true })

    }
  }

  if(interaction.isButton()) {
    if(interaction.customId === "closeTicketES") {
      const TicketCloseMessage = new Discord.MessageEmbed()
      .setDescription("Tu ticket se cerrará en 5s.")
      .setColor("RED")

      interaction.reply({ embeds: [TicketCloseMessage] })
      interaction.channel.edit({ name: `ticket-cerrado` })

      setTimeout(() => {
        interaction.channel.delete()
      }, 5000)

    }
  }
  //ENGLISH EN_US

  if(interaction.isButton()) {
    if(interaction.customId === "createTicketUS") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-ticket`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },{
            id: everyone.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ]
      }).then(c => {
        const buttongeneral = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
          .setCustomId("closeTicketUS")
          .setEmoji("🔒")
          .setLabel("Close Ticket")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setCustomId("transcriptTicketUS")
          .setEmoji("📑")
          .setDisabled(true)
          .setLabel("Transcript")
          .setStyle("SECONDARY"),
        )

        const general = new Discord.MessageEmbed()
        .setTitle(`${interaction.user.username} Ticket`)
        .setColor(`${color.rolesYellow}`)
        .setDescription(`Welcome to your <@${interaction.user.id}> ticket! How can we help you? Please enter the reason for your ticket below. The staff may take some time to answer as they are administering and moderating the whole server, so please be patient and wait for a Staff Member to answer you.`)
        .setThumbnail(`${config.avatarURL}`)

        c.send({ content: `<@${interaction.user.id}>`, embeds: [general], components: [buttongeneral] })
      })

      interaction.reply({ content: `<@${interaction.user.id}>, your ticket has been created!`, ephemeral: true })

    }
  }

  if(interaction.isButton()) {
    if(interaction.customId === "reportTicketUS") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-report`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },{
            id: everyone.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ]
      }).then(c => {
        const buttongeneral = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
          .setCustomId("closeTicketUS")
          .setEmoji("🔒")
          .setLabel("Close Ticket")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setCustomId("transcriptTicketUS")
          .setEmoji("📑")
          .setDisabled(true)
          .setLabel("Transcript")
          .setStyle("SECONDARY"),
        )

        const general = new Discord.MessageEmbed()
        .setTitle(`${interaction.user.username} Report`)
        .setColor(`${color.rolesYellow}`)
        .setDescription(`Welcome to your <@${interaction.user.id}> report! The staff needs you to mention your problem, bug, report to a user and so on. Please write information about one of the above mentioned issues, as this is a report ticket. The staff may take some time to answer as they are administering and moderating the whole server, so please be patient and wait for a Staff Member to answer you.`)
        .setThumbnail(`${config.avatarURL}`)

        c.send({ content: `<@${interaction.user.id}>`, embeds: [general], components: [buttongeneral] })
      })

      interaction.reply({ content: `<@${interaction.user.id}>, your report has been created!`, ephemeral: true })

    }
  }

  if(interaction.isButton()) {
    if(interaction.customId === "closeTicketUS") {
      const TicketCloseMessage = new Discord.MessageEmbed()
      .setDescription("Your ticket has been closed in 5s.")
      .setColor("RED")

      interaction.reply({ embeds: [TicketCloseMessage] })
      interaction.channel.edit({ name: `ticket-closed` })

      setTimeout(() => {
        interaction.channel.delete()
      }, 5000)

    }
  }
})

client.login(config.token)