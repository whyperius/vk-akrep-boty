const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {

       let kanal = message.guild.channels.get('694129338450182175');
       const roller = ["Vampir"]
       
       if(!kanal) {
         message.channel.send('Vampiri Belirlemek İçin Kanal id giriniz. Doğru kullanım **!!vk-vampir <sesli kanal id>**')
       } 
        if(kanal) {
          
          
 const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${kanal.members.random().user} ${roller}
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "vk-kim-ne");    
    vkkimne.send(embed)
        }
  
   const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${kanal.members.random().user} ${roller} oldun Bir Önceki Rolünü Aklından Çıkart.
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "vk-kim-ne");    
    kanal.members.random().user.send(embed);
 
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vk-vampir'],
  permLevel: 0
};

exports.help = {
  name: 'vk-vampir',
  description: 'Vampir Belirleme.',
  usage: 'vk-vampir'
};