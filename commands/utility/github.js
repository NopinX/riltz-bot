const Discord = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");

 exports.run = async(client, message, args) => {
    const user = args.slice(0).join(" ")

    if(!user) return message.channel.send("No user provided !")
    
    const gh = await fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(json => {
      
      if(json.twitter_username === null) json.twitter_username = "\`No Twitter\`"
      if(json.locatioj === null) json.locaction = "\`In the dark\`"
      
      const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle(json.login)
      .setThumbnail(json.avatar_url)
      .addField("User:", `\`${json.login}\``) 
      .addField("ID:", `\`${json.id}\``)
      .addField("Bio:", `\`${json.bio}\``)
      .addField("Follower:", `\`${json.followers}\``)
      .addField("Following:", `\`${json.following}\``)
      .addField("Public Repos:", `\`${json.public_repos}\``)
      .addField("Twitter:", `\`${json.twitter_username}\``)
      .addField("Location:", `\`${json.location}\``) 
      .addField("Creation Date:", `\`${moment(json.created_at).utcOffset("+0000").format("LLLL")}\``)
      .setFooter(`Request by: ${message.author.tag}`) 
      .setTimestamp() 
      message.channel.send(embed)
    })
    .catch(err => {
      message.channel.send("User not found !")
    })
  }

exports.help = {
  name: "github",
  description: "Github profile",
  category: "utility",
  usage: "r.github <@user>",
  example: "r.github ClayneID",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};