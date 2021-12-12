
const delay = require("delay");

module.exports = async (client, oldState, newState) => {
	const { MessageEmbed, MessageSelectMenu } = require("discord.js");
    const channel = newState.guild.channels.cache.get(
        newState.channel?.id ?? newState.channelId
    )
		
		const player = client.manager?.players.get(newState.guild.id)

		if (!player) return
		if (!newState.guild.members.cache.get(client.user.id).voice.channelId) player.destroy()
		if (newState.id == client.user.id && channel?.type == 'GUILD_STAGE_VOICE') {
			if (!oldState.channelId) {
				try {
					await newState.guild.me.voice.setSuppressed(false).then(() => console.log(null))
				} catch (err) {
					player.pause(true)
				}
			} else if (oldState.suppress !== newState.suppress) {
				player.pause(newState.suppress)
			}
		}

		if (oldState.id === client.user.id) return
		if (!oldState.guild.members.cache.get(client.user.id).voice.channelId) return

		
		if (player.twentyFourSeven) return

		
		if (oldState.guild.members.cache.get(client.user.id).voice.channelId === oldState.channelId) {
			if (
				oldState.guild.me.voice?.channel &&
				oldState.guild.me.voice.channel.members.filter((m) => !m.user.bot).size === 0
			) {
				const vcName = oldState.guild.me.voice.channel.name
				await delay(180000)

				
				const vcMembers = oldState.guild.me.voice.channel?.members.size
				if (!vcMembers || vcMembers === 1) {
					const newPlayer = client.manager?.players.get(newState.guild.id)
					newPlayer ? player.destroy() : oldState.guild.me.voice.channel.leave()
					const embed = new MessageEmbed(client, newState.guild)
						
						.setDescription(
							`I left 🔉 **${vcName}** because I was inactive for too long.`
						)
					try {
						const c = client.channels.cache.get(player.textChannel)
						if (c)
							c.send({ embeds: [embed] }).then((m) =>
                            setTimeout(() =>
								m.delete(), 30000)
							)
					} catch (err) {
						client.logger.error(err.message)
					}
				}
			}
		}


    
};
