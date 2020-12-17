const Discord = require("discord.js");
const fetch = require("node-fetch");

 exports.run = async (client, message, args) => {

    let user = await message.mentions.members.first()
    let text = args.join(" ");

    if(user){
        text = args.slice(1).join(" ");
    } else {
        user = message.author;
    }

    if(!text){
        return message.channel.send("**Provide a text**");

    }
    let m = await message.channel.send(`<a:loadingtod:747535266792734783>Processing...`);

    try {
        let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));

        let json = await res.json();
        let attachment = new Discord.MessageAttachment(json.message, "tweet.png");

        message.channel.send(attachment);
        m.delete({ timeout: 1000 });

    } catch(e){
        m.edit("Error to make tweet");

    }

}
exports.help = {
  name: "tweet",
  description: "TweetImage with text",
  category: "image",
  usage: "r.tweet <@user> <text>\r.tweet <text> ",
  example: "r.tweet @Pika#1337 test\r.tweet test",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};