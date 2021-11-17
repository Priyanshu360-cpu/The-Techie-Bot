const { MessageEmbed } = require("discord.js");
const snipes = {};
const pipes = {};
module.exports = async (client, message) => {
    if (!message.guild) return;
  
  if(message.member.user.bot === false){
  
    
    let a = {
      author: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).author+","+message.author.username+"#"+message.author.discriminator:message.author.username+"#"+message.author.discriminator,
      content: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).content?client.snipes.get(message.guild.id).content+","+(message.content?message.content:"null"):message.content?message.content:"null":message.content?message.content:"null",
      channel: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).channel+","+message.channel.id:message.channel.id,
      createdAt: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).createdAt+","+message.createdTimestamp:message.createdTimestamp,
      vrel: client.snipes.get(message.guild.id)?message.attachments.size?client.snipes.get(message.guild.id).vrel+","+message.attachments.map(x=>x)[0].url:client.snipes.get(message.guild.id).vrel+","+"https://media.discordapp.net/attachments/742245061613453343/909004855136382986/mp4.mp4":message.attachments.size?message.attachments.map(x=>x)[0].url:"https://media.discordapp.net/attachments/742245061613453343/909004855136382986/mp4.mp4",
    };
  client.snipes.set(message.guild.id, a)
}
 }