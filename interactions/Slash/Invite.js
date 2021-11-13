module.exports = {
    name: "invite",
    description:"Helps to Invite the Bot",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
        interaction.followUp(`**Heres my** **[Invite Link](https://techie.teaminvite.repl.co)** **and** **[Support Server](https://discord.gg/ZgbwG2sY4D)** **Link**`)
    }
}