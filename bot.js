const { Client, Collection, Intents } = require("discord.js");
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
client.slashCommands = new Collection();
client.config = require("./config.json");
client.criccard = require("./CricCard.json");
client.db = new Database(client.config.mongourl);
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.mcache = new Collection();
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
    const commandFiles = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);
        client.logger.log(`Loading ${command.category} commands ${command.name}`, "cmd");
        client.commands.set(command.name, command);
    }
});
readdirSync("./interactions/").forEach(dir => {
  const commandFiles = readdirSync(`./interactions/${dir}/`).filter(f => f.endsWith('.js'));
  for (const file of commandFiles) {
      const command = require(`./interactions/${dir}/${file}`);
      client.logger.log(`Loading ${command.category} commands ${command.name}`, "cmd");
      client.icommands.set(command.name, command);
  }
})

client.login('NzQxMjgwNDEwMTgwMzg2OTQ3.Xy1RLg.SPLJ3CptLS7Jx_1We745IsjhIlU');
