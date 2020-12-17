const answers = [
  'no, u stupid',
  'Yes?????',
  'i dont cares, im busy right now with ur mum',
  'no, you are ugly',
  'my heart said no',
  'As I see it, yes',
  'You may rely on it',
  'Concentrate and ask again',
  'Outlook not so good',
  'I dont cares, ur def STUPID',
  'I said yes',
  'I said no',
  'Yes!!!!!',
  'Most likely',
  'no lmfao',
  'You stupid and stupid def',
  'i dont cares b1tch',
  'Who cares?',
  'Never, ever, ever',
  'No???',
  'Impossible'
]
exports.run = async(client, message, args) => {
  message.channel.send(`:8ball:${answers[Math.floor(Math.random() * answers.length)]}`)

}
exports.help = {
         name: "8ball",
         description: "give magic eight ball answer",
         usage: "r.8ball",
         example: "r.8ball",
};

exports.conf = {
          aliases: ["magic-eight-ball","eight-ball"],
          cooldown: 5
};