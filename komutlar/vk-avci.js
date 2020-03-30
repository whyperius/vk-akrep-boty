const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {

       let kanal = message.guild.channels.get('694129338450182175');
       const roller = ["Avcı"]
       
       if(!kanal) {
         message.channel.send('Avcıyı Belirlemek İçin Kanal id giriniz. Doğru kullanım **!!vk-Avcı <sesli kanal id>**')
       } 
        if(kanal) {
          
          
 const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${kanal.members.random().user} ${roller}
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "🧛ᴠᴋ-ᴋɪᴍ-ɴᴇ");    
    vkkimne.send(embed)
        }
  
   const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${kanal.members.random().user} ${roller} oldun Bir Önceki Rolünü Aklından Çıkart.
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)
    kanal.members.random().user.send(embed);
 
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vk-avcı'],
  permLevel: 0
};

exports.help = {
  name: 'vk-avcı',
  description: 'Vampir Belirleme.',
  usage: 'vk-avcı'
};