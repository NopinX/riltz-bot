const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
    const text = args.join(" ");

    if (!text) return message.channel.send("Please provide text");


    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`
    ).then((res) => res.json());

  
    message.channel.send(data.message)
  },

exports.help = {
  name: "changemymind",
  description: "Changemymind images",
  category: "image",
  usage: "r.changemymind <text>",
  example: "r.changemymind test",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};