var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));


bot.on('message', message => {


  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'


  if (msg === prefix + 'PING') {
    message.channel.send('Pong!')
    }


    if (message.channel.id === '424031328548159491') {
      if (isNaN) {
        message.delete()
        message.author.send('Please only post the role command, and not any other text in this channel, Thank you!')

      }
    }

    if (msg === prefix + 'USERSTATS') {
        message.channel.send('You have sent **' + userData[sender.id].messagesSent + '** messages!')
    }

if (!userData[sender.id]) userData[sender.id] = {
    messagesSent: 0
  }

  userData[sender.id].messagesSent++;

  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);
  });

bot.on('ready', () => {
    console.log('Bot Launched...')


});
});

bot.login('process.env.BOT_TOKEN')
