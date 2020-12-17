exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`**${message.author.username}** just locked the channel down.`);
  };
  
exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down.',
  usage: 'r.lockdown',
  example: 'r.lockdown'
};

exports.conf= {
  aliases: ['lock'],
  cooldown: 5
};