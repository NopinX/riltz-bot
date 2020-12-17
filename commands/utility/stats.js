const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const db = require('quick.db');
const ms = require("ms");
const os = require("os");
const m = require("moment-duration-format");
const dateformat = require("dateformat");
const parse_ms = require("parse-ms");

exports.run = async (client, message, args) => {
	function parseDur(ms) {
  let seconds = ms / 1000,
      days = parseInt(seconds / 86400);
  seconds = seconds % 86400
  
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600
  
  let minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60)
  
  if (days) {
    return `${days}d ${hours}h ${minutes}m`
  } else if (hours) {
    return `${hours}h ${minutes}m ${seconds}s`
  } else if (minutes) {
    return `${minutes}m ${seconds}s`
  }
  
  return `${seconds}s`
} // Uptime bot.
  let guildsEval = await client.guilds.cache.size
    let channelsEval = await client.channels.cache.size
    let usersEval = await client.users.cache.size
    const owner = client.users.cache.get("542037977467977728")
	const embed = new MessageEmbed()
	.setColor("BLUE")
	.setAuthor(`${client.user.username} Statistics`)
  .setDescription(`\`\`Use r.help to see all commands list!\`\``)
  .setThumbnail(client.user.displayAvatarURL()) 
 	.addField('Owner', `\`\`\`\• ${owner.tag}\`\`\``)
 	.addField('Credits', `\`\`\`\• Special Thanks To Clayne\`\`\``)
  .addField('Server information', `\`\`\`• Operating System: Enterprise Linux 5\n• Kernel: 4.18.0-34-Enterprise\n• Processor: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz\n• Architecture: x86_x64\n• Node.js: ${process.version}\n• Version: v${version}\n• Discord.js: v${djsversion}\n• Websocket: ${client.ws.ping.toFixed(2)}ms\`\`\``) 
	.addField('General information', `\`\`\`• Guilds: ${guildsEval.toLocaleString()}\n• Channels: ${channelsEval.toLocaleString()}\n• Users: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n• Uptime: ${parseDur(client.uptime)}\`\`\``)
	.addField('Usage information', `\`\`\`• Memory usage:\n${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\n\n• CPU usage:\nNode: ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%\nSystem: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\`\`\``)
  .setFooter(`Request by: ${message.author.tag}, ${client.user.username} v${version}`, client.user.displayAvatarURL())
	.setTimestamp()
	message.channel.send(embed);

}

exports.help = {
  name: "stats",
  description: "show statistic bot",
  category: "info",
  usage: "r.stats",
  example: "",
};
exports.conf = {
  aliases: ["info"],
  cooldown: 5
};