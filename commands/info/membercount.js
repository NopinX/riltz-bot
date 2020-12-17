const { MessageEmbed } = require("discord.js");

  exports.run = async (client, message, args) => {
    const Members = message.guild.memberCount;

    const embed = new MessageEmbed()
      .setColor(`BLUE`)
      .setTitle(`Members Information`)
      .addField(`All Members`, Members)
      .setTimestamp();

    message.channel.send(embed);
  }
exports.help = {
  name: "membercount",
  description: "membercount information",
  category: "info",
  usage: "r.membercount",
  example: "",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
}; 