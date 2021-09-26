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
    const { Permissions } = require('discord.js');  
    if(message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS) === true){
    const simplydjs = require('simply-djs')
    simplydjs.stealSticker(message, args, {
        embedTitle: 'Successfully Added the sticker', 
        embedColor: '#FFCBCB',
        embedFoot: 'Stealing is bad bad',
    })
}
else{
    const embed = new MessageEmbed()
      .setTitle(`Missing Permission`)
      .setDescription('__Kick Permission is required__')
      .setColor('#7a0202')
      .setThumbnail(client.user.displayAvatarURL())   
      .setTimestamp();
    message.channel.send({embeds: [embed]});
}
   }
};
