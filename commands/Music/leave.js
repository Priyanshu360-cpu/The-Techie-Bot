const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "leave",
    aliases: ["dc"],
    category: "Music",
    description: "Leave voice channel",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);
        player.stop();
        player.queue.clear();
        const emojiLeave = message.client.emoji.leave;
        const search = 'https://youtu.be/L1kl6-Jy2bE';
        let res;
        res = await player.search(search, message.author);
        var track = res.tracks[0];
        player.queue.add(track);
        player.play();
        let thing = new MessageEmbed()
        .setColor(message.client.embedColor)
        .setDescription(`${emojiLeave} **Leave the voice channel**\nThank you for using ${message.client.user.username}!`)
        setTimeout(() => player.destroy(), `${track.duration+1000}`)
      setTimeout(() => message.channel.send({embeds: [thing]}), `${track.duration}`)
    }
};