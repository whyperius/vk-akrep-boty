const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
request('http://aws.random.cat/meow'), function (error, response, body){
  var api = JSON.parse(body);  
  var file = api.file;
  
  message.channel.send("file");
}
  message.channel.send("deneme");
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