const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "selectroles",
    category: "Moderation",
    description: "Creates a new Select",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        var a = await message.channel.send({content:"Self Roles#1"})
        let filter = m => message.author.id === m.author.id
        message.channel.send("Enter the number of Self Roles You want")
        var i = 0;
        var b = []; 
        var c = 2;
        var d;
        let titleclr = message.channel.createMessageCollector({ filter, time: 30000, max: 1 })
        titleclr.on("collect",async(message)=>{
           c=message.content;
            titleclr.stop()
            message.channel.send(`Enter the name of next role and mention it`)
            
            let titleclra = message.channel.createMessageCollector({ filter, time: 30000, max: c})
            titleclra.on("collect", async (message) => {
                if(i!=2){
                message.channel.send(`Enter the name of next role and mention it`)} 
                
                b[i] = message.content;
                i=i+1;
            }) 
           for(j=1;j<=25;j++){
               if(!client.selfRole.get(`${message.guild.id}_${j}`)){
                   d = j;
                   break;
               }
           } 
           client.selfRole.set(`${message.guild.id}_${d}`,{"Roles":b,"Id":b})
            titleclra.on('end', async (collected, reason) => {
                if (reason === 'time') {
                  const content = new MessageButton()
                    .setLabel('Timeout')
                    .setStyle('DANGER')
                    .setCustomId('timeout|91817623842')
                    .setDisabled()
      
                  const row = new MessageActionRow()
                    .addComponents([content])
      const timeout = new MessageEmbed()
      timeout.setTtitle("Time ran out, Try again");
      timeout.setColor("RED")
                    a.edit({ embeds: [timeout], components: [row] })
                }
              })}
              )
            
            
        
            
        }
    }