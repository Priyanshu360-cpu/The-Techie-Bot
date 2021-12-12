
module.exports = {
    name: "rank",
    category: "Information",
    aliases: [ "r" ],
    description: "Return all rank carrd for specified user",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
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
    let ranksystem = await client.db.get(`ranksystem_${message.guild.id}`)
    if (ranksystem === null){
            let e = new MessageEmbed()
            e.setDescription('Rank System is not activated in this guild yet in this guild yet')
            e.setThumbnail(message.author.displayAvatarURL())
            message.channel.send({embeds:[e]})
    }
    else{
    const { CanvasSenpai } = require("canvas-senpai")
    const Discord = require("discord.js");
    const canva = new CanvasSenpai();
    const user = message.author;
    let rankuser = await client.db.get(`rankuser_${message.author.id}_${message.guild.id}`)
    if(rankuser === null){
        let e = new MessageEmbed()
        e.setDescription('You have been not ranked in this guild yet')
        e.setThumbnail(message.author.displayAvatarURL())
        message.channel.send({embeds:[e]})
    }
    let ranklevel = await client.db.get(`ranklevel_${message.author.id}_${message.guild.id}`)
    let ranknext = await client.db.get(`ranknnext_${message.author.id}_${message.guild.id}`)
    let data = await canva.rankcard(
         {
           link: "https://cdn.discordapp.com/attachments/742245061613453343/898518424207114281/banner.jpg",
           name: user.username,
           discriminator: user.discriminator,
           level: ranklevel,
           rank: '1',
           currentXP: rankuser,
           fullXP: ranknext,
           avatar: message.author.displayAvatarURL({ format: "png"})
    
         })
    
    
    
        const attachments = new Discord.MessageAttachment(
         data,
          "rank.png"
        );
     message.channel.send({files: [attachments]})
   }
}
    }