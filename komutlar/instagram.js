const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('İnstagram Adresini Yazmayı Unuttunuz.');
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(reason);
      let insta = message.guild.channels.find(`name`, "📸ɪɴsᴛᴀɢʀᴀᴍ");    
        message.guild.channels.get(insta.id).send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['insta'],
  permlevel: 4
};

exports.help = {
  name: 'insta',
  description: 'Bir kullanÄ±cÄ±ya Ã¶zel mesaj yollar.',
  usage: 'insta'
};