const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const { Modal } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("review")
    .setDescription("Rate Early Supporter with stars!"),

    /**
     * @param {Discord.Client} client 
     * @param {Discord.CommandInteraction} interaction 
     */

    async run(client, interaction){
        
        const modal = new Discord.Modal()
        .setTitle("Rate Early Supporter")
        .setCustomId("review")

        const name = new Discord.TextInputComponent()
        .setCustomId("name")
        .setLabel("Write your discord tag")
        .setPlaceholder("User#0000")
        .setStyle("SHORT")
        .setRequired(true)

        const starts = new Discord.TextInputComponent()
        .setCustomId("starts")
        .setLabel("How many stars do you give me?")
        .setPlaceholder("⭐⭐⭐⭐⭐")
        .setStyle("SHORT")
        .setRequired(true)

        const desc = new Discord.TextInputComponent()
        .setCustomId("desc")
        .setLabel("Write your Suggestions, Bug and/or Opinion")
        .setPlaceholder("My opinion is...")
        .setStyle("PARAGRAPH")
        .setRequired(true)

        const row = new Discord.MessageActionRow()
        .addComponents(name)

        const row2 = new Discord.MessageActionRow()
        .addComponents(starts)

        const row3 = new Discord.MessageActionRow()
        .addComponents(desc)

        modal.addComponents(row, row2, row3)
        
        await interaction.showModal(modal)
    },
};