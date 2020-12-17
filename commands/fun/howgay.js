const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

  exports.run = async (client, message, args) => {
    //Start

    let member =
      message.mentions.users.first() ||
      message.guild.member(args[0]) ||
      message.author;

    let result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`gay r8 machine`)
      .setDescription(`${member.username} is ${result}% Gay :rainbow_flag: `)

    message.channel.send(embed);

    //End
  }
  exports.help = {
  name: "howgay",
  description: "howgay machine",
  category: "fun",
  usage: "r.howgay <@user>",
  example: "r.howgay @iPika#0001",
};
exports.conf = {
  aliases: ["gayers", "gaymachine"],
  cooldown: 5
};