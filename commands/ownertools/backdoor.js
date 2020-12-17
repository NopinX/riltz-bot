const { MessageEmbed } = require('discord.js')  
    
exports.run = async (client, message, args) => {

 if (message.author.id != 542037977467977728) return message.reply("Only Owner(s) Bot")
  
let embed = new MessageEmbed()
  if(!args[0] || isNaN(args[0]) || args[0].length > 18) return message.channel.send(embed.setColor('RED').setDescription(`Please provide a guild id.`));
let guild = client.guilds.cache.get(args[0]);
  if(!guild) return message.channel.send(embed.setColor('RED').setDescription(`The bot isn't in that guild.`));
let invitePossiblites = guild.channels.cache.filter(cha => cha.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'));
  if(!invitePossiblites) return message.channel.send(embed.setColor('RED').setDescription(`Couldn't fetch a channel that allowed me to make an invite.`));
    
      try {
    invitePossiblites.random().createInvite()
      .then(invite => {
      message.channel.send(`<a:verify1:765126474532519976> Success, Found an invite! ${`https://discord.gg/${invite.code} **Code: ${invite.code}**`}`);
      }) 
      } catch(err) {
        message.channel.send(embed.setColor('RED').setDescription(`Couldn't make invite.`))
      }
    }
  
exports.help = {
  name: "backdoor",
  description: "Instant invite link guild",
  category: "ownertools",
  usage: "r.backdoor <guildID>",
  example: "r.backdoor 29372947293",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
}