const discord = require('discord.js')
const play = require('google-play-scraper')

exports.run = (client, message, args) => {
  
  let text = args.join(' ')
  if(!text)return message.channel.send("Please Provide application name")
  
  play.search({term:text,num:1})
  .then(data => {
    
    let app = data[0].appId
    play.app({appId:app})
    .then(lata => {
      
      let price = lata.price === 0 ? "Free" : `$${lata.price}`
      
      const embed = new discord.MessageEmbed()
      .setAuthor(lata.title,lata.icon)
      .setColor('BLUE')
      .setThumbnail(lata.icon)
      .setDescription(lata.summary)
      .addField("Developer",`\`${lata.developer}\``, true)
      .addField('Price',`\`${price}\``, true)
      .addField("Download",`\`${lata.installs}\``, true)
      .addField('Rating', `\`${lata.scoreText}\``, true)
      .addField("Creation Date",`\`${lata.released}\``, true)
      .addField("App Link",`[Link](${lata.url})`, true)
      .setFooter(`Request By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      message.channel.send(embed)
    }).catch(err => {
      return;
    })
    
    
  }).catch(err => {
    message.channel.send("Application Not Found")
  })
  
}
exports.help = {
  name: "playstore",
  description: "Playstore searching application",
  category: "utility",
  usage: "r.playstore <appname>",
  example: "r.playstore Among Us",
};
exports.conf = {
  aliases: ["ps"],
  cooldown: 5
}; 