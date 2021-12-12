const delay = require("delay");
const ms = require('ms');

module.exports = async (client, player) => {
    var data = await client.db.get(`mchannel_${player.guild}`);
    var data2 = await client.db.get(`mmesage_${player.guild}`);
	var data3 = await client.db.get(`mqmessage_${player.guild}`);
    if(data){
		try{
			client.channels.fetch(data).then(y=>{y.messages.fetch(data2).then(
				x=>{
					
					let main = new MessageEmbed()
                    main.setTitle("Currently Playing!")
                    main.setDescription(`No track is being played!\n<a:right:830433641053290566>[Invite](https://techie.teaminvite.repl.co/) | [Vote us](https://top.gg/bot/741280410180386947) | [Website](https://www.google.com)`)
                    main.setImage("https://cdn.discordapp.com/attachments/820937650940149771/849178357328904222/images_-_2021-06-01T122031.236.jpeg")
                    main.setFooter(`My prefix in this server is ${client.prefix}`)
                    main.setColor("FFCBCB")
					x.edit({embeds: [main]});
				}
			)
			}
			)
			client.channels.fetch(data).then(y=>{y.messages.fetch(data3).then(
				x=>{
					let queue = new MessageEmbed()
                    queue.setTitle("Queue-0")
                    queue.setDescription("Queue Is empty")
                    queue.setColor("FFCBCB")
					x.edit({embeds: [queue]});
				})})
		}catch(e){}}
}