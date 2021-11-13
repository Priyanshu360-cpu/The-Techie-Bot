const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    let starboard = client.db.get(`starboard_${message.guild.id}`) 
    if(starboard != 'true')return;
    else{
        await reaction.fetch();
        let starcount = client.db.get(`starcount_${message.guild.id}`)
        let minno = starcount || 2;
        let min = Number(minno);
        let starvariety = client.db.get(`starvariety_${message.guild.id}`)
        let starchannel = client.db.get(`starchannel_${message.guild.id}`)
        let starcolor = client.db.get(`starcolor_${message.guild.id}`)
        if (
            reaction.emoji.id === starvariety ||
            reaction.emoji.name === "⭐" ||
            reaction.emoji.name === "🌟"
          ) {
            let minmax = reaction && reaction.count;
            if (minmax < min) return;
            const starboardc = client.channels.cache.get(starchannel);

        const fetchMsg = await reaction.message.fetch();
        if (!starboardc) throw new Error("INVALID_CHANNEL_ID");

        const attachment = fetchMsg.attachments.first();
        const url = attachment ? attachment.url : null;

        if (fetchMsg.embeds.length !== 0) return;
        const embed = new Discord.MessageEmbed()
          .setAuthor(fetchMsg.author.tag, fetchMsg.author.displayAvatarURL())
          .setColor(starcolor || "#FFC83D")
          .setDescription(fetchMsg.content)
          .setTitle(`Jump to message`)
          .setURL(fetchMsg.url)
          .setImage(url)
          .setFooter("⭐ | ID: " + fetchMsg.id);

        const msgs = await starboard.messages.fetch({ limit: 100 });

        let eemoji = client.emojis.cache.get(starvariety) || "⭐";

        const existingMsg = msgs.find(async (msg) => {
          if (msg.embeds.length === 1) {
            if (msg.embeds[0] === null || msg.embeds[0] === [])
              return starboardc.send({
                content: `**${eemoji} 1**`,
                embeds: [embed]
              });

            if (
              msg.embeds[0] &&
              msg.embeds[0].footer &&
              msg.embeds[0].footer.text === "⭐ | ID: " + fetchMsg.id
            ) {
              let reacts = reaction && reaction.count ? reaction.count : 1;

              msg.edit({ content: `**${eemoji} ${reacts}**`, embeds: [embed] });
            } else {
              let reacts = reaction && reaction.count ? reaction.count : 1;

              starboardc.send({
                content: `**${eemoji} ${reacts}** `,
                embeds: [embed]
              });
            }
          } else {
            let reacts = reaction && reaction.count ? reaction.count : 1;
            starboardc.send({
              content: `**${eemoji} ${reacts}**`,
              embeds: [embed]
            });
          }
        });
      }
          }
    }