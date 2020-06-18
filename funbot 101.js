const Discord = require('discord.js')
const bot = new Discord.Client()
const token = 'NzEwOTQxMjI2NDA4NjA3ODE1.Xr7xow.W2RpeZbWkzYMIbDur4ppQ2XCZxw';
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
    case 'testfunbot':
      message.reply('I am online! Created by @littleBitsman.')
      break;
    case 'youtube':
      var embed = new Discord.MessageEmbed()
        .setTitle('Youtube Channel:')
        .setColor(0xff0000)
        .setDescription('@Icecreamdude\'s Youtube channel link is https://www.youtube.com/channel/UCTkke6yf3eHluzNFXVsvvyQ.')
        .setAuthor('Made by @littleBitsman')
        message.channel.send(embed)
        break;
    case 'help':
      var embed = new Discord.MessageEmbed()
        .setTitle('Help:')
        .setColor(0xff0000)
        .setDescription('Prefix: ' + PREFIX + '\n Commands: \n testfunbot: Check if I am online. \n youtube: Look at @Icecreamdude\'s Youtube channel. \n minecraftorfortnite: Make me randomly choose Minecraft or Fortnite! \n hi: I will say something, but don\'t want to say it here... \n no: I will say something, but don\'t want to say it here... \n likebots?: I will say something, but don\'t want to say it here... \n removefunbot: I will say something, but don\'t want to say it here... \n removesuperrobot220: I will say something, but don\'t want to say it here... \n redbot: I will say something, but don\'t want to say it here... \n ping: I will say something, but don\'t want to say it here...')
        .setAuthor('Made by @littleBitsman')
        message.channel.send(embed)
        break;
    case 'minecraftorfortnite':
      var picker = Math.random((Math.random() * 3) + 1)
      if(picker == 1)
        message.reply('I choose Minecraft!')
      else if(picker == 2)
        message.reply('I choose Fortnite!')
      else
        message.channel.send('Neither, because I\'m too sleepy zzzzzzz...')
      break;
    case 'hi':
      message.channel.send('Beep. I\'m a robot. Yeah NOT funny.')
      break;
    case 'no':
      message.reply('Yes.')
      break;
    case 'likebots?':
      message.reply('I don\'t like any of them. Except for my pet Sheepy.')
      break;
    case 'removefunbot':
      message.channel.send('NO NO DON\'T REMOVE MEEEEEEEEE!')
      break;
    case 'removesuperrobot220':
      message.channel.send('What the heck does he do??!! Tell @Icecreamdude to remove him!!!')
      break;
    case 'redbot':
      message.channel.send('Wait? You know my dad?')
      break;
    case 'ping':
      message.channel.send('pong')
      break;
  }
})
bot.login(token);