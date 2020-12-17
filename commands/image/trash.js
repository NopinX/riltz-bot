const canvacord = require('canvacord');
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
     let image = await canvacord.Canvas.trash(user.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new discord.MessageAttachment(image, "trash.png");
        return message.channel.send(attachment);
}
exports.help = {
      name: "trash",
      description: "Trash user",
      category: "image",
      usage: "r.trash <@user>",
      example: "r.trash @Pika#1337",
    }
exports.conf = {
  aliases: [],
  cooldown: 5
} 