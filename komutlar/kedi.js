const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
request('https://api.thecatapi.com/v1/images/search'), function (error, response, body){
  var api = JSON.parse(body);  
  var link = api.link;
  
  message.channel.send();
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'spoiler',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'spoiler [yazdırmak istediğiniz şey]'
};