const Discord = require('discord.js');
const moment = require('moment');

const badges = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: `<:Bravery:764352620109889557> | \`HypeSquad Bravery\``,
	HOUSE_BRILLIANCE: `<:Brilliance:764351794142773279> | \`\`HypeSquad Brilliance\``,
	HOUSE_BALANCE: `<:Balance:764351389412360193> | \`HypeSquad Balance\``,
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: `<:Verified_Bot:765880832375652372> | \`Verified Bot\``,
	VERIFIED_DEVELOPER: `<a:Early_Verified_Developer:767243768801394698> | \`Early Verified Bot Developer\``
};


exports.run = async (client, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = `<a:dnd:763852215306944573> | \`\`Do Not Disturb\`\``;
    if (member.presence.status === 'online') member.presence.status = `<a:online:763852176887644200> | \`\`Online\`\``;
    if (member.presence.status === 'idle') member.presence.status = `<a:idle:763852335600238652> | \`\`Idle\`\``;
    if (member.presence.status === 'offline') member.presence.status = `<:offline:763852295431389266> | \`\`Offline\`\``;

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);
  
    const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
    const userBadges = member.user.flags.toArray();
    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;
    let obj = { false: `❌ | \`No\``, true: `✅ | \`Yes\`` }
  
  
    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(`Information about ${member.user.tag}`, member.user.displayAvatarURL({dynamic: true}))
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setColor('BLUE')
    .addField('User:', `\`${member.user.tag}\``)
    .addField("ID:", `\`${member.id}\``)
    .addField('Nickname:', `\`${member.displayName}\``, true)
    .addField('Bot:', `${obj[member.user.bot]}`, true)
    .addField('Status:', status)
    .addField('Activities:', `\`${member.user.presence.activities[0] ? member.user.presence.activities[0].name : `\`User isn't playing a game.\``}\``)
    .addField('Badges:', `${userBadges.length ? userBadges.map(badge => badges[badge]).join('\n') : `\`\`None\`\``}`)
    .addField('Avatar:', `[Click Here](${member.user.displayAvatarURL({ dynamic: true })})`)
    .addField('Joined to the server:', `\`${joineddate}\` (\`${joined} day(s) Ago\`)`)
    .addField('Account Creation Date:', `\`${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}\``, true) 
    .addField('Highest Role:', `\`${member.roles.highest.id === message.guild.id ? `None` : member.roles.highest.name}\``)
    .addField(`Roles:`, `${member.roles.cache.map(role => role.toString()).join(", ")}`)
    .setImage(`https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif`)
    .setFooter(`Request by: ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(userEmbed);
}

exports.help = {
  name: "userinfo",
  description: "Display information user",
  category: "info",
  usage: "r.userinfo <@user>",
  example: "r.userinfo @Pika#1337",
};
exports.conf = {
  aliases: ["ui", "whois"],
  cooldown: 5
};  