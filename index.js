const Discord = require("discord.js") ;
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const { prefix } = require('./config.json')
const config = require("./config.json");

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#ff0000",
        embedColorEnd: "",
        reaction: "🎉"
    }
});

client.on("guildCreate", guild => {
client.channels.cache.get("752690616076599297").send(`New Guild Joined: (**${guild.name}**) This Guild has **${guild.memberCount}** Members`)
     });
client.on("guildDelete", guild => {
  client.channels.cache.get("752690616076599297").send(`I have been removed from: (**${guild.name}**) This Guild has **${guild.memberCount}** Members`)
});

client.on('ready', () => {
  function randomStatus() {
    let status = [`👥 ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users`, `🌍 ${client.guilds.cache.size} Guild`, `👋 Hi, Prefix is r.`] // You can change it whatever you want.
    let rstatus = Math.floor(Math.random() * status.length);
    
    // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    // Example: streaming
    
    client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
  };setInterval(randomStatus, 20000) // Time in ms. 30000ms = 30 seconds. Min: 20 seconds, to avoid ratelimit.
  
  console.log(`[!] Ping Received!`);

});

client.on('message', async message => {
  let PREFIX = prefix;
   
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
     return message.reply(`My Current Prefix is \`${PREFIX}\``);   

  }
})  
      
require("./handler/module.js")(client); 
require("./handler/Event.js")(client);  

client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.SECRET).catch(console.error);  // This token will leads to the .env file. It's safe in there. 