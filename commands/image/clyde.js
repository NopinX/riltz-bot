const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

   exports.run = async (client, message, args) => {
const text = args.slice(0).join(" ")
if(!text) return message.channel.send("you need some text there")
fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
.then((res) => res.json())
.then((body) => {
    console.log(body)
    let embed = new MessageEmbed()
    .setImage(body.message)
    .setColor("BLUE")
    .setTimestamp()
    message.channel.send(embed)
})
     }
  
exports.help = {
  name: "clyde",
  description: "Clyde image text",
  category: "image",
  usage: "r.clyde <text>",
  example: "r.clyde test",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};