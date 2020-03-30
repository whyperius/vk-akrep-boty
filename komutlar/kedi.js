const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
request('https://static.addtoany.com/menu/page.js'), function (error, response, body){
  var api = JSON.parse(body);  
  var file = api.linkurl;
  

  message.channel.send(file);}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kedi'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'kedi'
};