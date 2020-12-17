const Discord = require("discord.js")
const db = require('quick.db')
const ms = require('parse-ms')


    exports.run = async(client, message, args) => {
        db.get(`${message.author.id}`)
      if (db.has(`${message.author.id}`, "pick") === true) {
            let timeoutmine = 600000
            let mined =  db.fetch(`mined_${message.author.id}`)
    
            console.log(db.has(`${message.author.id}`, "pick"))
            if (mined != null && timeoutmine - (Date.now() - mined) > 0) {
                let time = ms(timeoutmine - (Date.now() - mined));
                message.channel.send(`You have already mined please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
    
    
            } else {
                let amountearned = Math.floor(Math.random() * 1500) + 1
    
                let jobs = ["Diamond", "Gold", "Silver", "Iron", "Emerald", "Copper"]
                let job = jobs[Math.floor(Math.random()* jobs.length)]
    
                let embed = new Discord.MessageEmbed()
                .setColor(`BLUE`)
                .setAuthor(`${message.author.tag}, it paid off`, message.author.displayAvatarURL())
                .setDescription(`${message.author}, you mined ${job} ore and earnt 💴 ${amountearned} credits`)
    
                message.channel.send(embed)
    
                db.add(`money_${message.author.id}`, amountearned)
                db.set(`mined_${message.author.id}`, Date.now())
            }
    
        } else if(db.has(`${message.author.id}`, "pick") === false) {
            message.channel.send("You need to buy a pickaxe first (hint: r.shop leads you to shop where you can buy stuff)")
        }

    }
    exports.help = {
      name: "mine",
      description: "mine for diamond and earn money",
      usage: "r.mine"
    }
exports.conf = {
  aliases: [],
  cooldown: 0
}