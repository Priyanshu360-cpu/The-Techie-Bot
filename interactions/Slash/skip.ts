module.exports = {
    name: "skip",
    description:"skips the current song",
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

  const autoplay = player.get("autoplay");
  const song = player.queue.current;

  if (autoplay === false) {
      player.stop();
  } else {
      player.stop();
      player.queue.clear();
      player.set("autoplay", false);
  }
  
  const emojiskip = interaction.client.emoji.skip;

  let thing = new MessageEmbed()
      .setDescription(`<:Skip:876007419724054548>  **Skipped the song**\n**[${song.title}](${song.uri})**`)
      .setColor(interaction.client.embedColor)
      .setTimestamp()
  return interaction.followUp({embeds: [thing]});
    }
}