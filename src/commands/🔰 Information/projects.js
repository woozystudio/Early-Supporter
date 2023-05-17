const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('projects')
    .setDescription('Check out Early Supporter\'s upcoming projects.'),
    async execute(interaction, client) {

        const ProjectsMessage = new EmbedBuilder()
        .setFooter({ iconURL: `${client.user.displayAvatarURL({ dynamic: true, size: 2048 })}`, text: "Early Supporter" })
        .setColor("Blurple")
        .addFields([
            {
                name: "Upcoming Projects:", 
                value: "Supporter API\n Actualization v2.0.0 (Working on)"
            },
            {
                name: "Latest Project:", 
                value: "[Early Supporter v1.0.4](https://github.com/WoozyStudio/Early-Supporter/releases/tag/1.0.4)"
            }
        ])

        await interaction.reply({ embeds: [ProjectsMessage] })
    }
}