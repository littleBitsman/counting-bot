const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = 'count!';
bot.on('ready', async () => {
  console.log('This bot is online! Created by @littleBitsman.');
  let statuses = [
    'Use `count!start` to start counting and `count!stop` to stop!',
    'Made by @littleBitsman',
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
    case 'start':
      message.channel.delete()
      if (isFinite(message.channel.lastMessage) == true)
        var counter = message.channel.lastMessage + 1
      else
        var counter = 1
      var count = 'y'
      while(count = 'y')
        message.channel.send(counter)
      break;
    case 'stop': 
      count = 'n'
    break;

  }
})
bot.login(process.env.token);