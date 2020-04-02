const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  let instagram = args.slice(1).join(' ');
  const inst = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`İnstağram: ${instagram}`);
message..send(inst);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'instagram',
  description: 'Korona Hakkında Bilgi Verir.',
  usage: 'instagram'
};


const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  message.delete();
  let instagram = args.slice(1).join(' ');
       let kanal = message.guild.channels.get('694129338450182175');

          const secilen = kanal.members.random().user
          const kanaldm = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setDescription(`
           ${secilen} ${roller}
            `,true)
        .   setFooter(`Vampir Köylü Oyunu..`)
          const dm = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setDescription(`
           ${secilen} ${roller} Oldun Önceki Rolün Geçersiz Kalmıştır.
            `,true)
        .   setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "🧛ᴠᴋ-ᴋɪᴍ-ɴᴇ");    
        message.guild.channels.get(vkkimne.id).send(kanaldm)
          secilen.send(dm);
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['instagram'],
  permLevel: 0
};
exports.help = {
  name: 'instagram',
  description: '!!instagram [KULLANICI ADI].',
  usage: 'instagram'
};