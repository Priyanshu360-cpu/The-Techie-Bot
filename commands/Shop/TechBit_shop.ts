
module.exports = {
    name: "shop",
    category: "Information",
    aliases: [ "sh" ],
    description: "Shows information about currency for the TechieBot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => { 
    const { MessageEmbed, MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require("discord.js");
       message.channel.send("Hello")
   }
}