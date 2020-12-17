const Discord = require('discord.js');
   
exports.run = async (client, message, args) => {          
             let date = new Date();
                
                let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                let days = day[date.getDay()]
                
                let month = ["Januari", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                let months = month[date.getMonth()]
                const embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle("Date 🗓️")
                .setDescription(`${days}, ${months} ${date.getDate()}, ${date.getFullYear()}`)
                .setTimestamp();
                message.channel.send(embed);
  }
exports.help = {
  name: "date",
  description: "date information",
  category: "utility",
  usage: "r.date",
  example: "",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
}; 