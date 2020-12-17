const Discord = require("discord.js");
const fetch = require("node-fetch");

  exports.run = async (client, message, args) => {
    
    if(!args[0]) return message.channel.send(`Please provide **IP** - Example: r.minecraft/r.mc hypixel.net`)
    
    fetch("https://api.mcsrvstat.us/2/" + args[0])
      .then((res) => res.json())
      .then((body) => {
        if (body.online === true) {
          
          let embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setThumbnail("https://mc-api.net/v3/server/favicon/" + args[0])
            .setAuthor("Mc Server Statistic", message.guild.iconURL({ dynamic: true }))
            .setImage(
              "http://status.mclive.eu/" +
                args[0] +
                "/" +
                args[0] +
                "/25565/banner.png"
            )
            .addFields(
              { name: "Status", value: `<a:online:763852176887644200> | Online` },
              { name: "Ip", value: body.ip },
              { name: "Hostname", value: body.hostname },
              {
                name: "Players",
                value: `${body.players.online}/${body.players.max}`,
              },
              { name: "Software", value: body.software ? body.software : "None" },
              { name: "Version", value: body.version },
              {
                name: "Motd",
                value: `${body.motd.clean[0]}\n${body.motd.clean[1]}`,
              }
            )
            .setFooter(`Request by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp();
          message.channel.send(embed);
            }
          });
  },
exports.help = {
  name: "minecraft",
  description: "Minecraft Server Statistic",
  category: "info",
  usage: "r.minecraft <ip>",
  example: "r.minecraft hypixel.net",
};
exports.conf = {
  aliases: ["mc"],
  cooldown: 5
};