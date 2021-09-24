const { Client, Collection, Intents } = require("discord.js");
const array = [];
const { readdirSync } = require("fs");
const mongoose = require('mongoose');

//const keepAlive = require('./keepAlive.js');
const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const Deezer = require("erela.js-deezer");
const FaceBook = require("erela.js-facebook");
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
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'filter') {
        const player = interaction.client.manager.get(interaction.guild.id);
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
		await interaction.reply({content: 'Party mode is on Now', ephemeral: true });
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
            await interaction.reply({content: 'Bass mode is on Now', ephemeral: true });
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
            await interaction.reply({content: 'Radio mode is on Now', ephemeral: true });
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
        await interaction.reply({content: 'Pop mode is on Now', ephemeral: true });
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
        await interaction.reply({content: 'TrableBass mode is on Now', ephemeral: true });
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
        await interaction.reply({content: 'Soft mode is on Now', ephemeral: true });
    }
    if(interaction.values[0] === 'seventh_option'){
        player.clearEQ();
        await interaction.reply({content: 'Cleared all the filters', ephemeral: true });
    }
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
///// Keep Alive Uptime Robot ///////
//keepAlive();

client.login('ODczNTY0NjgzMTA0MzEzMzY0.YQ6Qgg.Fh2iL-9Dym772Rar-5cdtQq0hBQ');

