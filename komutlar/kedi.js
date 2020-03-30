const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
request('https://rand.cat/pic'), function (error, response, body){
  var api = JSON.parse(body);  
  var link = api.img_url;
  message.channel.send(link);}
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