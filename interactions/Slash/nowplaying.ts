module.exports = {
    name: "nowplaying",
    description:"Displays the Current Grooving Music",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
        const { MessageEmbed } = require("discord.js");
      const { convertTime } = require('../../utils/convert.js');
      const { progressbar } = require('../../utils/progressbar.js')
        const { channel } = interaction.member.voice;
        var player = interaction.client.manager.get(interaction.guild.id);
        if (!player.queue) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return interaction.followUp({embeds: [thing], ephemeral: true });
        }
      
        const song = player.queue.current
      
        const emojimusic = interaction.client.emoji.music;
      
        // Progress Bar
        var total = song.duration;
        var current = player.position;
        var size = 20;
        var line = '▬';
        var slider = '🔘';
      
        let embed = new MessageEmbed()
            .setDescription(`<a:diska:876363187119857687> **Now Playing**\n[${song.title}](${song.uri}) - \`[${convertTime(song.duration)}]\``)
            .setImage(song.displayThumbnail("hqdefault"))
            .setColor(interaction.client.embedColor)
            .addField("\u200b", progressbar(total, current, size, line, slider))
            .addField("\u200b", `\`${convertTime(current)} / ${convertTime(total)}\``)
         return interaction.followUp({embeds: [embed]})
    }
}