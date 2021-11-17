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
const { replaceResultTransformer } = require("common-tags");
module.exports = {
    name: "blackjack",
    category: "Information",
    aliases: [ "bj" ],
    description: "Play Blackjack to win money",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        let a = []
    }
}