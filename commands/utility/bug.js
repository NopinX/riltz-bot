exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Please specify the bug. Example:\n`r.bug bal cmd isn't working`");
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`r.bal isn't working`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug.");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) \nreported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get('759246002980126751').send(content)
}
exports.help = {
  name: "bug",
  description: "report a bug ",
  usage: "r.bug <bug>",
  example: "r.bug createrole command not work"
}
exports.conf = {
  aliases: [""],
  cooldown: 5
} 