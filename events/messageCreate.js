const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, db) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    let ranksystem = await client.db.get(`ranksystem_${message.guild.id}`)
    let blockchannel = await client.db.get(`blockchannel_${message.channel.id}_${message.guild.id}`)
    if (blockchannel != denied){
    if (ranksystem === null){
        return;
    }
    else{
        let ranklevel = await client.db.get(`ranklevel_${message.author.id}_${message.guild.id}`)
        if (ranklevel === null){
            client.db.set(`ranklevel_${message.author.id}_${message.guild.id}`, '1');
        }
        let rankuser = await client.db.get(`rankuser_${message.author.id}_${message.guild.id}`)
        if (rankuser === null){
            client.db.set(`ranknext_${message.author.id}_${message.guild.id}`, '0');
        }
        let ranknext = await client.db.get(`ranknext_${message.author.id}_${message.guild.id}`)
        if (ranknext === null){
            client.db.set(`ranknext_${message.author.id}_${message.guild.id}`, '100');
        }
        if(rankuser >= ranknext){
           const c = ranknext*2;
           const d = ranklevel+1;
           client.db.set(`ranknext_${message.author.id}_${message.guild.id}`, c);
           client.db.set(`ranklevel_${message.author.id}_${message.guild.id}`, d);
           const y = await client.db.get(`${d}_${message.guild.id}`)
           if(y != null){
               const role = message.guild.roles.cache.find(x => x.id === y)
               message.author.roles.add(role)
           }
           const g = new MessageEmbed()
           g.setDescription(`Congratulations you levelled up to ${d}`)
           g.setThumbnail(message.author.displayAvatarURL())
           g.setColor('#FFCBCB')
           const e = await client.db.get(`rankchannel_${message.guild.id}`)
           if (e === null){
               message.channel.send({
                   content: '<@'+message.author.id+'>',
                   embeds: [g]
               })
           }
           else{
               const z = message.guild.channels.cache.find(x => x.id === e)
               z.send({
                content: '<@'+message.author.id+'>',
                embeds: [g]
            })
           }

        }
        else{
const e = rankuser+(0.10*ranknext)
client.db.set(`ranknext_${message.author.id}_${message.guild.id}`, e);
        }
    }
}
}