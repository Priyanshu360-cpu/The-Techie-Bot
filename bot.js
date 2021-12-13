"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Client = require("discord.js").Client;
var discord_js_1 = require("discord.js");
var array = [];
var readdirSync = require("fs").readdirSync;
var mongoose = require('mongoose');
var Database = require("quickmongo").Database;
var Manager = require("erela.js").Manager;
var Spotify = require("erela.js-spotify");
var Deezer = require("erela.js-deezer");
var FaceBook = require("erela.js-facebook");
var url = require("inspector").url;
var snipes = {};
var pipes = {};
var appy = {
    "DTH_701041158876299373": {
        Messageid: null
    }
};
var client = new Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_INVITES, discord_js_1.Intents.FLAGS.GUILD_MEMBERS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});
module.exports = client;
client.commands = new discord_js_1.Collection();
client.icommands = new discord_js_1.Collection();
client.tversion = "1.0.0";
client.updates = "Final Version Very Soon";
client.apppy = appy;
client.mchannel = new discord_js_1.Collection();
client.slashCommands = new discord_js_1.Collection();
client.config = require("./config.json");
client.criccard = require("./CricCard.json");
client.db = new Database(client.config.mongourl);
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new discord_js_1.Collection();
client.mcache = new discord_js_1.Collection();
client.avatar = new discord_js_1.Collection();
client.selfRole = new discord_js_1.Collection();
client.commands = new discord_js_1.Collection();
client.snipes = new discord_js_1.Collection();
client.categories = readdirSync("./commands/");
client.logger = require("./utils/logger.js");
client.emoji = require("./utils/emoji.json");
client.selfRoles = [];
client.data1 = 1;
client.manager = new Manager({
    nodes: client.config.nodes,
    send: function (id, payload) {
        var guild = client.guilds.cache.get(id);
        if (guild)
            guild.shard.send(payload);
    },
    autoPlay: true,
    plugins: [new Spotify({
            clientID: client.config.SpotifyID,
            clientSecret: client.config.SpotifySecret
        }),
        new Deezer(),
        new FaceBook()
    ]
});
client.on("raw", function (d) { return client.manager.updateVoiceState(d); });
var dbOptions = {
    useNewUrlParser: true,
    autoIndex: false,
    poolSize: 5,
    connectTimeoutMS: 10000,
    family: 4,
    useUnifiedTopology: true
};
mongoose.connect(client.config.mongourl, dbOptions);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', function () {
    client.logger.log('[DB] DATABASE CONNECTED', "ready");
});
mongoose.connection.on('err', function (err) {
    console.log("Mongoose connection error: \n ".concat(err.stack), "error");
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
var flient = new Database(client.config.mongourl);
client.on('messageCreate', function (message, args, client, prefix, user, massage, url) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, ranksystem, blockchannel, ranklevel, rankuser, ranknext, c, d, y_1, role, g, e_1, z, e;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (message.author.bot)
                    return [2 /*return*/];
                _a = require('discord.js'), MessageEmbed = _a.MessageEmbed, MessageActionRow = _a.MessageActionRow, MessageSelectMenu = _a.MessageSelectMenu, MessageButton = _a.MessageButton;
                if (!message.guild)
                    return [2 /*return*/];
                return [4 /*yield*/, flient.get("ranksystem_".concat(message.guild.id))];
            case 1:
                ranksystem = _b.sent();
                return [4 /*yield*/, flient.get("blockchannel_".concat(message.channel.id, "_").concat(message.guild.id))];
            case 2:
                blockchannel = _b.sent();
                if (blockchannel === 'denied')
                    return [2 /*return*/];
                if (!(ranksystem === 'true')) return [3 /*break*/, 9];
                return [4 /*yield*/, flient.get("ranklevel_".concat(message.author.id, "_").concat(message.guild.id))];
            case 3:
                ranklevel = _b.sent();
                if (ranklevel === null) {
                    flient.set("ranklevel_".concat(message.author.id, "_").concat(message.guild.id), 1);
                }
                return [4 /*yield*/, flient.get("rankuser_".concat(message.author.id, "_").concat(message.guild.id))];
            case 4:
                rankuser = _b.sent();
                if (rankuser === null) {
                    flient.set("rankuser_".concat(message.author.id, "_").concat(message.guild.id), 0);
                }
                return [4 /*yield*/, flient.get("ranknnext_".concat(message.author.id, "_").concat(message.guild.id))];
            case 5:
                ranknext = _b.sent();
                if (ranknext === null) {
                    flient.set("ranknnext_".concat(message.author.id, "_").concat(message.guild.id), 100);
                }
                if (!(rankuser >= ranknext)) return [3 /*break*/, 8];
                c = ranknext * 2;
                d = ranklevel + 1;
                flient.set("ranknnext_".concat(message.author.id, "_").concat(message.guild.id), c);
                flient.set("ranklevel_".concat(message.author.id, "_").concat(message.guild.id), d);
                return [4 /*yield*/, flient.get("".concat(d, "_").concat(message.guild.id))];
            case 6:
                y_1 = _b.sent();
                if (y_1 != null) {
                    role = message.guild.roles.cache.find(function (x) { return x.id === y_1; });
                    message.author.roles.add(role);
                }
                g = new MessageEmbed();
                g.setDescription("Congratulations you levelled up to ".concat(d));
                g.setThumbnail(message.author.displayAvatarURL());
                g.setColor('#FFCBCB');
                return [4 /*yield*/, flient.get("rankchannel_".concat(message.guild.id))];
            case 7:
                e_1 = _b.sent();
                if (e_1 === null) {
                    message.channel.send({
                        content: '<@' + message.author.id + '>',
                        embeds: [g]
                    });
                }
                else {
                    z = message.guild.channels.cache.find(function (x) { return x.id === e_1; });
                    z.send({
                        content: '<@' + message.author.id + '>',
                        embeds: [g]
                    });
                }
                return [3 /*break*/, 9];
            case 8:
                e = rankuser + (0.10 * ranknext);
                flient.set("rankuser_".concat(message.author.id, "_").concat(message.guild.id), e);
                _b.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); });
client.on("disconnect", function () { return console.log("Bot is disconnecting..."); });
client.on("reconnecting", function () { return console.log("Bot reconnecting..."); });
client.on('warn', function (error) { return console.log(error); });
client.on('error', function (error) { return console.log(error); });
process.on('unhandledRejection', function (error) { return console.log(error); });
process.on('uncaughtException', function (error) { return console.log(error); });
client.on("interactionCreate", function (i) { return __awaiter(void 0, void 0, void 0, function () {
    var MessageEmbed, player, thing, thing, thing, thing, thing, autoplay, song, thing, song, c, d, axios, response, data, e_2, bhing, du, thing, thing, trackRepeat, thing;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                MessageEmbed = require("discord.js").MessageEmbed;
                player = i.client.manager.get(i.guild.id);
                if (!i.isButton())
                    return [2 /*return*/];
                if (!(i.customId === 'Pauseaa')) return [3 /*break*/, 4];
                if (!(player && i.member.voice.channel !== i.guild.me.voice.channel)) return [3 /*break*/, 2];
                thing = new MessageEmbed()
                    .setColor("RED")
                    .setDescription("You must be in the same channel as ".concat(i.client.user));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                player.pause(true);
                thing = new MessageEmbed()
                    .setColor('#00ffd2')
                    .setTimestamp()
                    .setDescription("".concat(i.member, " **Paused** the song successfully"));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                if (!(i.customId === 'Resumeaa')) return [3 /*break*/, 8];
                if (!(player && i.member.voice.channel !== i.guild.me.voice.channel)) return [3 /*break*/, 6];
                thing = new MessageEmbed()
                    .setColor("RED")
                    .setDescription("You must be in the same channel as ".concat(i.client.user));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 5:
                _a.sent();
                return [3 /*break*/, 8];
            case 6:
                player.pause(false);
                thing = new MessageEmbed()
                    .setColor('#00ffd2')
                    .setTimestamp()
                    .setDescription("".concat(i.member, " **Resumed** the song successfully"));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                if (!(i.customId === 'Skipaa')) return [3 /*break*/, 12];
                if (!(player && i.member.voice.channel !== i.guild.me.voice.channel)) return [3 /*break*/, 10];
                thing = new MessageEmbed()
                    .setColor("RED")
                    .setDescription("You must be in the same channel as ".concat(i.client.user));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 9:
                _a.sent();
                return [3 /*break*/, 12];
            case 10:
                autoplay = player.get("autoplay");
                song = player.queue.current;
                if (autoplay === false) {
                    player.stop();
                }
                else {
                    player.stop();
                    player.queue.clear();
                    player.set("autoplay", false);
                }
                thing = new MessageEmbed()
                    .setDescription("".concat(i.member, " **Skipped**\n[").concat(song.title, "](").concat(song.uri, ")"))
                    .setColor('#00ffd2')
                    .setTimestamp();
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 11:
                _a.sent();
                _a.label = 12;
            case 12:
                if (!(i.customId === 'Lyricsaa')) return [3 /*break*/, 19];
                song = player.queue.current;
                c = song.title;
                d = 'https://api.leref.ga/lyrics?song=' + c;
                axios = require('axios');
                response = void 0, data = void 0;
                _a.label = 13;
            case 13:
                _a.trys.push([13, 15, , 17]);
                return [4 /*yield*/, axios.get(d)];
            case 14:
                response = _a.sent();
                data = response.data;
                return [3 /*break*/, 17];
            case 15:
                e_2 = _a.sent();
                bhing = new MessageEmbed()
                    .setDescription('Unable to find lyrics')
                    .setColor('#00ffd2')
                    .setTimestamp();
                return [4 /*yield*/, i.reply({ embeds: [bhing], ephemeral: true })];
            case 16:
                _a.sent();
                return [3 /*break*/, 17];
            case 17:
                du = data.lyrics;
                thing = new MessageEmbed()
                    .setDescription(du)
                    .setColor('#00ffd2')
                    .setTimestamp();
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 18:
                _a.sent();
                _a.label = 19;
            case 19:
                if (!(i.customId === 'Loopaa')) return [3 /*break*/, 23];
                if (!(player && i.member.voice.channel !== i.guild.me.voice.channel)) return [3 /*break*/, 21];
                thing = new MessageEmbed()
                    .setColor("RED")
                    .setDescription("You must be in the same channel as ".concat(i.client.user));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 20:
                _a.sent();
                return [3 /*break*/, 23];
            case 21:
                player.setTrackRepeat(!player.trackRepeat);
                trackRepeat = player.trackRepeat ? "enabled" : "disabled";
                thing = new MessageEmbed()
                    .setColor('#00ffd2')
                    .setTimestamp()
                    .setDescription(" ".concat(i.member, " Loop track is now **").concat(trackRepeat, "**"));
                return [4 /*yield*/, i.reply({ embeds: [thing], ephemeral: true })];
            case 22:
                _a.sent();
                _a.label = 23;
            case 23: return [2 /*return*/];
        }
    });
}); });
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (interaction.customId === "delta") {
            interaction.message["delete"]();
        }
        return [2 /*return*/];
    });
}); });
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var player, thing, bands, thing, bands, thing, bands, thing, bands, thing, bands, thing, bands, thing, thing;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!interaction.isSelectMenu())
                    return [2 /*return*/];
                if (!(interaction.customId === 'filtera')) return [3 /*break*/, 16];
                player = interaction.client.manager.get(interaction.guild.id);
                if (!(player && interaction.member.voice.channel !== interaction.guild.me.voice.channel)) return [3 /*break*/, 2];
                thing = new discord_js_1.MessageEmbed()
                    .setColor("RED")
                    .setDescription("You must be in the same channel as ".concat(interaction.client.user));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 1:
                _a.sent();
                return [3 /*break*/, 16];
            case 2:
                if (!(interaction.values[0] === 'first_option')) return [3 /*break*/, 4];
                bands = [
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
                player.setEQ.apply(player, bands);
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Applied the Filter Party Mode"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                if (!(interaction.values[0] === 'second_option')) return [3 /*break*/, 6];
                bands = [
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
                player.setEQ.apply(player, bands);
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Applied the Filter Bass Mode"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                if (!(interaction.values[0] === 'third_option')) return [3 /*break*/, 8];
                bands = [
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
                player.setEQ.apply(player, bands);
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Applied the Filter Radio Mode"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                if (!(interaction.values[0] === 'fourth_option')) return [3 /*break*/, 10];
                bands = [
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
                player.setEQ.apply(player, bands);
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Applied the Filter Pop Mode"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10:
                if (!(interaction.values[0] === 'fifth_option')) return [3 /*break*/, 12];
                bands = [
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
                player.setEQ.apply(player, bands);
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Applied the Filter Trablebass Mode"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 11:
                _a.sent();
                _a.label = 12;
            case 12:
                if (!(interaction.values[0] === 'sixth_option')) return [3 /*break*/, 14];
                bands = [
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
                player.setEQ.apply(player, bands);
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Applied the Filter Soft Mode"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 13:
                _a.sent();
                _a.label = 14;
            case 14:
                if (!(interaction.values[0] === 'seventh_option')) return [3 /*break*/, 16];
                player.clearEQ();
                thing = new discord_js_1.MessageEmbed()
                    .setColor("#00FFD2")
                    .setDescription("".concat(interaction.member, " Cleared all the filters"));
                return [4 /*yield*/, interaction.reply({ embeds: [thing], ephemeral: true })];
            case 15:
                _a.sent();
                _a.label = 16;
            case 16: return [2 /*return*/];
        }
    });
}); });
readdirSync("./events/Client/").forEach(function (file) {
    var event = require("./events/Client/".concat(file));
    var eventName = file.split(".")[0];
    client.logger.log("Loading Events Client ".concat(eventName), "event");
    client.on(eventName, event.bind(null, client));
});
readdirSync("./events/Lavalink/").forEach(function (file) {
    var event = require("./events/Lavalink/".concat(file));
    var eventName = file.split(".")[0];
    client.logger.log("Loading Events Lavalink ".concat(eventName), "event");
    client.manager.on(eventName, event.bind(null, client));
});
readdirSync("./commands/").forEach(function (dir) {
    var commandFiles = readdirSync("./commands/".concat(dir, "/"));
    for (var _i = 0, commandFiles_1 = commandFiles; _i < commandFiles_1.length; _i++) {
        var file = commandFiles_1[_i];
        var command = require("./commands/".concat(dir, "/").concat(file));
        client.logger.log("Loading ".concat(command.category, " commands ").concat(command.name), "cmd");
        client.commands.set(command.name, command);
    }
});
readdirSync("./interactions/").forEach(function (dir) {
    var commandFiles = readdirSync("./interactions/".concat(dir, "/"));
    for (var _i = 0, commandFiles_2 = commandFiles; _i < commandFiles_2.length; _i++) {
        var file = commandFiles_2[_i];
        var command = require("./interactions/".concat(dir, "/").concat(file));
        client.logger.log("Loading ".concat(command.category, " commands ").concat(command.name), "cmd");
        client.icommands.set(command.name, command);
    }
});
client.login('NzQxMjgwNDEwMTgwMzg2OTQ3.Xy1RLg.SPLJ3CptLS7Jx_1We745IsjhIlU');
