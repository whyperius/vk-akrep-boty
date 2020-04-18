const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  message.delete();
  
    let odalar = message.guild.channels.find(`name`, "odalar"); 
  
  const kd = args.slice(1).join('')
  const link = args.slice(0).join('')

  
  const oyuncuarama = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`
      Arayan Kişi: <@${message.author.id}>

      KD: ${kd}
  
      Oda Linki: ${link}
`,true)
      .setFooter(`Oyuncu Arama #BETA..`)
  odalar.send(oyuncuarama)
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