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
        let titleclr = message.channel.createMessageCollector({ filter, time: 30000, max: 1 })
        message.channel.send("Enter the number of Self Roles You want")

            let b = []
        for (let I = 0;I<client.data1;I++){
            let filter = (m) => m.author.id === message.author.id
            let titleclra = message.channel.createMessageCollector({ filter, time: 30000})
            titleclra.on("collect", async (message) => {
                message.channel.send(`Enter the name of next role and mention it`)
                b.push[message.content]
                titleclra.stop() 
            })}
            
            client.selfRoles = b;
        titleclra.on('end', async (collected, reason) => {
            console.log(b)
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
          })
            
        }
    }