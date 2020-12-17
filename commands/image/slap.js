const { MessageEmbed } = require('discord.js');
 const fetch = require('node-fetch')

exports.run = async (client, message, args) =>{
  let user = message.mentions.users.first() 
  if(!args[0]) 
    return message.reply('Please provide user')
  if (!user)
    return message.reply('Please mention user')
      fetch(`https://nekos.life/api/v2/img/slap`)
    .then(res => res.json()).then(url => {
        const embed = new MessageEmbed()
        .setTitle(`${message.author.username} Slaps ${user.username}`) 
        .setImage(url.url)
        .setColor("BLUE");
        message.channel.send(embed)
      })
      }
exports.help = {
    name: "slap",
    description: "slap someone in your guild",
    usage: "r.slap <@user>",
    example: "r.slap @Hyers#9999",
};

exports.conf = {
    aliases: [""],
    cooldown: 5
};