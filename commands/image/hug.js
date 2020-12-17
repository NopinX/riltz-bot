const { MessageEmbed } = require('discord.js');
 const fetch = require('node-fetch')

exports.run = async (client, message, args) =>{
  let user = message.mentions.users.first() 
  if(!args[0]) 
    return message.reply('Please provide user')
  if (!user)
    return message.reply('Please mention user')
      fetch(`https://nekos.life/api/v2/img/hug`)
    .then(res => res.json()).then(url => {
        const embed = new MessageEmbed()
        .setTitle(`${message.author.username} Hugs ${user.username}`) 
        .setImage(url.url)
        .setColor("BLUE");
        message.channel.send(embed)
      })
      }
exports.help = {
      name: "hug",
      description: "hug use",
      usage: "r.hug <@user>",
      example: "r.hug @Hyers#9999",
};

exports.conf = {
      aliases: [""],
      cooldown: 5
};