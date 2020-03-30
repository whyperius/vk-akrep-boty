const Discord = require('discord.js');
const request = require('request');
const PREFIX = "!!"

var cat = "https://rand.cat/pic"
exports.run = (client, message, args) => {
if (message.author.equals(client.user))return;

if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "cat":
        request({
            img_url: cat,
            json: true
        }, function (error, response, body) {
            console.log(body);
        })
        break;
    }
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