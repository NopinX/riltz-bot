const db = require('quick.db')                                    
const { MessageEmbed } = require('discord.js')
const ms = require('parse-ms')

exports.run = async(client, message, args) => {
 let user = message.author
 
 if (db.has(`${message.author.id}`, ["gun", "crowbar"]) === true) {
 let timeout = 3600000
 let robed = db.fetch(`robed_${message.author.id}`)
     
 if (robed != null && timeout - (Date.now() - robed) > 0) {      
   let time = ms(timeout - (Date.now() - robed));
      message.channel.send(`You have already robbed a bank please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)

} else {
  let earned = Math.floor(Math.random() * 1500) + 1
  
  let jobs = ["Riltz Bank", "Discord Bank", "NYC Bank", "BCA Bank"]
  let job = jobs[Math.floor(Math.random()* jobs.length)]
 
  let embed = new MessageEmbed()
  .setColor(`BLUE`)
  .setAuthor(`${message.author.tag}`, user.avatarURL())
  .setDescription(`Robbed in: ${job}\nGet: ${earned}$`)
  
  message.channel.send(embed)
  
  db.add(`money_${message.author.id}`, earned)
  db.set(`robed_${message.author.id}`, Date.now())
}
} else if (db.has(`${message.author.id}`, ["gun", "crowbar"]) === false) {
message.channel.send("You need to buy a gun and crowbar first (hint: r.shop leads you to shop where you can buy stuff)")

}
 }
exports.help = {
         name: "rob",
         description: "rob a bank and earn money",
         usage: "r.rob",
         example: "r.rob",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};
