const Discord = require("discord.js");
const { inspect } = require('util');

module.exports = {
    name: "eval",
    alias: [],
    async execute(client, message, args) {
        if (!args.length) return message.reply("❌ `|` Plase provide some code to evaluate.")

        try {
            const evaluate = await eval(args.join(" "))
            const truncate = trunc(inspect(evaluate), 2045)
            const truncateeasy = trunc(evaluate, 2045)
            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setDescription(`\`\`\`js\n${truncateeasy}\`\`\``)
                    .setColor("BLURPLE"),

                    new Discord.MessageEmbed()
                    .setTitle("Development Console")
                    .setDescription(`\`\`\`js\n${truncate}\`\`\``)
                    .setColor("BLURPLE")
                    .setTimestamp()
                ]
            })
        } catch (e) {
            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setTitle("Development Console Error")
                    .setDescription(`\`\`\`js\n${e.toString().substring(0, 2048)}\`\`\``)
                    .setColor("RED")
                    .setTimestamp()
                ]
            })
        }
    }
}

function trunc(text, n) {
    if (text.length > n) {
        text.substring(0, n) + "..."
    } else {
        return text;
    }
}