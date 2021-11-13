module.exports = {
    name: "queue",
    description:"Displays the Queue for the Guild",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
  const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')
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
    }
