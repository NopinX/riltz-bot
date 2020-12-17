const fetch = require("superagent");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

fetch.get("https://some-random-api.ml/img/dog").then(x => {   
  const dogEmbed = new MessageEmbed()
    .setTitle(`Dog Images`)
    .setColor(`BLUE`)
    .setImage(x.body.link);
    message.channel.send(dogEmbed);
 });
}
exports.help = {
  name: "dog",
  description: "Dog image",
  category: "image",
  usage: "r.dog",
  example: "",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
}; 