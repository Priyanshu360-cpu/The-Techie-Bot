const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const { readdirSync } = require("fs");
const {
    button_pagination
} = require('../../utils/button');

module.exports = {
    name: "chess",
    category: "Information",
    aliases: [ "ce" ],
    description: "Creates an embed for you",
    args: true,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
    const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
   }
}