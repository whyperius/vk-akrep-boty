const Discord = require('discord.js');

exports.run = async (codeAcademy, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!");
  let yashinu = message.guild.roles.find(a => a.name === "@everyone");
  if(message.channel.permissionsFor(yashinu).has('SEND_MESSAGES')) {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: false,
    });
    message.channel.send('**Gece Oldu Artık Mesaj Yazamassınız. Vampirler Bota Kimi Öldürmek İstediklerini. Doktorlar Kimi Kurtarmak İstediklerini. Avcılar Vampirin Kim Olduğunu Yazmalılar.**')
  } else {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: null,
    });
    message.channel.send('**Gündüz Oldu.! Artık Konuşabilirsiniz.!**')
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vk-zaman'],
  permLevel: 0
};

exports.help = {
  name: 'vk-zaman',
  description: 'Vampir Köylü Zaman.',
  usage: 'vk-kilit',
  kategori: 'vk-zaman'
};