const got = require("got")

exports.run = async (client, message, args) => {

got("https://nekos.life/api/v2/img/neko").then(r => {

  
let nekos = JSON.parse(r.body).url

message.channel.send(nekos)
  })
}
exports.help = {
  name: "neko",
  description: "Neko images",
  category: "image",
  usage: "r.neko",
  example: "",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};   