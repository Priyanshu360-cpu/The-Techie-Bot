
module.exports = async(client, interaction) =>{
    
    const commandName = interaction.commandName;
    const command = client.icommands.get(commandName);
    if (!command) return;
    try {
        command.execute(client, interaction);
    } catch (error) {
        console.log(error); 
        const embed = new MessageEmbed();
        embed.setDescription("There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.");
        return interaction.reply({embeds: [embed]});
    }

}