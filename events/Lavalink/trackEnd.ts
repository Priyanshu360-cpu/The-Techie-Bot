module.exports = async (client, player, track, playload) => {
    const channel = client.channels.cache.get(player.textChannel);
    const autoplay = player.get("autoplay")
    var data = await client.db.get(`mchannel_${player.guild}`);
    if(!data){const testo = await client.mcache.get(channel.guild.id);
    channel.messages.delete(testo)} 
    if (autoplay === true) {
        const requester = player.get("requester");
        const oldidentifier = player.get("identifier");
        const identifier = player.queue.current.identifier;
        const search = `https://www.youtube.com/watch?v=${identifier}&list=RD${identifier}`;
        let res = await player.search(search, requester);
		player.queue.add(res.tracks[2]);
    }
}