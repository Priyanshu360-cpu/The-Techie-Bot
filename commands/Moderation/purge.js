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
const e = require("express");
module.exports = {
name: "purge",
category: "Moderation",
description: "Special Purge Group",
args: true,
usage: "",
permission: [],
owner: false,
execute: async (message, args, client, prefix) => { 
    if(!args[1]){
        if(typeof args[0]=="number"){
     await message.channel.messages.fetch({limit:args[0]}).then(x=>{x.map(x=>x.delete())})
        }
        if(args[0]=="bots"){
            await message.channel.messages.fetch({limit:50}).then(x=>{y=x.map(e=>e.bot+"---"+e.id).filter(fil=>fil.includes("true"));
        for(let i=0;i<x.map(e=>e.bot+"---"+e.id).filter(fil=>fil.includes("true")).length;i++){
        message.channel.messages.fetch(y[i].split("---")[1]).then(h=>h.delete());
        }})
        }
        if(args[0]=="images"){
            await message.channel.messages.fetch({limit:50}).then(x=>{y=x.map(e=>e.attachments.size>0?e.attachments.first().url:"hello"+"---"+e.id).filter(fil=>fil.includes("cdn"));
        for(let i=0;i<x.map(e=>e.attachments.size>0?e.attachments.first().url:"hello"+"---"+e.id).filter(fil=>fil.includes("cdn")).length;i++){
        message.channel.messages.fetch(y[i].split("---")[1]).then(h=>h.delete());
        }})
        }
    }
        if(args[1]){
     if(args[1]=="match"){
        await message.channel.messages.fetch({limit:50}).then(x=>{y=x.map(e=>e.content+"---"+e.id).filter(fil=>fil.includes(args[1]));
        for(let i=0;i<x.map(e=>e.content+"---"+e.id).filter(fil=>fil.includes(args[1])).length;i++){
        message.channel.messages.fetch(y[i].split("---")[1]).then(h=>h.delete());
        }})
        }
     if(message.mentions.users.size>0){
        await message.channel.messages.fetch({limit:args[1]}).then(x=>{y=x.map(e=>e.author.username+"---"+e.id).filter(fil=>fil.includes(message.mentions.users.first().username));
        for(let i=0;i<x.map(e=>e.author.username+"---"+e.id).filter(fil=>fil.includes(message.mentions.users.first().username)).length;i++){
        message.channel.messages.fetch(y[i].split("---")[1]).then(h=>h.delete());
        }})
     }
    }
}
}