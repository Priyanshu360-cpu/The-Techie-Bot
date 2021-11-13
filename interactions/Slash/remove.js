module.exports = {
    name: "remove",
    description:"removes the song from queue",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
  const { MessageEmbed } = require("discord.js");
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
}