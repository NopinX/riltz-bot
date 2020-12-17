const process = require('child_process');

exports.run = async (client, message, args) => {
//Only You can Run this 
if (message.author.id !== "542037977467977728") return;

//Optional
message.channel.send("Please wait...").then(m => m.delete({timeout: 5000}));

process.exec(args.join(" "), (error, stdout) => {
    let response = (error || stdout);
    message.channel.send(response, {code: "asciidoc", split: "\n"}).catch(err => message.channel.send(err));
 })

   //Done.
    return;
}
exports.help = {
  name: "exec",
  description: "Shell/exec node version or other",
  category: "ownertools",
  usage: "r.exec <system>",
  example: "r.exec node -v",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
}; 