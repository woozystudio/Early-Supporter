const { Client, Message, Collection } = require('discord.js');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const color = require('./js/hexadecimalColors');
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

client.on('interactionCreate', async (interaction) => {
  //HELP COMMANDS
  if (interaction.isButton()) {
    if (interaction.customId === "gotopage") {
      /**
       * @param {Discord.Client} client 
       * @param {Discord.CommandInteraction} interaction 
       */

      const modal = new Discord.Modal()
        .setTitle("Enter a Page Number")
        .setCustomId("pagenavegator")

      const nombre = new Discord.TextInputComponent()
        .setCustomId("int")
        .setLabel("Page Number")
        .setPlaceholder("Enter a number from 1 to 8")
        .setStyle("SHORT")
        .setRequired(true)

      const row = new Discord.MessageActionRow()
        .addComponents(nombre)


      modal.addComponents(row)

      await interaction.showModal(modal)
    }
  }

  if (interaction.isModalSubmit()) {
    if (interaction.customId === "pagenavegator") {
      const page01 = new Discord.MessageEmbed()
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
      const page02 = new Discord.MessageEmbed()
        .setTitle("Early Suporter's Helper (Premium)")
        .setDescription("In this category there is only 1 command, `!premium`. This command is used to register in the premium program and get access to news and updates ahead of time. It is like the betatesters program.")
        .setColor("BLURPLE")
        .addFields([
          {
            name: "Commands:", value: "`!premium` Enter a valid password to register for the Early Supporter premium program."
          }
        ])
        .setFooter({ text: "Besides that, I'm in charge of unlocking the text channels for those who don't have a microphone. My creator Woozy's YT is working on me to implement new features." })
      const ButtonPage2 = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId("page2")
            .setLabel("Page 2/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

          new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )
      const page03 = new Discord.MessageEmbed()
        .setDescription("3")
      const ButtonPage3 = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId("page3")
            .setLabel("Page 3/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

          new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )
      const page04 = new Discord.MessageEmbed()
        .setDescription("4")
      const ButtonPage4 = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId("page4")
            .setLabel("Page 4/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

          new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )
      const page05 = new Discord.MessageEmbed()
        .setDescription("5")
      const ButtonPage5 = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId("page5")
            .setLabel("Page 5/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

          new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )
      const page06 = new Discord.MessageEmbed()
        .setDescription("6")
      const ButtonPage6 = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId("page6")
            .setLabel("Page 6/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

          new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )
      const page07 = new Discord.MessageEmbed()
        .setDescription("7")
      const ButtonPage7 = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId("page7")
            .setLabel("Page 7/7")
            .setDisabled(true)
            .setStyle("SECONDARY"),

          new Discord.MessageButton()
            .setCustomId("gotopage")
            .setLabel("Select a Page")
            .setStyle("SECONDARY")
            .setEmoji("📝")
        )

      const int = interaction.fields.getTextInputValue("int");

      if (int === "1") {
        interaction.message.edit({ embeds: [page01], components: [ButtonPage1] })
      }
      if (int === "2") {
        interaction.message.edit({ embeds: [page02], components: [ButtonPage2] })
      }
      if (int === "3") {
        interaction.message.edit({ embeds: [page03], components: [ButtonPage3] })
      }
      if (int === "4") {
        interaction.message.edit({ embeds: [page04], components: [ButtonPage4] })
      }
      if (int === "5") {
        interaction.message.edit({ embeds: [page05], components: [ButtonPage5] })
      }
      if (int === "6") {
        interaction.message.edit({ embeds: [page06], components: [ButtonPage6] })
      }
      if (int === "7") {
        interaction.message.edit({ embeds: [page07], components: [ButtonPage7] })
      }
    }
  }



  //TICKET SYSTEMS
  //SPANISH ES_MX
  if (interaction.isButton()) {
    if (interaction.customId === "createTicketES") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-ticket`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }, {
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
            new Discord.MessageButton()
              .setCustomId("claimTicketES")
              .setEmoji("⭐")
              .setLabel("Claimear Ticket")
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

  if (interaction.isButton()) {
    if (interaction.customId === "reportTicketES") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-report`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }, {
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
            new Discord.MessageButton()
              .setCustomId("claimTicketES")
              .setEmoji("⭐")
              .setLabel("Claimear Ticket")
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

  if (interaction.isButton()) {
    if (interaction.customId === "closeTicketES") {
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

  if (interaction.isButton()) {
    if (interaction.customId === "claimTicketES") {
      const claim = new Discord.MessageEmbed()
        .setDescription(`\`⭐\` El miembro del staff que te va a estar atendiendo el dia de hoy es <@${interaction.user.id}>.`)
        .setColor(`${color.green}`)

      interaction.reply({ embeds: [claim] })
    }
  }
  //ENGLISH EN_US

  if (interaction.isButton()) {
    if (interaction.customId === "createTicketUS") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-ticket`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }, {
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
            new Discord.MessageButton()
              .setCustomId("claimTicketUS")
              .setEmoji("⭐")
              .setLabel("Claim")
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

  if (interaction.isButton()) {
    if (interaction.customId === "reportTicketUS") {
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`${interaction.user.username}-report`, {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }, {
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
            new Discord.MessageButton()
              .setCustomId("claimTicketUS")
              .setEmoji("⭐")
              .setLabel("Claim")
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

  if (interaction.isButton()) {
    if (interaction.customId === "closeTicketUS") {
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

  if (interaction.isButton()) {
    if (interaction.customId === "claimTicketUS") {
      const claim = new Discord.MessageEmbed()
        .setDescription(`\`⭐\` The staff member who will be assisting you today is <@${interaction.user.id}>.`)
        .setColor(`${color.green}`)

      interaction.reply({ embeds: [claim] })
    }
  }
})

client.login(config.token)