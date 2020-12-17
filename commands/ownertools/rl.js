const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let fas = [
    '542037977467977728'
  ]
  if(!fas.some(c => message.author.id.includes(c))){
    return;
  }
  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.tag,client.user.displayAvatarURL())
  .setColor('BLUE')
  .setDescription(`\`\`\`${client.guilds.cache.map(g => g.name).join(',\n')}\`\`\``)
  .setImage(`https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif`)
  .setFooter('Last Update')
  .setTimestamp()
  message.channel.send(embed)
}
exports.help = {
  name: "rl",
  description: "Simple Server List",
  category: "ownertools",
  usage:  "r.rl",
  example: "",
}
exports.conf = {
  aliases: [""],
  cooldown: 5
}