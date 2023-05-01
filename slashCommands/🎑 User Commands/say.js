const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Write what you want in the box and I will imitate it!")
    .addStringOption(option =>
		option.setName('text')
			.setDescription('Write what you want in the box and I will imitate it!')
			.setRequired(true)
			),

  async run(client, interaction) {
    let text = interaction.options.getString("text");

    interaction.reply({
      content: `${text}`,
      allowedMentions: {
        parse: [],
      },
    })
  }
}
