const { prefix } = require("../../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = async (client, message) => {

    client.manager.init(client.user.id);
    client.logger.log(`${client.user.username} Techie online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");
   
    //Game
    let statuses = ['Techie-v13 Text Commands', `Prefix : ${prefix} - interactions /`];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: "PLAYING"});
  	}, 10000)
      client.guilds.cache.find(x=> x.id === "701041158876299373").channels.cache.find(x=>x.id ==="829360545307426857").messages.fetch("829360959146950656").then(msg=> {editmsg() 
        function editmsg(){
            let a = Math.floor(client.uptime/(60100060*24))
            let h = new Date(client.uptime)
            let mcount = 0; 
            client.guilds.cache.forEach((guild) => {
                mcount += guild.memberCount 
            })
            let c = a?a+"d "+h.getHours()+"h "+h.getMinutes()+"m "+h.getSeconds()+"s ":h.getHours()?h.getHours()+"h "+h.getMinutes()+"m "+h.getSeconds()+"s ":h.getMinutes()?h.getMinutes()+"m "+h.getSeconds()+"s":h.getSeconds()+"s";
            const embed = new MessageEmbed()
            embed.setTitle("Status")
            embed.setDescription(`✅ \`Owner\`\n${client.users.cache.find(x=>x.id === client.owner).username}#${client.users.cache.find(x=>x.id === client.owner).discriminator}\n\n<:version:829399310465499216> \`Version\`\n${client.tversion}\n\n<:infoUpdate:829364952195924039> \`Update Status\`\n${client.updates}\n\n<:Uptime:829365384150908978> \`Uptime\`\n${c}\n\n<:online:829363789333659710> \`Bot Users\`\n${mcount}\n\n<:C2:829365145632768060> \`Server Count\`\n${client.guilds.cache.size}\n\n<:ok:831491214364770314> \`Support Server Members\`\n${client.guilds.cache.find(x=>x.id === "701041158876299373").memberCount}\n\n<a:Ram:844562386240798774> \`Heap Usage\`\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps\n\n<:ping:829389263808102422> \`Ping\`\n${Math.round(client.ws.ping)}ms\n\n<:download:873880662451556363> \`Websocket Ping\`\n${Math.floor(Math.random() * 30)}ms`)
            embed.setFooter("Made with <3 by Priyanshu")
            embed.setColor(Math.floor(Math.random() * 10000))
            embed.setThumbnail(client.users.cache.find(x=>x.id === client.owner).displayAvatarURL())
            msg.edit({embeds: [embed]})
        setTimeout (() => editmsg(), 5000)}})
}
