const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Display the avatar of a preterminated user.')
    .addUserOption(user => user.setName('user').setDescription("Select the user you want to display the avatar.").setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');

        const AvatarMessage = new EmbedBuilder()
        .setTitle(`${user.tag}'s Avatar`)
        .setImage(`${user.displayAvatarURL({ dynamic: true, size: 2048 })}`)
        .setColor("Blurple")
        .setFooter({ iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 2048 })}`, text: `Requested by ${interaction.user.username}` })

        await interaction.reply({ embeds: [AvatarMessage] })
    }
}