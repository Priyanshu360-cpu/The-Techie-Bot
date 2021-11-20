const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "testcordy",
    category: "Information",
    description: "Stylish avatar",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const apple = require("cordy")
        apple.afk(message,args,client)
    }
}