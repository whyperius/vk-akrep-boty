const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {

  const roller = ["Köylü", "Hakim", "Medyum", "Doktor", "Avcı"]
  const rolata = roller[Math.floor(Math.random()*roller.length)];
  
  const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 <@${message.author.id}> ${rolata}
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "🧛ᴠᴋ-ᴋɪᴍ-ɴᴇ"); 
    vkkimne.send(embed)
    message.author.send(embed)
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