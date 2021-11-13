const { MessageEmbed, MessageSelectMenu } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { MessageActionRow, MessageButton} = require('discord.js');
module.exports = async (client, player, track, payload, message, songt) => {
        const channel = client.channels.cache.get(player.textChannel);
        const emojiplay = client.emoji.play;
    player.setVolume('100');
    client.on("interactionCreate", async (i) => {
        if (!i.isButton()) return;
            if (i.customId === 'Pausea') {
                if (player && i.member.voice.channel !== i.guild.me.voice.channel) {
                    let thing = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(`You must be in the same channel as ${i.client.user}`);
                        await i.reply({embeds: [thing], ephemeral: true });}
                     else {
                player.pause(true);
                let thing = new MessageEmbed()
                .setColor('#00ffd2')
                .setTimestamp()
                .setDescription(`${i.member} **Paused** the song successfully`)
                await i.reply({embeds: [thing]});
                     }
            }
            if (i.customId === 'Resumea') {
                if (player && i.member.voice.channel !== i.guild.me.voice.channel) {
                    let thing = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(`You must be in the same channel as ${i.client.user}`);
                        await i.reply({embeds: [thing], ephemeral: true });}
                        else{
                player.pause(false);
                let thing = new MessageEmbed()
                .setColor('#00ffd2')
                .setTimestamp()
                .setDescription(`${i.member} **Resumed** the song successfully`)
                await i.reply({embeds: [thing]});
            }
        }
            if (i.customId === 'Skipa') {
                if (player && i.member.voice.channel !== i.guild.me.voice.channel) {
                    let thing = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(`You must be in the same channel as ${i.client.user}`);
                        await i.reply({embeds: [thing], ephemeral: true });}
                        else{
                const autoplay = player.get("autoplay");
                const song = player.queue.current;
        
                if (autoplay === false) {
                    player.stop();
                } else {
                    player.stop();
                    player.queue.clear();
                    player.set("autoplay", false);
                }
                let thing = new MessageEmbed()
                .setDescription(`${i.member} **Skipped**\n[${song.title}](${song.uri})`)
                .setColor('#00ffd2')
                .setTimestamp()
             await i.reply({embeds: [thing]});
            }
        }
            if (i.customId === 'Lyricsa') {
                const song = player.queue.current;
                let c = song.title;
                let d = 'https://api.leref.ga/lyrics?song='+c;
                const axios = require('axios');
                let response, data;
                try {
                    response = await axios.get(d);
                    data = response.data;
                }  catch (e) {
                    let bhing = new MessageEmbed()
                    .setDescription('Unable to find lyrics')
                    .setColor('#00ffd2')
                    .setTimestamp()
                    await i.reply({embeds: [bhing], ephemeral: true });
                }
        let du = data.lyrics;
        let thing = new MessageEmbed()
                .setDescription(du)
                .setColor('#00ffd2')
                .setTimestamp()
                await i.reply({embeds: [thing]});
            }
            if (i.customId === 'Loopa') {
                if (player && i.member.voice.channel !== i.guild.me.voice.channel) {
                    let thing = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(`You must be in the same channel as ${i.client.user}`);
                        await i.reply({embeds: [thing], ephemeral: true });}
                        else{
                player.setTrackRepeat(!player.trackRepeat);
                const trackRepeat = player.trackRepeat ? "enabled" : "disabled";
                let thing = new MessageEmbed()
                    .setColor('#00ffd2')
                    .setTimestamp()
                    .setDescription(` ${i.member} Loop track is now **${trackRepeat}**`)
                    await i.reply({embeds: [thing]});
                        }
            }
        });
        client.on('interactionCreate', async interaction => {
            if (!interaction.isSelectMenu()) return;
        
            if (interaction.customId === 'filter') {
                const player = interaction.client.manager.get(interaction.guild.id);
                if (player && interaction.member.voice.channel !== interaction.guild.me.voice.channel) {
                    let thing = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(`You must be in the same channel as ${interaction.client.user}`);
                        await interaction.reply({embeds: [thing], ephemeral: true });}
                        else{
                if(interaction.values[0] === 'first_option'){
                    var bands = [
                        { band: 0, gain: -1.16 },
                        { band: 1, gain: 0.28 },
                        { band: 2, gain: 0.42 },
                        { band: 3, gain: 0.5 },
                        { band: 4, gain: 0.36 },
                        { band: 5, gain: 0 },
                        { band: 6, gain: -0.3 },
                        { band: 7, gain: -0.21 },
                        { band: 8, gain: -0.21 } 
                    ];
                    player.setEQ(...bands);
                    let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Applied the Filter Party Mode`);
                await interaction.reply({embeds: [thing]});
                }
                if(interaction.values[0] === 'second_option'){
                    var bands = [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.7 },
                        { band: 2, gain: 0.8 },
                        { band: 3, gain: 0.55 },
                        { band: 4, gain: 0.25 },
                        { band: 5, gain: 0 },
                        { band: 6, gain: -0.25 },
                        { band: 7, gain: -0.45 },
                        { band: 8, gain: -0.55 },
                        { band: 9, gain: -0.7 },    
                        { band: 10, gain: -0.3 },    
                        { band: 11, gain: -0.25 },
                        { band: 12, gain: 0 },   
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }    
                    ];
                    player.setEQ(...bands);
                    let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Applied the Filter Bass Mode`);
                await interaction.reply({embeds: [thing]});
                }
                if(interaction.values[0] === 'third_option'){
                    var bands = [
                        { band: 0, gain: 0.65 },
                        { band: 1, gain: 0.45 },
                        { band: 2, gain: -0.45 },
                        { band: 3, gain: -0.65 },
                        { band: 4, gain: -0.35 },
                        { band: 5, gain: 0.45 },
                        { band: 6, gain: 0.55 },
                        { band: 7, gain: 0.6 },
                        { band: 8, gain: 0.6 },
                        { band: 9, gain: 0.6 },    
                        { band: 10, gain: 0 },    
                        { band: 11, gain: 0 },
                        { band: 12, gain: 0 },   
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }  
                    ];
                    player.setEQ(...bands);
                    let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Applied the Filter Radio Mode`);
                await interaction.reply({embeds: [thing]});
            }
            if(interaction.values[0] === 'fourth_option'){
                var bands = [
                    { band: 0, gain: -0.25 },
                    { band: 1, gain: 0.48 },
                    { band: 2, gain: 0.59 },
                    { band: 3, gain: 0.72 },
                    { band: 4, gain: 0.56 },
                    { band: 5, gain: 0.15 },
                    { band: 6, gain: -0.24 },
                    { band: 7, gain: -0.24 },
                    { band: 8, gain: -0.16 },
                    { band: 9, gain: -0.16 },    
                    { band: 10, gain: 0 },    
                    { band: 11, gain: 0 },
                    { band: 12, gain: 0 },   
                    { band: 13, gain: 0 },
                    { band: 14, gain: 0 }
                ];
                player.setEQ(...bands);
                let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Applied the Filter Pop Mode`);
                await interaction.reply({embeds: [thing]});
            }
            if(interaction.values[0] === 'fifth_option'){
                var bands = [
                    { band: 0, gain: 0.6 },
                    { band: 1, gain: 0.67 },
                    { band: 2, gain: 0.67 },
                    { band: 3, gain: 0 },
                    { band: 4, gain: -0.5 },
                    { band: 5, gain: 0.15 },
                    { band: 6, gain: -0.45 },
                    { band: 7, gain: 0.23 },
                    { band: 8, gain: 0.35 },
                    { band: 9, gain: 0.45 },
                    { band: 10, gain: 0.55 },
                    { band: 11, gain: 0.6 },
                    { band: 12, gain: 0.55 },
                    { band: 13, gain: 0 },
                    { band: 14, gain: 0 }
                ];
                player.setEQ(...bands);
                let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Applied the Filter Trablebass Mode`);
                await interaction.reply({embeds: [thing]});
            }
            if(interaction.values[0] === 'sixth_option'){
                var bands =  [
                    { band: 0, gain: 0 },
                    { band: 1, gain: 0 },
                    { band: 2, gain: 0 },
                    { band: 3, gain: 0 },
                    { band: 4, gain: 0 },
                    { band: 5, gain: 0 },
                    { band: 6, gain: 0 },
                    { band: 7, gain: 0 },
                    { band: 8, gain: -0.25 },
                    { band: 9, gain: -0.25 },    
                    { band: 10, gain: -0.25 },    
                    { band: 11, gain: -0.25 },
                    { band: 12, gain: -0.25 },   
                    { band: 13, gain: -0.25 },   
                    { band: 14, gain: -0.25 } 
                ];
                player.setEQ(...bands);
                let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Applied the Filter Soft Mode`);
                await interaction.reply({embeds: [thing]});
            }
            if(interaction.values[0] === 'seventh_option'){
                player.clearEQ();
                let thing = new MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription(`${interaction.member} Cleared all the filters`);
                await interaction.reply({embeds: [thing]});
            }
        }
    }
        });
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('Pausea')
            .setLabel('Pause')
            .setStyle('SECONDARY')
            .setEmoji('876007266418057217'),
            new MessageButton()
            .setCustomId('Resumea')
            .setLabel('Resume')
            .setStyle('DANGER')
            .setEmoji('876019503325126667'),
            new MessageButton()
            .setCustomId('Skipa')
            .setLabel('Skip')
            .setStyle('PRIMARY')
            .setEmoji('876007419724054548'),
            new MessageButton()
            .setCustomId('Lyricsa')
            .setLabel('Lyrics')
            .setStyle('SUCCESS')
            .setEmoji('876007882578100264'),
            new MessageButton()
            .setCustomId('Loopa')
            .setLabel('Loop')
            .setStyle('SECONDARY')
            .setEmoji('881060715941740555'),
    )
    const column = new MessageActionRow()
    .addComponents(
            new MessageSelectMenu()
            .setCustomId('filter')
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
        setTimeout(() => channel.messages.delete(id), `${track.duration}`);
      }); 
    }
}
      
}