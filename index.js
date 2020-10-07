const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = 'f!';
const embed = new Discord.MessageEmbed()
bot.on('ready', async () => {
  console.log('This bot is online! Created by @littleBitsman.');
  let statuses = [
    `Use ${PREFIX}help for help!`,
    'Made by @littleBitsman',
    'Commands by @Icecreamdude',
    `Online on ${bot.guilds.cache.size} Servers`
 ]
 setInterval(function() {
   let status = statuses[Math.floor(Math.random() * statuses.length)]
   bot.user.setActivity(status, {type: ''})
 }, 3000)
})

bot.on('message', message => {
  let args = message.content.substring(PREFIX.length).split(' ')
  if(message.content.startsWith(PREFIX))
  switch (args[0]) {
    case 'help':
      var embed = new Discord.MessageEmbed()
        .setTitle('Help:')
        .setColor(0xff0000)
        .setAuthor('Made by @littleBitsman')
        message.channel.send(embed)
        break;
  }
})
bot.login(process.env.token);
