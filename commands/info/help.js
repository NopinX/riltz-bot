const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = client.config.prefix;
  
  if (!args[0]) {
    // This will turn the folder (category) into array.
    let module = client.helps.array();
    
    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const owner = client.users.cache.get("542037977467977728")
    const embed = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setFooter(`© 2020 Bot is Under Development by ${owner.tag}`)
    .setTimestamp(new Date())
    .setDescription(`To check command usage, type \`${prefix}help <command>\`, And if u found bug type \`r.bug\``)
    .setAuthor(`${client.user.username} Commands List`, client.user.displayAvatarURL())
    
    for (const mod of module) {
      // You can change the .join(" | ") to commas, dots or every symbol.
      embed.addField(`${mod.name} (${mod.cmds.length})`, mod.cmds.map(x => `\`${x}\``).join(", "));
    }
    
    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    
    // If the user type the [command], also with the aliases.
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = command.help.name; // The command name.
      let desc = command.help.description ? command.help.description : "No description provided."; // The command description.
      let cooldown = command.conf.cooldown + " second(s)"; // The command cooldown.
      let aliases = command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "No aliases provided.";
      let usage = command.help.usage ? command.help.usage : "No usage provided.";
      let example = command.help.example ? command.help.example : "No example provided.";
      
      let embed = new Discord.MessageEmbed()
      .setColor(`BLUE`)
      .setTitle("Command: "+command.help.name)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Request by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      .addField("📝 | Description", desc, true)
      .addField("⏱️ | Cooldown", cooldown)
      .addField("✂️ | Aliases", aliases, true)
      .addField("🔑 | Usage", usage, true)
      .addField("🗒️ | Remind", "Hooks such as [] or <> are not to be used when using commands.")
      
      return message.channel.send(embed);
    } else {
      // If the user type the wrong command.
      return message.channel.send({embed: {color: "BLUE", description: "Unknown command."}});
    }
  }
}

exports.help = {
  name: "help",
  description: "Show a command list.",
  usage: "r.help <command>",
  example: "r.help ping"
}

exports.conf = {
  aliases: ["h", "?"],
  cooldown: 5
}     