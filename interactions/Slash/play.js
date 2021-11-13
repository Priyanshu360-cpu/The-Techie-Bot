module.exports = {
    name: "play",
    description:"Plays a song",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
        const { MessageEmbed } = require("discord.js");
        const { convertTime } = require('../../utils/convert.js');
        const { channel } = interaction.member.voice;
        var player = interaction.client.manager.get(interaction.guild.id);
      
        if (player && interaction.member.voice.channel !== interaction.guild.me.voice.channel) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You must be in the same channel as ${interaction.client.user}`);
                interaction.followUp({embeds: [thing]});
        } else if (!player) {
            var player = interaction.client.manager.create({
                guild: interaction.guild.id,
                voiceChannel: channel.id,
                textChannel: interaction.channel.id,
                volume: 50,
                selfDeafen: true,
            });
        }
      
        if (player.state !== "CONNECTED") player.connect();
      
        player.set("autoplay", false);
        
        const emojiaddsong = interaction.client.emoji.addsong;
        const emojiplaylist = interaction.client.emoji.playlist;
      
        const search = interaction.options.getString('track');;
        let res;
      
        try {
            res = await player.search(search, interaction.author);
            if (res.loadType === 'LOAD_FAILED') {
                if (!player.queue.current) player.destroy();
                throw res.exception;
            }
        } catch (err) {
            return interaction.followUp(`there was an error while searching: ${err.message}`);
        }
      
        switch (res.loadType) {
            case 'NO_MATCHES':
                if (!player.queue.current) player.destroy();
                return interaction.followUp('there were no results found.');
            case 'TRACK_LOADED':
                var track = res.tracks[0];
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) {
                    player.play();
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
                        .setDescription(`<:Spotify:835926937854541845> **Added Song to queue**\n${track.title} - \`[${convertTime(track.duration)}]\``)
                .setThumbnail(cu)
      return interaction.followUp({embeds: [thing]})})
                    
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
                        .setDescription(`<:Spotify:835926937854541845> **Added Song to queue**\n${track.title} - \`[${convertTime(track.duration)}]\``)
                .setThumbnail(cu)
      return interaction.followUp({embeds: [thing]})})
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
      return interaction.followUp({embeds: [thing]})})
                } else {
               if(search.includes('spotify.com/album') === true) {
                let p = search.split('album/')[1];
                let c = p.split('?')[0];
                let d = 'https://embed.spotify.com/oembed/?url=spotify:album:'+c
                const axios = require('axios');
                axios.get(d)
                .then((response) => {
                const cu = response.data.thumbnail_url;
                var thing = new MessageEmbed()
                                .setColor(client.embedColor)
                                .setDescription(`<:Spotify:835926937854541845>  **Added Album to queue**\n${res.tracks.length} Songs **${res.playlist.name}** - \`[${convertTime(res.playlist.duration)}]\``)
                                .setImage(cu)
                return interaction.followUp({embeds: [thing]})})
               }
               else{
                var thing = new MessageEmbed()
                    .setColor(client.embedColor)
                    .setTimestamp()
                    .setDescription(`<:x_resume:876019503325126667>  **Added Playlist to queue**\n${res.tracks.length} Songs **${res.playlist.name}** - \`[${convertTime(res.playlist.duration)}]\``)
                return interaction.followUp({embeds: [thing]});
                }
            }
            case 'SEARCH_RESULT':
                var track = res.tracks[0];
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) {
                    player.play();
                    var thing = new MessageEmbed()
                        .setColor(client.embedColor)
                        .setTimestamp()
                        .setThumbnail(track.displayThumbnail("hqdefault"))
                        .setDescription(`<:Techie:892664283090001931> **Enqued**\n**[${track.title}](${track.uri})** - \`[${convertTime(track.duration)}]\``)
                    return interaction.followUp({embeds: [thing]});
                } else {
                    
                    var thing = new MessageEmbed()
                        .setColor(client.embedColor)
                        .setTimestamp()
                        .setThumbnail(track.displayThumbnail("hqdefault"))
                        .setDescription(`<:Techie:892664283090001931> **Added Song to queue**\n**[${track.title}](${track.uri})** - \`[${convertTime(track.duration)}]\``)
                    return interaction.followUp({embeds: [thing]});
                
            }
        }
    }
}