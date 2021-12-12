

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/Priyanshu360-cpu/techie-files"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/gfcv94hDhv")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Techie', 'https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
            .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
            .setColor('#303236')
            .addField('Creator', '[Priyanshu#3402](https://github.com/Priyanshu360-cpu/techie-files) And [Venom#9718](https://github.com/Venom9718/)', true)
            .addField('Organization', '[Priyanshu](https://github.com/Priyanshu360-cpu/techie-files)', true)
            .addField('Repository', '[Here](https://github.com/Priyanshu360-cpu/techie-files)', true)
            .addField('\u200b',
                `[Techie](https://github.com/Priyanshu360-cpu/techie-files/) is [Priyanshu](https://github.com/Priyanshu360-cpu/techie-files) and [Venom](https://github.com/Venom9718)'s Was created by Priyanshu and Venom. He really wants to make his first open source project ever. Because he wants more for coding experience. In this project, he was challenged to make project with less bugs. Hope you enjoy using LavaMusic!`
            )
        return message.channel.send({embeds: [mainPage], components: [row]});
    }
}
