const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');

    exports.run = async (client, message, args) => {
        const target = message.mentions.users.first();
        const canvas = Canvas.createCanvas(522, 657);
        const ctx = canvas.getContext('2d');
        if (!target) {
            const backround = await Canvas.loadImage('https://media.discordapp.net/attachments/763358574877081650/782500170490707978/61ynrcRy0-L._AC_SX522_.jpg')
            ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
            const avatar = await Canvas.loadImage(client.user.displayAvatarURL({ dynamic: false, format: 'png' }))
            ctx.drawImage(avatar, 250, 60, 128, 128)
            const avatar2 = await Canvas.loadImage(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
            ctx.drawImage(avatar2, 350, 280, 128, 128)
            const attachment = new MessageAttachment(canvas.toBuffer(), 'spank.png');
            message.channel.send(attachment);

        } else {
            const backround = await Canvas.loadImage('https://media.discordapp.net/attachments/763358574877081650/782500170490707978/61ynrcRy0-L._AC_SX522_.jpg')
            ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
            const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
            ctx.drawImage(avatar, 250, 60, 128, 128)
            const avatar2 = await Canvas.loadImage(target.displayAvatarURL({ dynamic: false, format: 'png' }))
            ctx.drawImage(avatar2, 350, 280, 128, 128)
            const attachment = new MessageAttachment(canvas.toBuffer(), 'spank.png');
            message.channel.send(attachment);
        }
    }

exports.help = {
  name: "spank",
  description: "Spanked people's",
  category: "image",
  usage: "r.spank <@user>",
  example: "r.spank Pika#1337",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};
