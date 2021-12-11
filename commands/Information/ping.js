const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
  
    const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; 
    const latency = `\`\`\`xml\n< ${Math.floor(Math.random() * 30)}ms >\`\`\``;
    const apiLatency = `\`\`\`xml\n< ${Math.round(message.client.ws.ping)}ms >\`\`\``;
      const embed = new MessageEmbed()
      .setTitle(`Pong!`)
      .setDescription('')
      .addField('Web Ping', latency, true)
      .addField('API Ping', apiLatency, true)
      .setColor(client.embedColor)
      .setThumbnail(client.user.displayAvatarURL())   
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send({embeds: [embed]});
  }
};
