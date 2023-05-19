const { EmbedBuilder } = require('discord.js');

const ErrorEmbed = new EmbedBuilder()
.setTitle("❌ An error was occured.")
.setDescription("Failed to load the error.")
.setColor("Red")
.setTimestamp()

module.exports = ErrorEmbed;