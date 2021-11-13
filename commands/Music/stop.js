const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "stop",
    category: "Music",
    description: "Stops the music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }

        const autoplay = player.get("autoplay")
        if (autoplay === true) {
            player.set("autoplay", false);
        }

        player.stop();
        player.queue.clear();
		const c = new MessageEmbed()
	.setTitle('<:Techie:892664283090001931> Thanks for using Techie')
	.setURL('https://techie.teamsite.repl.co')
	.setDescription('> **Queries? join our** [Support Server](https://discord.gg/9cKGtRNDqZ)\n> **Invite Techie** [here](https://techie.teaminvite.repl.co)\n **Did You Know?** - You can choose your favourite coloured Techie at [teamsite](https://techie.teamsite.repl.co)')
	.setImage('https://media.discordapp.net/attachments/868795462591840259/892663343079374868/Photo_16328978618962.png')
	.setColor('#00FFD2');
		message.channel.send({embeds: [c]});
  	}
};