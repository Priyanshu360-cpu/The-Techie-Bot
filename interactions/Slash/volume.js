module.exports = {
    name: "volume",
    description:"Sets Volume to the Song",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
        const { MessageEmbed } = require("discord.js");
        const { channel } = interaction.member.voice;
        var player = interaction.client.manager.get(interaction.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return interaction.followUp({embeds: [thing]});
    }
    
    const volumeEmoji = interaction.client.emoji.volumehigh;
  
    const volume = Number(interaction.options.getInteger('input'));
    
    if (!volume || volume < 0 || volume > 100) { 
      let thing = new MessageEmbed()
                .setColor("RED")
        .setDescription(`Usage: ${interaction.client.prefix}volume <Number of volume between 0 - 100>`)
            return interaction.followUp({embeds: [thing]});
    }
  
    player.setVolume(volume);
  
    if (volume > player.volume) {
      var emojivolume = interaction.client.emoji.volumehigh;
      let thing = new MessageEmbed()
        .setColor(interaction.client.embedColor)
        .setTimestamp()
        .setDescription(`${emojivolume} Volume set to: **${volume}%**`)
      return interaction.followUp({embeds: [thing]});
    } else if (volume < player.volume) {
      var emojivolume = interaction.client.emoji.volumelow;
      let thing = new MessageEmbed()
        .setColor(interaction.client.embedColor)
        .setTimestamp()
        .setDescription(`${emojivolume} Volume set to: **${volume}%**`)
      return interaction.followUp({embeds: [thing]});
    } else {
      let thing = new MessageEmbed()
        .setColor(interaction.client.embedColor)
        .setTimestamp()
        .setDescription(`${volumeEmoji} Volume set to: **${volume}%**`)
      return interaction.followUp({embeds: [thing]});
        }
    }
}