const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = 'v!';
const embed = new Discord.MessageEmbed()
bot.on('ready', async () => {
  console.log('This bot is online! Created by @littleBitsman.');
  let statuses = [
    `Use ${PREFIX}help for help!`,
    'Made by @littleBitsman',
    `Online on ${bot.guilds.cache.size} Servers`
 ]
 setInterval(function() {
   let status = statuses[Math.floor(Math.random() * statuses.length)]
   bot.user.setActivity(status, {type: ''})
 }, 3000)
})
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

bot.on("guildMemberAdd" ,(member, message) => {
  let Role = message.guild.roles.cache.get(process.env.verified_role_id);
  var randomphrase = makeid(20)
  var messagetosend = new Discord.MessageEmbed()
   .setTitle('Verification')
   .setDescription(`Please retype this string: ${randomphrase}`)
  message.client.users.fetch(`${member}`).then(user => user.send(messagetosend))
  if (user.message.content == randomphrase)
    member.roles.add(Role)
});

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
    case 'reverify':
  }
})
bot.login(process.env.token);
