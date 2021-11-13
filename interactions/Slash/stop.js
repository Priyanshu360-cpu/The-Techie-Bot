module.exports = {
    name: "stop",
    description:"Stops the Song",
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

  const autoplay = player.get("autoplay")
  if (autoplay === true) {
      player.set("autoplay", false);
  }

  player.stop();
  let thing = new MessageEmbed()
  .setColor("RED")
  .setDescription("Stopped the Music");
  interaction.followUp({embeds: [thing]})
  player.queue.clear();
}
}