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
    name: "addsticker",
    category: "Information",
    aliases: [ "as" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
    const simplydjs = require('simply-djs')
    simplydjs.stealSticker(message, args, {
        embedTitle: 'Successfully Added the sticker', 
        embedColor: '#FFCBCB',
        embedFoot: 'Stealing is bad bad',
    })
   }
};
