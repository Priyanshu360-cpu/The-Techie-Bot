const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const { readdirSync } = require("fs");
const {
    button_pagination
} = require('../../utils/button');
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
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
    const Discord = require ('discord.js');
    // message event
    // any command
    if (!args[0]) {
    let embed2 = new Discord.MessageEmbed()
    .setDescription('**[Ghostping](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Toggles Ghost ping command for the Guild**\n**[Rr-add](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Adds Reaction Role to Provided Message**\n**[Setlogs](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets up techie logs on Provided Channel**\n**[Lockserver](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Locks the Provided Guild for a role**\n**[Unlockserver](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Unlocks the Provided Guild for a role**\n**[Embed](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Creates Embed Creator**\n**[Antialt](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Bans New account t0 join the guild**\n**[Banbot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Bans Unverified bots to join the guild**\n**[SetWelcome](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Welcome Message for the guild**\n**[Play](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Plays song in the Voice Channel**\n**[Addsticker](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Adds Sticker in the guild**\n**[Snipe](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Snipes a message in the guild**')
    .setFooter('Use +help <command_name> for more info')
    .setTimestamp()
    .setColor('#FFCBCB');
    
    let embed3 = new Discord.MessageEmbed()
    .setDescription('**[Goodbye](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets leave message setup for the guild**\n**[Antilink](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Restricts url ussage in the channel for a Role**\n**[AntiImagery](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Restrict attachment usage in the Channel for a Role**\n**[Antispam](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Toggles Anti spam command for the Channel**\n**[Captcha](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Captcha for Verification System**\n**[Give-all](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gives role to Each user in the guild**\n**[Take-all](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Takes role from each User in the guild**\n**[GetAudit](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Aduit Log for the Guild**\n**[Raidmode](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Toggles Raidmode for the Guild**\n**[Set-Invite](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Up invite System in the Guild**\n**[Calculator](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets an Unique button Calculator**\n**[Steal](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Adds emoji in the Guild**')
    .setFooter('Use +help <command_name> for more info')
    .setTimestamp()
    .setColor('#FFCBCB');
            
    let embed4 = new Discord.MessageEmbed()
    .setDescription('**[Starboard](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Starboard in the Guild**\n**[Gstart](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Starts a Giveaway in the guild**\n**[Nsfw](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Fetches Details for Nsfw Commands**\n**[LockNick](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Locks Nickname for each User in the Guild**\n**[Set-Ticket](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets up Ticket system in the Guild**\n**[Player](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Music Player in the Guild**\n**[Suggestion](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Up Suggestion System in the Guild**\n**[NumberGame](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Starts a guessing Number Game in the Guild**\n**[Youtube-together](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Starts an Youtube together session in the Guild**\n**[Chatbot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Up Chatbot in the Guild**')
    .setFooter('Use +help <command_name> for more info')
    .setTimestamp()
    .setColor('#FFCBCB');
            
    let embed5 = new Discord.MessageEmbed()
    .setDescription('**[Image](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches an array of images on Google**\n**[Colours](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get all the Colour Detail from an Attachment**\n**[Youtube](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches an Array of Data on Youtube**\n**[Map](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches coordinates on Google Maps**\n**[Instagram](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches for an Account on Instagram**\n**[Weather](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets weather Data of Specified Region**\n**[Ip](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Information about an Ip**\n**[Google](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Information about an Object on Google**\n**[Screenshot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Screenshot of Provided URL**\n**[ASCII](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Ascii Data for an Input**\n**[Twitter](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Information of a Twitter Account**')
    .setFooter('Use +help <command_name> for more info')
    .setTimestamp()
    .setColor('#FFCBCB');
    
            
    let embed6 = new Discord.MessageEmbed()
    .setDescription('**[Profile](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Views Techie Profile of an User**\n**[Banner](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Views Banner of an User**\n**[Talk](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Talk with Techie Chatbot Directly**\n**[Buy](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Buy an item from the Global Shop**\n**[Trade](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Trade an Item from the Global Shop**\n**[Afk](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Set AFK message for an User**\n**[Ship](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to determine Love meter of Two Users**\n**[Hack](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Hack Pranks an User**\n**[Meme](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets a random Meme from rediff**\n**[Lastseen](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get detail of the lastseen of an User**\n**[Binary](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Converts Text to Binary Language**\n**[Reminder](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Reminder for an User**\n**[Premium](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Details about Techie Premium Special**')
    .setFooter('Use +help <command_name> for more info')
    .setTimestamp()
    .setColor('#FFCBCB');
            
    let embed7 = new Discord.MessageEmbed()
    .setDescription('**[Bored](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Talk with Techie Staff Directly only in Dms**\n**[Suggest-Techie](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Send a suggestion for Techie only in Dms**\n**[Redeem](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Redeem a Techie Special Code only in Dms**\n**[Report](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Report a Techie Action or an User only in Dms**')
    .setFooter('Use +help <command_name> for more info')
    .setTimestamp()
    .setColor('#FFCBCB');
    let pages = ["https://cdn.discordapp.com/attachments/763668907025498133/893451149477306408/1633085722211.png", embed2, embed3, embed4, embed5, embed6, embed7, "https://cdn.discordapp.com/attachments/763668907025498133/893455298059202560/1633086717019.png"] // REQUIRED
    const column = new MessageActionRow()
    .addComponents(
            new MessageSelectMenu()
            .setCustomId('helpselect')
            .setPlaceholder('Quick Help')
            .addOptions([
                {
                    label: 'Admin page',
							description: 'Move to Admin Help',
							value: 'Admin',
              emoji: '<a:kupa:796630489380290570>',
                },
                {
                    label: 'Moderator page',
							description: 'Move to Moderator Help',
							value: 'Moderator',
              emoji: '<a:aq:796664019321618442>',
                },
                {
                  label: 'Music Page',
            description: 'Move to Music Help',
            value: 'Music',
            emoji: '<a:diska:876363187119857687>',
              },
              {
                label: 'Economy Page',
          description: 'Move to Economy Help',
          value: 'Economy',
          emoji: '<:shop:831482936343003146>',
            },
            {
              label: 'Marriage Page',
        description: 'Move to Marriage Help',
        value: 'Marriage',
        emoji: '<:married:830446863131738132>',
          },
          {
            label: 'Starboard Page',
      description: 'Move to StarBoard Help',
      value: 'Star',
      emoji: '🌟',
        },
          {
            label: 'Giveaway Page',
      description: 'Move to Giveaway Help',
      value: 'Giveaway',
      emoji: '<:partypopper:831480977183342642>',
        },
        {
          label: 'Levelling Page',
    description: 'Move to Levelling Help',
    value: 'Level',
    emoji: '<a:p_invite:893523939970650162>',
      },
                {
                    label: 'Fun Page',
							description: 'Move to Fun Help',
							value: 'Fun',
              emoji: '<a:peperun:780731095930765313>',
                },
              {
                label: ' Button Games Page',
          description: 'Move to Button Games Help',
          value: 'Games',
          emoji: '<a:ButtonPress:893533787378557039>',
            },
                {
                    label: 'Utilities Page',
							description: 'Move to Utilities Help',
							value: 'Utilities',
              emoji: '<a:Utilities:893534072805142538>',
                },
                {
                  label: 'DMS Page',
            description: 'Move to DMS Help',
            value: 'DMS',
            emoji: '<:DMS:893528225492385833> ',
              },
              {
                label: 'NSFW Page',
          description: 'Move to NSFW Help',
          value: 'NSFW',
          emoji: '<:18:893958225932730388>',
            },

            ])
    );
const firstbtn = new MessageButton()
          .setCustomId(`first_embed`)

          .setEmoji("⏪")
          .setStyle("PRIMARY");

        const pageMovingButtons1 = new MessageButton()
          .setCustomId(`forward_button_embed`)

          .setEmoji("▶️")
          .setStyle("SUCCESS");

        const deleteBtn = new MessageButton()
          .setCustomId(`delete_embed`)

          .setEmoji("🗑️")
          .setStyle("DANGER");

        const pageMovingButtons2 = new MessageButton()
          .setCustomId(`back_button_embed`)

          .setEmoji("◀️")
          .setStyle("SUCCESS");

        const lastbtn = new MessageButton()
          .setCustomId(`last_embed`)

          .setEmoji("⏩")
          .setStyle("PRIMARY");

          pageMovingButtons = new MessageActionRow().addComponents([
            firstbtn,
            pageMovingButtons2,
            deleteBtn,
            pageMovingButtons1,
            lastbtn
          ]);
          var currentPage = 0;
          var m = await message.channel.send({
            content: 'https://cdn.discordapp.com/attachments/763668907025498133/893451149477306408/1633085722211.png',
            components: [pageMovingButtons, column]
          });
          const c = m;
          client.on("interactionCreate", async (interaction) => {
            if (!interaction.isSelectMenu()) return;
            interaction.deferUpdate();
            if (interaction.message.id == m.id && interaction.user.id == message.author.id) {
              if (interaction.user.id !== message.author.id)
              return interaction.reply({
                content: "This Page wasnt created by you",
                ephemeral: true
              });
            if (interaction.customId === 'helpselect'){
              var firstbttn = new MessageButton()
              .setCustomId(`firstt_embed`)
    
              .setEmoji("⏪")
              .setStyle("PRIMARY");
    
            var pageMovingButttons1 = new MessageButton()
              .setCustomId(`forward_buttton_embed`)
    
              .setEmoji("▶️")
              .setStyle("SUCCESS");
    
            var deleteBtn = new MessageButton()
              .setCustomId(`delete_embed`)
    
              .setEmoji("🗑️")
              .setStyle("DANGER");
    
            var pageMovingButttons2 = new MessageButton()
              .setCustomId(`back_buttton_embed`)
    
              .setEmoji("◀️")
              .setStyle("SUCCESS");
    
            var lastbttn = new MessageButton()
              .setCustomId(`lastt_embed`)
    
              .setEmoji("⏩")
              .setStyle("PRIMARY");
    
              var pageMovingButttons = new MessageActionRow().addComponents([
                firstbttn,
                pageMovingButttons2,
                deleteBtn,
                pageMovingButttons1,
                lastbttn
              ]);
                
              var embedd2 = new Discord.MessageEmbed()
              var embedd3 = new Discord.MessageEmbed()
              var embedd4 = new Discord.MessageEmbed()
              var embedd5 = new Discord.MessageEmbed()
              if(interaction.values[0] === 'Admin'){   
          embedd2.setDescription('**[Ban](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Ban an User**\n**[Rr-add](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to add Reaction-role to a Message**\n**[Button-roles](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to setup Button Roles**\n**[SetLogs](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup Techie Logs**\n**[Lock](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Lock a Channel**\n**[GetAudit](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to fetch Audit Logs for the Server**\n**[LockNick](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to lock nicknames in the Server**\n**[ServerEmotes](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Lists all the Emotes in the Guild**\n**[EnableSnipe](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Enables Sniping in the Server**\n**[DisableSnipe](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Disables Sniping in the Server**\n**[Unban](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Unbans an user from the Guild**')
          embedd2.setFooter('Use +help <command_name> for more info')
          embedd2.setTimestamp()
          embedd2.setColor('#FFCBCB');
          embedd3.setDescription('**[Ghostping](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Toggles GhostPing Detector**\n**[Toggle](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Toggle a command in the Channel**\n**[Create-Channel](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Creates a Specified channel in the Guild**\n**[Set-Bump](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to setup Bump reminder**\n**[TempBan](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to ban an user for span of time**\n**[ResetLevels](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to reset levels for the guild**\n**[Give-all](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gives role to all users in the Guild**\n**[Take-all](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Takes Role from each User in the Guild**')
          embedd3.setFooter('Use +help <command_name> for more info')
          embedd3.setTimestamp()
          embedd3.setColor('#FFCBCB');
          embedd4.setDescription('**[LockServer](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Lock the Server for a Particular Role**\n**[UnlockServer](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Unlocks the Guild For a Particular Role**\n**[Banbot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Denies unverified Bots From Joining The Guild**\n**[Banalt](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Denies Newly Created Accounts From Joining the Server**\n**[Raidmode](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Denies every User from Joining The Guild**\n**[ResetMessages](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Resets Messages Count for the Guild**')
          embedd4.setFooter('Use +help <command_name> for more info')
          embedd4.setTimestamp()
          embedd4.setColor('#FFCBCB');
          var Pagges = [embedd2, embedd3, embedd4]     
          m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
            }
              if(interaction.values[0] === 'Moderator'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Kick](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Kick a Member**\n**[SetNick](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Changes Nickname of an user**\n**[Nick](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Change Techies Nickname**\n**[Role](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Toggle a Role for an User**\n**[Mute](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to mute an User for a span of time**\n**[Unmute](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Unmute an already muted User**\n**[CreateRole](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Create Role for the guild**\n**[Steal](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to add an Emoji in the Guild**\n**[DeleteRole](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Remove a Role from the Guild**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                embedd3.setDescription('**[AddSticker](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to add a Sticker in the Guild**\n**[UserInfo](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Fetches Information About an User**\n**[AntiLink](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Denies Users to Post Url in the Channel**\n**[AntiImagery](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Denies Users to Post Attachments in the Channel**\n**[Purge](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Purges Specified Number of Pages with Advcancement**\n**[Warn](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Warns an user with an arguement**\n**[WarnPunishment](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Warn Punishment For the Guild**\n**[CheckWarn](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Checks Warnings for an User**')              
                embedd3.setFooter('Use +help <command_name> for more info')
                embedd3.setTimestamp()
                embedd3.setColor('#FFCBCB');
                embedd4.setDescription('**[ClearWarn](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Clears Previous Warning for an User**\n**[SetChatbot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Techie ChatBot in the Guild**\n**[DisableModule](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Disables a Techie Module in the Guild**\n**[AntiSpam](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Denies user to Do Spamming in the Channel**\n**[ModLogs](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Views Up Moderation Logs For the Guild**\n**[Prefix](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Changes Techie Prefix for the Guild**\n**[VoiceMute](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Mutes a member in Voice Channels**\n**[VoiceUnmute](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Unmutes an user in Voice Channels**')
                embedd4.setFooter('Use +help <command_name> for more info')
                embedd4.setTimestamp()
                embedd4.setColor('#FFCBCB');
                var Pagges = [embedd2, embedd3, embedd4]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
              }
              if (interaction.values[0] === 'Music'){
                interaction.deferUpdate();
                embedd2.setDescription('**[24/7](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets Techie 24/7 on in the Voice Channel**\n**[Play](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Plays a Song from youtube,Spotify,Appe Music or Deezer**\n**[AutoPlay](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Toggles AutoPlay For the Guild**\n**[Clearqueue](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Clears the queue list**\n**[Filter](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Applies filter to current Song**\n**[Join](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Joins the Voice channel**\n**[SetPlayer](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Premium Command Used to Set Techie Player in Your Guild**\n**[Disconnect](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Leaves the Current Voice Channel**\n**[Lyrics](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Fetches the lyrics of the current Grooving Music**\n**[Stop](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Stop and Clear the Queue**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                embedd3.setDescription('**[Loop](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used To Loop a Song or Queue**\n**[Queue](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **View the Queue for the Guild**\n**[Seek](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to set player at any duration of the Song**\n**[Remove](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to remove a song from the Queue**\n**[Shuffle](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Shuffle the Queue**\n**[Skipto](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to skip the player to a mentioned Song**\n**[Volume](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Change the Volume of the Player**\n**[Pause](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Puase the Player**\n**[Resume](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Resume the Queue**\n**[MusicOfTheDay](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Plays the top played Music of the day**\n**[MusicOfTheMonth](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Plays the top Played Music for the Month**')
                embedd3.setFooter('Use +help <command_name> for more info')
                embedd3.setTimestamp()
                embedd3.setColor('#FFCBCB');
                var Pagges = [embedd2, embedd3]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
              }
              if (interaction.values[0] === 'Economy'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Shop](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Views all the Item in the Shop**\n**[Buy](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Buy an Item from the Shop**\n**[Sell](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sell an item back to Techie at low Price**\n**[Give](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Give Users Coin from your Wealth**\n**[Trade](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Trade an Item With an User**\n**[Use](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Use an Item You Own**\n**[Rob](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Rob an User**\n**[Roulette](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to bet your Money in Roulette**\n**[Slot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to bet your Money in Slot**\n**[Blackjack](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Bet your Money in Blackjack**\n**[Fight](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Bet your Money against an User**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                embedd3.setDescription('**[Work](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Collect your hourly income**\n**[Daily](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used To Collect your Daily Income**\n**[VoteReward](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Collect your Voting Rewards**\n**[Weekly](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Collect Your Weekly Rewards**\n**[PremiumDaily](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Collect Your Daily Premium Rewars**')
                embedd3.setFooter('Use +help <command_name> for more info')
                embedd3.setTimestamp()
                embedd3.setColor('#FFCBCB');
                var Pagges = [embedd2, embedd3]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
              }
              if (interaction.values[0] === 'Fun'){
              interaction.deferUpdate()
              embedd2.setDescription('**[Image](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches an array of images on Google**\n**[Youtube](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches an Array of Data on Youtube**\n**[Map](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches coordinates on Google Maps**\n**[Instagram](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches for an Account on Instagram**\n**[Weather](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets weather Data of Specified Region**\n**[Ip](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Information about an Ip**\n**[Google](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Information about an Object on Google**\n**[Screenshot](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Screenshot of Provided URL**\n**[ASCII](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Ascii Data for an Input**\n**[Twitter](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Information of a Twitter Account**')
              embedd2.setFooter('Use +help <command_name> for more info')
              embedd2.setTimestamp()
              embedd2.setColor('#FFCBCB');
              embedd3.setDescription('**[Hug](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Use this Command to Hug an User**\n**[Kiss](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Use this Command to Kiss an User**\n**[Cuddle](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Use this command to Cuddle an User**\n**[Ship](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Find Lovemeter between Two Users**\n**[8Ball](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Ask 8Ball any Question You Like**\n**[Tenor](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets a Gif from Tenor**\n**[Covid](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gtes Covid Data of The Specified Region**')
              embedd3.setFooter('Use +help <command_name> for more info')
              embedd3.setTimestamp()
              embedd3.setColor('#FFCBCB');
              embedd4.setDescription('**[Boyfriend](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches a Random BoyFriend From You within the the Server**\n**[GirlFriend](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Searches a Random GirlFriend for You within the Server**\n**[Emoji](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets a random Emoji fo you from all The Server Techie is in**\n**[Wasted](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Make pic wasted Like **\n**[Missing](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Make a Pic with Missing Api**\n**[HowGay](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Determines the gay meter for you**')
              embedd4.setFooter('Use +help <command_name> for more info')
              embedd4.setTimestamp()
              embedd4.setColor('#FFCBCB');
              embedd5.setDescription('**[Binary](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Convert a Text Into Binary**\n**[Textify](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Convert Binary data into Text Data**\n**[PatGif](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Converts an Image into Pat Gif**\n**[Jumbo](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Enlarges an Emoji **\n**[Clyde](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get a Clyde Api Message**')
              embedd5.setFooter('Use +help <command_name> for more info')
              embedd5.setTimestamp()
              embedd5.setColor('#FFCBCB');
              var Pagges = [embedd2, embedd3, embedd4, embedd5]
              m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
            }
              if (interaction.values[0] === 'Marriage'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Marry](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Marry an User**\n**[Child](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to make an User as Your Child**\n**[Divorce](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Divorce an User**\n**[Abondon](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Abondon the Child**\n**[Buy Ring](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Buy a Ring**\n**[Propose](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Make an User Your Boyfriend/Girlfriend**\n**[Affair](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to start an Affair with an already Married User**\n**[Status](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to view an Users Marrital Status**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                pageMovingButttons.components[0].setDisabled(true)
                pageMovingButttons.components[1].setDisabled(true)
                pageMovingButttons.components[3].setDisabled(true)
                pageMovingButttons.components[4].setDisabled(true)
                var Pagges = [embedd2]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
              }
              if (interaction.values[0] === 'Star'){
                interaction.deferUpdate();
                embedd2.setDescription('**[SetStarChannel](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to set Redirecting Message Channel**\n**[StarEmoji](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used To Manage Emojis for the Starboard**\n**[SetReqStar](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup Star Requirement for Starboard**\n**[StarColour](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup Embed Colour For Starboard**\n**[DisallowRoles](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Restricts a role from Starboard**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                pageMovingButttons.components[0].setDisabled(true)
                pageMovingButttons.components[1].setDisabled(true)
                pageMovingButttons.components[3].setDisabled(true)
                pageMovingButttons.components[4].setDisabled(true)
                var Pagges = [embedd2]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})              
              }
              if (interaction.values[0] === 'Giveaway'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Gstart](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Starts a Giveaway in the Guild**\n**[Gend](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Ends an already Started Giveaway**\n**[Greroll](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Rerolls an Already Ended Giveaway**\n**[BlacklistGiveaway](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Blacklists a Role from Participating in Giveaways**\n**[GiveawayInvite](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets a guild required for user to be in For Giveaway**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                pageMovingButttons.components[0].setDisabled(true)
                pageMovingButttons.components[1].setDisabled(true)
                pageMovingButttons.components[3].setDisabled(true)
                pageMovingButttons.components[4].setDisabled(true)
                var Pagges = [embedd2]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})   
              }
              if (interaction.values[0] === 'Level'){
                interaction.deferUpdate();
                embedd2.setDescription('**[SetRole](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup role for a level**\n**[SetChannel](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup Channel for Level Up messages**\n**[SetMessage](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup LevelUp Messages For a Role**\n**[BlacklistLevel](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Blacklists Levelling up for a role**\n**[Rank](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **View Rank Card of an User**\n**[Rank-bg](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Setup Background for your Rank Card**\n**[Rank-Premium](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to select a background which changes every time from a variety of Galleries - Premium**\n**[BoostedPerks](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Setup extra Points for a role - Premium**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                pageMovingButttons.components[0].setDisabled(true)
                pageMovingButttons.components[1].setDisabled(true)
                pageMovingButttons.components[3].setDisabled(true)
                pageMovingButttons.components[4].setDisabled(true)
                var Pagges = [embedd2]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})   
              }
              if (interaction.values[0] === 'Games'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Fight](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Fight against an User**\n**[Tictactoe](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play TicTacToe against an User**\n**[Quickclick](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play QuickClick Game In the Server**\n**[SnakeFood](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play SankeFood Game in the Guild**\n**[Chess](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play Chess Against an User In the Guild**\n**[SnakeLadders](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play SnakLadders With a bunch of Members**\n**[Trivia](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play Trivia Game**\n**[WouldYouRather](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play Would You Rather In the Guild**\n**[NeverHaveI](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Play Never have I in the Guild**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                pageMovingButttons.components[0].setDisabled(true)
                pageMovingButttons.components[1].setDisabled(true)
                pageMovingButttons.components[3].setDisabled(true)
                pageMovingButttons.components[4].setDisabled(true)
                var Pagges = [embedd2]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})   
              }
              if (interaction.values[0] === 'Utilities'){
                interaction.deferUpdate();
                embedd2.setDescription('**[setInvite](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to setup Techie Invite Channel**\n**[ChceckInvite](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to CheckUp the Number of Invites an User has**\n**[Talk](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Talk with Techie Chatbot Directly**\n**[Calculator](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Use Special Button Calculator**\n**[TechieLogs](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **View Techie Log for the Guild**\n**[Colours](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get all the Colour Detail from an Attachment**\n**[Snipe](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets an Array of Deleted Message**\n**[Esnipe](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets an Array of Edited Messages in the Guild**')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                embedd3.setDescription('**[Lastseen](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets the lastseen data of an user**\n**[Reminder](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets a dms Reminder For the User**\n**[Messages](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Displays the Number of Messages that have been Registered in the Guild**\n**[Afk](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Sets AFK message for an User**')
                embedd3.setFooter('Use +help <command_name> for more info')
                embedd3.setTimestamp()
                embedd3.setColor('#FFCBCB');
                var Pagges = [embedd2, embedd3]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})   
              }
              if (interaction.values[0] === 'DMS'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Bored](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **A Techie Staff will Join to Entertain You Up**\n**[Report](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Used to Report an User or a Techie Action**\n**[Suggest-Techie](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Send a Suggestion For Techie**\n**[Redeem](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Redeem a Techie Special Prize or Code**\n**[Not-Bored](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Ends Up Conversation with Techie Staff**s')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB');
                pageMovingButttons.components[0].setDisabled(true)
                pageMovingButttons.components[1].setDisabled(true)
                pageMovingButttons.components[3].setDisabled(true)
                pageMovingButttons.components[4].setDisabled(true)
                var Pagges = [embedd2]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
              }
              if(interaction.values[0] === 'NSFW'){
                interaction.deferUpdate();
                embedd2.setDescription('**[Boobs](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some NSFW Pics**\n**[Pussy](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Nsfw Stuff**\n**[Porn](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Nsfw Gifs for you**\n**[Anal](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Nsfw Gifs For You**\n**[GayPorn](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Nsfw Gifs for You**\n**[Bdsm](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get Some Nsfw gifs **')
                embedd2.setFooter('Use +help <command_name> for more info')
                embedd2.setTimestamp()
                embedd2.setColor('#FFCBCB')
                embedd3.setDescription('**[Masturbation](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get Some Hentai Pics**\n**[Hentai](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get Some Hentai Pics**\n**[Hneko](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Hentai Pics**\n**[Hpussy](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get Some Hentai Pics**\n**[Public](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Hentai Pics**\n**[Hgif](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets Some Hentai Gif**\n**[Masturbation](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get some Hentai Pics**\n**[Blowjob](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get Some Hentai Pics**')
                embedd3.setFooter('Use +help <command_name> for more info')
                embedd3.setTimestamp()
                embedd3.setColor('#FFCBCB')
                embedd4.setDescription('**[4kVideo](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets 4k Nsfw Porn - Premium**\n**[AutoPosting](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Get Nsfw Content getting Posted Automatically - Premium**\n**[GuessHer](https://techie.teamsite.repl.co)**\n<:replyL:892780259236270172> **Gets a random Nsfw Video to guess the Actress From - Premium**')
                embedd4.setFooter('Use +help <command_name> for more info')
                embedd4.setTimestamp()
                embedd4.setColor('#FFCBCB')
                var Pagges = [embedd2, embedd3, embedd4]
                m.edit({content: `📄 Handbook - 1/${Pagges.length}`, embeds: [embedd2], components: [pageMovingButttons]})
              } 
              var currrentPage = 0;
              const collector = message.channel.createMessageComponentCollector({time: 30000});
              collector.on('collect', async (b) => {
                if(c === m){
                if (b.message.id == m.id && b.user.id == message.author.id) {
                  if (b.user.id !== message.author.id)
                  return b.reply({
                    content: "This Page wasnt created by you",
                    ephemeral: true
                  });
                  b.deferUpdate();
                  if (b.customId == "back_buttton_embed") {
                    if (currrentPage - 1 < 0) {
                      currrentPage = Pagges.length - 1;
                    } else {
                      currrentPage -= 1;
                    }
                  } else if (b.customId == "forward_buttton_embed") {
                    if (currrentPage + 1 == Pagges.length) {
                      currrentPage = 0;
                    } else {
                      currrentPage += 1;
                    }
                  } else if (b.customId == "delette_embed") {
                    b.message.delete();
                    b.reply({ content: "Message Deleted", ephemeral: true });
                  } else if (b.customId == "lastt_embed") {
                    currrentPage = Pagges.length - 1;
                  } else if (b.customId == "firstt_embed") {
                    currrentPage = 0;
                  }
        
                  if (
                    b.customId == "firstt_embed" ||
                    b.customId == "back_buttton_embed" ||
                    b.customId == "forward_buttton_embed" ||
                    b.customId == "lastt_embed"
                  ) {
                    m.edit({
                      content: `📄 Handbook - ${currrentPage+1}/${Pagges.length}`,
                      embeds: [Pagges[currrentPage]],
                      components: [pageMovingButttons]
                    });
                  }
                }
              }
            })
            collector.on("end", () => {
              pageMovingButttons.components[0].setDisabled(true)
              pageMovingButttons.components[1].setDisabled(true)
              pageMovingButttons.components[3].setDisabled(true)
              pageMovingButttons.components[4].setDisabled(true)
              m.edit({
                  embeds: [Pagges[currrentPage]],
                  components: [pageMovingButttons]
                })
              })
        }
      }
          })
          client.on("interactionCreate", async (b) => {
            if(c === m){
            if (!b.isButton()) return;
    
            if (b.customId == "back_button_embed") {
              if (b.user.id !== message.author.id)
                return b.reply({
                  content: "This Page wasnt created by you",
                  ephemeral: true
                });
            } else if (b.customId == "forward_button_embed") {
              if (b.user.id !== message.author.id)
                return b.reply({
                  content: "This Page wasnt created by you",
                  ephemeral: true
                });
            } else if (b.customId == "delete_embed") {
              if (b.user.id !== message.author.id)
                return b.reply({
                  content: "This Page wasnt created by you",
                  ephemeral: true
                });
            } else if (b.customId == "last_embed") {
              if (b.user.id !== message.author.id)
                return b.reply({
                  content: "This Page wasnt created by you",
                  ephemeral: true
                });
            } else if (b.customId == "first_embed") {
              if (b.user.id !== message.author.id)
                return b.reply({
                  content: "This Page wasnt created by you",
                  ephemeral: true
                });
            }
    
            if (b.message.id == m.id && b.user.id == message.author.id) {
              if (b.customId == "back_button_embed") {
                if (currentPage - 1 < 0) {
                  currentPage = pages.length - 1;
                } else {
                  currentPage -= 1;
                }
              } else if (b.customId == "forward_button_embed") {
                if (currentPage + 1 == pages.length) {
                  currentPage = 0;
                } else {
                  currentPage += 1;
                }
              } else if (b.customId == "delete_embed") {
                b.message.delete();
                b.reply({ content: "Message Deleted", ephemeral: true });
              } else if (b.customId == "last_embed") {
                currentPage = pages.length - 1;
              } else if (b.customId == "first_embed") {
                currentPage = 0;
              }
    
              if (
                b.customId == "first_embed" ||
                b.customId == "back_button_embed" ||
                b.customId == "forward_button_embed" ||
                b.customId == "last_embed"
              ) {
                if(currentPage === pages.length - 1){
                  m.edit({
                    embeds: [],
                    content: "https://cdn.discordapp.com/attachments/763668907025498133/893455298059202560/1633086717019.png",
                    components: [pageMovingButtons, column]
                  })
                }
                else{
                  if(currentPage === 0){
                    m.edit({
                      embeds: [],
                      content: "https://cdn.discordapp.com/attachments/763668907025498133/893451149477306408/1633085722211.png",
                      components: [pageMovingButtons, column]
                    })
                  }
                  else{
                m.edit({
                  content: `📄 Handbook - ${currentPage}/6`,
                  embeds: [pages[currentPage]],
                  components: [pageMovingButtons, column]
                });
              }
            }
          
                b.deferUpdate();
              }
            
          }
        }
          });
    }else{
      const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );
                const embed = new MessageEmbed()
                .setTitle("Command Details:")
                .addField(
                    "Command:",
                    command.name ? `\`${command.name}\`` : "No name for this command."
                )
                .addField(
                    "Aliases:",
                    command.aliases ?
                    `\`${command.aliases.join("` `")}\`` :
                    "No aliases for this command."
                )
                .addField(
                    "Usage:",
                    command.usage ?
                    `\`${prefix}${command.name} ${command.usage}\`` :
                    `\`${prefix}${command.name}\``
                )
                .addField(
                    "Command Description:",
                    command.description ?
                    command.description :
                    "No description for this command."
                )
                .setFooter(
                    `Requested by ${message.member.displayName}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor(client.embedColor);
            return await message.channel.send({embeds: [embed]});
    }
}
}