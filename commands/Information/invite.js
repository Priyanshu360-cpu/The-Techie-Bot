const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite Techie",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/Priyanshu360-cpu/"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/qDrfnX7")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('Techie', 'https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
            .setThumbnail('https://cdn.discordapp.com/avatars/741280410180386947/ddf8e5e39f7baee27240e8836fddd1f5.webp?size=2048')
             .setColor('#303236')
            .addField('invite Techie', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.channel.send({embeds: [mainPage], components: [row]})
    }
}
