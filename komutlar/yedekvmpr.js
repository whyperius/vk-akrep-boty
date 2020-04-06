const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
    message.delete()
    if (!message.member.roles.find("name", "ᕒ ᴠᴋ ʏᴇᴛᴋɪʟɪ ᓬ")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`ᕒ ᴠᴋ ʏᴇᴛᴋɪʟɪ ᓬ*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }  
      const yasak = client.emojis.get('693976996321165385');
    if (message.channel.id !== '694138848086851664') return message.channel.send(`${yasak} **Bu komutun kullanımı, bu kanalda engellenmiştir.**`).then(m => m.delete(5000));
       const roller = ["Vampir"]
       let kanal = message.guild.channels.get('694129338450182175');
       
       if(!kanal) {
         message.channel.send('Kanal Çekilişi Yapmak İçin Kanal İdsini Giriniz. Doğru kullanım **!sesliçekiliş <sesli kanal id>**')
       } 
        if(kanal) {
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
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vk-vampirrrr'],
  permLevel: 0
};
exports.help = {
  name: 'vk-vampirrrr'
};