const Discord = require("discord.js");
const config = require('../../config/config.json');
const package = require('../../package.json');

module.exports = {
    name: "developmentinfo",
    aliases: ["devinfo"],
    async execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("Developer information of Early Supporter")
        .setThumbnail(`${config.avatarURL}`)
        .setDescription("Hello, my name is Early Supporter and I am in charge of maintaining the server systems.")
        .setColor("BLURPLE")
        .addFields(
            { name: "Package Name", value: `${package.name}`, inline: true },
            { name: "Version", value: `${package.version}`, inline: true },
            { name: "Author", value: `${package.author}`, inline: true },
            { name: "Main file Name", value: `${package.main}`, inline: true },
            { name: "Scripts", value: `test: \`${package.scripts.test}\``, inline: true },
            { name: "License", value: `${package.license}`, inline: true },
            { name: "Dependencies:", value: `discord.js \`${package.dependencies["discord.js"]}\`\n@discordjs/rest \`${package.dependencies["@discordjs/rest"]}\`\ncolors \`${package.dependencies.colors}\`\nmoment \`${package.dependencies.moment}\`\nmongoose \`${package.dependencies.mongoose}\``, inline: true },
            { name: "Description", value: `${package.description}`, inline: true },
        )
        
        message.channel.send({ embeds: [embed] })
        }
    }