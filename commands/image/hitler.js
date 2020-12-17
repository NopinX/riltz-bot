const canvacord = require('canvacord');
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
     let image = await canvacord.Canvas.hitler(user.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new discord.MessageAttachment(image, "hitler.png");
        return message.channel.send(attachment);
}
exports.help = {
      name: "hitler",
      description: "Hitler user",
      category: "image",
      usage: "r.hitler <@user>",
      example: "r.hitler @Pika#1337",
    }
exports.conf = {
  aliases: [],
  cooldown: 5
} 