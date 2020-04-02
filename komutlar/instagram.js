const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  message.delete();
  let instagram = args.slice(1).join(' ');
  const inst = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(instagram);


    let insta = message.guild.channels.find(`name`, "📸ɪɴsᴛᴀɢʀᴀᴍ");    
        message.guild.channels.get(insta.id).send(inst)
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['instagram'],
  permLevel: 0
};
exports.help = {
  name: 'instagram',
  description: '!!instagram [KULLANICI ADI].',
  usage: 'instagram'
};