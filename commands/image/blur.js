const canvacord = require('canvacord');
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
     let image = await canvacord.Canvas.blur(user.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new discord.MessageAttachment(image, "blur.png");
        return message.channel.send(attachment);
}
exports.help = {
      name: "blur",
      description: "Blur avatar",
      category: "image",
      usage: "r.blur <@user>",
      example: "r.blur @Pika#1337",
    }
exports.conf = {
  aliases: [],
  cooldown: 5
}