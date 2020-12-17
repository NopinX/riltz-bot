const Discord = require('discord.js')
const client = new Discord.Client()


	exports.run = async(client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Shop`, client.user.displayAvatarURL())
    .setDescription(`Shop Economy ${client.user.username}`)
    .setColor(`BLUE`)
    .addField("<a:hmm:762579730024235018> Fishing Rod", "id: rod\ncost: 1,000 coins")
    .addField("<:sjusussjs:762579615793283132> Sword", "id: sword\ncost: 700 coins")
    .addField("<a:netheritepick:762580078923481088> Pickaxe", "id: pick\ncost: 1,200 coins")
    .addField("<:anajaypistol:762579886313046016> Gun", "id: gun\ncost: 5,000 coins")
    .addField("<:tea:721723802211450910> Tea", "id: tea\ncost: 5 coins")
    .addField("<:crowbar_turquoise:762579774949687297> Crowbar", "id: crowbar\ncost: 500")
    .setImage(`https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif`)
    .setFooter(`List Items at shop, type r.buy <item> for buying somethings at shop.`)
    .setTimestamp()
    message.channel.send(embed)
	}
  exports.help = {
    name: "shop",
    description: "View the shop",
    usage: "r.shop"
  }
exports.conf = {
  aliases: [],
  cooldown: 5
} 