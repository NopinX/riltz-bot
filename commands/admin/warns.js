const db = require("quick.db")

  exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} have **${warnings}** warning(s)`)
  
  
  }
exports.help = {
  name: "warns",
  description: "show anyone warnings",
  category: "moderation",
  usage: "r.warns <@user>",
  example: "r.warns @iPika#0001",
};
exports.conf = {
  aliases: [],
  cooldown: 5
};