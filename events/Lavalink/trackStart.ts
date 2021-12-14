const { MessageEmbed, MessageSelectMenu } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')
const { MessageActionRow, MessageButton} = require('discord.js');
module.exports = async (client, player, track, payload, message, songt) => { 
    var data = await client.db.get(`mchannel_${player.guild}`);
    var data2 = await client.db.get(`mmesage_${player.guild}`);
    var data3 = await client.db.get(`mqmessage_${player.guild}`);
    if(data){
        try{
        client.channels.fetch(data).then(y=>{y.messages.fetch(data2).then(
            x=>{
                
                const song = player.queue.current
                var total = song.duration;
                var current = player.position;
                var size = 20;
                var line = '▬';
                var slider = '🔘';
        
                let embed = new MessageEmbed()
                    .setDescription(`<a:diska:876363187119857687> **Now Playing**\n**[${song.title}](${song.uri})** - \`[${convertTime(song.duration)}]\``)
                    .setImage(song.displayThumbnail("hqdefault"))
                    .setColor("#FFCBCB")
                    .addField("\u200b", progressbar(total, current, size, line, slider))
                    .addField("\u200b", `\`${convertTime(current)} / ${convertTime(total)}\``);
                    
                x.edit({embeds: [embed]});
            }
        )
        }
        )
        client.channels.fetch(data).then(y=>{y.messages.fetch(data3).then(
            x=>{
                const queue = player.queue;
                const multiple = 10;
                const page = 1 && Number(1) ? Number(1) : 1;
        
                const end = page * multiple;
                const start = end - multiple;
                const song = player.queue.current;
                const tracks = queue.slice(start, end);
                let embed = new MessageEmbed()
                if (queue.current) embed.setThumbnail(song.displayThumbnail("hqdefault"));embed.addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``);
        
                if (!tracks.length) embed.setDescription(`No tracks in ${page > 1 ? `page ${page}` : "the queue"}.`);
                else embed.setThumbnail(song.displayThumbnail("hqdefault"));embed.setDescription(`**Queue List - ${queue.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"));
        
                const maxPages = Math.ceil(queue.length / multiple);
        
                embed.addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
                embed.setColor("#FFCBCB");
                x.edit({embeds: [embed]});
            })})
    }
    catch(e){
        console.log(e)
    }
}
    else{
        const channel = client.channels.cache.get(player.textChannel);
        const emojiplay = client.emoji.play;
    player.setVolume('100'); 
    
   
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('Pauseaa')
            .setLabel('Pause')
            .setStyle('SECONDARY')
            .setEmoji('876007266418057217'),
            new MessageButton()
            .setCustomId('Resumeaa')
            .setLabel('Resume')
            .setStyle('DANGER')
            .setEmoji('876019503325126667'),
            new MessageButton()
            .setCustomId('Skipaa')
            .setLabel('Skip')
            .setStyle('PRIMARY')
            .setEmoji('876007419724054548'),
            new MessageButton()
            .setCustomId('Lyricsaa')
            .setLabel('Lyrics')
            .setStyle('SUCCESS')
            .setEmoji('876007882578100264'),
            new MessageButton()
            .setCustomId('Loopaa')
            .setLabel('Loop')
            .setStyle('SECONDARY')
            .setEmoji('881060715941740555'),
    )
    const column = new MessageActionRow()
    .addComponents(
            new MessageSelectMenu()
            .setCustomId('filtera')
            .setPlaceholder('Apply Filters')
            .addOptions([
                {
                    label: 'Party mode',
							description: 'toggle Party mode for this song',
							value: 'first_option',
                },
                {
                    label: 'Bass mode',
							description: 'toggle Bass mode for this song',
							value: 'second_option',
                },
                {
                    label: 'Radio mode',
							description: 'toggle Radio mode for this song',
							value: 'third_option',
                },
                {
                    label: 'Pop mode',
							description: 'toggle Pop mode for this song',
							value: 'fourth_option',
                },
                {
                    label: 'Trablebass mode',
							description: 'toggle Trablebass mode for this song',
							value: 'fifth_option',
                },
                {
                    label: 'Soft mode',
							description: 'toggle Soft mode for this song',
							value: 'sixth_option',
                },
                {
                    label: 'Clear Filters',
							description: 'Clears filter for the song',
							value: 'seventh_option',
                },

            ])
    );
    var testo = "A"+channel.guild.id;
    const c = "techiehi";
    const d = "techiebye";
    if (track.title != c){
        if (track.title != d){
    const thing = new MessageEmbed()
        .setTitle('Now Playing')
        .setURL(`${track.uri}`)
        .setDescription(`<a:diska:876363187119857687> **Started Playing**\n \`\`\`\n${track.title}\`\`\`\n**Duration** - \`[${convertTime(track.duration)}]\``)
        .setImage(track.displayThumbnail("hqdefault"))
        .setColor(client.embedColor)
        const testo = await client.mcache.get(channel.guild.id);
        channel.messages.delete(testo)    
    var apple = await channel.send({embeds: [thing], components: [row, column]}).then(sent => { 
        let id = sent.id;
        client.mcache.set(channel.guild.id, id);
        setTimeout(() => channel.messages.delete(id), track.duration);
      }); 
    }
}

}
client.useractivity.setActivity({
    details: `Listening to - ${track.title}`,
    state: `Queue - ${player.queue.length}`,
    largeImageKey: `${track.displayThumbnail("hqdefault")}`,
    smallImageKey:"logo",
    startTimestamp: new Date(),
    largeImageText: "Techie Music",
    partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
    buttons : [{label : "Listen Along" , url : "https://discord.gg/MuEvJ93k"}]
}) 
console.log("Switched rpc")

}