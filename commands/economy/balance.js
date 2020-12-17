const Discord = require("discord.js")
const db = require('quick.db')


	exports.run = (client,message, args) => {
                let user = message.mentions.users.first() || message.author
                let money = db.fetch(`money_${user.id}`)

                if (money === null) money = 0
                let bank = db.fetch(`deposit_${user.id}`)
 
                if (bank === null) bank = 0
      
                
                let embed = new Discord.MessageEmbed()
                .setTitle(`${user.tag} Balance`)
                .setColor(`BLUE`)
                .setDescription(`💵 **Cash**\n💴 **${money.toLocaleString()}**\n🏦 **Bank**\n💴 **${bank.toLocaleString()}**`)
                .setTimestamp()
            message.channel.send(embed)
                //message.channel.send(`${user} you have ${money} coins`)
	}
exports.help = {
  name: "balance",
  description: "Show The Balance from anyone",
  category: "economy",
  usage: "r.balance <@user>",
  example: "r.balance @iPika#0001"
}
exports.conf = {
  aliases: ["bal"],
  cooldown: 5
}      