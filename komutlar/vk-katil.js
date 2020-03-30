const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  const roller = ["Vampir", "", "", "", "",""]
  message.author.send();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vk-katil'],
  permLevel: 0
};

exports.help = {
  name: 'vk-katil',
  description: 'Vampir Köylü Katılma.',
  usage: 'vk-katil'
};