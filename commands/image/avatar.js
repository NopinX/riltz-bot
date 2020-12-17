const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const a = await message.channel.send(`<a:loadingtod:747535266792734783>Generating avatar...`).then(a => a.delete({ timeout: 3000 }));

  var user;
  user = message.mentions.users.first();
  if (!user) {
    if (!args[0]) {
      user = message.author;
      getuseravatar(user);
    } else {
      var id = args[0];
      client
        .fetchUser(id)
        .then(user => {
          getuseravatar(user);
        })
        .catch(error => console.log(error));
    }
  } else {
    getuseravatar(user);
  }
  function getuseravatar(user) {
    var embed = new Discord.MessageEmbed()
      .setColor(`BLUE`)
      .addField(
        "Link as",
        `[png](${user.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 2048
        })}) | [jpg](${user.displayAvatarURL({
          format: "jpg",
          dynamic: true,
          size: 2048
        })}) | [webp](${user.displayAvatarURL({
          format: "webp",
          dynamic: true,
          size: 2048
        })})`
      )
      .setImage(
        user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })
      )
      .setTitle(`Avatar of ` + user.tag)
      .setTimestamp()
      .setFooter(`Request By: ${message.author.username}`);
    message.channel.send(embed);
  }
};
exports.help = {
  name: "avatar",
  description: "show anyone avatar",
  category: "image",
  usage: "r.avatar <@user>",
  example: "r.avatar @iPika#0001",
};
exports.conf = {
  aliases: ["av"],
  cooldown: 5
}; 