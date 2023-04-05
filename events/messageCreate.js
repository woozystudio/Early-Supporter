const { Collection } = require('discord.js')
const Discord = require('discord.js');
const client = require('..');
const config = require('../config/config.json');
const prefix = config.prefix;

client.on("messageCreate", async (message) => {
    if(message.author.bot) return; //Return when message author is a bot
    if(!message.content.startsWith(prefix)) return; //Only response when command is start with prefix
    if(!message.guild) return; //Return if the command is not using in guild
    if(!message.member) message.member = await message.guild.fetchMember(message); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g); //args[0] is the firts word of the command (not include prefix)
    //Example: !ban @use, so @user is args[0]
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.alias.get(cmd));
    if(command) command.execute(client, message, args);
})