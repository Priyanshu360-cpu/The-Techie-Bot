
import { MessageEmbed,Message,Client } from "discord.js"
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
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