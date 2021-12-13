

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
         
    const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
    
           message.reply("https://techie.teaminvite.repl.co/");
    }
}