const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "avatar",
    category: "Information",
    description: "Stylish avatar",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const embed = new MessageEmbed()
        embed.setColor("00ffc3")
        const column = new MessageActionRow()
        .addComponents(
                new MessageSelectMenu()
                .setCustomId('avatar')
                .setPlaceholder('Change Size')
                .addOptions([
                    {
                        label: '16',
                                description: 'Changes Size of Avatar to 16',
                                value: '16',
                    },
                    {
                        label: '32',
                                description: 'Changes Size of Avatar to 32',
                                value: '32',
                    },
                    {
                        label: '64',
                                description: 'Changes Size of Avatar to 64',
                                value: "64",
                    },
                    {
                        label: '128',
                                description: 'Changes Size of Avatar to 128',
                                value: "128",
                    },
                    {
                        label: '256',
                                description: 'Changes Size of Avatar to 256',
                                value: "256",
                    },
                    {
                        label: '512',
                                description: 'Changes Size of Avatar to 512',
                                value: "512",
                    },
                    {
                        label: '1024',
                                description: 'Changes Size of Avatar to 1024',
                                value: "1024",
                    },
                    {
                        label: '2048',
                                description: 'Changes Size of Avatar to 2048',
                                value: "2048",
                    },
                    {
                        label: '4096',
                                description: 'Changes Size of Avatar to 4096',
                                value: "4096",
                    },
    
                ])
        );
if(message.mentions.users.first()) d = message.mentions.users.first()
else{if(!args[0]){d = message.author.id;}
    else{
    let userResolver = args[0]
d = client.users.cache.find( x => x.username.toLowerCase() === userResolver.toLowerCase() ||  x.tag.toLowerCase() === userResolver.toLowerCase() ||  x.id === userResolver || x.toString() === userResolver )
if(!d) d = client.users.fetch(userResolver).then(x =>{d=x.id}).catch(e => null)
}
}
d=d.id?d.id:message.author.id;
client.users.fetch(d).then(user => {embed.setImage(user.avatar.includes('a_')?user.displayAvatarURL().replace('webp', 'gif')+'?size=2048':user.displayAvatarURL()+'?size=2048')})
setTimeout(()=>catcher(),300)
async function catcher(){
    o = await message.channel.send({embeds:[embed],components:[column]})
function edito(a,i){
    const newa = new MessageEmbed()
    newa.setColor("00ffc3")
    newa.setImage(`${embed.image.url.split("=")[0]}=${i}`)
    o.edit({embeds:[newa],components:[column]})
}
const filter = (p) => p.user.id === message.author.id
const collector = message.channel.createMessageComponentCollector({filter,time: 8000});
collector.on('collect', async i => 
{
i.deferUpdate()
    if(i.customId === 'avatar'){
        
        if(i.values[0] == "16"){edito(o,16)}
        else if(i.values[0] == "32"){edito(o,32)}
        else if(i.values[0] == "64"){edito(o,64)}
        else if(i.values[0] == "128"){edito(o,128)}
        else if(i.values[0] == "256"){edito(o,256)}
        else if(i.values[0] == "512"){edito(o,512)}
        else if(i.values[0] == "1024"){edito(o,1024)}
        else if(i.values[0] == "2048"){edito(o,2048)}
        else if(i.values[0] == "4096"){edito(o,4096)}
    }
    collector.on("end", () => {
        column.components[0].setDisabled(true)
        o.edit({embeds:[embed],components:[column]})
    })
})
}
}
}
    