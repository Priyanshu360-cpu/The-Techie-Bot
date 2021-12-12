
module.exports = {
    name: "prefix",
    category: "Config",
    description: "Set Custom Prefix",
    args: false,
    usage: "",
    aliases: ["prefix"],
    permission: [],
    owner: false,
    async execute(message, args, client) {
      const { MessageEmbed } = require("discord.js");

const { default_prefix } = require(`${process.cwd()}/config.json`)
      if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('You need `Manage Guild` permission to use this command.');
 if (!args[0]) {
    let prefix = await client.db.get(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = client.prefix;
    const embed = new MessageEmbed()
        .setDescription(`Prefix For the Guild is ${prefix}`)
        .setColor(client.embedColor)
      return message.channel.send({ embeds: [embed] });
    }

    if (args[1]) {
       const embed = new MessageEmbed()
        .setDescription("Prefix Must be Of Single Arguement")
        .setColor(client.embedColor)
      return message.channel.send({ embeds: [embed] });
    }

    if (args.join("") === default_prefix) {
      client.db.delete(`prefix_${message.guild.id}`);
      const embed = new MessageEmbed()
        .setDescription("Reseted Prefix for the Guild")
        .setColor(client.embedColor)
      return await message.channel.send({ embeds: [embed] });
    }

    client.db.set(`prefix_${message.guild.id}`, args[0]);
    const embed = new MessageEmbed()
       .setDescription(`Successfully Set Prefix to ${args[0]}`)
       .setColor(client.embedColor)
    await message.channel.send({ embeds: [embed] });
  },
};