const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  message.delete();
  const isim = args.slice(1).join('')
  const link = args.slice(2).join('')
  const kd = args.slice(3).join('')

  
  onst  = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`
      deneme
`,true)
      .setFooter(`Vampir Köylü Oyunu..`)
  message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyuncu-ara',
  description: 'Oyuncu Arama.',
  usage: 'oyuncu-ara'
};