const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#0x9700f5")
.setDescription("HELP Command") 
.addField('__Help__','__**Bermuda Generator Commands**__\n\n`$spotify` To Get A Spotify Account. \n`$hulu` To Get A Hulu Account. \n`$minecraft` To Get A Minecraft Account. \n`$nordvpn` To Get A NordVPN Account. \n`$origin` To Get A Origin Account.')
.setThumbnail('https://i.imgur.com/AR9iKTR.png')
.setFooter('By Bermuda™️')
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
