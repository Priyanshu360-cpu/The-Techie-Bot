
module.exports = {
    name: "chess",
    category: "Information",
    aliases: [ "ce" ],
    description: "Creates an embed for you",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
    const { readdirSync } = require("fs");
    const {
        button_pagination
    } = require('../../utils/button');
    
    const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
    let a = [0,0,0,0,0,0,0,0]
    let b = [0,1,0,1,0,1,0,1] 
    let white = ["♖","♘","♗","♕","♔","♗","♘","♖"]
    let black = ["♜","♞","♝","♛","♚","♝","♞","♜"]
    let g="";
    for(let c=0;c<a.length;c++){
        let h=0;
        if(c==0){
            while(h<8){
                g=g+white[h]+" "+"\t";
                h=h+1;
            }
        }else if(c==1){
            while(h<8){
                g=g+"♙"+" "+"\t";
                h=h+1;
            }
        }else if(c==6){
            while(h<8){
                g=g+"\`♟\`"+"\t";
                h=h+1;
            }
        }else if(c==7){
            while(h<8){
                g=g+black[h]+" "+"\t";
                h=h+1;
            }
        }else{
        while(h<8){
            if(b[h]==0) g=g+"\`◼️\`"+"\t";
            else g=g+"\`◻️\`"+"\t"; 
            h=h+1;
        }
    } 
    g=g+"\n";
}

    var Disabled1 = new MessageButton()
    Disabled1.setCustomId("disabled")
    Disabled1.setLabel(" ")
    Disabled1.setStyle("SECONDARY");
    Disabled1.setDisabled(true) 
    var Disabled2 = new MessageButton()
    Disabled2.setCustomId("disabled2")
    Disabled2.setLabel(" ")
    Disabled2.setStyle("SECONDARY");
    Disabled2.setDisabled(true)
    var Disabled3 = new MessageButton()
    Disabled3.setCustomId("disabled3")
    Disabled3.setLabel(" ")
    Disabled3.setStyle("SECONDARY");
    Disabled3.setDisabled(true)
    var up = new MessageButton()
   up.setCustomId("up")
    up.setEmoji("⬆️")
    up.setStyle("SUCCESS");
    var down = new MessageButton()
   down.setCustomId("down")
   down.setEmoji("⬇️")
   down.setStyle("SUCCESS"); 
   var left = new MessageButton()
   left.setCustomId("left")
   left.setEmoji("⬅️")
   left.setStyle("SUCCESS");
   var right = new MessageButton()
   right.setCustomId("right")
   right.setEmoji("➡️")
   right.setStyle("SUCCESS");
   var hot = new MessageButton()
   hot.setCustomId("hot")
   hot.setEmoji("♨️")
   hot.setStyle("PRIMARY");     
   var firstindex = new MessageActionRow().addComponents([Disabled1,up,Disabled2,Disabled3
   ]);
   var secondindex = new MessageActionRow().addComponents([left,down,right,hot
   ]);
   let e= new MessageEmbed();
   e.setTitle("Chess vs Computer");
   e.setDescription(g);
   e.setColor("#FFCBCB");
    message.channel.send({embeds:[e],components:[firstindex,secondindex]}); 

   }
}