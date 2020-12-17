exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You don't have the permission to do that!");

    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send(`**${message.author.username}** Has been unlock this Channel.`);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })
  };
  
exports.help = {
  name: 'unlockdown',
  description: 'This will unlock a channel down.',
  usage: 'r.unlockdown',
  example: 'r.unlockdown'
};

exports.conf= {
  aliases:  ['unlock'],
  cooldown: 5
};