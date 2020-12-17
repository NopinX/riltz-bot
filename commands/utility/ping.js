exports.run = async (client, message, args) => {

const m = await message.channel.send("Pinging...").then(m => m.delete({timeout: 1}));
      message.channel.send(`**🏓 Pong!**\n**Latency:** \`${m.createdTimestamp -  message.createdTimestamp}ms\`\n**Api:** \`${Math.floor(client.ws.ping)}ms\``)
   } 
 
exports.help = {
  name: "Ping",
  description: "Show API bot ping",
  category: "info",
  usage: "r.ping"
}
exports.conf = {
  aliases: ["p"],
  cooldown: 5
}