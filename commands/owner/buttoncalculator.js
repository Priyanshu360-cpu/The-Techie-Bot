const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const {
    button_pagination
} = require('../../utils/button');
const math = require("mathjs");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "button",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {

    let button = new Array([], [], [], [], []);
    let row = [];
    let text = [
      "Clear",
      "(",
      ")",
      "/",
      "⌫",
      "7",
      "8",
      "9",
      "*",
      "!",
      "4",
      "5",
      "6",
      "-",
      "^",
      "1",
      "2",
      "3",
      "+",
      "π",
      ".",
      "0",
      "00",
      "=",
      "Delete"
    ];
    let current = 0;

    
      foot = "Techie Calculator";
    

    for (let i = 0; i < text.length; i++) {
      if (button[current].length === 5) current++;
      button[current].push(createButton(text[i]));
      if (i === text.length - 1) {
        for (let btn of button) row.push(addRow(btn));
      }
    }

    const emb = new Discord.MessageEmbed()
      .setColor("0x075fff")
      .setFooter(foot)
      .setDescription("```0```");
    await message.channel.send({
        embeds: [emb],
        components: row
      })
      .then((msg) => {
        let isWrong = false;
        let time = 600000;
        let value = "";
        let emb1 = new Discord.MessageEmbed()
          .setFooter(foot)
          .setColor("0x075fff");

        function createCollector(val, result = false) {
          const filter = (button) =>
            button.user.id === message.author.id &&
            button.customId === "cal" + val;
          let collect = msg.createMessageComponentCollector({
            filter,
            componentType: "BUTTON",
            time: time
          });
          collect.on("collect", async (x) => {
            if (x.user.id !== message.author.id) return;

            x.deferUpdate();

            if (result === "new") value = "0";
            else if (isWrong) {
              value = val;
              isWrong = false;
            } else if (value === "0") value = val;
            else if (result) {
              isWrong = true;
              value = mathEval(value);
            } else value += val;
            if (value.includes("⌫")) {
              value = value.slice(0, -2);
              if (value === "") value = " ";
              emb1.setDescription("```" + value + "```");
              await msg.edit({
                embeds: [emb1],
                components: row
              });
            } else if (value.includes("Delete")) {
              msg.delete();
            } else if (value.includes("Clear")) return (value = "0");
            emb1.setDescription("```" + value + "```");
 msg.edit({
              embeds: [emb1],
              components: row
            });
          });
        }

        for (let txt of text) {
          let result;

          if (txt === "Clear") result = "new";
          else if (txt === "=") result = true;
          else result = false;
          createCollector(txt, result);
        }
        setTimeout(async () => {
          emb1.setDescription(
            "Message expired, create a new calculator"
          );
          emb1.setColor(0xc90000);
          await msg.edit({ embeds: [emb1], components: [] });
        }, time);
      });

    function addRow(btns) {
      let row1 = new MessageActionRow();
      for (let btn of btns) {
        row1.addComponents(btn);
      }
      return row1;
    }

    function createButton(label, style = "SECONDARY") {
      if (label === "Clear") style = "DANGER";
      else if (label === "Delete") style = "DANGER";
      else if (label === "⌫") style = "DANGER";
      else if (label === "π") style = "SECONDARY";
      else if (label === "!") style = "SECONDARY";
      else if (label === "^") style = "SECONDARY";
      else if (label === ".") style = "PRIMARY";
      else if (label === "=") style = "SUCCESS";
      else if (isNaN(label)) style = "PRIMARY";
      const btn = new MessageButton()
        .setLabel(label)
        .setStyle(style)
        .setCustomId("cal" + label);
      return btn;
    }

    function mathEval(input) {
      try {
        let res = `${input} = ${math.evaluate(input.replace("π", math.pi))}`;
        return res;
      } catch {
        return "Wrong Input";
      }
    }
  }
} 

