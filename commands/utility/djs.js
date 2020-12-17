const fetch = require ("node-fetch");

exports.run = async (client, message, args) => {

 if(!args[0]) return message.channel.send(`Please Provide a documentations - Example: \`\`r.djs message\`\``) 
  
const url = `https://djsdocs.sorta.moe/v2/embed?src=${args[1] || "stable"}&q`;

let query = args[0];
let response = await fetch(`${url}=${query}`);
let json = await response.json();
if (json == null) return message.reply("Not Found");
return message.channel.send({ embed: json });
  
}
  
exports.help = {
  name: "djs",
  description: "Docs discord.js",
  category: "utility",
  usage: "r.djs <docs>",
  example: "r.djs message",
};
exports.conf = {
  aliases: ["docs"],
  cooldown: 5
};