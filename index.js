const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const array = [];
const { readdirSync } = require("fs");
const mongoose = require('mongoose');

const keepAlive = require('./example.keepAlive.js');
const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const Deezer = require("erela.js-deezer");
const FaceBook = require("erela.js-facebook");
const songt = {};
const client = new Client({
   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.commands = new Collection();
client.categories = readdirSync("./commands/");
client.logger = require("./utils/logger.js");
client.emoji = require("./utils/emoji.json");

client.manager = new Manager({
    nodes: client.config.nodes,
    send: (id, payload) => {
        const guild = client.guilds.cache.get(id);
        if (guild) guild.shard.send(payload);
    },
    autoPlay: true,
    plugins: [new Spotify({
        clientID: client.config.SpotifyID,
        clientSecret: client.config.SpotifySecret,
    }),
            new Deezer(),
            new FaceBook()
        ],
   });

   client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'shotoniphone') {
        interaction.deferReply()
        const axios = require('axios');

        const url = 'https://shot-on-iphone.studio/api/video';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.followUp(`An error occured!`)
        }


        await interaction.followUp({content : `[Shot on iphone meme](${data.url})`})
  }
   if (interaction.commandName === 'play') {
    interaction.deferReply()
    const { MessageEmbed } = require("discord.js");
const { convertTime } = require('./utils/convert.js');
    const { channel } = interaction.member.voice;
    var player = interaction.client.manager.get(interaction.guild.id);
    songt[interaction.guild.id] = {
        id: interaction.client.manager.get(interaction.guild.id),
      };

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
  if (interaction.commandName === 'stop'){
    interaction.deferReply()
    const { MessageEmbed } = require("discord.js");
const { convertTime } = require('./utils/convert.js');
    const { channel } = interaction.member.voice;
    var player = interaction.client.manager.get(interaction.guild.id);

    if (!player.queue.current) {
        let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription("There is no music playing.");
        return interaction.followUp({embeds: [thing]});
    }

    const autoplay = player.get("autoplay")
    if (autoplay === true) {
        player.set("autoplay", false);
    }

    player.stop();
    let thing = new MessageEmbed()
    .setColor("RED")
    .setDescription("Stopped the Music");
    interaction.followUp({embeds: [thing]})
    player.queue.clear();
    
  }
  if (interaction.commandName === 'nowplaying'){
    interaction.deferReply()
    const { MessageEmbed } = require("discord.js");
const { convertTime } = require('./utils/convert.js');
const { progressbar } = require('./utils/progressbar.js')
    const { channel } = interaction.member.voice;
    var player = interaction.client.manager.get(interaction.guild.id);
    if (!player.queue.current) {
        let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription("There is no music playing.");
        return interaction.followUp({embeds: [thing], ephemeral: true });
    }

    const song = player.queue.current

    const emojimusic = interaction.client.emoji.music;

    // Progress Bar
    var total = song.duration;
    var current = player.position;
    var size = 20;
    var line = '▬';
    var slider = '🔘';

    let embed = new MessageEmbed()
        .setDescription(`<a:diska:876363187119857687> **Now Playing**\n[${song.title}](${song.uri}) - \`[${convertTime(song.duration)}]\``)
        .setImage(song.displayThumbnail("hqdefault"))
        .setColor(interaction.client.embedColor)
        .addField("\u200b", progressbar(total, current, size, line, slider))
        .addField("\u200b", `\`${convertTime(current)} / ${convertTime(total)}\``)
     return interaction.followUp({embeds: [embed]})
  }
  if (interaction.commandName === 'queue'){
    interaction.deferReply()
    const { MessageEmbed } = require("discord.js");
const { convertTime } = require('./utils/convert.js');
const { progressbar } = require('./utils/progressbar.js')
    const { channel } = interaction.member.voice;
    var player = interaction.client.manager.get(interaction.guild.id);
    const { MessageActionRow, MessageButton} = require('discord.js');
        var ku = 1;
        const collector = interaction.channel.createMessageComponentCollector({time: 150000});
    collector.on('collect', async i => {
        
        if (i.customId === '-10') {
            if(!args){
                 ku =1;
            }
            else{
                 ku = args[0];
            }
            let thing = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${queue.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
        }
        if (i.customId === '-20') {
           
                if (ku -1 <= 0) {
                    ku = maxPages;
                  } else {
                    ku -= 1;
                  }
                const page = 1 && Number(ku) ? Number(ku) : 1;
                const end = page * multiple;
                const start = end - multiple;
                const tracks = queue.slice(start, end);
                let thing = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${queue.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
            
        }
        if (i.customId === '-30'){
                if (ku == maxPages) {
                    ku = 1;
                  } else {
                    ku += 1;
                  }
           const page = 1 && Number(ku) ? Number(ku) : 1;
           const end = page * multiple;
           const start = end - multiple;
           const tracks = queue.slice(start, end);
           let thing = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${queue.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
            
        }
        if (i.customId === '-40'){
            ku =maxPages;
            const page = 0 && Number(maxPages) ? Number(maxPages) : 1;
           const end = page * multiple;
           const start = end - multiple;
           const tracks = queue.slice(start, end);
           let thing = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${queue.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
        }
    })
      let button = new MessageActionRow()
              .addComponents(
                new MessageButton().setCustomId(`-10`).setLabel('⏪').setStyle('SUCCESS'),
                new MessageButton().setCustomId(`-20`).setLabel('⬅️').setStyle('SECONDARY'),
                new MessageButton().setCustomId(`-30`).setLabel('➡️').setStyle('SECONDARY'),
                new MessageButton().setCustomId(`-40`).setLabel('⏩').setStyle('SUCCESS')
              );

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return interaction.followUp({embeds: [thing]});
        }
        collector.on("end", () => {
            k=2;
            let thing = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            button.components[0].setDisabled(true)
            button.components[1].setDisabled(true)
            button.components[2].setDisabled(true)
            button.components[3].setDisabled(true)
            msg.edit({
                embeds: [thing],
                components: [button]
              })
            })
        const queue = player.queue;
        const emojiQueue = interaction.client.emoji.queue;

        const embed = new MessageEmbed()
            .setColor(interaction.client.embedColor)
      
        const multiple = 10;
        const page = 1 && Number(interaction.options.getInteger('input')) ? Number(interaction.options.getInteger('input')) : 1;

        const end = page * multiple;
        const start = end - multiple;
        const song = player.queue.current;
        const tracks = queue.slice(start, end);

        if (queue.current) embed.setThumbnail(song.displayThumbnail("hqdefault"));embed.addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``);

        if (!tracks.length) embed.setDescription(`No tracks in ${page > 1 ? `page ${page}` : "the queue"}.`);
        else embed.setThumbnail(song.displayThumbnail("hqdefault"));embed.setDescription(`**Queue List - ${queue.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\``).join("\n"));

        const maxPages = Math.ceil(queue.length / multiple);

        embed.addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);

        let msg = await interaction.followUp({embeds: [embed], components: [button]});
  }
  if (interaction.commandName === 'skip'){
    interaction.deferReply()
    const { MessageEmbed } = require("discord.js");
const { convertTime } = require('./utils/convert.js');
const { progressbar } = require('./utils/progressbar.js')
    const { channel } = interaction.member.voice;
    var player = interaction.client.manager.get(interaction.guild.id);
    const { MessageActionRow, MessageButton} = require('discord.js');
    if (!player.queue.current) {
        let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription("There is no music playing.");
        return interaction.followUp({embeds: [thing]});
    }

    const autoplay = player.get("autoplay");
    const song = player.queue.current;

    if (autoplay === false) {
        player.stop();
    } else {
        player.stop();
        player.queue.clear();
        player.set("autoplay", false);
    }
    
    const emojiskip = interaction.client.emoji.skip;

    let thing = new MessageEmbed()
        .setDescription(`<:Skip:876007419724054548>  **Skipped the song**\n**[${song.title}](${song.uri})**`)
        .setColor(interaction.client.embedColor)
        .setTimestamp()
    return interaction.followUp({embeds: [thing]});
  }
  if (interaction.commandName === 'remove'){
    interaction.deferReply()
    const { MessageEmbed } = require("discord.js");
const { convertTime } = require('./utils/convert.js');
const { progressbar } = require('./utils/progressbar.js')
    const { channel } = interaction.member.voice;
    var player = interaction.client.manager.get(interaction.guild.id);
    const { MessageActionRow, MessageButton} = require('discord.js');

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return interaction.followUp({embeds: [thing]});
        }

        const position = (Number(interaction.options.getInteger('input')) - 1);
        if (position > player.queue.size) {
            const number = (position + 1);
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`No songs at number ${number}.\nTotal Songs: ${player.queue.size}`);
            return interaction.followUp({embeds: [thing]});
        }

		const song = player.queue.remove(position);

		const emojieject = message.client.emoji.remove;

		let thing = new MessageEmbed()
			.setColor(message.client.embedColor)
			.setTimestamp()
			.setDescription(`${emojieject} Removed song at number \`${interaction.options.getInteger('input')}\``)
		  return interaction.followUp({embeds: [thing]});
    }
    if (interaction.commandName === 'disconnect'){
        interaction.deferReply()
        const { MessageEmbed } = require("discord.js");
    const { convertTime } = require('./utils/convert.js');
    const { progressbar } = require('./utils/progressbar.js')
        const { channel } = interaction.member.voice;
        var player = interaction.client.manager.get(interaction.guild.id);
        const emojiLeave = interaction.client.emoji.leave;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setDescription(`${emojiLeave} **Leave the voice channel**\nThank you for using ${interaction.client.user.username}!`)
          return interaction.followUp({embeds: [thing]});
    }
    if (interaction.commandName === 'volume'){
        interaction.deferReply()
        const { MessageEmbed } = require("discord.js");
    const { convertTime } = require('./utils/convert.js');
    const { progressbar } = require('./utils/progressbar.js')
        const { channel } = interaction.member.voice;
        var player = interaction.client.manager.get(interaction.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return interaction.followUp({embeds: [thing]});
		}
		
		const volumeEmoji = interaction.client.emoji.volumehigh;

		const volume = Number(interaction.options.getInteger('input'));
		
		if (!volume || volume < 0 || volume > 100) { 
			let thing = new MessageEmbed()
                .setColor("RED")
				.setDescription(`Usage: ${interaction.client.prefix}volume <Number of volume between 0 - 100>`)
            return interaction.followUp({embeds: [thing]});
		}

		player.setVolume(volume);

		if (volume > player.volume) {
			var emojivolume = interaction.client.emoji.volumehigh;
			let thing = new MessageEmbed()
				.setColor(interaction.client.embedColor)
				.setTimestamp()
				.setDescription(`${emojivolume} Volume set to: **${volume}%**`)
		  return interaction.followUp({embeds: [thing]});
		} else if (volume < player.volume) {
			var emojivolume = interaction.client.emoji.volumelow;
			let thing = new MessageEmbed()
				.setColor(interaction.client.embedColor)
				.setTimestamp()
				.setDescription(`${emojivolume} Volume set to: **${volume}%**`)
		  return interaction.followUp({embeds: [thing]});
		} else {
			let thing = new MessageEmbed()
				.setColor(interaction.client.embedColor)
				.setTimestamp()
				.setDescription(`${volumeEmoji} Volume set to: **${volume}%**`)
			return interaction.followUp({embeds: [thing]});
        }
    }
    if (interaction.commandName === 'invite'){
        interaction.deferReply()
        interaction.followUp(`**Heres my** **[Invite Link](https://techie.teaminvite.repl.co)** **and** **[Support Server](https://discord.gg/ZgbwG2sY4D)** **Link**`)
    }
    });

client.on("raw", (d) => client.manager.updateVoiceState(d));
/**
 * Mongodb connection
 */

const dbOptions = {
  useNewUrlParser: true,
  autoIndex: false,
  poolSize: 5,
  connectTimeoutMS: 10000,
  family: 4,
  useUnifiedTopology: true,
};
  mongoose.connect(client.config.mongourl, dbOptions);
  mongoose.Promise = global.Promise;
	mongoose.connection.on('connected', () => {
		client.logger.log('[DB] DATABASE CONNECTED', "ready");
		});
	mongoose.connection.on('err', (err) => {
			console.log(`Mongoose connection error: \n ${err.stack}`, "error");
		});
	mongoose.connection.on('disconnected', () => {
			console.log('Mongoose disconnected');
		});
    
/**
 * Error Handler
 */
client.on("disconnect", () => console.log("Bot is disconnecting..."))
client.on("reconnecting", () => console.log("Bot reconnecting..."))
client.on('warn', error => console.log(error));
client.on('error', error => console.log(error));
process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));

/**
 * Client Events
 */
readdirSync("./events/Client/").forEach(file => {
    const event = require(`./events/Client/${file}`);
    let eventName = file.split(".")[0];
    client.logger.log(`Loading Events Client ${eventName}`, "event");
    client.on(eventName, event.bind(null, client));
});

/**
 * Erela Manager Events
 */
readdirSync("./events/Lavalink/").forEach(file => {
    const event = require(`./events/Lavalink/${file}`);
    let eventName = file.split(".")[0];
    client.logger.log(`Loading Events Lavalink ${eventName}`, "event");
    client.manager.on(eventName, event.bind(null, client));
});

/**
 * Import all commands
 */
readdirSync("./commands/").forEach(dir => {
    const commandFiles = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);
        client.logger.log(`Loading ${command.category} commands ${command.name}`, "cmd");
        client.commands.set(command.name, command);
    }
});
keepAlive();

client.login('NzQxMjgwNDEwMTgwMzg2OTQ3.Xy1RLg.s-Hj73ucGEOgtaeR6TL1JQ5GF3Q');

