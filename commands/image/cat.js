const fetch = require("superagent");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

fetch.get("https://some-random-api.ml/img/cat").then(x => {
    const catEmbed = new MessageEmbed()
    .setTitle("Cat Images")
    .setColor("BLUE")
    .setImage(x.body.link);
    message.channel.send(catEmbed);
 });
}
exports.help = {
  name: "cat",
  description: "Cat Images",
  category: "image",
  usage: "r.cat",
  example: "",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};  