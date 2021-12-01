
const { minTransformDependencies } = require("mathjs");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
module.exports = {
	name: "musicplayer",
    aliases: ["mp"],
    category: "Music",
    description: "Sets Music Player in the Guild",
    args: false,
    usage: "",
    permission: [],
	 execute: async (message, args, client, track, prefix) => {
        const { Permissions } = require('discord.js');
         if(message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) === true){
            
            await message.guild.channels.create(
                "🔸techie™-player",
                {
                type: 'GUILD_TEXT',
                }).then(channel=>{channel.setRateLimitPerUser(5);
                client.mchannel.set(`mchannel_${message.guild.id}`,channel.id)})
                setTimeout(()=>setplayer(),5000)
                function setplayer(){
                    let tutorial = new MessageEmbed()
                    tutorial.setImage("https://cdn.dribbble.com/users/633015/screenshots/3583621/neon4.gif")
                    tutorial.setColor("FFCBCB")
                    let Starter = new MessageEmbed()
                    Starter.setTitle("Commands help")
                    Starter.setColor("FFCBCB")
                    Starter.setThumbnail(client.users.cache.find(x=>x.id === "741280410180386947").displayAvatarURL())
                    Starter.setDescription("Use Buttons and Select Menus to Control the Player.To get more help type +help Music")
                    let main = new MessageEmbed()
                    main.setTitle("Currently Playing!")
                    main.setDescription(`No track is being played!\n<a:right:830433641053290566>[Invite](https://techie.teaminvite.repl.co/) | [Vote us](https://top.gg/bot/741280410180386947) | [Website](https://www.google.com)`)
                    main.setImage("https://cdn.discordapp.com/attachments/820937650940149771/849178357328904222/images_-_2021-06-01T122031.236.jpeg")
                    main.setFooter(`My prefix in this server is ${client.prefix}`)
                    main.setColor("FFCBCB")
                    let queue = new MessageEmbed()
                    queue.setTitle("Queue-0")
                    queue.setDescription("Queue Is empty")
                    queue.setColor("FFCBCB")
                    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('Pauseaa')
            .setLabel('Pause')
            .setStyle('SECONDARY')
            .setEmoji('876007266418057217'),
            new MessageButton()
            .setCustomId('Resumeaa')
            .setLabel('Resume')
            .setStyle('DANGER')
            .setEmoji('876019503325126667'),
            new MessageButton()
            .setCustomId('Skipaa')
            .setLabel('Skip')
            .setStyle('PRIMARY')
            .setEmoji('876007419724054548'),
            new MessageButton()
            .setCustomId('Lyricsaa')
            .setLabel('Lyrics')
            .setStyle('SUCCESS')
            .setEmoji('876007882578100264'),
            new MessageButton()
            .setCustomId('Loopaa')
            .setLabel('Loop')
            .setStyle('SECONDARY')
            .setEmoji('881060715941740555'),
    )
    const column = new MessageActionRow()
    .addComponents(
            new MessageSelectMenu()
            .setCustomId('filtera')
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
                    message.guild.channels.fetch(client.mchannel.get(`mchannel_${message.guild.id}`)).then(channel=>{channel.send({embeds:[tutorial]});
                channel.send({embeds:[Starter]});     
               channel.send({embeds:[main],components:[row,column]}).then(me=>client.db.set(`mmesage_${message.guild.id}`,me.id));
            client.db.set(`mchannel_${message.guild.id}`,client.mchannel.get(`mchannel_${message.guild.id}`))
 
        channel.send({embeds:[queue]}).then(c=>client.db.set(`mqmessage_${message.guild.id}`,c.id))})
                }
         }
     }
    }