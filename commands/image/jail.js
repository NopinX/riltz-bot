const canvacord = require('canvacord');
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
     let image = await canvacord.Canvas.jail(user.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new discord.MessageAttachment(image, "jail.png");
        return message.channel.send(attachment);
}
exports.help = {
    name: "jail",
    description: "Jail avatar",
    category: "image",
    usage: "r.jail <@user>",
    example: "r.jail @Pika#1337",
  }
exports.conf = {
  aliases: [],
  cooldown: 5
} 