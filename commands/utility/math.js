const math = require('mathjs');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Output', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
exports.help = {
  name: "math",
  description: "mathematics code",
  category: "utility",
  usage: "r.math 3 * 3",
  example: "",
};
exports.conf = {
  aliases: [],
  cooldown: 5
};   