module.exports = {
    name: "disconnect",
    description:"disconnects the bot from the voice Channel",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
      const { MessageEmbed } = require("discord.js");
      const { channel } = interaction.member.voice;
      var player = interaction.client.manager.get(interaction.guild.id);
      const emojiLeave = interaction.client.emoji.leave;
      player.destroy();
      let thing = new MessageEmbed()
          .setColor(interaction.client.embedColor)
          .setDescription(`${emojiLeave} **Leave the voice channel**\nThank you for using ${interaction.client.user.username}!`)
        return interaction.followUp({embeds: [thing]})
    }
}