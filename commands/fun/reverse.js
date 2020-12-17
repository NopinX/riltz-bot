const Discord = require("discord.js");


exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Insert Text")
  
    let text = args.slice(0).join(" ");
    var msg_array = text.split(" ");

    var msg_string = text.split("");
  
    var reverse_string = "";
    var word;
    var split_word;
    for (var i = msg_string.length - 1; i >= 0; i -= 1) {
      reverse_string += msg_string[i];
    }
    message.channel.send(`**${message.author.username}**: "${reverse_string}"`);
    message.delete();
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
exports.help = {
  name: "reverse",
  description: "reversed text",
  category: "utility",
  usage: "r.reverse <txt>",
  example: "r.reverse hi",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};