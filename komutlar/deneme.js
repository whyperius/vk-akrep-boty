const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
      const yasak = client.emojis.get('693976996321165385');
    if (message.channel.id !== '693286888341110885') return message.channel.send(`${yasak} **Bu komutun kullanımı, bu kanalda engellenmiştir.**`).then(m => m.delete(5000));
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
    let insta = message.guild.channels.find(`name`, "📸ɪɴsᴛᴀɢʀᴀᴍ");    
  return message.guild.channels.get(insta.id).send(ozelmesajuyari) }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yazı ver.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
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