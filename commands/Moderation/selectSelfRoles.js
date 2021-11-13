const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "selectroles",
    category: "Moderation",
    description: "Creates a new Select",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        var a = await message.channel.send({content:"Self Roles#1"})
        let filter = m => message.author.id === m.author.id
        let titleclr = message.channel.createMessageCollector({ filter, time: 30000, max: 1 })
        message.channel.send("Enter the number of Self Roles You want")
        titleclr.on("collect", async m => {
            message.channel.send(`Enter the name of  the next role and mention it`)
            client.data1 = m.content
            m.delete()
            titleclr.stop()
            let b = []
        for (let I = 0;I<client.data1;I++){
            filter = p => message.author.id === p.author.id
            let titleclra = message.channel.createMessageCollector({ filter, time: 30000, max: 1 })
            titleclra.on("collect", async p => {
                message.channel.send(`Enter the name of next role and mention it`)
                b.push[p.content]
                console.log(b)
                titleclra.stop()
            })}
            client.selfRoles = b;
        })
       
            
        }
    }