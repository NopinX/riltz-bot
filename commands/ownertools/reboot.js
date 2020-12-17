exports.run = async(client, message, args) => {
  if(message.author.id !== "542037977467977728")  return message.channel.send('Only Owner Bot')
try {
  await message.channel.send('**Rebooting**...')
  process.exit()
} catch(e) {
  message.channel.send(`ERROR: ${e.message}`)
}

}


exports.help = {
         name: "reboot",
         description: "reboot the bots",
         usage: "r.reboot",
         example: "r.reboot",
};

exports.conf = {
          aliases: ["rb"],
          cooldown: 5
}; 