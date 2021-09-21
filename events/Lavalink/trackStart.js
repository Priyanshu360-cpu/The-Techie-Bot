const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { MessageActionRow, MessageButton} = require('discord.js');
module.exports = async (client, player, track, payload) => {
    const channel = client.channels.cache.get(player.textChannel);
    const emojiplay = client.emoji.play;
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('Pausea')
            .setLabel('Pause')
            .setStyle('SECONDARY')
            .setEmoji('876007266418057217'),
            new MessageButton()
            .setCustomId('Resumea')
            .setLabel('Resume')
            .setStyle('DANGER')
            .setEmoji('876019503325126667'),
            new MessageButton()
            .setCustomId('Skipa')
            .setLabel('Skip')
            .setStyle('PRIMARY')
            .setEmoji('876007419724054548'),
            new MessageButton()
            .setCustomId('Lyricsa')
            .setLabel('Lyrics')
            .setStyle('SUCCESS')
            .setEmoji('876007882578100264'),
            new MessageButton()
            .setCustomId('Loopa')
            .setLabel('Loop')
            .setStyle('SECONDARY')
            .setEmoji('881060715941740555'),
    );
    
    const thing = new MessageEmbed()
        .setTitle('Now Playing')
        .setURL(`${track.uri}`)
        .setDescription(`<a:diska:876363187119857687> **Started Playing**\n \`\`\`\n${track.title}\`\`\`\n**Duration** - \`[${convertTime(track.duration)}]\`\n**Requested By** - [<@${track.requester.id}>]`)
        .setImage(track.displayThumbnail("hqdefault"))
        .setColor(client.embedColor)
    return channel.send({embeds: [thing], components: [row]}).then(sent => { 
        let id = sent.id;
        setTimeout(() => channel.messages.delete(id), `${track.duration}`);
      });

      
}