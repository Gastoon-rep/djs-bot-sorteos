const Discord = require('discord.js');

module.exports = {
    name: "reroll",
    alias: [],
    run: async (client, message, args) => {

  /* Creaditos a la npm discord-giveaways */

  if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('Necesitas permisos.')
  var gvID = args[0];
  if(!gvID) return message.channel.send('Pon la ID del sorteo.')

	const giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ") && g.guildId === message.guild.id) || client.giveawaysManager.giveaways.find((g) => g.messageId === gvID && g.guildId === message.guild.id)
			
  if(!giveaway) return message.channel.send('La ID del sorteo no es válida.');
  
  if(!giveaway.ended) return message.channel.send('El sorteo anteriormente ha sido finalizado.')

  client.giveawaysManager.reroll(giveaway.messageId, {
		messages: {
		congrat: 'Nuevo ganador: [{winners}], Sorteo: {this.prize}**vo{this.messageURL}',
		}
	})
  .then(() => {
   message.channel.send("Sorteo rerolleado")
  })
  .catch((e) => {
		console.log(e)
   message.channel.send("¡ha ocurrido un error!")
  })
  
 }
};
