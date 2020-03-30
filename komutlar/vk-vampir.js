const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {

       let kanal = message.guild.channels.get(args[0]);
       const roller = ["Vampir"]
       
       if(!kanal) {
         message.channel.send('Vampiri Belirlemek İçin Kanal id giriniz. Doğru kullanım **!!vk-vampir <sesli kanal id>**')
       } 
        if(kanal) {
          
          
 const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 <@${message.author.id}> ${rolata}
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "vk-kim-ne");    
    vkkimne.send(embed)
    kanal.members.random().user.send(embed)
        }
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