const Discord = require('discord.js')


  exports.run = async(client, message, args, data, db) => {
    if (message.author.id != 542037977467977728) return message.reply("Only Owner(s) Bot")
          let obj = [] 
                
        client.guilds.cache.map(async x => {
          //await x.fetchMembers() 
          obj.push({
            name: x.name,
            members: x.memberCount,
            id: x.id
          }) 
        }) 
      
        // await new Promise(resolve => setTimeout(resolve, 2500))
    
        let content = []
        
        let size = obj.length
        
        if (size > 10) size = 10
        
        obj = obj.sort((x, y) => y.members - x.members) 
        
        for (let i = 0;i < size;i++) {  
          content.push(`**${i + 1}# - ${obj[i].name}**:\n**Guild ID**: \`${obj[i].id}\`\n**Member Count**: \`${obj[i].members}\` Users`) 
        }
       
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} Server List:`, client.user.displayAvatarURL())
        .setColor(`BLUE`)
        .setDescription(content.join("\n\n")) 
        .setThumbnail(client.user.displayAvatarURL())
        .setImage(`https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif`) 
        .setFooter(`Top 10 Server On My Dashboard`)
        .setTimestamp() 
        message.channel.send(embed)  
  }
exports.help = {
  name: "serverlist",
  description: "show serverlist bot",
  category: "ownertools",
  usage: "r.serverlist",
  example: "",
};
exports.conf = {
  aliases: ["list"],
  cooldown: 5
};             