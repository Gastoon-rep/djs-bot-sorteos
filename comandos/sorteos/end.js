const Discord = require('discord.js');

module.exports = {
    name: "end",
    alias: [],
    run: async (client, message, args) => {

  /* Creaditos a la npm discord-giveaways */

  if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('Necesitas permisos.')

  if(!args[0]) return message.channel.send('Pon la ID del sorteo.')
  
  let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ') && g.guildID === message.guild.id) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0] && g.guildID === message.guild.id);

  if(!giveaway) return message.channel.send('La ID del sorteo no es válida.')
  if(giveaway.ended) return message.channel.send("El sorteo ha sido anteriormente finalizado.")
  client.giveawaysManager.end(giveaway.messageId)
    
  .then(() => {
   message.channel.send('Sorteo terminado.');
  })
  .catch((e) => {
    message.channel.send(`!ha ocurrido un error!`)
  }
  
 }
};
