const Discord = require("discord.js")
const { parse } = require("twemoji-parser")
const moment = require("moment")

exports.run = async (client, message, args) => {

const emoji = args[0];
if (!emoji) return message.channel.send("Please, specify emoji.");

let customEmoji = Discord.Util.parseEmoji(emoji) || message.guild.emojis.cache.find(e => e.name === emoji);
  
return message.channel.send(`**Name**: \`${customEmoji.name}\`\n**Preview**: ${emoji} \n**ID**: \`${customEmoji.id}\`\n**Identifier**: \`${emoji}\`\nhttps://cdn.discordapp.com/emojis/${customEmoji.id}.${customEmoji.animated ? "gif" : "png"}`)

const embed = new Discord.MessageEmbed()

 if (customEmoji.id) { 
   
   return message.channel.send(embed);
    }
    else {
        let parsed = parse(emoji, { assetType: "png" });
        if (!parsed[0]) return message.channel.send("Unknown Emoji");

        embed.setImage(parsed[0].url);
        return message.channel.send(embed);
    }
}
exports.help = {
  name: "emoji",
  description: "Emoji information",
  category: "info",
  usage: "r.emoji <emoji>",
  example: "",
};
exports.conf = {
  aliases: [""], 
  cooldown: 5  
 };                  