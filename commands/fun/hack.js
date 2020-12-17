const darkemail = require('random-email');
const darkpassword = require('generate-password');


exports.run = async (client, message, args) => {
        
            const user = message.mentions.users.first()
            if (!user) {
                return message.channel.send(`Woaaah slow down, who are we hacking?`);
            }
            const impostorpassword = darkpassword.generate({
                length: 10,
                numbers: true,
            });
            const member = message.guild.member(user);
            const mostCommon = ["bloop", "beep", "boop", "dick", "nerd", "sexy"];
            const lastdm = ["Im Gay", "Wow, so cool", "U are sicks", "nibba", "Gud face bitch", "lmao", "lol", "Me handsome"
                //fill dms here
            ];
            message.channel
                .send(`Hacking ${member.user.username} now...`)
                .then(async (msg) => {
                    setTimeout(async function () {
                        await msg.edit(`[▘] Finding discord login... (2fa bypassed)`);
                    }, 1000);
                    setTimeout(async function () {
                        await msg.edit(
                            `[▝] Found:\n**Email**: \`${darkemail({
                                domain: "haxor.com",
                            })}\`\n**Password**: \`${impostorpassword}\``
                        );
                    }, 3000);
                    setTimeout(async function () {
                        await msg.edit(
                            `[▗] **Last DM**: "${lastdm[Math.floor(Math.random() * lastdm.length)]}"`
                        );
                    }, 5000);
                    setTimeout(async function () {
                        await msg.edit(`[▖] Finding most common word...`);
                    }, 7000);
                    setTimeout(async function () {
                        await msg.edit(
                            `[▘] const mostCommon = "${mostCommon[Math.floor(Math.random() * mostCommon.length)]
                            }"`
                        );
                    }, 9000);
                    setTimeout(async function () {
                       await msg.edit(`[▝] Injecting trojan virus into discriminator #${user.discriminator}`);
                    }, 11000);
                    setTimeout(async function () {
                        await msg.edit(`[▗] Finding IP address...`);
                    }, 13000);
                    setTimeout(async function () {
                        await msg.edit(
                            `[▖] **IP address**: \`127.0.0.1:5\``
                        );
                    }, 15000);
                    setTimeout(async function () {
                        await msg.edit(`[▘] Selling data to the Government...`);
                    }, 17000);
                    setTimeout(async function () {
                        await msg.edit(`[▝] Reporting account to discord for breaking ToS...`);
                    }, 19000);
                    setTimeout(async function () {
                       await msg.edit(`Finished hacking ${member.user.username}`);
                    }, 21000);
                    setTimeout(async function () {
                        await message.channel.send(
                            `The *totally*  real and dangerous hack is complete`
                        );
                    }, 23000);
                });
        }
        
exports.help = {
  name: "hack",
  description: "Fake hack account",
  category: "fun",
  usage: "r.hack <@user>",
  example: "r.hack Pika#1337",
};
exports.conf = {
  aliases: [""],
  cooldown: 5
};