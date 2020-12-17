const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {


const options = {
  url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
  json: true
  
}

message.channel.send("Fetching Informtion for API").then(msg => {
  get(options).then(body => {
    
    let embed = new MessageEmbed()
    .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
    .setDescription(body.info.description)
    .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
    .setColor("BLUE")
    .addField(`Name:`, `\`\`${body.name}\`\``)
    .addField(`Shortname:`, `\`\`${body.shortname}\`\``)
    .addField(`Id:`, `\`\`${body.info.id}\`\``)
    .addField(`Type:`, `\`\`${body.info.type}\`\``)
    .addField(`Hp:`, `\`\`${body.hp}\`\``)
    .addField(`Weakness:`, `\`\`${body.info.weakness}\`\``)
    .setFooter(`Request by: ${message.author.tag}`)
    
    message.channel.send(embed)
    msg.delete()
  })
})



}
exports.help = {
  name: "pokemon",
  description: "Pokemon Stats",
  category: "utility",
  usage: "r.pokemon <pokename>",
  example: "r.pokemon pikachu",
};
exports.conf = {
  aliases: ["pstats"],
  cooldown: 5
};