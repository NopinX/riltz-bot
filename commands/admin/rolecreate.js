exports.run = async (client, message, args, color) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username}, Sorry but you need \`MANAGE_ROLES\` Permission to use this command.**`).then(m => m.delete(7000)); 
 let named = args.slice(1).join(" ")
  if(!named) return message.channel.send(`<a:silangasw:746173166736506922> | Invalid Argument! e.g : **r.rolecreate <hexcode> <name>**`); 
   var hex = args[0];
    if(!hex) '#000000';
let rnew = await message.guild.roles.create({
 data: {
  name: named,
    color: hex
 }                                            
   }).then((role) => {
     message.channel.send(`<@&${role.id}>, has been created`);
});
}

exports.help = {
  name: "rolecreate",
  description: "create a role",
  usage: "r.rolecreate [name] <hexcode>",
  example: ""
}
exports.conf = {
  aliases: ["crole", "rolec"],
  cooldown: 5
}