const { MessageEmbed } = require("discord.js");

  exports.run =  async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle(`Changelogs v1.0.0`)
      .setDescription(`Changelogs about bot.`)
      .setColor("BLUE")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Edited Commands:", `-Changelogs for new UI\n-Spotify new with canvacord\n-Changing new ui playstore cmd`)
      .addField("Updated Commands:", `-Deleted welcome-leave cmd\n-Added new cmd spank at image category\n-New giveaway cmd: start, end, reroll`)
      .setImage(`https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif`)
      .setTimestamp()
      .setFooter(`Last Updated`)
      message.channel.send(embed);
  },
exports.help = {
  name: "changelog",
  description: "Changelog about update commands",
  category: "info",
  usage: "r.changelog",
  example: "",
};
exports.conf = {
  aliases: ["changelogs"],
  cooldown: 5
};    