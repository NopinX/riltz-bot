const { MessageEmbed } = require('discord.js');
    const youtubeSearch = require('youtube-search');

exports.run = async (client, message, args) => {

    const embed = new MessageEmbed()
        if(!args[0]) return message.channel.send(embed.setColor(`RED`).setDescription(`Please provide a query.`));
        
            youtubeSearch(args.join(' '), { maxResults: 1, key: 'AIzaSyAnGHpSSXITvlKSV_8g_SULPa_dLTPmGNw' }, (err, res) => {
                if(!res) return message.channel.send(embed.setColor(`RED`).setDescription(`${args.join(' ')}\` was not found on YouTube`));
                if(err) return message.channel.send(embed.setColor(`RED`).setDescription(`Please try again later.`));

            let em = new MessageEmbed()
                .setAuthor(res[0].channelTitle, res[0].thumbnails.high.url)
                .setColor(`BLUE`)
                .setThumbnail(res[0].thumbnails.high.url)
                .setDescription(`**${res[0].channelTitle}** Channel Information
                **Channel Link**: [Link](${res[0].link})
                **Channel Created**: \`${new Date(res[0].publishedAt).toLocaleString('en-GB', { dateStyle: 'full'})}\`
                **Channel ID**: \`${res[0].channelId}\`
                **Channel Description**: \`${res[0].description || 'No Description'}\``)
                .setFooter(`YouTube Search`, res[0].thumbnails.high.url)

            return message.channel.send(em);
            })
}
exports.help = {
  name: "youtube",
  description: "Youtube Search information",
  category: "utility",
  usage: "r.youtube <ytname>",
  example: "r.youtube PewDiePie",
};
exports.conf = {
  aliases: ["yt"],
  cooldown: 5
};         