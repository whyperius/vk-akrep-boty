const Discord = require('discord.js');

exports.run = async (codeAcademy, message, args) => {
    message.delete()
    if (!message.member.roles.find("name", "ᕒ ᴠᴋ ʏᴇᴛᴋɪʟɪ ᓬ")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`ᕒ ᴠᴋ ʏᴇᴛᴋɪʟɪ ᓬ*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
  const yasak = codeAcademy.emojis.get('693976996321165385');
  if (message.channel.id !== '694138864784244766') return message.channel.send(`${yasak} **Bu komutun kullanımı, bu kanalda engellenmiştir.**`).then(m => m.delete(5000));
  let yashinu = message.guild.roles.find(a => a.name === "@everyone");
  if(message.channel.permissionsFor(yashinu).has('SEND_MESSAGES')) {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: false,
    });
    message.channel.send('Gece Oldu Artık Mesaj Yazamassınız. Vampirler Bota Kimi Öldürmek İstediklerini. Doktorlar Kimi Kurtarmak İstediklerini. Avcılar Vampirin Kim Olduğunu Yazmalılar.')
  } else {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: null,
    });
    message.channel.send('Gündüz Oldu.! Artık Konuşabilirsiniz.!')
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
  description: 'Gece Gündüz.',
  usage: 'vk-zaman',
};