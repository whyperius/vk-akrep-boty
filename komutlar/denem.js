const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisi gerekmekte.')
  
       let kanal = message.guild.channels.get(args[0]);
       
       if(!kanal) {
         message.channel.send('Kanal Çekilişi Yapmak İçin Kanal İdsini Giriniz. Doğru kullanım **!sesliçekiliş <sesli kanal id>**')
       } 
        if(kanal) {
            const roller = ["Vampir", "Köylü", "Savcı", "Hakim", "Doktor", "Medyum", "Şerif"]
  const rolata = roller[Math.floor(Math.random()*roller.length)];
  anal.members.random().user.send(`${rolata}`);
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dd'],
  permLevel: 0
};
exports.help = {
  name: 'dd'
};