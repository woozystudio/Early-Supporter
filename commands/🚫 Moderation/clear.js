const Discord = require('discord.js');

module.exports = {
    name: "clear",
    aliases: [],
    async execute(client, message, args) {

        if(!message.member.permissions.has(`MANAGE_MESSAGES`)) return message.reply("❌ `|` You do not have sufficient permissions to use this command. Try again later!")
        if(!message.guild.members.me.permissions.has(`MANAGE_MESSAGES`)) return message.channel.send(`❌ \`|\` You do not have sufficient permissions to use this command. Try again later!`)

        const cantidad = args[0]

        if(!cantidad) return message.channel.send(`❌ \`|\` You must write a number of messages to delete.`)
        if(isNaN(cantidad)) return message.channel.send(`❌ \`|\` You must enter a valid number.`)
        if(cantidad > 100) return message.channel.send(`❌ \`|\` The limit is 100 messages.`)
        if(cantidad < 1) return message.channel.send(`❌ \`|\` You cannot delete 0 messages, the number has to be greater than that.`)
        
        message.reply(`Deleting messages...`)

        try {
            setTimeout(() => message.channel.bulkDelete(cantidad), 2000)
          } catch {
            param.reply('❌ \`|\`  You cannot delete messages from 14 days ago!')
          }

        
        }
    }