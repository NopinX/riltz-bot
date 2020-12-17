const Discord = require("discord.js");

  exports.run = async (client, message, args) => {

    let result = Math.floor(Math.random() * 100);

    message.channel.send(`<:SaitamaOk:786097606811320340> **${message.author.username}**, you rolled **${result}** !`);
  }
  exports.help = {
  name: "roll",
  description: "Rolled number",
  category: "fun",
  usage: "r.roll",
  example: "",
};
exports.conf = {
  aliases: [],
  cooldown: 5
};