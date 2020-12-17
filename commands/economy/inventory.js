const db = require("quick.db")
const Discord = require("discord.js")


    exports.run = async(client, message, args) => {
            let user = message.mentions.users.first() || message.author

      let items = db.get(`${user.id}`)
      if (items === null) items = "nothing yet"
    let embed = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setTitle(`${user.username}'s Inventory`)
    .addField("Inventory", items)
    message.channel.send(embed)
    }
    exports.help = {
      name: "inventory",
      description: "Show your inventory",
      category: "economy",
      usage: "r.inventory <@user>\nr.inventory",
      example: "r.inventory @iPika#0001"
    }
exports.conf = {
  aliases: ["inv"],
  cooldown: 5
}