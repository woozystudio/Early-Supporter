const Discord = require("discord.js");

module.exports = {
    name: "premium",
    alias: [],
    async execute(client, message, args){
        let keys = ["KV16kpu905", "XIu53RhO91", "qKmp35Y98A", "973HYpq0Nm", "63tHB9AxMq", "poAxYe872x", "A9172TwpLsZ", "U40KmmnLeq", "8e6PlaEq81", "yHam32Ne9z"]

        let m = args[0]
        if(!m) return message.channel.send("❌ `|` Please enter a valid key.")
            /*if(args[0] !== "KV16kpu905", "XIu53RhO91", "qKmp35Y98A", "973HYpq0Nm", "63tHB9AxMq", "poAxYe872x", "A9172TwpLsZ", "U40KmmnLeq", "8e6PlaEq81", "yHam32Ne9z") return message.channel.send("❌ `|` Please enter a valid key.")*/

            if(args[0]) {
                if(args[0].includes("KV16kpu905")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("XIu53RhO91")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("qKmp35Y98A")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("973HYpq0Nm")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("63tHB9AxMq")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("poAxYe872x")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("A9172TwpLsZ")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("U40KmmnLeq")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("8e6PlaEq81")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")
                if(args[0].includes("yHam32Ne9z")) return message.channel.send("`⭐` You have successfully claimed your premium! `⭐`")

                if(!args[0].includes("KV16kpu905")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("XIu53RhO91")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("qKmp35Y98A")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("973HYpq0Nm")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("63tHB9AxMq")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("poAxYe872x")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("A9172TwpLsZ")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("U40KmmnLeq")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("8e6PlaEq81")) return message.channel.send("❌ `|` Please enter a valid key.")
                if(!args[0].includes("yHam32Ne9z")) return message.channel.send("❌ `|` Please enter a valid key.")
            }
    }
}