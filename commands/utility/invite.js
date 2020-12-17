
exports.run = async (client, message, args) => {
  
message.channel.send("(https://discord.com/api/oauth2/authorize?client_id=750559137968029716&permissions=1476667479&scope=bot)\n**For invite the bot to ur server!**\n (https://discord.gg/2WMYXgf)\n**Link support server if u need something about bot.**")
}

exports.help = {
  name: "invite",
  description: "invite the bot to ur server!",
  usage: "invite",
  example: "r.invite"
}

exports.conf = {
  aliases: ["invite"],
  cooldown: 2
}