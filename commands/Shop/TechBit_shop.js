const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const {
    button_pagination
} = require('../../utils/button');
const math = require("mathjs");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "shop",
    category: "Information",
    aliases: [ "h" ],
    description: "Shows information about currency for the TechieBot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
   }
}