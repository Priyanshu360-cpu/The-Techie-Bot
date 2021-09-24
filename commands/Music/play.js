const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "play",
    category: "Music",
    aliases: ["p"],
    description: "Plays audio from YouTube or Soundcloud",
    args: true,
    usage: "<YouTube URL | Video Name | Spotify URL>",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: false,
   execute: async (message, args, client, prefix) => {
  
        const { channel } = message.member.voice;
        var player = message.client.manager.get(message.guild.id);
        const collector = message.channel.createMessageComponentCollector({time: 15000000});
    collector.on('collect', async i => {
        if (i.customId === 'Pausea') {
            player.pause(true);
            let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setTimestamp()
            .setDescription('**Paused** the song successfully')
            await i.reply({embeds: [thing]});
        }
        if (i.customId === 'Resumea') {
            player.pause(false);
            let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setTimestamp()
            .setDescription('**Resumed** the song successfully')
            await i.reply({embeds: [thing]});
        }
        if (i.customId === 'Skipa') {
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
			.setDescription(` **Skipped**\n[${song.title}](${song.uri})`)
			.setColor(message.client.embedColor)
			.setTimestamp()
		 await i.reply({embeds: [thing]});
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
                .setColor(message.client.embedColor)
                .setTimestamp()
                await i.reply({embeds: [bhing]});
            }
    let du = data.lyrics;
    let thing = new MessageEmbed()
			.setDescription(du)
			.setColor(message.client.embedColor)
			.setTimestamp()
            await i.reply({embeds: [thing]});
        }
        if (i.customId === 'Loopa') {
            player.setTrackRepeat(!player.trackRepeat);
            const trackRepeat = player.trackRepeat ? "enabled" : "disabled";
            let thing = new MessageEmbed()
                .setColor(message.client.embedColor)
                .setTimestamp()
                .setDescription(` Loop track is now **${trackRepeat}**`)
                await i.reply({embeds: [thing]});
        }
    });

        if (player && message.member.voice.channel !== message.guild.me.voice.channel) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You must be in the same channel as ${message.client.user}`);
             message.channel.send({embeds: [thing]});
        } else if (!player) {
            var player = message.client.manager.create({
                guild: message.guild.id,
                voiceChannel: channel.id,
                textChannel: message.channel.id,
                volume: 50,
                selfDeafen: true,
            });
        }

        if (player.state !== "CONNECTED") player.connect();

        player.set("autoplay", false);
        
        const emojiaddsong = message.client.emoji.addsong;
        const emojiplaylist = message.client.emoji.playlist;

        const search = args.join(' ');
        let res;

        try {
            res = await player.search(search, message.author);
            if (res.loadType === 'LOAD_FAILED') {
                if (!player.queue.current) player.destroy();
                throw res.exception;
            }
        } catch (err) {
            return message.reply(`there was an error while searching: ${err.message}`);
        }

        switch (res.loadType) {
            case 'NO_MATCHES':
                if (!player.queue.current) player.destroy();
                return message.reply('there were no results found.');
            case 'TRACK_LOADED':
                var track = res.tracks[0];
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) { 
                    return player.play();
                } else {
                    let p = search.split('track/')[1];
let c = p.split('?')[0];
let d = 'https://embed.spotify.com/oembed/?url=spotify:track:'+c
const axios = require('axios');
axios.get(d)
.then((response) => {
const cu = response.data.thumbnail_url;
var thing = new MessageEmbed()
                .setColor(client.embedColor)
                        .setTimestamp()
                        .setDescription(`<:Spotify:835926937854541845> **Added Song to queue**\n[${track.title}](${track.uri}) - \`[${convertTime(track.duration)}]\``)
                .setThumbnail(cu)
return message.channel.send({embeds: [thing]})})
                }
            case 'PLAYLIST_LOADED':
                player.queue.add(res.tracks);
                if (!player.playing && !player.paused && player.queue.totalSize === res.tracks.length) player.play();
                if (search.includes('spotify.com/playlist') === true) {
                    let p = search.split('playlist/')[1];
let c = p.split('?')[0];
let d = 'https://embed.spotify.com/oembed/?url=spotify:playlist:'+c
const axios = require('axios');
axios.get(d)
.then((response) => {
const cu = response.data.thumbnail_url;
var thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`<:Spotify:835926937854541845>  **Added Playlist to queue**\n${res.tracks.length} Songs **${res.playlist.name}** - \`[${convertTime(res.playlist.duration)}]\``)
                .setImage(cu)
return message.channel.send({embeds: [thing]})})
                } else {

                var thing = new MessageEmbed()
                    .setColor(client.embedColor)
                    .setTimestamp()
                    .setDescription(`${emojiplaylist} **Added Playlist to queue**\n${res.tracks.length} Songs **${res.playlist.name}** - \`[${convertTime(res.playlist.duration)}]\``)
                return message.channel.send({embeds: [thing]});
                }
            case 'SEARCH_RESULT':
                var track = res.tracks[0];
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) {
                    return player.play();
                } else {
                    
                    var thing = new MessageEmbed()
                        .setColor(client.embedColor)
                        .setTimestamp()
                        .setThumbnail(track.displayThumbnail("hqdefault"))
                        .setDescription(`${emojiaddsong} **Added Song to queue**\n[${track.title}](${track.uri}) - \`[${convertTime(track.duration)}]\`[<@${track.requester.id}>]`)
                    return message.channel.send({embeds: [thing]});
                
            }
        }
    }
}
