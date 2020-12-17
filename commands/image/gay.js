const canvacord = require('canvacord');
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
     let image = await canvacord.Canvas.rainbow(user.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new discord.MessageAttachment(image, "gay.png");
        return message.channel.send(attachment);
}
exports.help = {
      name: "gay",
      description: "Gay avatar",
      category: "image",
      usage: "r.gay <@user>",
      example: "r.gay @Pika#1337",
    }
exports.conf = {
  aliases: [],
  cooldown: 5
} 