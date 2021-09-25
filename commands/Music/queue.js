const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "queue",
    category: "Music",
    aliases: ["q"],
    description: "Show the music queue and now playing.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
   execute: async (message, args, client, track, prefix) => {
    let ku = 2;
        const player = message.client.manager.get(message.guild.id);
        const { MessageActionRow, MessageButton} = require('discord.js');
        const collector = message.channel.createMessageComponentCollector({time: 15000});
    collector.on('collect', async i => {
        if (i.customId === '-10') {
            let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
        }
        if (i.customId === '-20') {
            if(ku === 1){
                let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
            }
            else{
                const page = 1 && Number(ku) ? Number(ku) : 1;
                const end = page * multiple;
                const start = end - multiple;
                const tracks = queue.slice(start, end);
                 ku=ku+1;
                let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
            }
        }
        if (i.customId === '-30'){
            if(ku != maxPages){
                let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
            }
            else{
            ku = ku+1;
           const page = 1 && Number(ku) ? Number(ku) : 1;
           const end = page * multiple;
           const start = end - multiple;
           const tracks = queue.slice(start, end);
           let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
            }
        }
        if (i.customId === '-40'){
            const page = 1 && Number(maxPages) ? Number(maxPages) : 1;
           const end = page * multiple;
           const start = end - multiple;
           const tracks = queue.slice(start, end);
           let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
            .addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``)
            .addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);
            await i.update({embeds: [thing]});
        }
    })
      let button = new MessageActionRow()
              .addComponents(
                new MessageButton().setCustomId(`-20`).setLabel('⬅️').setStyle('SECONDARY'),
                new MessageButton().setCustomId(`-10`).setLabel('⏪').setStyle('SUCCESS'),
                new MessageButton().setCustomId(`-30`).setLabel('➡️').setStyle('SECONDARY'),
                new MessageButton().setCustomId(`-40`).setLabel('⏩').setStyle('SUCCESS')
              );

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }
        collector.on("end", () => {
            k=2;
            let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(song.displayThumbnail("hqdefault"))
            .setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"))
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
        const emojiQueue = message.client.emoji.queue;

        const embed = new MessageEmbed()
            .setColor(message.client.embedColor)
      
        const multiple = 10;
        const page = args.length && Number(args[0]) ? Number(args[0]) : 1;

        const end = page * multiple;
        const start = end - multiple;
        const song = player.queue.current;
        const tracks = queue.slice(start, end);

        if (queue.current) embed.setThumbnail(song.displayThumbnail("hqdefault"));embed.addField("Now Playing", `[${queue.current.title}](${queue.current.uri}) \`[${convertTime(queue.current.duration)}]\``);

        if (!tracks.length) embed.setDescription(`No tracks in ${page > 1 ? `page ${page}` : "the queue"}.`);
        else embed.setThumbnail(song.displayThumbnail("hqdefault"));embed.setDescription(`**Queue List - ${tracks.length}**\n` + tracks.map((track, i) => `${start + (++i)} - ${track.title} \`[${convertTime(track.duration)}]\` - [<@${track.requester.id}>]`).join("\n"));

        const maxPages = Math.ceil(queue.length / multiple);

        embed.addField("\u200b", `Page ${page > maxPages ? maxPages : page} of ${maxPages}`);

        let msg = await message.channel.send({embeds: [embed], components: [button]});
    }
};
