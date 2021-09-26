const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const { readdirSync } = require("fs");
const {
    button_pagination
} = require('../../utils/button');

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
    const simplydjs = require('simply-djs');
    const Discord = require ('discord.js');
    // message event
    // any command
    let embed1 = new Discord.MessageEmbed()
    .setTitle('Techie Commands<a:yildiz2:796630385508876319>')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•<a:kupa:796630489380290570> [**Admin Commands**](https://techie.site.xyz/administration) \n```ban,setlogs,lock,unlock,unban,getAudit,nukewarns,text-channel,servericon url(changes server icon);voice-channel,slowmode,gstart,prefix,enablesnipe,disablesnipe,createrole,rr-add```\n\n•<a:aq:796664019321618442> [**auto moderator commands**](https://techie.site.xyz/moderation) \n```antilink,antispam,ignore<mention channel>,set-role,captcha,give-all,take-all,lockserver,unlockserver,antialt,antibot,raidmode```\n\n•<a:yildiz:796630444304629760> [ **Moderator commands**](https://techie.site.xyz/moderation) \n```kick,afk,createrole,mute<time><reason>,unmute,nick,jumbo,announce,colour,purge,userinfo,serverinfo,warn,clearwarn,voicemute,snap(url)(message),voiceunmute```\n\n•<a:peperun:780731095930765313> [**Fun commands**](https://techie.site.xyz/fun-and-utilities) \n```hack,dice,eject,meme,dog,calc,covid,rps,ask,bf,gf,av,snipe,skin,truth,dare,twitch,wiki,google,youtube,spotify,shoot,wasted,insta,image,getinvite,neon,tweet,ship,flip,weather,botinfo,fortune,firsttime,hug,kiss,slap,profile,esnipe```\n\n•<:earlySupporter:829373442075525163>  [**Special commands**](https://techie.site.xyz/fun-and-utilities) \n```Welcomer,Goodbye,Marriage,Logging,Giveaway,Warning,Casino,Music,Suggestion,Levelling```\n\n•<:C2:829365145632768060> [**Techie special commands**](https://techie.site.xyz/fun-and-utilities) \n```webshot,Nsfw,snipe,number-game,reminder,lastseen,afk system<use prefix afk>,chatbot use <prefix> talk and talk with techie,set-player,set-profile,set-techie,set-off,ghostping```\n\n•<a:yelar:796630822262145035> **Official Website**(check command usage here)\n[Official Website](https://techie.site.xyz) \n\n•<a:HeartBlue:796630622411948053>**More Music Bots**\n[Techie2](https://discord.com/api/oauth2/authorize?client_id=820024468247543849&permissions=8&scope=bot) | [Techie3](https://discord.com/api/oauth2/authorize?client_id=820045352895905792&permissions=8&scope=bot) \n\n•<a:yildiz:796630444304629760>Support Stuff\n[Support Server](https://discord.gg/mbXFMGC) | [Bot Invite](https://discord.com/oauth2/authorize?client_id=741280410180386947&scope=bot&permissions=2147483647) | [Vote Techie](https://top.gg/bot/741280410180386947) ')
    .setImage('https://cdn.discordapp.com/attachments/805488938512023552/831162287490072676/giphy_18.gif')
    .setFooter('type +support(query) to get immediate support 📄Page - 1/7')
    .setTimestamp()
    .setColor('00ffed');
    
    let embed2 = new Discord.MessageEmbed()
    .setTitle('Administrator Command')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•`ban`(userid/mention)-used to ban an user\n\n•`rr-add`(messageid)(emoji)(roleid)-helps you to set reaction role\n\n•`setlogs`(mention channel)-used to setup techie logs\n\n•`lock`(mention channel)-used to lock a channel\n\n•`unlock`(mention channel)-used to unlock channel\n\n•`nukewarns`(mention user)-used to nuke warns\n\n•`getAudit`(message)(mention/optional)-used to get the audit logs\n\n•`getinvite`(mention)-used to generate invite for any bot\n\n•`servericon`(url)-used to setup sercvericon\n\n•`text/voice-channel`(name)-used to create a channel\n\n•`unban`(id)-used to unban an user\n\n•`createrole`(name)-used to create a role\n\n•`enablesnipe`-enables snipe for the server\n\n•`disablesnipe`-disable snipes for the server')
    .setFooter('📄Page - 2/7')
    .setColor('00ffed');
    
    let embed3 = new Discord.MessageEmbed()
    .setTitle('Auto Moderation Command')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•`antilink`-disables link usage for those who dont have embed link permission\n\n•`antispam`-enables anti spam, mutes an user for sending repeatitive messages\n\n•`ignore`(mentiom channel)-ignores auto mod for specified channel\n\n•`set-role`- helps you to set role for captcha\n\n•`captcha`-generates captcha for verification\n\n•`give-all`(roleId)-gives the role to all the members in the server\n\n•`take-all`(roleId)-takes the rol from all the member in the guild\n\n•`lockserver`(roleID)-locks the server for given ID\n\n•`unlockserver`(roleID)-unlocks the server for given ID\n\n•`antialt`-bans all the new accounts to join the server\n\n•`raidmode`-prohibits member from joining the server\n\n•`antibot`-bans unverified bot from joining the server')
    .setFooter('📄Page - 3/7')
    .setColor('00ffed');
            
    let embed4 = new Discord.MessageEmbed()
    .setTitle('Moderator Command')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•`kick`(mention/id)-kicks an user\n\n•`afk`(message optional)-sets afk for the user\n\n•`mute`(time required)(user)-mutes an user for specified time\n\n•`unmute`(mention/id)-unmutes the user\n\n•`nick`(mention)(message)-sends the nickname of the user to message\n\n•`jumbo`(emoji)-is used to enlarge an emote\n\n•`colour`(roleid)(hex or int)-sets specified hex for the id\n\n•`purge`(number)-purges the specified chat(limit-500)\n\n•`announce`(channel)(message)-sends announcement to specified channel\n\n•`userinfo`-displays userinfo\n\n•`voicemute`(mention/id)-voice mutes the user\n\n•`voiceunmute`-voice unmutes the user\n\n•`snap`(url)(message)-creates an emoji with name message')
    .setFooter('📄Page - 4/7')
    .setColor('00ffed');
            
    let embed5 = new Discord.MessageEmbed()
    .setTitle('Fun Command')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•`hack`-prank hacks an user\n\n•`dice`-rolls the dice\n\n•`meme`-generates random meme\n\n•`snipe`-snipes a message\n\n•`esnipe`-helps you to esnipe a message\n\n•`flip`-flips the coin\n\n•`profile`(mention optioanl)-helps you to view an users profile\n\n•`weather`(location)-generates weather report\n\n•`ship`(user1)(user2)-defines lovemeter for two users\n\n•`bf/gf`-random bf/gf from server\n\n•`covid`(country)-gives covid data\n\n•`google/youtube/twitch/wiki/spotify`(message)-searches the defined search engine\n\n•`ramdomemoji/emoji`- gets ramdom emoji for you\n\n•`other commands`- includes kiss/pat/etc')
    .setFooter('📄Page - 5/7')
    .setColor('00ffed');
            
    let embed6 = new Discord.MessageEmbed()
    .setTitle('Special Command')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•`Welcomer`- helps you to set a customized welcome message with welcome role, type +Welcome for more info\n\n•`Goodbye`-helps you to set custom goodbye message, +Goodbye for info\n\n•`Marriage`-helps you to marry an user and collect dailies, +Marriage for info\n\n•`Starboard`-sets starboard with custom reqstar, +Starboard for info\n\n•`Logging`-helps you to set log channel and manage messages, +Logging for info\n\n•`Giveaway`-helps you to start a giveaway in specified channel and end it, +Giveaway\n\n•`Warning`-helps you to warn an user and set punishment, +Warning\n\n•`Suggestion`-helps you to set Techie Suggestions system, +Suggestion\n\n•`Casino`-helps you to build casino for the server with custom roles, +Casino\n\n•`Music`-helps you to play music,set-player and manymore, +Music\n\n•`Levelling`-helps you to give ranks to user based on message, +Levelling')
    .setFooter('📄Page - 6/7')
    .setColor('00ffed');
            
    let embed7 = new Discord.MessageEmbed()
    .setTitle('Techie special Command')
    .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
    .setDescription('•`webshot`(url)-screenshots an url and sends it specified channel\n\n•`number-game`-helps you to set the iconic techie number-game(like guess a number)\n\n•`reminder`(time)(message)-reminds the user after specified time\n\n•`lastseen`(mention optional)-returns the last time when the user was seen on dc\n\n•`talk`(message)-helps you to talk with ai enabled bot\n\n•`set-player`-helps you to set 24/7 online music player\n\n•`ghostping`-helps you to toggle ghost-ping detector\n\n•`set-techie`-helps you to enable chat bot for the channel\n\n•`set-off`-helps you to turnoff techie chatbot for the channel\n\n•`set-profile`-helps you to set your profile')
    .setFooter('📄Page - 7/7')
    .setColor('00ffed');
    let pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7] // REQUIRED
    
    // its still possible without embed
    // let pages = ['page1', 'page2', 'page3']
    
    simplydjs.embedPages(client, message, pages, {
      firstEmoji: '🏠', // default: :rewind:
      backEmoji: '◀️', // default: :arrow_backward:
      delEmoji: '🗑️', // default: :wastebasket:
      forwardEmoji: '▶️', // default: :arrow_forward:
      lastEmoji: '⏩', // default: :fast_forward:
    
      btncolor: 'SUCCESS', // default: green 
      delcolor: 'DANGER', // default: red
      skipcolor: 'PRIMARY', // default: blurple
       // Colors that discord-buttons support. like red, blurple, grey, green
    
      skipBtn: true,
    });
   }
};
