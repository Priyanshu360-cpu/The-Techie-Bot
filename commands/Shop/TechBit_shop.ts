
import { MessageEmbed,Message,Client } from "discord.js"
import { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } from 'discord.js';
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
       message.channel.send("Hello")
   }
}