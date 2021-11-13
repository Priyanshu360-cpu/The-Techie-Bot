module.exports = async (client, guild) => {
	client.users.fetch("619474506381000706").then(user => {
        user.send(`🔔 Joined: ${guild.name} (${guild.id}) - ${guild.members.cache.size} members`);
	})
}