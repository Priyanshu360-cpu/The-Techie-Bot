
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
    const { readdirSync } = require("fs");
    const {
        button_pagination
    } = require('../../utils/button');
    
    const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
   }
}