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
name: "snipe",
category: "Information",
description: "snipes a deleted message",
args: false,
usage: "",
permission: [],
owner: false,
execute: async (message, args, client, prefix) => {
    if(!client.snipes.get(message.guild.id)){
    var e = new MessageEmbed()
    e.setTitle("Nothing to Snipe")
    e.setColor("RED")
    }
    else{
    var f = new MessageEmbed()
    f.setTitle("Snipe")
    f.setColor("RED")
    client.snipes.get(message.guild.id).content?f.setDescription(`Author - ${client.snipes.get(message.guild.id).author.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}\nContent - ${client.snipes.get(message.guild.id).content.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}>`):f.setDescription(`Author - ${client.snipes.get(message.guild.id).author.id.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}>`)
    client.snipes.get(message.guild.id).vrel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]?f.setImage(client.snipes.get(message.guild.id).vrel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]):"A"
    }
    var DeletionButton = new MessageButton()
    .setCustomId(`deletee_embed`)
    .setEmoji("🗑️")
    .setStyle("DANGER");
    var pageMovingButttons3 = new MessageActionRow().addComponents([
        DeletionButton
      ]);
    var pageMovingButttons1 = new MessageButton()
    .setCustomId(`forwardd_buttton_embed`)

    .setEmoji("<:DoubleArrowRight:908994604878163979>")
    .setStyle("SUCCESS");

  var deleteBtn = new MessageButton()
    .setCustomId(`deletee_embed`)

    .setEmoji("🗑️")
    .setStyle("DANGER");

  var pageMovingButttons2 = new MessageButton()
    .setCustomId(`backk_buttton_embed`)

    .setEmoji("<:DoubleArrowLeft:908994579133509662>")
    .setStyle("SUCCESS");
    var pageMovingButttons = new MessageActionRow().addComponents([
      pageMovingButttons2,
      deleteBtn,
      pageMovingButttons1
    ]);
    var i = 0;
    let a = await message.channel.send({embeds: [client.snipes.get(message.guild.id)?f:e], components:[client.snipes.get(message.guild.id)?pageMovingButttons:pageMovingButttons3]})
    const collector = message.channel.createMessageComponentCollector({time: 30000});
    collector.on('collect', async (b) => {
        
      if (b.message.id == a.id && b.user.id == message.author.id) {
        if (b.user.id !== message.author.id)
        return b.reply({
          content: "This Page wasnt created by you",
          ephemeral: true
        });
        b.deferUpdate();
        if (b.customId == "backk_buttton_embed") {
            if(i<=0){
                i = client.snipes.get(message.guild.id).channel.split(",").length;
            }
            i = i-1;
            var g = new MessageEmbed()
            g.setTitle("Snipe")
            g.setColor("RED")
            client.snipes.get(message.guild.id).content?g.setDescription(`Author - ${client.snipes.get(message.guild.id).author.split(",")[i]}\nContent - ${client.snipes.get(message.guild.id).content.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`):g.setDescription(`Author - ${client.snipes.get(message.guild.id).author.id.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`)
            client.snipes.get(message.guild.id).vrel.split(",")[i]?g.setImage(client.snipes.get(message.guild.id).vrel.split(",")[i]):"A"
            
            a.edit({embeds: [g], components:[pageMovingButttons]})
        }
        if (b.customId == "forwardd_buttton_embed") {
            if(i>client.snipes.get(message.guild.id).channel.split(",").length-1){
                i=0;
            }
            var w = new MessageEmbed()
            w.setTitle("Snipe")
            w.setColor("RED")
            client.snipes.get(message.guild.id).content?w.setDescription(`Author - ${client.snipes.get(message.guild.id).author.split(",")[i]}\nContent - ${client.snipes.get(message.guild.id).content.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`):w.setDescription(`Author - ${client.snipes.get(message.guild.id).author.id.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`)
            client.snipes.get(message.guild.id).vrel.split(",")[i]?w.setImage(client.snipes.get(message.guild.id).vrel.split(",")[i]):"A"
            a.edit({embeds: [w], components:[pageMovingButttons]})
            i = i+1;
        }
        if(b.customId == "deletee_embed"){
          a.delete()
    }
}
    })
    collector.on("end", () => {
        pageMovingButttons.components[0].setDisabled(true)
        pageMovingButttons.components[1].setDisabled(true)
        pageMovingButttons.components[2].setDisabled(true)
        a.edit({embeds:[f],components:[pageMovingButttons]})
    })
}
}
