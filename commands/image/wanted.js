const canvacord = require('canvacord');
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
     let image = await canvacord.Canvas.wanted(user.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new discord.MessageAttachment(image, "wanted.png");
        return message.channel.send(attachment);
}
exports.help = {
      name: "wanted",
      description: "Wanted avatar",
      category: "image",
      usage: "r.wanted <@user>",
      example: "r.wanted @Pika#1337",
    }
exports.conf = {
  aliases: [],
  cooldown: 5
}