const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {

  const roller = ["Vampir", "Köylü", "Savcı", "Hakim", "Doktor", "Medyum", "Şerif"]
  const rolata = roller[Math.floor(Math.random()*roller.length)];
  message.author.send(`${rolata}`);
  
  const embed = new Discord.RichEmbed()
     .setColor("#0080FF")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`
 <@${message.author.id}> ${rolata}
`,true)
    
    .setTimestamp()
    .setFooter(`Vampir Köylü Oyunu..`)
    let vkkimne = message.guild.channels.find(`name`, "vk-kim-ne");    
    vkkimne.send(embed)
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