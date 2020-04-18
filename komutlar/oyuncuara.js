const Discord = require(`discord.js`)

exports.run = async (bot, message, args) => {
  try {
    let invite = await message.guild.channel.createInvite({
      maxAge: args.age * 60,
      maxUses: args.uses
    });
  
  let odalar = message.guild.channels.find(`name`, "odalar"); 
  
  const kd = args[0]
  
  const oyuncuarama = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`
      Oyuncu Arayan Kişi: <@${message.author.id}>

      KD: ${kd}

      Oda Linki: https://discord.gg/${invite.code}
  `,true)
      .setFooter(`Oyuncu Arama #BETA..`)
  odalar.send(oyuncuarama)
  
  }
  catch (e) {
return
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetoluştur'],
  permLevel: 0
};

exports.help = {
  name: 'oyuncu-ara',
  description: 'davet-oluştur',
  usage: 'oyuncu-ara'
};