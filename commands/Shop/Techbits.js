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
    name: "currency",
    category: "Information",
    aliases: [ "h" ],
    description: "Shows information about currency for the TechieBot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
       let currency = new MessageEmbed()
       currency.setTitle("TechBits")
       currency.setThumbnail("https://cdn.discordapp.com/attachments/855337188006690839/916376539401162812/1638551576915.png")
       currency.setDescription(`Techbits is the currency techie uses for exchange of items. It is totally a virtual money and doesnt holds any market value. The term "TechBit" was Coined By \`Candy#5555\`, Thanks to them. Head to the Store and find out what u can buy with this coin`)
       currency.setColor("YELLOW")
       message.channel.send({embeds:[currency]})
   }
}