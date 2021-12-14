const {Client} = require("discord.js"); 
import {Collection, Intents,MessageEmbed } from "discord.js";
const array = [];
const { readdirSync } = require("fs");
const mongoose = require('mongoose');
const { Database } = require("quickmongo");
const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const Deezer = require("erela.js-deezer");
const FaceBook = require("erela.js-facebook");
const { url } = require("inspector");
const snipes = {};
const pipes = {};

var appy =
{
  "DTH_701041158876299373":
  {
  Messageid:null
  }
}
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
client.icommands = new Collection();
client.tversion = "1.0.0";
client.updates = "Final Version Very Soon";
client.apppy = appy;
client.mchannel = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.criccard = require("./CricCard.json");
client.db = new Database(client.config.mongourl);
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.mcache = new Collection();
client.avatar = new Collection();
client.selfRole = new Collection();
client.commands = new Collection();
client.snipes = new Collection();
client.categories = readdirSync("./commands/");
client.logger = require("./utils/logger.js");
client.emoji = require("./utils/emoji.json");
client.selfRoles = [];
client.data1=1;

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
client.on("raw", (d) => client.manager.updateVoiceState(d));

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
 const flient = new Database(client.config.mongourl);
client.on('messageCreate', async (message, args, client, prefix, user, massage, url) => {
  if (message.author.bot) return;
  const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
    if (!message.guild) return;
    let ranksystem = await flient.get(`ranksystem_${message.guild.id}`)
    let blockchannel = await flient.get(`blockchannel_${message.channel.id}_${message.guild.id}`)
    if (blockchannel === 'denied')return;
    if (ranksystem === 'true'){
        let ranklevel = await flient.get(`ranklevel_${message.author.id}_${message.guild.id}`)
        if (ranklevel === null){
            flient.set(`ranklevel_${message.author.id}_${message.guild.id}`, 1);
        }
        let rankuser = await flient.get(`rankuser_${message.author.id}_${message.guild.id}`)
        if (rankuser === null){
            flient.set(`rankuser_${message.author.id}_${message.guild.id}`, 0);
        }
        let ranknext = await flient.get(`ranknnext_${message.author.id}_${message.guild.id}`)
        if (ranknext === null){
            flient.set(`ranknnext_${message.author.id}_${message.guild.id}`, 100);
        }
        if(rankuser >= ranknext){
           const c = ranknext*2;
           const d = ranklevel+1;
           flient.set(`ranknnext_${message.author.id}_${message.guild.id}`, c);
           flient.set(`ranklevel_${message.author.id}_${message.guild.id}`, d);
           const y = await flient.get(`${d}_${message.guild.id}`)
           if(y != null){
               const role = message.guild.roles.cache.find(x => x.id === y)
               message.author.roles.add(role)
           }
           const g = new MessageEmbed()
           g.setDescription(`Congratulations you levelled up to ${d}`)
           g.setThumbnail(message.author.displayAvatarURL())
           g.setColor('#FFCBCB')
           const e = await flient.get(`rankchannel_${message.guild.id}`)
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
flient.set(`rankuser_${message.author.id}_${message.guild.id}`, e);
        }
    }
})

client.on("disconnect", () => console.log("Bot is disconnecting..."))
client.on("reconnecting", () => console.log("Bot reconnecting..."))
client.on('warn', error => console.log(error));
client.on('error', error => console.log(error));
process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));
client.on("interactionCreate", async (i) => {
    const {MessageEmbed} = require("discord.js");
    var player = i.client.manager.get(i.guild.id);
    if (!i.isButton()) return;
        if (i.customId === 'Pauseaa') {
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
            await i.reply({embeds: [thing],ephemeral:true});
                 }
        }
        if (i.customId === 'Resumeaa') {
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
            await i.reply({embeds: [thing],ephemeral:true});
        }
    }
        if (i.customId === 'Skipaa') {
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
         await i.reply({embeds: [thing],ephemeral:true});
        }
    }
        if (i.customId === 'Lyricsaa') {
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
            await i.reply({embeds: [thing],ephemeral:true});
        }
        if (i.customId === 'Loopaa') {
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
                await i.reply({embeds: [thing],ephemeral:true});
                    }
        }
    });
    client.on('interactionCreate', async interaction => { 
        if(interaction.customId === "delta"){
            interaction.message.delete();
        }
    })
    client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
    
        if (interaction.customId === 'filtera') {
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
            await interaction.reply({embeds: [thing],ephemeral:true});
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
            await interaction.reply({embeds: [thing],ephemeral:true});
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
            await interaction.reply({embeds: [thing],ephemeral:true});
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
            await interaction.reply({embeds: [thing],ephemeral:true});
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
            await interaction.reply({embeds: [thing],ephemeral:true});
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
            await interaction.reply({embeds: [thing],ephemeral:true});
        }
        if(interaction.values[0] === 'seventh_option'){
            player.clearEQ();
            let thing = new MessageEmbed()
                .setColor("#00FFD2")
                .setDescription(`${interaction.member} Cleared all the filters`);
            await interaction.reply({embeds: [thing],ephemeral:true});
        }
    }
}
    });
readdirSync("./events/Client/").forEach(file => {
    const event = require(`./events/Client/${file}`);
    let eventName = file.split(".")[0];
    client.logger.log(`Loading Events Client ${eventName}`, "event");
    client.on(eventName, event.bind(null, client));
});
readdirSync("./events/Lavalink/").forEach(file => {
  const event = require(`./events/Lavalink/${file}`);
  let eventName = file.split(".")[0];
  client.logger.log(`Loading Events Lavalink ${eventName}`, "event");
  client.manager.on(eventName, event.bind(null, client));
});
readdirSync("./commands/").forEach(dir => {
    const commandFiles = readdirSync(`./commands/${dir}/`);
    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);
        client.logger.log(`Loading ${command.category} commands ${command.name}`, "cmd");
        client.commands.set(command.name, command);
    }
});
readdirSync("./interactions/").forEach(dir => {
  const commandFiles = readdirSync(`./interactions/${dir}/`);
  for (const file of commandFiles) {
      const command = require(`./interactions/${dir}/${file}`);
      client.logger.log(`Loading ${command.category} commands ${command.name}`, "cmd");
      client.icommands.set(command.name, command);
  }
})
var rpc = require("discord-rpc")
const fflient = new rpc.Client({ transport: 'ipc' })
fflient.on("ready", () => {
    fflient.setActivity({
        details: "Empty Playlist",
        state: "Idling Alone",
        largeImageKey: "logo",
        startTimestamp: new Date(),
        largeImageText: "Techie Music",
        partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        buttons : [{label : "Listen Along" , url : "https://discord.gg/MuEvJ93k"}]
    })

    console.log("RPc active");
})
fflient.login({ clientId : "741280410180386947"}).catch(console.error);
client.useractivity = fflient;
client.login('NzQxMjgwNDEwMTgwMzg2OTQ3.Xy1RLg.SPLJ3CptLS7Jx_1We745IsjhIlU');
